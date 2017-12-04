import { imgData } from '../img/data.js'
var jsPDF = require('jspdf');
var lMargin = 20; //left margin in mm
var rMargin = 20; //right margin in mm
var pdfInMM = 210; // width of A4 in mm

export const downloadPDF = (description) => {
    var doc = new jsPDF("p","mm","a4")
    var data = document.getElementById("content")
    var image = imgData;
	//var paragraph="Apple's iPhone 7 is officially upon us. After a week of pre-orders, the latest in the iPhone lineup officially launches today.\n\nEager Apple fans will be lining up out the door at Apple and carrier stores around the country to grab up the iPhone 7 and iPhone 7 Plus, while Android owners look on bemusedly.\n\nDuring the Apple Event last week, the tech giant revealed a number of big, positive changes coming to the iPhone 7. It's thinner. The camera is better. And, perhaps best of all, the iPhone 7 is finally water resistant.\n\nStill, while there may be plenty to like about the new iPhone, there's plenty more that's left us disappointed. Enough, at least, to make smartphone shoppers consider waiting until 2017, when Apple is reportedly going to let loose on all cylinders with an all-glass chassis design.";
    var paragraph = description
    var lines = doc.splitTextToSize(paragraph, (pdfInMM - lMargin - rMargin));

	doc.text(lMargin, 80, lines);
    doc.addImage(image, 'JPEG', 150, 0, 40, 40)
    doc.fromHTML(data, 20, 20)
    doc.save('Tilbud.pdf')
}