window.addEventListener('load', initEvents);

var username;
var usermail;
var pwd;
var cpwd;
var span;

function initEvents()
{
    username = document.querySelector("#username");
    usermail = document.querySelector("#usermail");
    pwd = document.querySelector("#pwd");
    cpwd = document.querySelector("#cpwd");
    span = document.querySelectorAll("span");

    username.addEventListener("blur", validateUserName);
    usermail.addEventListener("blur", validateUserMail);
    
}

function validateUserName()
{
    var text = username.value;
    text = text.trim();
    blankCheck(text, 0);
}

function validateUserMail()
{
    var text = usermail.value;
    text = text.trim();
    blankCheck(text, 1);

    // var pattern = /([a-z][0-9]\w+[@]\w+[.]\w+)/;
    var pattern = /([a-z][0-9]\w+[@]\w+[.]+[a-z]{2,3}$)/;
    var result = pattern.test(text);
    console.log(result);

    if(result)
    {
        span[1].innerHTML = 'Valid Email';
    }
    else {
        span[1].innerHTML = 'Not Valid Email';
    }
}


function blankCheck(text, id)
{
    if(text = "" || text.length == 0)
    {
        span[id].innerHTML = 'Please fill out this field';
    }
    else {
        span[id].innerHTML = '';
    }
}