import Data from "../Components/Data.js";  //Nav--data
let [headerData,navTabData]=Data;   //destructring--of-data

function Footer(){
	$(document).ready(()=>{
		$("footer").html(`
			<div class="mainFooter bg-black text-white pt-5">
			<div class="container pb-3">
				<div class="FooterBox d-flex">
					<div class="Flogo">
						<figure>
							<img src="${navTabData.logo}">
							<p>We, Shree Ganesh Homes & Gajhmukh Construction situated at Shanti Nagar, Bilaspur-Chhattisgarh, endeavors to transform the city with every building of ours.When we incorporate playgrounds and swimming pools into our designs, it’s not just to offer our customer better amenities.</p>
						</figure>
					</div><!--end-footer-logo--->
					
					<div class="fUrls ">
						<h3>Helpful Links</h3>
						<ul id="Flist" class="list-unstyled">
						</ul>
					</div><!--end-footer-Urls--->
					
					<div class="FsUrl">
						<h3>Projects</h3>
						<ul id="Flist2" class="list-unstyled">
						</ul>
					</div><!--end-footer-SUrls--->
					
					<div class="Fcontact">
						<h3>Contact us</h3>
						<ul id="FcList" class="list-unstyled">
							<li class="py-1">
								<span>
									<i class="fa-solid fa-location-dot text-success"></i>&nbsp;
								</span>
								${headerData.Address}
							</li>
							<li class="py-1">
								<span>
									<i class="fa-solid fa-phone text-success"></i>&nbsp;
								</span>
								${headerData.HeadData[0]}
							</li>
							<li class="py-1">
							<span>
								<i class="fa-sharp fa-solid fa-envelope text-success"></i>&nbsp;
							</span>
							${headerData.HeadData[1]}
							</li>
						</ul>
					</div><!--end-footer-Contacts--->
				</div>
				<div class="social-icon">
					<ul id="FSocial" class="d-flex list-unstyled m-0"></ul>
				</div>
			</div>
			<div class="mainCreadit pt-2 pb-4 text-center">
				<p class="m-0">© 2022 Designed by <a href="http://www.shreeganeshhomes.com/" class="text-success">shreeganeshhomes</a> All Rights Reserved </p>
			</div><!--end--footer-creadit-->
		</div>
	`);
	
	//--Social Icon--data--of--header
	for(let i=0; i<headerData.HeadSocial.length;i++){
		FSocial.innerHTML+=`
			<li class="px-2">
				<a href="#" class="text-success text-decoration-none ${headerData.HeadSocial[i]}"></a>
			</li>
		`;
	} 
	
	for(let i=0; i<navTabData.navData.length;i++){
		const Flist = document.getElementById("Flist");
			Flist.innerHTML+=`
				<li class="py-1">
					<a href="${navTabData.navDataLink[i]}" class="text-decoration-none text-white">
						<span><i class="fa-sharp fa-solid fa-caret-right text-success"></i>&nbsp;</span>
						${navTabData.navData[i]}
					</a>
				</li>
			`;	
	}
	for(let i=0; i<navTabData.Services.length;i++){
		const Flist = document.getElementById("Flist2");
			Flist2.innerHTML+=`
				<li class="py-1">
					<a href=${navTabData.Slink[i]} class="text-decoration-none text-white">
						<span><i class="fa-sharp fa-solid fa-caret-right text-success"></i>&nbsp;</span>
						${navTabData.Services[i]}
					</a>
				</li>
			`;	
	}
	});
}

export default Footer;