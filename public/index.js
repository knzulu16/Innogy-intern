
var row = document.querySelector(".row");

var submitBtn = document.querySelector("#submitBtn");
var username=document.querySelector("#username").value;

$('#submitBtn').on('click', function() {
var contacts=document.querySelector("#cellNum").value;
var email=document.querySelector("#email").value;
var username=document.querySelector("#username").value;
// submitBtn.addEventListener("click", function() {


var input ={
  username:username,
  email:email,
  contact_Number: contacts

}
  console.log("***",input);

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

var checkBboxes=document.querySelector("#checkBboxes");
$('#CheckBtn').on('click', function() {

var mon=document.querySelector("#monday").value;
console.log(monday);
var tues=document.querySelector("#tuesday").value;
console.log(tues);
var wedn=document.querySelector("#wednesday").value;
var thurs=document.querySelector("#thursday").value;
var fri=document.querySelector("#friday").value;
var sat=document.querySelector("#saturday").value;
var sun=document.querySelector("#sunday").value;
var morning=document.querySelector("#one").value;
var midday=document.querySelector("#two").value;
var afternoon=document.querySelector("#three").value;
var username=document.querySelector("#username").value;

var day={
  days:mon,
  days:tues,
  days:wedn,
  days:thurs,
  days:fri,
  days:sat,
  days:sun
}
console.log("*****",day);

var slot={
  Slots:morning,
  Slots:midday,
  Slots:afternoon
}
console.log("*****",slot);
if(username.day!=="" && username.slot!==""){
  $.ajax({
    url:"/api/plumbers/slots/slot/days/day",
    type:"POST",
    data:day,
    success:function(data){
     console.log("*****",data);
    }
  })
}
else if(username.day=="" && username.slot==""){
  var msg="No days and slot selected";
}
else if(username.day=="" && username.slot!==""){
  var msg="Day not selected";
}
else if(username.day!=="" && username.slot==""){
      var msg="Slot is not selected";
}
})
