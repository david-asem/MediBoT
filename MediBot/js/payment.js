var username;
var mobileMoneyNumber;
var emailid;
var mynumber;


$(function(){
  $('#btnSubmit').click(function(e){
               
    username = $("#username").val();
    console.log(username);
    mobileMoneyNumber = $("#numberinput").val();
   emailid = $("#emailid").val();
    mynumber = "'"+mobileMoneyNumber +"'";

    
e.preventDefault();
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.hubtel.com/v1/merchantaccount/merchants/HM1407170005/receive/mobilemoney",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Basic dXJrbnlxdnc6cWxzeG5venQ=",
        "Cache-Control": "no-cache",
        "Postman-Token": "094e5d22-b9a5-44f5-bf98-dbc4396131b4"
      },
      "processData": false,
      "data":  "{\r\n  \"CustomerName\": \"David\",\r\n  \"CustomerMsisdn\": "+mynumber+ " ,\r\n  \"CustomerEmail\": \"a@a.com\",\r\n  \"Channel\": \"mtn-gh\",\r\n  \"Amount\": 0.8,\r\n  \"PrimaryCallbackUrl\": \"http://myapi.hostname.com/callback\",\r\n  \"Description\": \"T Shirt\",\r\n  \"ClientReference\": \"3jL2KlUy3vt21\"\t\r\n}"
    }

    console.log("Hello world! im here outside")
    $.ajax(settings).done(function (response) {
      console.log(response);
      if (response.ResponseCode = "0001"){
          window.open("http://localhost:8080/medibot/chat.html","_self");
      }else{
        console.log("failed to open site")
      }
    });
  })
})

 function sendForm(){


}
