function run() {
    document.write("<table border=1 width=100%>")
    for(let i=1; i<=9; i++)   {
	    document.write("<tr>");
        for(let j=1; j<=9; j++){
            document.write("<td>" + j + "x" + i + "=" + (j * i) + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}