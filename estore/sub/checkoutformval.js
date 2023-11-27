$(document).ready(function(){
    $("#btn").click(function(){
        if($('#firstname').val()===""){
            $('#firstnamewarn').text("Please enter firstname").css('color','red').fadeOut(5000)
        }
        else if($('#lastname').val()===""){
            $('#lastnamewarn').text("Please enter lastname").css('color','red').fadeOut(5000)
        }
        
        else if($('#country').val()===""){
            $('#selectcountrywarn').text("Please select your country").css('color','red').fadeOut(5000)
        }
        else if($('#address').val()===""){
            $('#addresswarn').text("Please enter address").css('color','red').fadeOut(5000)
        }
        else if($('#postcode').val()===""){
            $('#postcodewarn').text("Please enter postcode").css('color','red').fadeOut(5000)
        }
        else if($('#town').val()===""){
            $('#townwarn').text("Please enter your town").css('color','red').fadeOut(5000)
            
        }
        else if($('#phone').val()===""){
            $('#phonewarn').text("Please enter your number").css('color','red').fadeOut(5000)
        }
        else if($('#email').val()===""){
            $('#emailwarn').text("Please enter your email").css('color','red').fadeOut(5000)
        }
        else{
            $('form').submit(function(){
                alert("Your order have been placed successfully!!!");
                // $( ".success" ).text("Your order have been placed successfully!!!").fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            })
           

              
            // $('#thnkyous').text("THANK YOU DEAR CUSTOMER FOR PLACING YOUR ORDER").css({"background":"linear-gradient(to right,lavender, lightblue,lavenderblush,#8076a3)","font-family":"monospace","border-radius":"10px","border":"2px solid black"}).hide(10000);
        }
        
    })
})