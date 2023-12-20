package com.busReserva;

public class Bus {
	private int id;
	private boolean ac;
	private int capacity;
	public Bus(int id, boolean ac, int capacity) {
		super();
		this.id = id;
		this.ac = ac;
		this.capacity = capacity;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public boolean isAc() {
		return ac;
	}
	public void setAc(boolean ac) {
		this.ac = ac;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	
}
