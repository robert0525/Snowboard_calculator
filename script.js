/* Chart used in this code is from website : https://www.the-house.com/helpdesk/snowboard-sizing/ */
/* using function with conditional staement */
function snowboardSize()  {
    var value = document.getElementById("myList").value;
    if (value === "109cm") {
        document.write("Your snowboard size is between 90cm and 105cm" );
    }
        else if (value === "124cm" ) {
        document.write("Your snowboard size is between 110cm and 120cm" );

    }   else if (value === "124cm" ) {
        document.write("Your snowboard size is between 110cm and 120cm" );

    }   else if (value === "137cm" ) {
        document.write("Your snowboard size is between 115cm and 130cm" );

    } else if (value === "147cm" ) {
        document.write("Your snowboard size is between 125cm and 135cm" );

    } else if (value === "155cm" ) {
        document.write("Your snowboard size is between 130cm and 140cm" );

    } else if (value === "160cm" ) {
        document.write("Your snowboard size is between 135cm and 145cm" );

    } else if (value === "163cm" ) {
        document.write("Your snowboard size is between 140cm and 150cm" );

    } else if (value === "165cm" ) {
        document.write("Your snowboard size is between 145cm and 152cm" );

    } else if (value === "168cm" ) {
        document.write("Your snowboard size is between 148cm and 153cm" );

    } else if (value === "170cm" ) {
        document.write("Your snowboard size is between 150cm and 155cm" );

    } else if (value === "173cm" ) {
        document.write("Your snowboard size is between 152cm and 155cm" );

    } else if (value === "175cm" ) {
        document.write("Your snowboard size is between 154cm and 159cm" );

    } else if (value === "178cm" ) {
        document.write("Your snowboard size is between 154cm and 159cm" );

    } else if (value === "180cm" ) {
        document.write("Your snowboard size is between 155cm and 160cm" );

    } else if (value === "183cm" ) {
        document.write("Your snowboard size is between 156cm and 162cm" );

    } else if (value === "185cm" ) {
        document.write("Your snowboard size is between 157cm and 163cm" );

    } else if (value === "188cm" ) {
        document.write("Your snowboard size is between 158cm and 166cm" );

    } else if (value === "191cm" ) {
        document.write("Your snowboard size is between 159cm and 167cm" );

    } else if (value === "193cm" ) {
        document.write("Your snowboard size is between 160cm and 170cm" );

     } else {
    document.write("Lake Tahoe is one of the best spots in the world lol.")
    }
    /* calling function with conditional statemnet*/
    window.onclick = document.getElementById('myList').onclick = snowboardSize();
}