function label_create(tagName, attrName, attrVal, content){
    let ele = document.createElement(tagName);
    ele.setAttribute(attrName, attrVal);
    ele.innerHTML = content;
    return ele;
}

function input_tag(inputTag, attrName, attrVal, attrName1, attrVal1){
    let input_ele = document.createElement(inputTag);
    input_ele.setAttribute(attrName, attrVal);
    input_ele.setAttribute(attrName1, attrVal1);
    return input_ele;
}

function button_create(inputTag, attrName, attrVal, attrName1, attrVal1){
    let input_ele = document.createElement(inputTag);
    input_ele.setAttribute(attrName, attrVal);
    input_ele.setAttribute(attrName1, attrVal1);
    input_ele.innerHTML = "Click Me";
    return input_ele;
}

function break_line(){
    let break_ele = document.createElement("br");
    return break_ele;
}

function foo(){
    var res = document.getElementsByTagName("input");
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].value);
    }
}

const form = document.createElement("form");

const label_firstName = label_create("label", "for", "firstName", "First Name: ");
const input_firstName = input_tag("input", "type", "text", "id", "firstName");

const label_middleName = label_create("label", "for", "middleName", "Middle Name: ");
const input_middleName = input_tag("input", "type", "text", "id", "middleName");

const label_lastName = label_create("label", "for", "lastName", "Last Name: ");
const input_lastName = input_tag("input", "type", "text", "id", "lastName");

const label_email = label_create("label", "for", "email", "Email: ");
const input_email = input_tag("input", "type", "email", "id", "email");

const label_address = label_create("label", "for", "address", "Address: ");
const input_address = input_tag("input", "type", "text", "id", "address");

const button_ = button_create("button", "type", "button", "onclick", "foo()", "Click Me");

const break_label_firstName = break_line();
const break_label_middleName = break_line();
const break_label_lastName= break_line();
const break_label_email = break_line();
const break_label_address = break_line();

const break_input_firstName = break_line();
const break_input_middleName = break_line();
const break_input_lastName= break_line();
const break_input_email = break_line();
const break_input_address = break_line();

form.append(
    label_firstName, break_label_firstName, input_firstName, break_input_firstName,
    label_middleName, break_label_middleName, input_middleName, break_input_middleName,
    label_lastName, break_label_lastName, input_lastName, break_input_lastName,
    label_email, break_label_email, input_email, break_input_email,
    label_address, break_label_address, input_address, break_input_address,
    button_
);

document.body.appendChild(form);