<%@page import="java.util.*" %>
<html>
<head>
<title>To Do List</title>
</head>
<body>
<form action="toDoDemo.jsp" >
	<label for="todo">Add item: </label>
	<input type="text " name="todo" />
	<button type="submit" > submit </button>
</form>
	<hr />
	
<!-- 	Create todo  to your arraylist -->
<%
	List<String> todos = (List<String>) session.getAttribute("todos");
	if(todos==null)
	{
		todos= new ArrayList<String>();
		session.setAttribute("todos", todos);
	}
	
	/*  add todo to ur list */
	String todo = request.getParameter("todo");
	if(todo!=null)
	todos.add(todo);
	
%>
<h2>Todo List items are: </h2>
<!--Print todo  -->
<ol>
	<%
		if(todos!=null){
		for(String temp:todos){
			out.println("<li>"+temp+"</li>");
		}
		}
	%>
</ol>

</body>
</html>