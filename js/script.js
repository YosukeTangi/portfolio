function hamburger() {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('nav').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click' , function () {
  hamburger();
} );

document.getElementById("nav").style.display ="none";

function clickBtn1(){
	const nav = document.getElementById("nav");

	if(nav.style.display=="block"){
		// noneで非表示
		nav.style.display ="none";
	}else{
		// blockで表示
		nav.style.display ="block";
	}
}

