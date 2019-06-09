var value = document.getElementById("myList").value 

var snowboardSize = () => {
    if (value === '109cm') {
        document.write("Your snowboard size is between 90cm and 105cm" );
    } else if (value === "124cm" ) {
        document.write("Your snowboard size is between 110cm and 120cm" );

    }   else if (value === "124cm" ) {
        document.write("Your snowboard size is between 110cm and 120cm" );

    }   else if (value === "137cm" ) {
        document.write("Your snowboard size is between 115cm and 130cm" );
    }  else {
        document.write("Lake Tahoe is one of the best spots in the world lol.")
        }
/* calling function with conditional statemnet*/
window.onclick = document.getElementById('myList').onclick = snowboardSize();
  }
  