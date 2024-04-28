function BankLogo(){
	
	$(document).ready(()=>{
		$("#BankLogo").html(`
			<div class="mainLogo py-5">
				<div class="SubTitle text-center py-3">
					<h2>Our<b class="text-success">Banking Partners</b></h2>
					<p>Your Trusted and Assured Builders and Developers.</p>
				</div>
				<div class="container">
				
 
				  <div id="demo" class="carousel slide" data-bs-ride="carousel">
					  <!-- Indicators/dots -->
					  <div class="carousel-indicators">
						<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
						<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
						<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
					  </div>

					  <!-- The slideshow/carousel -->
					  <div class="carousel-inner">
						<div class="carousel-item active">
						  	<div class="BankingLogos d-flex" id="Tslides">
								<div class="B">
									<img src="img/11.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/12.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/13.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/14.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/15.png" alt="shree ganesh homes">
								</div>
								
							 </div>
						</div>
						<div class="carousel-item ">
						  	<div class="BankingLogos d-flex" id="Tslides">								
								<div class="B">
									<img src="img/6.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/7.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/8.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/9.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/10.png" alt="shree ganesh homes">
								</div>
							 </div>
						</div>
						<div class="carousel-item">
						  	<div class="BankingLogos d-flex" id="Tslides">
								<div class="B">
									<img src="img/11.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/12.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/13.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/14.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/15.png" alt="shree ganesh homes">
								</div>
								
							 </div>
						</div>
					  </div>

					  <!-- Left and right controls/icons -->
					  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
						<span class="carousel-control-prev-icon"></span>
					  </button>
					  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
						<span class="carousel-control-next-icon"></span>
					  </button>
					</div> <!--end--desktop--slider-->
					
					<div id="demo2" class="carousel slide" data-bs-ride="carousel">					 

					  <!-- The slideshow/carousel -->
					  <div class="carousel-inner">
						<div class="carousel-item active">
						  	<div class="BankingLogos d-flex" id="Tslides">
								<div class="B">
									<img src="img/11.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/12.png" alt="shree ganesh homes">
								</div>								
								
							 </div>
						</div>
						<div class="carousel-item ">
						  	<div class="BankingLogos d-flex" id="Tslides">								
								<div class="B">
									<img src="img/13.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/14.png" alt="shree ganesh homes">
								</div>								
							 </div>
						</div>
						<div class="carousel-item ">
						  	<div class="BankingLogos d-flex" id="Tslides">	
								<div class="B">
									<img src="img/15.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/6.png" alt="shree ganesh homes">
								</div>
								
							 </div>
						</div>
						<div class="carousel-item ">
						  	<div class="BankingLogos d-flex" id="Tslides">	
								<div class="B">
									<img src="img/7.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/8.png" alt="shree ganesh homes">
								</div>
								
							 </div>
						</div>
						<div class="carousel-item ">
						  	<div class="BankingLogos d-flex" id="Tslides">	
								<div class="B">
									<img src="img/9.png" alt="shree ganesh homes">
								</div>
								<div class="B">
									<img src="img/10.png" alt="shree ganesh homes">
								</div>
								
							 </div>
						</div>						
						
					  </div>

					  <!-- Left and right controls/icons -->
					  <button class="carousel-control-prev" type="button" data-bs-target="#demo2" data-bs-slide="prev">
						<span class="carousel-control-prev-icon"></span>
					  </button>
					  <button class="carousel-control-next" type="button" data-bs-target="#demo2" data-bs-slide="next">
						<span class="carousel-control-next-icon"></span>
					  </button>
					</div> <!--end--desktop--slider-->
					

				</div>
			</div>
		`);	
	});

}

export default BankLogo;