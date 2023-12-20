package com.jdbc;

import java.sql.*;
public class JDBCDemo {
public static void main(String[] args) throws Exception {
//	updateUsingPST();
//	readDb();
	sp3();
//	insertUsingPST();
}



public static void sp3() throws Exception
{
	String url="jdbc:mysql://localhost:3306/jdbcDemo";
	String name="root";
	String password="";
	int id=3;
	
	Connection con= DriverManager.getConnection(url,name,password);
	CallableStatement cs=con.prepareCall("{call getStudentName2(?,?)}");
	cs.setInt(1, id);
	cs.registerOutParameter(2, Types.VARCHAR);
	int count=cs.executeUpdate();
	System.out.println(count+" row/s affected!! ");
	System.out.println(cs.getString(2));
		
	
}











public static void sp2() throws Exception
{
	String url="jdbc:mysql://localhost:3306/jdbcDemo";
	String name ="root";
	String password="";
	int id=3;
	Connection con = DriverManager.getConnection(url,name,password);
	CallableStatement cs= con.prepareCall("{call getStudentWithId(?)}");
	cs.setInt(1, id);
	ResultSet rs= cs.executeQuery();
	rs.next();
	System.out.println(rs.getString(2));
	cs.close();
	con.close();


}

public static void insertDb() throws SQLException
{
	
	String url ="jdbc:mysql://localhost:3306/demo";
	String name ="root";
	String password="";
//	Class.forName("");
	String query="insert into student values(3,'Esakki Bharathi');";
	Connection con = DriverManager.getConnection(url,name,password);
	Statement st = con.createStatement();
	int count =st.executeUpdate(query);
	System.out.println(count+" row/s affected");
}

public static void sp() throws SQLException
{
	String url = "jdbc:mysql://localhost:3306/jdbcDemo";
	String name="root";
	String password ="";
	
	Connection con = DriverManager.getConnection(url,name,password);
	CallableStatement cs= con.prepareCall("{call getStudent()}");
	ResultSet  rs= cs.executeQuery();
	
		while(rs.next())
		System.out.println(rs.getString("name"));
		
		cs.close();
		con.close();
	
	
}

public static void delete() throws SQLException
{
	
	String url ="jdbc:mysql://localhost:3306/jdbcDemo";
	String name ="root";
	String password="";
//	Class.forName("");
	int id=5;
	String query="delete from student where id = "+id;
	Connection con = DriverManager.getConnection(url,name,password);
	Statement st = con.createStatement();
	int count =st.executeUpdate(query);
	System.out.println(count+" row/s affected");
}
public static void updateUsingPST() throws SQLException
{
	
	String url ="jdbc:mysql://localhost:3306/jdbcDemo";
	String name ="root";
	String password="";
	int id=2;
	String uname="Bharathi Esakki Muthu";
//	Class.forName("");
	
	String query="update student set name='Bharthi Esakki Muthu' where id=2";
	Connection con = DriverManager.getConnection(url,name,password);
	Statement st = con.createStatement();
	int count=st.executeUpdate(query);
//	PreparedStatement pt= con.prepareStatement(query);
//	
//	pt.setString(1, uname);
//	pt.setInt(2, id);
//	int count =pt.executeUpdate();
	System.out.println(count+" row/s affected");
}


public static void insertUsingPST() throws SQLException
{
	
	String url ="jdbc:mysql://localhost:3306/jdbcDemo";
	String name ="root";
	String password="";
	int id=5;
	String uname="temp";
//	Class.forName("");
	String query="insert into student values(?,?);";
	Connection con = DriverManager.getConnection(url,name,password);
	PreparedStatement pt= con.prepareStatement(query);
	pt.setInt(1, id);
	pt.setString(2, uname);
	int count =pt.executeUpdate();
	System.out.println(count+" row/s affected");
}

	public static void readDb() throws SQLException
	{
		
		String url ="jdbc:mysql://localhost:3306/jdbcDemo";
		String name ="root";
		String password="";
//		Class.forName("");
		String query="select * from student;";
		Connection con = DriverManager.getConnection(url,name,password);
		Statement st = con.createStatement();
		ResultSet rs=st.executeQuery(query);
		while(rs.next())
		System.out.println(rs.getString("name"));
		
		st.close();
		con.close();
	}
}
