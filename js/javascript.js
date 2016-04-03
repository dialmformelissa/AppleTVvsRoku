$(document).ready(function(){

var cost = new Array();
cost["Yes"]=10;
cost["No"]=0;

function getcost() {
	var costvalue=0;
	var theform = document.forms["featureform"];
	var selectedCost = theform.elements["selectedcost"];
	for(var i=0; i<selectedcost.length; i++) {
		if(selectedCost[i].checked) {
			costvalue = cost[selectedcost[i].value];
			break;
		}
	}
return costvalue;
}
function showTotal()
{
	var divobj = document.getElementById('roku-percent');
    divobj.style.display='block';
    divobj.innerHTML = costvalue;
}

// function calcscore(){
//     var num = 0;
//     $(".feature:checked").each(function(){
//         num+=parseInt($(this).val(),10);
//     });
//     $("input[name=sum]").val(num)
// }
// $().ready(function(){
//     $(".feature").change(function(){
//         calcscore()
//     });
// });

});