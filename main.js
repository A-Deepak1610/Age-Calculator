function main(){
    var date=document.getElementById("date").value;
    if(date==""){
        alert("Please Choose Date")
    }
    else{
    var output=document.getElementById("out");
    const cyear=new Date().getFullYear();
    console.log(cyear);
    const year = new Date(date).getFullYear();
    console.log(year);
    var age=cyear-year;
    output.textContent=`You are ${age} years old!`;
    }  
}
