import { imgData } from '../img/data.js';
var jsPDF = require('jspdf');
            require('jspdf-autotable');
var lMargin = 20; // left margin in mm
var rMargin = 20; // right margin in mm
var pdfInMM = 260; // width of A4 in mm
var tMargin = 20; // tip margin in mm

export const downloadPDF = (description, title, productTable, totalPrice) => {
    var doc = new jsPDF("p", "mm", "a4"); //p = portrait, mm = millimeters, a4 = a4 paper
    var data = document.getElementById("content");
    var image = imgData;
    var desc = doc.splitTextToSize(description, (pdfInMM - lMargin - rMargin)); //splits the string into multible lines
    var footer = "WebHouse ApS · Kong Christians Alle 37 · DK-9000 Aalborg · Tel.: +45 96 30 30 72 · info@webhouse.dk · www.webhouse.dk · CVR: 21221198"

    //Gets the data for the table
    var columns = ["Produkt", "Beskrivelse af produkt", "Pris"];
    var rows = [];
    productTable.map((item) => {
        return rows.push([item.name, item.description, item.price])
    })
    //Last line of the table
    rows.push(["Samlet pris:", "", totalPrice])

    //FIRST PAGE
    //The logo
    doc.addImage(image, 'JPEG', 150, 0, 40, 40);

    //The customer information and the date - comes from the PDFcontent component
    doc.fromHTML(data, tMargin, lMargin);

    //The title
    doc.setFontSize(20);
    doc.setFontType("bold");
    doc.text(lMargin, 90, title);

    //The description
    doc.setFontSize(12);
    doc.setFontType("normal");
    doc.text(lMargin, 100, desc);

    //Footer
    doc.setFontSize(7.5);
    doc.text(lMargin, 270, footer);

    //SECOND PAGE
    doc.addPage();

    //The logo
    doc.addImage(image, 'JPEG', 150, 0, 40, 40);

    //Title
    doc.setFontSize(20);
    doc.setFontType("bold");
    doc.text(15, 45, 'Produkt oversigt');

    //Makes and styles the table
    doc.autoTable(columns, rows, {
        margin: { top: 50 },
        styles: {
            overflow: 'linebreak',
            fontSize: 10
        },
        bodyStyles: {
            textColor: 'black'
        }
    });

    //Footer
    doc.setFontSize(7.5);
    doc.setFontType("normal");
    doc.text(lMargin, 270, footer);

    //Makes the PDF
    doc.save('Tilbud.pdf')
}