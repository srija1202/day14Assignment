var label = document.createElement("label");
label.setAttribute("for","email");
label.innerHTML = "Email";

var line_break = document.createElement("br");

var input_email = Document.createElement("input");
input_email.setAttribute("type","email");
input_email.setAttribute("id","email");

var input_break = document.createElement("br");

var button_create = document.createElement('button');
button_create.setAttribute("type","button");
button_create.setAttribute("onclick","foo()");
button_create.innerHTML = "Click Me";

document.body.append(label,line_break,input_email,line_break,button_create);