var arr = new Array("who is your 1","who is your 2","who is your 3","who is your 4","who is your 5","who is your 6","who is your 7","who is your 8");

document.getElementById("one").onclick = function(){
    document.getElementById("q1").innerHTML="<h2>"+arr[0]+"</h2>";
    document.getElementById("q2").innerHTML="<h2>"+arr[1]+"</h2>";
    document.getElementById("q3").innerHTML="<h2>"+arr[2]+"</h2>";
    document.getElementById("one").style.animationName = "changeColor";
    document.getElementById("one").style.background = "red";
}


document.getElementById("two").onclick =function(){
    document.getElementById("q1").innerHTML="<h2>"+arr[2]+"</h2>";
    document.getElementById("q2").innerHTML="<h2>"+arr[3]+"</h2>";
    document.getElementById("q3").innerHTML="<h2>"+arr[4]+"</h2>";
    document.getElementById("two").style.animationName = "changeColor";
    document.getElementById("two").style.background = "red";
}


document.getElementById("three").onclick =function(){
    document.getElementById("q1").innerHTML="<h2>"+arr[4]+"</h2>";
    document.getElementById("q2").innerHTML="<h2>"+arr[5]+"</h2>";
    document.getElementById("q3").innerHTML="<h2>"+arr[6]+"</h2>";
    document.getElementById("three").style.animationName = "changeColor";
    document.getElementById("three").style.background = "red";

}


document.getElementById("four").onclick =function(){
    document.getElementById("q1").innerHTML="<h2>"+arr[6]+"</h2>";
    document.getElementById("q2").innerHTML="<h2>"+arr[7]+"</h2>";
    document.getElementById("q3").innerHTML="<h2>"+arr[2]+"</h2>";
    document.getElementById("four").style.animationName = "changeColor";
    document.getElementById("four").style.background = "red";

}


document.getElementById("five").onclick =function(){
    document.getElementById("q1").innerHTML="<h2>"+arr[3]+"</h2>";
    document.getElementById("q2").innerHTML="<h2>"+arr[2]+"</h2>";
    document.getElementById("q3").innerHTML="<h2>"+arr[5]+"</h2>";
    document.getElementById("five").style.animationName = "changeColor";
    document.getElementById("five").style.background = "red";

}


document.getElementById("six").onclick =function(){
    document.getElementById("q1").innerHTML="<h2>"+arr[7]+"</h2>";
    document.getElementById("q2").innerHTML="<h2>"+arr[2]+"</h2>";
    document.getElementById("q3").innerHTML="<h2>"+arr[4]+"</h2>";
    document.getElementById("six").style.animationName = "changeColor";
    document.getElementById("six").style.background = "red";

}


document.getElementById("seven").onclick =function(){
    document.getElementById("q1").innerHTML="<h2>"+arr[5]+"</h2>";
    document.getElementById("q2").innerHTML="<h2>"+arr[4]+"</h2>";
    document.getElementById("q3").innerHTML="<h2>"+arr[3]+"</h2>";
    document.getElementById("seven").style.animationName = "changeColor";
    document.getElementById("seven").style.background = "red";

}


document.getElementById("eight").onclick =function(){
    document.getElementById("q1").innerHTML="<h2>"+arr[7]+"</h2>";
    document.getElementById("q2").innerHTML="<h2>"+arr[5]+"</h2>";
    document.getElementById("q3").innerHTML="<h2>"+arr[1]+"</h2>";
    document.getElementById("eight").style.animationName = "changeColor";
    document.getElementById("eight").style.background = "red";

}


document.getElementById("nine").onclick =function(){
    document.getElementById("q1").innerHTML="<h2>"+arr[0]+"</h2>";
    document.getElementById("q2").innerHTML="<h2>"+arr[1]+"</h2>";
    document.getElementById("q3").innerHTML="<h2>"+arr[2]+"</h2>";
    document.getElementById("nine").style.animationName = "changeColor";
    document.getElementById("nine").style.background = "red";

}
