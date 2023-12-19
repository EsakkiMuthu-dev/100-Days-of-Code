package jdbLearning;
import java.sql.*;
public class DemoCalss {
	public static void main(String[] args) throws Exception {
		String url="jdbc:mysql://localhost:3306/demo";
		String uname="root";
		String password="";
		int id=6;
		String name ="Stranger@";
//		String query="insert into student values(5,'Stranger')";
		String query="insert into student values(?,?)";

		Class.forName("com.mysql.jdbc.Driver");
		Connection con =DriverManager.getConnection(url,uname,password);
		PreparedStatement st = con.prepareStatement(query);
		st.setInt(1,id);
		st.setString(2, name);
		int count= st.executeUpdate();
		System.out.println(count+" row/s affected");
//		while(rs.next()) {
//		System.out.println(rs.getString("id")+" "+rs.getString("name"));
//		}
		st.close();
		con.close();
		
	}
	
}
