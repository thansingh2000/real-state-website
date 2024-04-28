function About(){
	$(document).ready(()=>{
		$("#About").html(`
			<div class="mainAbout py-5">
				<div class="container">
					<div class="AboutBox d-flex">
						<div class="AboutLeft">
							<figure>
								<img src="img/Feature-builder-day-rate.jpg" alt="Shree ganesh homes bilapur" class="w-100">
							</figure>
						</div>
						<div class="AboutRight">
							<p><b class="text-success fs-4">About US</b></p>
							<p>We, <b>Shree Ganesh Homes</b> & Gajhmukh Construction situated at Shanti Nagar, Bilaspur-Chhattisgarh, endeavors to transform the city with every building of ours. When we incorporate playgrounds and swimming pools into our designs, it’s not just to offer our customer better amenities, but to offer their children a better space to play. When we push ourselves to find innovative solutions, it is not so much to save costs, as it is to save our environment.</p>
							
							<div class="AData d-flex">
								<div class="D1 text-center">
									<span class="Afont text-success"><b>20</b></span><span class="Sfont">Y</span>
									<p><b>Experiences</b></p>
								</div>
								<div class="D1 text-center">
									<span class="Afont text-success"><b>41</b></span><span class="Sfont">M</span>
									<p><b>Happy client</b></p>
								</div>
								<div class="D1 text-center">
									<span class="Afont text-success"><b>20</b></span><span class="Sfont">+</span>
									<p><b>Projects</b></p>
								</div>
							</div><!--end-AData-->
						</div>
					</div>
				</div>
			</div><!--end--about-->
		`);
	});
}

export default About;