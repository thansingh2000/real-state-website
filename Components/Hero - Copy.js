function Hero(){
	$(document).ready(()=>{
		$("#Hero").html(`
			<div class="mainHero">
				<div class="Newcontainer">
					<div class="innerHero">
						<div class="d-flex">
							<div class="Htext ps-5">
								<h1>Find Your Next Home in <b class="text-success">Shree Ganesh Homes</b></h1>
								<p>Through our proprietary platform, Shree Ganesh Homes is changing how agents and clients navigate the process of finding or selling a home.</p>
								<div>
									<a class="btn btn-success px-4" href="Contactus.html"><i class="fa-sharp fa-solid fa-circle-info"></i>&nbsp;&nbsp;Enquiry Now</a>
								</div>
							</div>
							<div class="HImg">
								<figure>
									<img src="img/hero_img.png" alt="Shree Gamesh Homes Bilaspur"/>
								</figure>
							</div>
						</div>
					</div>
				</div>
			</div><!--end-Hero-section-->
		`);
	});
}

export default Hero;