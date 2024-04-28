import Data from "../Components/Data.js";  //header--data
let [headerData]=Data;    //destructring--of-data

function Header(){
	const Head = document.querySelector("header");
	//--container--of--header----
	 Head.innerHTML=`
		<div class="mainHeader bg-success text-white p-1">
			<div class="container">
				<div class="HeadBox d-flex">
					<div class="HContact">
						<ul id="Cdata" class="d-flex list-unstyled m-0"></ul>
					</div>
					<div class="HSocial">
						<ul id="CSocial" class="d-flex list-unstyled m-0"></ul>
					</div>
				</div>
			</div>
		</div>
	 `; 
	
	//--contact--data--of--header
	for(let i=0; i<headerData.HeadData.length;i++){
		Cdata.innerHTML+=`
			<li class="px-2">
				<span class="${headerData.HeadCicon[i]}"></span> 
				&nbsp;${headerData.HeadData[i]}
			</li>
		`;
	}
	
	//--Social Icon--data--of--header
	for(let i=0; i<headerData.HeadSocial.length;i++){
		CSocial.innerHTML+=`
			<li class="px-2">
				<a href="#" class="text-white text-decoration-none ${headerData.HeadSocial[i]}"></a>
			</li>
		`;
	} 
}

export default Header; 