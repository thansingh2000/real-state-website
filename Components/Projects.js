function Projects(){
	$(document).ready(()=>{
		$("#Projects").html(`
			<div class="mainProjects py-5">
				<div class="SubTitle text-center py-3">
					<h2>Our<b class="text-success">Projects</b></h2>
					<p>Your Trusted and Assured Builders and Developers.</p>
				</div>
				<div class="container">
					<div class="pBox d-flex" id="Pbox">
					
					</div>
				</div>
			</div>
		`);
		fetch("./js/Projects.json").then((Responce)=>{
			return Responce.json();
		}).then((data)=>{
			data.map((val,index)=>{
				document.getElementById("Pbox").innerHTML+=`
					<div class="ppBox">
						<div class="ProBox ">
						<img src=${val.Hthumb}>
						<h4 class="text-center py-1 bg-success text-white">${val.name}</h4>
						<p class="px-4"><i class="fa-solid fa-location-dot text-success"></i>&nbsp;${val.Location}</p>
						<div class="Td">
							<table class="table">
								<tr>
									<td class="fw-bold">Area</td>
									<td>${val.Area}</td>
								</tr>
								<tr>
									<td  class="fw-bold">Build</td>
									<td>${val.Build}</td>
								</tr>
								<tr class="text-success fw-bold">
									<td>Price</td>
									<td>${val.Price}</td>
								</tr>
								<tr>
									<td class="fw-bold">Size</td>
									<td>${val.Size}</td>
								</tr>
								<tr>
									<td class="fw-bold">PlotPrice</td>
									<td>${val.PlotPrice}</td>
								</tr>
							</table>
							<div>
								<a href=${val.url} class="btn btn-success">See Details</a>
							</div>
						</div>
					</div>
					</div>
				`;
			});
		});
	});
}

export default Projects;