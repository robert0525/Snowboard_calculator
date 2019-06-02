var value = document.getElementById("myList").value; 

function snowboardSize()  {
    var value = document.getElementById("myList").value; 
    switch(value) {
        case "109cm":
            document.write("Your snowboard size is between 110cm and 120cm" );
          break;
        case "124cm":
            document.write("Your snowboard size is between 110cm and 120cm" );
          break;
        case "137cm":
            document.write("Your snowboard size is between 115cm and 130cm" );
          break;
        default:
          text = "Snowboarding is the best lol...";
      }
      window.onclick = document.getElementById('myList').onclick = snowboardSize;

}