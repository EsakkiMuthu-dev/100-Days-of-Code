<html>
<body>
<%! 
	 public String makeLower(String data)
	 {
		return data.toLowerCase();
	 }
%>
<h1> Hello World from java!!</h1>
<p> the server time is <%= new java.util.Date() %> </p>
<%= makeLower("HELLO") %>
</body>
</html>