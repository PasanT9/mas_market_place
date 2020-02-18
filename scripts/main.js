function loadDoc() {
  console.log("Function");
  $.ajax({
    url: 'http://localhost:5050/mas_data',
    type:"GET",
    headers: {
    },
    success: function(result){
      console.log('Success')
      /*if(!(result.rows[0].box1 == 1 && result.rows.box2 == 1)){
        //Enter code to send the message
        $.ajax({
          url: '',
          type: 'GET',
          success: function(result){

          },
          error:function(error){
            console.log('Error ${error}')
          }
        }):
      }*/
        var obj = result.rows[result.rows.length-1];
        var box_1,box_2;
        if(obj.box1 == "1"){
          box_1 = true;
        }
        else
          box_1 = false;
        if(obj.box2 == "1")
          box_2 = true;
        else
          box_2 = false;
        var dot;
        console.log(box_1 +" " +box_2);
        if(box_1 && box_2){
          dot = "dot("+(0+1)+","+1+")";
          document.getElementById(dot).className = "green";
        }
        else if(!box_1 && !box_2) {
          dot = "dot("+(0+1)+","+3+")";
          document.getElementById(dot).className = "red";
        }
        else{
          dot = "dot("+(0+1)+","+2+")";
          document.getElementById(dot).className = "yellow";
        }
    },
    error:function(error){
      console.log('Error ${error}')
    }

  });
}