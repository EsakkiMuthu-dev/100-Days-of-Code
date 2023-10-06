<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" import="java.util.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Todo List</title>
</head>
<body>

	<h1>List Of ToDo's</h1>
	<%
		TreeMap<Integer,ArrayList<String>> todoListMap=(TreeMap<Integer,ArrayList<String>>) session.getAttribute("TodoMap");
	   if(todoListMap == null) out.println("Null Value!!");
	%>
</body>
</html>