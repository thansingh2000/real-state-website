
import Data from "../Components/Data.js";  //Nav--data
let [,navTabData]=Data;   //destructring--of-data

function Nav(){
	let Navigation = document.querySelector("nav");
	Navigation.innerHTML=`
		<div class="mainNav py-1">
			<div class="container">
				<div class="NavListBar d-flex">
					<div class="logo" id="logo">
						<a href="index.html">
							<img src="${navTabData.logo}" alt="${navTabData.alt}">
						</a>
						<button class="MenuBtn">
							<i class="fa-solid fa-bars"></i>
						</button>
					</div><!--Logo-->
					<div class="navListTabBar">
						<ul id="navList" class="list-unstyled d-flex"></ul>
					</div>
				</div> <!--Navigation--bar-->
			</div>
		</div>
	`;

	 //onscroll - Header Sticky
	window.onscroll = function() {myFunction()};
	let sticky = Navigation.offsetTop;

	function myFunction() {
	  if (window.pageYOffset > sticky) {
		Navigation.classList.add("sticky");
	  } else {
		Navigation.classList.remove("sticky");

	  }
	}

	for(let i=0; i<navTabData.navData.length; i++){
		navList.innerHTML+=`
			<li class="px-4 pt-4 pb-2 tabDesign">
				<a class="text-decoration-none fs-5 text-black" href="${navTabData.navDataLink[i]}">${navTabData.navData[i]}</a>
			</li>
		`;
	}
	
	

	$(document).ready(()=>{
		$(".MenuBtn").click(()=>{
			$(".navListTabBar").slideToggle();
		});
		
		
	});

}

export default Nav;