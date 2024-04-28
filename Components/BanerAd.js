function BanerAd(){
	$(document).ready(()=>{
		$("#banner").html(`
			<div class="mainBanner ">
				<div class="bgBaner"> 					
					<div class="text-white neBanner">
						<h1>Your Trusted and Assured <b class="text-success">Builders and Developers</b></b></h1>
						<p><i>Creative and resourceful labors to meet project deadlines effectively</i></p>
						<a href="Contactus.html" class="btn btn-success px-5">Contact Us</a>
					</div>
				</div>
			</div>
		`);
	});
}

export default BanerAd;