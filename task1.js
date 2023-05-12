
// ========================THIS FUNCTION WILL FIRST CAPTURE THE SCREENSHOT FIRST AND THEN TURN IT INTO THE PDF.=============================
// function screenshot() {
// 	html2canvas(document.body).then(function (canvas) {
// 		document.body.appendChild(canvas);
// 		var imgdata = canvas.toDataURL("image/png");
// 		var doc = new jsPDF();
// 		doc.addImage(imgdata, "PNG", -50, 0, 300, 208);
// 		// (param1,param2,x,y,height,width)
// 		doc.save("sample.pdf");
// 	});
// }
// ($("#cmd").click(function () {
// 	screenshot();
// }));



// // This one lets you improve the PDF sharpness by scaling up the HTML node tree to render as an image before getting pasted on the PDF.
function print(quality = 1) {
	const filename = 'ThisIsYourPDFFilename.pdf';

	html2canvas(document.body,
		{ scale: quality,removeContainer:true}
	).then(canvas => {
		let pdf = new jsPDF('p', 'mm', 'a4');
		window.scrollX;
		pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0,0,200,250);
		pdf.save(filename);
	});
}

($("#cmd").click(function () {
	print();
}));



// ========================WINDOW.PRINT()=============================

// $("#cmd").click(function () {
// 	document.getElementById('cmd').style.visibility = 'hidden';
// 	window.print();
// 	document.getElementsByClassName('container').style.backgroundcolor = 'black';
// 	document.getElementById('cmd').style.visibility = 'visible';


// });






// ========================THIS FUNCTION WILl only convert html generated code into pdf =============================
// $(document).ready(function () {


// 	//just to convert to pdf
// 	var specialElementHandlers = {
// 		"#editor": function (element, renderer) {
// 			return true;
// 		}
// 	};

// 	$("#cmd").click(function () {
// 		var doc = new jsPDF();

// 		doc.fromHTML($("#t").html(), 15, 15, {
// 			"width": 170,
// 			"elementHandlers": specialElementHandlers
// 		});

// 		doc.save("sample-file.pdf");
// 	});
// });
