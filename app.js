/* Chart used in this code is from website : https://www.the-house.com/helpdesk/snowboard-sizing/ */
var value = document.getElementById("myList").value; 
/* using switch statement inside the function */
function snowboardSize()  {
    var value = document.getElementById("myList").value; 
    var snowboarddiv = document.getElementById("snowboard");
    switch(value) {
        case "109cm":
            // document.write("Your snowboard size is between 90cm and 105cm");
            snowboarddiv.innerHTML = 'Your snowboard size is between 90cm and 105cm';
          break;
        case "124cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 110cm and 120cm';
          break;
        case "137cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 115cm and 130cm';
          break;
        case "147cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 125cm and 135cmm';
          break;
          case "155cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 130cm and 140cm';
          break;
        case "160cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 135cm and 145cm';
          break;
        case "163cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 140cm and 150cm';
          break;
        case "165cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 145cm and 152cm';
          break;
          case "168cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 148cm and 153cm';
          break;
        case "170cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 150cm and 155cm';
          break;
        case "173cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 152cm and 155cm';
          break;
        case "175cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 153cm and 157cm';
          break;
        case "178cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 154cm and 159cm';
          break;
          case "180cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 155cm and 160cm';
          break;
        case "183cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 156cm and 162cm';
          break;
        case "185cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 157cm and 163cm';
          break;
        case "188cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 158cm and 166cm';
          break;
        case "191cm":
            snowboarddiv.innerHTML = 'Your snowboard size is between 159cm and 167cm';
          break;
        case "193cm":
          snowboarddiv.innerHTML = 'Your snowboard size is between 160cm and 170cm';
          break;
        default:
          text = "Snowboarding is the best lol...";
      }
      /* calling the switch statement in the function */
      window.onclick = document.getElementById('myList').onclick = snowboardSize();

}