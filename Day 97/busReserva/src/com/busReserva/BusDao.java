package com.busReserva;
import java.sql.*;
public class BusDao {
	
	public void displayBusInfo() throws SQLException
	{
		Connection con = DbConnection.getConnection();
		String query="select * from bus;";
		Statement st= con.createStatement();
		ResultSet rs=st.executeQuery(query);
		System.out.print("\n <-------Bus info ----------> \n");
		while(rs.next())
		{
			System.out.print( "Bus Id : "+rs.getInt("id")+"| AC : "+(rs.getInt("ac")==0?"No ":"yes")+"| Total Capacity: "+(rs.getInt("capacity")));
			System.out.println();			
		}
		System.out.println("\n<------------------------------>\n");
		
	}
	
}
