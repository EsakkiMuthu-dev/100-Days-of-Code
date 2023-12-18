<html>
<body>
<h1> Hello World from java!!</h1>

<p> the server time is <%= new java.util.Date() %> </p>

<%
	for(int i=0;i<=5;i++)
	{
		Thread.sleep(1000);
		out.println("<br> Time now is"+ new java.util.Date());
	}
%>
</body>
</html>