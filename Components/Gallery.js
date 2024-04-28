function Gallery(){
	$(document).ready(()=>{
		let galleryImg=[
			"g1.webp",
			"g2.webp",
			"g3.webp",
			"g4.webp",
			"g5.webp",
			"g6.webp",
			"g3.webp",
			"g8.webp",
			"g9.webp",
			"g10.webp",
			"g11.webp",
			"g12.webp",
			"g13.webp",
			"g14.webp",
			"g15.webp",
			"g16.webp",
			"g17.webp",
			"g18.webp",
			"g19.webp",
			"g20.webp",
			"g21.webp",
			"g22.webp"		
		];
		
		$("#gallery").html(`
		
			<div class="mainGallery py-5 ">		
				<div class="container">
					<div class="row  py-3" id="ImgBox">						
					</div>					
				</div>
			</div>
		`);
		
		galleryImg.forEach((val,index)=>{
			ImgBox.innerHTML+=`
				<div class="col-md-4">
					<div class="galleryBox" >
						<img src="gallery/${val}" alt="Shree Ganesh Homes Bilaspur" />
					</div>
				</div>
			`;
			
		});
		
		//----popup---------
		
		
	});
	
}
export default Gallery;