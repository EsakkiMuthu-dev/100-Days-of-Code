package com.busReserva;

import java.sql.SQLException;

public class Reservation {
	public static void main(String[] args) throws SQLException {
		BusDao busDao = new BusDao();
		busDao.displayBusInfo();
	}
}
