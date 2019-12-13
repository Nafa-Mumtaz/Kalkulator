
function formula() {
	var select = document.getElementById('selectOption');
 	var selectOption = select.options[select.selectedIndex].value;
    if(selectOption === "Base2") {
    		reset();
    		document.getElementById("output").style.visibility="visible";
			document.getElementById('lbsInput').addEventListener('input',function(e){
			let lbs=e.target.value;
			lbs = parseInt(lbs);
			document.getElementById('Base16Output').innerHTML = parseInt(lbs, 2).toString(16).toUpperCase();
			document.getElementById('Base2Output').innerHTML = lbs * 1;
			document.getElementById('Base8Output').innerHTML = parseInt(lbs, 2).toString(8);
			document.getElementById('Base10Output').innerHTML = parseInt(lbs, 2).toString(10);
		})
	} else if(selectOption === "Base8") {
    		reset();
    		document.getElementById("output").style.visibility="visible";
			document.getElementById('lbsInput').addEventListener('input',function(e){
			let lbs=e.target.value;
			lbs = parseInt(lbs);
			document.getElementById('Base16Output').innerHTML= parseInt(lbs, 8).toString(16).toUpperCase();
			document.getElementById('Base2Output').innerHTML = parseInt(lbs, 8).toString(2);
			document.getElementById('Base8Output').innerHTML = lbs * 1;
			document.getElementById('Base10Output').innerHTML = parseInt(lbs, 8).toString(10);
		})
    } else if (selectOption === "Base10") {
		reset();
		document.getElementById("output").style.visibility="visible";
		document.getElementById('lbsInput').addEventListener('input',function(e){
		let lbs=e.target.value;
		lbs = parseInt(lbs);
		document.getElementById('Base16Output').innerHTML= lbs.toString(16).toUpperCase();
		document.getElementById('Base2Output').innerHTML = lbs.toString(2);
		document.getElementById('Base8Output').innerHTML = lbs.toString(8);
		document.getElementById('Base10Output').innerHTML = (lbs * 1);
		})
	} else if (selectOption === "Base16") {
		reset();
		document.getElementById("output").style.visibility="visible";
		document.getElementById('lbsInput').addEventListener('input',function(e){
		let lbs=e.target.value;
		lbs = parseInt(lbs);
		document.getElementById('Base16Output').innerHTML = lbs * 1;
		document.getElementById('Base2Output').innerHTML = parseInt(lbs, 16).toString(2);
		document.getElementById('Base8Output').innerHTML = parseInt(lbs, 16).toString(8);
		document.getElementById('Base10Output').innerHTML = parseInt(lbs, 16).toString(10);
		})
		
	}else if(selectOption === "default"){
    	document.getElementById("output").style.visibility="hidden";
    }
}
function reset(){
	document.getElementById("lbsInput").value="";
	document.getElementById("lbsInput") .focus();
}