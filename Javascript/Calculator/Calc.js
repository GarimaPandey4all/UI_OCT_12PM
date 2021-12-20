window.addEventListener('load', initEvents);

var firstNumber;
var secondNumber;
var result = 0;

function initEvents()
{
    firstNumber = document.getElementById("f_num");
    secondNumber = document.getElementById("s_num");

    var buttons = document.getElementsByTagName("button");
    for(var i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener('click', calc);
    }

    // document.getElementById("add").addEventListener('click', calc);
    // document.getElementById("sub").addEventListener('click', calc);
    // document.getElementById("div").addEventListener('click', calc);
    // document.getElementById("mul").addEventListener('click', calc);

    // document.getElementById("add").addEventListener('click', add);
    // document.getElementById("sub").addEventListener('click', sub);
    // document.getElementById("div").addEventListener('click', div);
    // document.getElementById("mul").addEventListener('click', mul);
}

function calc(evt)
{
    var opr = evt.srcElement.innerHTML; // + - * /
    //console.log(opr);
    var expression = firstNumber.value + opr + secondNumber.value;
    result = eval(expression);
    document.getElementById("result").innerHTML = result;
}

// function add()
// {
//     result = parseInt(firstNumber.value) + parseInt(secondNumber.value);
//     document.getElementById("result").innerHTML = result;
// }

// function sub()
// {
//     result = parseInt(firstNumber.value) - parseInt(secondNumber.value);
//     document.getElementById("result").innerHTML = result;
// }

// function div()
// {
//     result = parseInt(firstNumber.value) / parseInt(secondNumber.value);
//     document.getElementById("result").innerHTML = result;
// }

// function mul()
// {
//     result = parseInt(firstNumber.value) * parseInt(secondNumber.value);
//     document.getElementById("result").innerHTML = result;
// }