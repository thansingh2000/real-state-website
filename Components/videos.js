function Video(){
	$(document).ready(()=>{
		$("#videos").html(`
			<div class="mainGallery py-5">
				<div class="container">
					<div class="row  py-3" id="ImgBox">
						<div class="col-md-6">
							<div class="" >
								<iframe width="560" height="315" src="https://www.youtube.com/embed/rXjK8hXOCag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
						<div class="col-md-6">
							<div class="" >
								<iframe width="560" height="315" src="https://www.youtube.com/embed/l7S1oSHx1cM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		`);
			
	});
}
export default Video;