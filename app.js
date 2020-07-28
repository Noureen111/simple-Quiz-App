var questions = ["which language is used for styling web pages?","Which is not a JavaScript framework?","Which is used to connect to DataBase?","JavaScript file has the extension?"];

// var btn1 = ["HTML1", "JQuery2", "CSS3", "XML4"];
// var btn2 = ["Python Script1", "JQuery2","Django3", "NodeJS4"];
// var btn3 = ["PHP1", "HTML2", "JS3", "All4"];
// var btn4 = [".jc1",".js2",".s3",".exe4"];

var btn1 = ["HTML","Python Script","PHP",".jc"];
var btn2 = ["JQuery","JQuery","HTML",".js"];
var btn3 = ["CSS","Django","Js",".s"];
var btn4 = ["XML","NodeJs","All",".exe"];

var ans = ["HTML","CSS","Django","PHP",".js"];

var count = 0, score = 0;

function func(e)
{
    if(e.innerHTML === ans[0] && count === 0)
    {
        score++;
    }
    else if(e.innerHTML === ans[1] && count === 1)
    {
        score++;
    }
    else if(e.innerHTML === ans[2] && count === 2)
    {
        score++;
    }
    else if(e.innerHTML === ans[3] && count === 3)
    {
        score++;
    }
    else if(e.innerHTML === ans[4] && count === 4)
    {
        score++;
    }

    var q = document.getElementById("questions");
    q.innerHTML = questions[count];

    var bt1 = document.getElementById("btn0");
    bt1.innerHTML = btn1[count];

    var bt2 = document.getElementById("btn1");
    bt2.innerHTML = btn2[count];

    var bt3 = document.getElementById("btn2");
    bt3.innerHTML = btn3[count];

    var bt4 = document.getElementById("btn3");
    bt4.innerHTML = btn4[count];

    count++;

    var count2 = count + 1;

    var p = document.getElementById("progress");
    p.innerHTML = "Question " + count2 + " of 5";

    if(count === 5)
    {
        func2();
    }
}

function func2()
{
    var cont = document.getElementById("cont");

    var page = document.getElementById("quiz");
    page.setAttribute("class","hidden");

    var h1 = document.createElement("h1");
    var text = document.createTextNode("RESULT: ");
    h1.appendChild(text);

    h1.setAttribute("class","newHeading");

    var p = document.createElement("p");
    var text2 = document.createTextNode("Your Score: " + score);
    p.appendChild(text2);

    p.setAttribute("class","newPara");

    cont.appendChild(h1);
    cont.appendChild(p);

    cont.setAttribute("class","newCont");
}