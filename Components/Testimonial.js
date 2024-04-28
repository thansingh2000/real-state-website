function Testimonial(){
	$(document).ready(()=>{
		$("#Testimonial").html(`
			<div class="mainTestimonial">
				<div class="layer">
					<div class="SubTitle text-center pt-5 text-success">
						<h2>Testimonials</b></h2>
					</div>
					<div class="container">
						<!-- Carousel -->
						<div id="demo" class="carousel slide" data-bs-ride="carousel">
						  <!-- The slideshow/carousel -->
						  <div class="carousel-inner">
							<div class="carousel-item active">
							  <div class="Tbox text-center py-4">
								<p>They are expert in planning and give you the solution regarding what and how to build.</p>
								<h2>Manisha Singh</h2>
							  </div>
							</div>
							<div class="carousel-item ">
							  <div class="Tbox text-center py-4">
								<p>They are expert in planning and give you the solution regarding what and how to build.</p>
								<h2>Manisha Singh</h2>
							  </div>
							</div>
							<div class="carousel-item ">
							  <div class="Tbox text-center py-4">
								<p>They are expert in planning and give you the solution regarding what and how to build.</p>
								<h2>Manisha Singh</h2>
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
						</div>
					</div>
				</div>
			</div>
		`);
	});
}

export default Testimonial;