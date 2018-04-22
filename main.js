document.getElementById("button").onclick = function() {myFunction()};
size = 51;
var arr = new Array()
var arr2 = new Array("name1","AJAY","VISHNU","PREMIKA","JYOTHI","RAJYA LAKSHMI","MOUNIKA","MOUNIKA","UMA","PAVAN","SAI KUMAR","SHANMUKHI","VEERU","SAI","MAHESH","SREEPATHI","ABHISHEK","HEMANTH","KISHORE","CHAKRAVARTHI","SRI HARI","SRAVANI","SIVA","TAGORE","PHANI","PRASANNA","HARIKA","MOUNIKA","SWAROOPA","KAVYA","SRAVANI","SANTHI","PRIYANKA","MANASA","RAMYA","JESSIKA","HARSHITHA","SHANKAR","SITHA","RAMBABU","MURALI","DHILEEP","TEJA","SATISH","ESWAR","SURENDRA","TANMAYEE","KAVYA","DEVESH","RAVI KIRAN","VINAY");
i=0;
function myFunction() {
    var x1 = Math.floor((Math.random() * size ));
    document.getElementById("name").innerHTML = arr2[x1];
    var flag=0;
    for(j=0;j<=i;j++){
        if(arr[j]==x1 || x1==0){
            flag =1;
            break;
        }
    }
    if(flag==1){
        myFunction();
    }
    else{
    var p = document.getElementById("photo").innerHTML = "<img src='images/img"+x1+".jpg'>";
    arr[i++]=x1;
    arr.sort();
    }
    
}