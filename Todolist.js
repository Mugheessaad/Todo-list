
// To delete all Data.......

var del1 = document.getElementById("list");
var v = document.getElementsByTagName("li");
function dellall(){
    if(confirm("Are you sure.You want to delete all Data")){
        document.getElementById("list").innerHTML= '';
        checklist();
    }else{}
};




// to link delete button to the list.....

var listchild = document.getElementsByTagName("li");
for(var i=0;i<listchild.length;i++){
var span = document.createElement("span");
var cross = document.createTextNode("\u00D7");
span.className ="delete";
span.appendChild(cross);
listchild[i].appendChild(span);
}  

// to delete list element from ul....

var del = document.getElementsByClassName("delete");
for(let i=0;i<del.length;i++){
    del[i].onclick = function(){
        var a = this.parentElement;
        a.remove();
        checklist();
    }
}


// to add  value in list when it comes from input

function add(){
    var a=document.getElementsByTagName("li");
    var addValue = document.querySelector("#input").value;
    var list = document.createElement("li");
    var text = document.createTextNode(addValue);
    list.appendChild(text);
    if(addValue===''){
       window.alert("Please Enter a value");
    }else{
        if(a.length+1 == 1){
            document.querySelector("#list").innerText="";
        }
        document.querySelector("#list").appendChild(list);
        
        }
    document.querySelector("#input").value = "";
    

    // to link delete button to the list.....
    var span = document.createElement("span");
    var cross = document.createTextNode("\u00D7");
    span.className ="delete";
    span.appendChild(cross);
    list.appendChild(span);


    // to delete the element from list....
    var del = document.getElementsByClassName("delete");
    for(let i=0;i<del.length;i++){
        del[i].onclick = function(){
        var a = this.parentElement;
        a.remove();
        checklist();
        }
    }
}

//  Funtion to Display if there's list

function checklist(){
    var del = document.getElementsByTagName("li");
    if(del.length==0){
        var a = document.createTextNode("Nothing in here... Please add something to see the list.");
        document.querySelector("#list").appendChild(a);
    }
}


