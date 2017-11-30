import { imgData } from '../img/data.js'
var jsPDF = require('jspdf');

export const downloadPDF = () => {
    var doc = new jsPDF()
    var data = document.getElementById("content")
    var image = imgData;

    doc.addImage(image, 'JPEG', 150, 0, 40, 40)
    doc.fromHTML(data, 20, 20)
    doc.save('Tilbud.pdf')
}