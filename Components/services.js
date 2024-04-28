function Services(){	
	$(document).ready(()=>{
		$("#Services").html(`
			<div class="mainServices py-4">
			<div class="SubTitle text-center py-3">
				<h2>Services <b class="text-success">We Offers</b></h2>
				<p>Your Trusted and Assured Builders and Developers.</p>
			</div>
			<div class="Ssubbox py-3">
				<div class="container">
					<div class="ServicesBox row"> 								
					</div>
					<div class="text-center py-4" id="btServie">
						<a class="btn btn-success px-5" href="Services.html"><i class="fa-sharp fa-solid fa-circle-info"></i>&nbsp;&nbsp;All Services</a>
					</div>
				</div>
			</div>
		</div> <!--end--services-->
		`);
	const url = "js/Services.json";
	fetch(url).then((response)=>{
		return response.json();
	}).then((data)=>{
		data.forEach((val,index)=>{
		const ServicesBox = document.querySelector(".ServicesBox");
		
		if(window.location.href==="http://localhost/Shree-ganesh-home/index.html"){
			if(val.id<4){
			 ServicesBox.innerHTML+=`
				<div class="col-md-4 ">
					<div class="SbOx">
						<figure>
							<img class="w-100" src="${val.thumbnail}" alt="${val.name}"/>
						</figure>
						<h3><b>${val.name}</b></h3>
						<p>${val.desc}</p>
						
						<div class="BtnsDesign">
							<a href="Contactus.html" class="btn btn-success">Contact Now</a>
						</div>
					</div>
				</div>			
			`;
			}
			document.getElementById("btServie").style.display="block";
		}
		
		if(window.location.href==="http://localhost/Shree-ganesh-home/Services.html"){
			
			 ServicesBox.innerHTML+=`
				<div class=" col-md-4">
					<div class="SbOx">
						<figure>
							<img class="w-100" src="${val.thumbnail}" alt="${val.name}"/>
						</figure>
						<h3><b>${val.name}</b></h3>
						<p>${val.desc}</p>
						
						<div class="BtnsDesign">
							<a href="Contactus.html" class="btn btn-success">Contact Now</a>
						</div>
					</div>
				</div>			
			`;
			
		
		}
	});
	});
	
	
	});
}

export default Services;