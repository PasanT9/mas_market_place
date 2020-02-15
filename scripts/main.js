function loadDoc() {
  console.log("Function");
  $.ajax({
    url: 'http://localhost:5050/mas_data',
    type:"GET",
    headers: {
    },
    success: function(result){
      console.log('Success')
      for(var i=0;i<result.rows.length;++i)
      {
        console.log(result.rows[i]);
        var obj = result.rows[i];
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
          dot = "dot("+(i+1)+","+1+")";
          document.getElementById(dot).className = "green";
        }
        else if(!box_1 && !box_2) {
          dot = "dot("+(i+1)+","+3+")";
          document.getElementById(dot).className = "red";
        }
        else{
          dot = "dot("+(i+1)+","+2+")";
          document.getElementById(dot).className = "yellow";
        }
        console.log(obj);
      }
    },
    error:function(error){
      console.log('Error ${error}')
    }

  })
}