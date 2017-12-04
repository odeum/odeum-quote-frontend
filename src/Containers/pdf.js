import { imgData } from '../img/data.js'
var jsPDF = require('jspdf');
var lMargin = 20; //left margin in mm
var rMargin = 20; //right margin in mm
var pdfInMM = 260; // width of A4 in mm
var tMargin = 20; //tip margin in mm

export const downloadPDF = (description, title) => {
    var doc = new jsPDF("p", "mm", "a4")
    var data = document.getElementById("content")
    var image = imgData;
    var lines = doc.splitTextToSize(description, (pdfInMM - lMargin - rMargin)); //splits the string into multible lines

    //The logo
    doc.addImage(image, 'JPEG', 150, 0, 40, 40)

    //The title
    doc.setFontSize(20)
    doc.setFontType("bold");
    doc.text(lMargin, 90, title);

    //The description
    doc.setFontSize(12)
    doc.setFontType("normal")
    doc.text(lMargin, 100, lines);

    //The customer information and the date - comes from the PDFcontent component
    doc.fromHTML(data, tMargin, lMargin)

    //Makes the PDF
    doc.save('Tilbud.pdf')
}