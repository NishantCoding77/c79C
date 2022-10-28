emptyarray = [];      
function submit(){

        var name1 = document.getElementById("s1").value;
        var name2 = document.getElementById("s2").value;
        var name3 = document.getElementById("s3").value;
        var name4 = document.getElementById("s4").value;
        emptyarray.push(name1,name2,name3,name4);
        
        
       document.getElementById("d").innerHTML = emptyarray;
        document.getElementById("sort").style.display="inline-block";
        document.getElementById("sb").style.display = "none";        
}
function sorting()
{
    emptyarray.sort();
    document.getElementById("d").innerHTML = emptyarray;     
}

