import java.sql.*;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = {"/item"})
public class Item extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        
        String DB_URL = "jdbc:mysql://sylvester-mccoy-v3.ics.uci.edu/inf124grp01";
        String USER   = "inf124grp01";
        String PASS   = "keCEt5&z";
        //String DB_URL = "jdbc:mysql://localhost:3306/cs137";
        //String USER   = "root";
        //String PASS   = "";
        
        Connection conn = null;
        PreparedStatement pstmt = null;
        
        try {
            Class.forName("com.mysql.jdbc.Driver");
            
            conn = DriverManager.getConnection(DB_URL, USER, PASS);
            
            out.println("<!DOCTYPE html>\n<html>\n");
            request.getRequestDispatcher("/htmlhead?title=Item").include(request, response);
            String doc = "<body onload=\"window_onload();\">\n"
                    + "<div id=\"header\">\n"
                    + "<h1 id=\"title\">JavaSipt</h1>\n"
                    + "</div>\n"
                    + "<div id=\"nav\" class=\"nav_rel\">\n"
                    + "<ul>\n"
                    + "<li><a class=\"active\" href=\"index.jsp\">Home</a></li><!-- display inline block :(\n"
                    + "--><li><a href=\"products.php\">Products</a></li>\n"
                    + "</ul>\n</div>\n<div id=\"firstcontent\" class=\"content\">";
            out.println(doc);
            
            String id = request.getParameter("id");
            String sql = "SELECT * FROM product WHERE product_id=?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, id);
            ResultSet rs = pstmt.executeQuery();
            rs.next();
            out.println("<div id=\"item_info\">");
            out.println("<h2 id=\"co_item_name\" class=\"co_item_text\">"+rs.getString("name")+"</h2>");
            out.println("<p id=\"co_item_desc\" class=\"co_item_text\">"+rs.getString("description")+"</p>");
            out.println("<h3 id=\"co_item_price\" class=\"co_item_text\">$"+rs.getString("price")+"</h3>");
            out.println("<form action=\"/project3/addtocart?id="+id+"\">");
            out.println("<input type=\"hidden\" name=\"id\" value=\""+id+"\"><input type=\"submit\" value=\"Add to Cart\">");
            out.println("</form>");
            out.println("</div>");
            out.println("<div id=\"item_image\">");
            out.println("<img id=\"co_item_img\" src=\""+rs.getString("image_src")+"\" alt=\""+rs.getString("name")+"\">");
            out.println("</div>");
            
            out.println("</div>\n</body>\n</html>");
            rs.close();
            pstmt.close();
            conn.close();
        }
        catch(Exception e) {
            e.printStackTrace();
        }
    }
}