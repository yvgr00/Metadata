function populateTable(data){
  var col = [];
     for (var i = 0; i < data.length; i++) {
         for (var key in data[i]) {
             if (col.indexOf(key) === -1) {
                 col.push(key);
             }
         }
     }

     // CREATE DYNAMIC TABLE.
     var table = document.createElement("table");

     // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

     var tr = table.insertRow(-1);                   // TABLE ROW.

     for (var i = 0; i < col.length; i++) {
         var th = document.createElement("th");      // TABLE HEADER.
         th.innerHTML = col[i];
         tr.appendChild(th);
     }

     // ADD JSON DATA TO THE TABLE AS ROWS.
     for (var i = 0; i < data.length; i++) {

         tr = table.insertRow(-1);

         for (var j = 0; j < col.length; j++) {
             var tabCell = tr.insertCell(-1);
             tabCell.innerHTML = data[i][col[j]];
         }
     }

     // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
     var divContainer = document.getElementById("showData");
     divContainer.innerHTML = "";
     divContainer.appendChild(table);
}




$(".domain").on("click",function(){
  console.log("button clicked");
  $.ajax({url: 'domain', success:function(res){
    var domainData = res.recordset;
    populateTable(domainData);
   }});
})

$(".dmnrel").on("click",function(){
  console.log("button clicked");
  $.ajax({url: 'dmnrel', success:function(res){
    var domainRelData = res.recordset;
    populateTable(domainRelData);
   }});
})

$(".BsnTms").on("click",function(){
  console.log("button clicked");
  $.ajax({url: 'BsnTms', success:function(res){
    var bsnTrmsData = res.recordset;
    populateTable(bsnTrmsData);
   }});
})

$(".TechTerms").on("click",function(){
  console.log("button clicked");
  $.ajax({url: 'TechTerms', success:function(res){
    var techTermsData = res.recordset;
    populateTable(techTermsData);
   }});
})

$(".dtr").on("click",function(){
  console.log("button clicked");
  $.ajax({url: 'dtr', success:function(res){
    var dtrData = res.recordset;
    populateTable(dtrData);
   }});
})

$(".btt").on("click",function(){
  console.log("button clicked");
  $.ajax({url: 'btt', success:function(res){
    var bttData = res.recordset;
    populateTable(bttData);
   }});
})
