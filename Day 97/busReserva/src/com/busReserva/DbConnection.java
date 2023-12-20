package com.busReserva;
import java.sql.*;
public class DbConnection {
	private final static String url ="jdbc:mysql://localhost:3306/busres";
	private final static String name="root";
	private final static String password="";
	
	public static Connection getConnection() throws SQLException
	{
		return DriverManager.getConnection(url,name,password);
	}
	
}
