function main(){
    var date=document.getElementById("date").value;
    var output=document.getElementById("out");
    const cyear=new Date().getFullYear();
    console.log(cyear);
    const year = new Date(date).getFullYear();
    console.log(year);
    var age=cyear-year;
    output.textContent=`Age:${age}`;
    
}