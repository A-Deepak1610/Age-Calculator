this.window.addEventListener("keydown",(event)=>{
    if(event.key=='Enter'){
        main()
    }
})
function main(){
    var date=document.getElementById("date").value;
    if(date==""){
        alert("Please Choose Date")
    }
    else{
    var output=document.getElementById("out");
    const cyear=new Date().getFullYear();
    const year = new Date(date).getFullYear();
    var age=cyear-year;
    output.textContent=`You are ${age} years old!`;
    }  
}
