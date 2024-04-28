function Hero(){
	$(document).ready(()=>{
		$("#Hero").html(`
			<div class="mainHero">
				<!-- Carousel -->
					<div id="demo1" class="carousel slide" data-bs-ride="carousel">
					  

					  <!-- The slideshow/carousel -->
					  <div class="carousel-inner">
						<div class="carousel-item active">
						  <img src="img/5.png" alt="Los Angeles" class="d-block w-100">
						</div>
						<div class="carousel-item">
						  <img src="img/1.png" alt="Chicago" class="d-block w-100">
						</div>
						<div class="carousel-item">
						  <img  src="img/2.png"  alt="New York" class="d-block w-100">
						</div>
						<div class="carousel-item">
						  <img  src="img/3.png"  alt="New York" class="d-block w-100">
						</div>	
						<div class="carousel-item">
						  <img  src="img/4.png"  alt="New York" class="d-block w-100">
						</div>							
					  </div>

					  <!-- Left and right controls/icons -->
					  <button class="carousel-control-prev" type="button" data-bs-target="#demo1" data-bs-slide="prev">
						<span class="carousel-control-prev-icon"></span>
					  </button>
					  <button class="carousel-control-next" type="button" data-bs-target="#demo1" data-bs-slide="next">
						<span class="carousel-control-next-icon"></span>
					  </button>
					</div>
			</div><!--end-Hero-section-->
		`);
	});
}

export default Hero;