import java.util.Set;
import java.util.Map;
import java.util.HashMap;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Ryan
 */
@WebServlet(urlPatterns = {"/viewcart"})
public class ViewCart extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        HttpSession session = request.getSession();
        
        PrintWriter out = response.getWriter();
        
        String DB_URL = "jdbc:mysql://sylvester-mccoy-v3.ics.uci.edu/inf124grp01";
        String USER   = "inf124grp01";
        String PASS   = "keCEt5&z";
        //String DB_URL = "jdbc:mysql://localhost:3306/cs137";
        //String USER   = "root";
        //String PASS   = "";
        
        Connection conn = null;
        PreparedStatement pstmt = null;
        
        Cart cart;
        cart = (Cart) session.getAttribute("cart");
        if (cart == null) {
            cart = new Cart();
            session.setAttribute("cart", cart);
        }
        
        try {
            out.println("<!DOCTYPE html>\n<html>\n");
            request.getRequestDispatcher("/htmlhead?title=Cart").include(request, response);
            String doc = "<body onload=\"window_onload();\">\n"
                    + "<div id=\"header\">\n"
                    + "<h1 id=\"title\">JavaSipt</h1>\n"
                    + "</div>\n"
                    + "<div id=\"nav\" class=\"nav_rel\">\n"
                    + "<ul>\n"
                    + "<li><a class=\"active\" href=\"index.jsp\">Home</a></li><!-- display inline block :(\n"
                    + "--><li><a href=\"/project3/viewcart\">View Cart</a></li>\n"
                    + "</ul>\n</div>\n<div id=\"firstcontent\" class=\"content\">";
            out.println(doc);
            
            out.println("<table class=\"cart\">");
            out.println("<tr id=\"cart_first\"><th colspan=\"2\">Shopping Cart</th><td>Quantity:</td><td>Subtotal:</td></tr>");
            
            if (cart.getCart().size() != 0) {
                Class.forName("com.mysql.jdbc.Driver");

                conn = DriverManager.getConnection(DB_URL, USER, PASS);

                String ids = "";
                String sep = "";
                for (Map.Entry<String, Integer> item : cart.getCart()) {
                    ids += sep + item.getKey();
                    sep = ", ";
                }

                String sql = "SELECT * FROM product WHERE product_id IN (" + ids + ")";
                pstmt = conn.prepareStatement(sql);
                ResultSet rs = pstmt.executeQuery();
                while (rs.next()) {
                    out.println("<tr><td><img src=\""+rs.getString("image_src")+"\" alt=\""+rs.getString("name")+"\"></td><td>"+rs.getString("name")+"</td>");
                    int quantity = cart.getQuantity(rs.getString("product_id"));
                    out.println("<td>"+quantity+"</td>");
                    int subtotal = rs.getInt("price") * quantity;
                    out.println("<td>$"+subtotal+"</td></tr>");
                }
                rs.close();
                pstmt.close();
                conn.close();
            }
            out.println("</table>");
            out.println("</div>\n</body>\n</html>");
        }
        catch(Exception e) {
            e.printStackTrace();
        }
    }
}
