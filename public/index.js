
var row = document.querySelector(".row");

var submitBtn = document.querySelector("#submitBtn");
var username=document.querySelector("#username").value;

$('#submitBtn').on('click', function() {

var slot=document.querySelector(".slot").value;
var day=document.querySelector(".day").value;
var contacts=document.querySelector("#cellNum").value;
var email=document.querySelector("#email").value;
var username=document.querySelector("#username").value;
// submitBtn.addEventListener("click", function() {

var emptyStr='';
var emptySlot='';

$(".day:checked").each(function(){
  var value=$(this).val();
  emptyStr+=value;
})
$(".slot:checked").each(function(){
  var value=$(this).val();
  emptySlot+=value;
})




var input ={
  username:username,
  email:email,
  contact_Number: contacts,
  days:emptyStr,
  Slots:emptySlot


}



  console.log("***",input);
// if(input!==""){

  $.ajax({
    url: '/api/plumbers',
    type: 'POST',
    data: input,
    dataType: 'json',
    success:function(response){
      console.log(response);
    }
  })
})

var Tabletemplate= document.getElementById("Tabletemplate").innerHTML;
var TableInstance = Handlebars.compile(Tabletemplate);
var tableDisplay = document.getElementById('tableDisplay');

function getAllData() {
  console.log("in getAllData");
  $.ajax({
    url: '/api/plumbers',
    type: 'GET',
    success: function(data) {

      var table = TableInstance({
        detail: data.data,

      })

      tableDisplay.innerHTML = table;



    }

  })
}
getAllData();




function booking(id){
  $.ajax({
    url:"/api/plumbers"+id,
    type:"GET",
    success:function(reslt){
      

    }
  })

}
