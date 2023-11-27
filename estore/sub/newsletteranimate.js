$(document).ready(function(){
    $("#subscribe").click(function(){
        if($('#newsletter-email').val()===""){
            alert('you have not entered your email')
        }
        else{
            $('#thnx').text("THANK YOU FOR SUBSCRIBING ! : Our latest feeds will be sent to your mail. Enjoy Shopping !")
            .css({"background":"linear-gradient(to right,lavender, lightblue,lavenderblush)","font-family":"monospace","border-radius":"10px","border":"2px solid black"}).hide(10000,function(){
                $('#newsform').submit();
            });
            
        }
    });
    
  });