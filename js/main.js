$(document).ready(function(){


});


    function eyeFunction(){

      var x = document.getElementById("inputpass");
      var y = document.getElementById("faeye-1");
      var z = document.getElementById("faeye-2");

      if(x.type === 'password'){
          x.type = 'text';
          y.style.display = "block";
          z.style.display = "none";
      } else {
          x.type = 'password';
          y.style.display = "none";
          z.style.display = "block";
      }
    }


