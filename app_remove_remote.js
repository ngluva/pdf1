//http://resultshomeservices.com/wp-content/uploads/pdf/report.html
//http://resultshomeservices.com/wp-content/uploads/pdf/jb_index_remove_remote.html

var now = new Date();
var dateLabel ='';
//console.log(now.getFullYear() +''+ now.getMonth()+1 +''+ now.getDate()+'_'+ now.getHours()+''+ now.getMinutes());

dateLabel = now.getFullYear() +''+ now.getMonth()+1 +''+ now.getDate()+'_'+ now.getHours()+''+ now.getMinutes();

var pdfcrowd = require("pdfcrowd");

// create the API client instance
//var client = new pdfcrowd.HtmlToPdfClient('maxamllion', 'd603ddd40e0e739c2e4fd91d62e80168');
var client = new pdfcrowd.HtmlToPdfClient('maxamllion', 'd603ddd40e0e739c2e4fd91d62e80168');
// configure the conversion
/* try { */
    client.setOnLoadJavascript("libPdfcrowd.insertStyle({'style': 'table.main > tbody >  tr:first-child > td:nth-child(2) {background-color: white}',});libPdfcrowd.insertTableOfContents({'title': 'Table of Contents','target': 'table.main > tbody > tr:first-child > td:nth-child(2)', 'style': 'background-color:white;',});");
     client.setExcludeFooterOnPages("1,2");
    client.setPageNumberingOffset(2);
 client.setFooterHtml("<style>* {  margin: 0; padding: 0 }</style><div style=\"background-color: white; height: 100%;text-align:center;line-height: 0.5in; color: black;font-size: 1.3rem;vertical-align: middle;\"> page <span class='pdfcrowd-page-number'></span> of <span class='pdfcrowd-page-count'></span> pages</div>");
  var callbacks = pdfcrowd.sendPdfInHttpResponse(res,
                                                       'demo_express.pdf',
                                                       content_disp);
lient.convertString(html, callbacks);                                                       
/* } catch(why) {
    console.error("Pdfcrowd Error: " + why);
    console.error("Pdfcrowd Error Code: " + why.getCode());
    console.error("Pdfcrowd Error Message: " + why.getMessage());
    process.exit(1);
} */

/* client.convertUrlToFile(
    "http://resultshomeservices.com/wp-content/uploads/pdf/jb_index_remove_remote.html",
    "jb_index_node_convertURL_"+dateLabel+".pdf",
    function(err, fileName) {
        if (err) return console.error("Pdfcrowd Error: " + err);
        console.log("Success: the file was created " + fileName);
    }); */
