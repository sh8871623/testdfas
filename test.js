function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/10143/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
		alert("You r almost done click OK to take test")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}