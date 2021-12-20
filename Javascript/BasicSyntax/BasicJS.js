window.addEventListener('load', initEvents);

function initEvents()
{
    //event binding
    document.getElementById("btn").addEventListener('click', showName);
}

// window.addEventListener('load', function(){
//     //event binding
//     document.getElementById("btn").addEventListener('click', showName);
// });

//event binding
//document.getElementById("btn").addEventListener('click', showName);

function showName()
{
    username = document.getElementById("box_1").value;
    // document.getElementById("result").innerHTML += username;
    document.getElementById("result").innerHTML = username;
}