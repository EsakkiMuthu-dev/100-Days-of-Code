<html>
<head>
    <title>Student Confirmation</title>
</head>
<body>
    <%-- Corrected typo: getParameterValues instead of getParamaterValues --%>
    <% String[] sports = request.getParameterValues("sports"); %>
    
    <h1> The student name is ${param.firstname} ${param.lastname}</h1>
    <h1> Student from : ${param.country}</h1>
    <h1><%= request.getParameter("gender").equals("male") ? "He" : "She" %> is ${param.gender}</h1>
    
    <h1>Favourite Sports are: </h1>
    <%-- Corrected loop syntax --%>
    <%
        if (sports != null) {
            for (String sport : sports) {
                out.println("<h2>"+sport+"</h2>");
            }
        }
    %>
</body>
</html>
