
let nameF=document.getElementById("nameF");
let numberF=document.getElementById("numberF");
let EmailF=document.getElementById("EmailF");
let dateF=document.getElementById("dateF");
let MassageF=document.getElementById("MassageF");	
let BookNow=document.getElementById("BookNow");	

   BookNow.addEventListener("click",()=>{
	if(nameF.value==="" && numberF.value==="" && EmailF.value===""){
		document.getElementById("ErronMsg").innerText=`Please Enter Something Here....`;
	}
	else{
		var url="https://wa.me/+917000339054?text="
		+"Name :"+nameF.value+ "%0a"
		+"Mobile :"+numberF.value+ "%0a"
		+"Email :"+EmailF.value+ "%0a"		
		+"Problems :"+MassageF.value;
		
		window.open(url).focus();
	}
} );
