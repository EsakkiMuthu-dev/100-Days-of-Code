<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
	HttpSession ses = request.getSession();
	if(ses.getAttribute("uname")==null)
	{
		response.sendRedirect("login.jsp");
	}
	
%>

Welcome ${uname} ....

</body>
</html>