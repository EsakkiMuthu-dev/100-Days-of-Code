// package com.todo;
// import javax.servlet.http.*;
// import java.io.*;
// import javax.servlet.annotation.*;
// import java.util.TreeMap;
// import java.util.ArrayList;
// import java.util.Set;

// @WebServlet("/addTodo")
// public class AddTodoServlet extends HttpServlet {
// 	//For Storing all todoList in map (Using Tree Map for ordering the list of the items based on the id)
// 	TreeMap<Integer,ArrayList<String>> todoListMap=new TreeMap<>();
// 	//for Generate the Unique ID to all todos
// 	int counter =0; 

// 	public void doGet(HttpServletRequest req , HttpServletResponse res) throws IOException
// 	{
// 		//getting todo task
// 		String taskName = req.getParameter("todo"); 
// 		String status =  req.getParameter("status"); 
		
// 		//Getting Access to the Current Session
// 		HttpSession session =  req.getSession();
		
// 		//Store the todo to the todo List Map 
// 		ArrayList<String> todos = new ArrayList<>();
// 		todos.add(taskName);
// 		todos.add(status);
// 		counter+=1;
// 		todoListMap.put(counter, todos);
		
// 		//Store the map to session
// 		session.setAttribute("TodoMap", todoListMap);
		
		
// 		//Print all the todos 
		
// 		PrintWriter out = res.getWriter();
// 		for(int key :todoListMap.keySet())
// 		{
// 			ArrayList<String> todo = todoListMap.get(key);
// 			out.println();
// 			out.println("Task is : "+todo.get(0) );
// 			out.println("Status of task  is : "+todo.get(1) );
// 			out.println("<------------------------------------------>");
// 			out.println();
// 		}
		
		
// 	}

// }
