
// const mediaQuery1 = window.matchMedia('(max-width: 600px)')
// const mediaQuery2 = window.matchMedia('(min-width: 600px)')
// if (mediaQuery1.matches) {
// 	$(document).ready(function(){
// 		$('.ttt').removeClass("scrolling-wrapper")
// 	})
// }
// if(mediaQuery2.matches){
// 	$(document).ready(function(){
// 		$('.ttt').addClass("scrolling-wrapper")
// 	})
// }
// /////////////
//single product image
$(document).ready(function(){
    $('#single-small-img-1').click(function(){
        var firstimg = $('#single-product-img').attr('src')
        var secondimg = $('#single-small-img-1').attr('src')
        $('#single-product-img').attr('src',secondimg)
        $('#single-small-img-1').attr('src',firstimg)
    })
    $('#single-small-img-2').click(function(){
        var firstimg = $('#single-product-img').attr('src')
        var secondimg = $('#single-small-img-2').attr('src')
        $('#single-product-img').attr('src',secondimg)
        $('#single-small-img-2').attr('src',firstimg)
    })
    $('#single-small-img-3').click(function(){
        var firstimg = $('#single-product-img').attr('src')
        var secondimg = $('#single-small-img-3').attr('src')
        $('#single-product-img').attr('src',secondimg)
        $('#single-small-img-3').attr('src',firstimg)
    })
})
//////////////

//contact form
$(document).ready(function(){
	$("#contactform").submit(function(event){
		if($(".name-contact").val()===""){
			$('#namemsg').text("Please enter your name").css({"font-size":"12px"})
			return false
		}
		else if($(".email-contact").val()===""){
			$('#emailmsg').text("Please enter your email").css({"font-size":"12px"})
			return false
		}
		else if($(".select-contact").val()===""){
			$('#selectmsg').text("Please choose your topic").css({"font-size":"12px"})
			return false
		}
		else{
			alert("Thank you ! we will resolve your issues.")
			return true

		}
	})
})
////////////////////////////////////////////////////////////////////////////////////

// search box
$(document).ready(function(){
	$(".search").click(function(){
	  $(".searchbar-div").slideToggle("2000");
	});
  });
/////////////

// add to cart top increment
$(document).ready(function(){
	$('.add-to-cart-btn').click(function(){
		$('.count').html(function(i, counterval) { 
			return counterval*1+1 
		});
	})
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// $(document).ready(function(){
// 	var count =0;
// 	$('.add-to-cart-btn').click(function(event){
// 		count++;
// 		setTimeout(function(){
// 			$('a.s-topcart > span').addClass(".counter");
// 			$('a.s-topcart > span.counter').text(count);
// 		},200);
// 	})
// })
//////////////////////////////////////////////////////////////////////////////////////////

// responsive nav bar
navfunction=()=> {
	var x = document.getElementById("mytopnav");
	if (x.className === "top-nav") {
	  x.className += " responsive";
	} else {
	  x.className = "top-nav";
	}
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// home page div click
$(document).ready(function(){
	$("#huge-offers-home").click(function(){
		window.open(href="/estore/allproducts.html","_blank")
	})
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
	$(".product-singleproduct").click(function(){
		window.open(href="/estore/singleproduct.html","_blank")
		document.getElementById('single-product-img').src= document.getElementById('img-home-1').src;
	})
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// two side button counter
var minVal = 1, maxVal = 20;
$(".increaseQty").on('click',function(){
		var $pval = $(this).parents(".qtySelector");
		$(this).addClass("clicked");
		setTimeout(function(){
			$(".clicked").removeClass("clicked");
		},100);
		var value = $pval.find(".qtyValue").val();
		if (value < maxVal) {
			value++;
		}
		$pval.find(".qtyValue").val(value);
});
$(".decreaseQty").on('click', function(){
		var $pval = $(this).parents(".qtySelector");
		$(this).addClass("clicked");
		setTimeout(function(){
			$(".clicked").removeClass("clicked");
		},100);
		var value = $pval.find(".qtyValue").val();
		if (value > 1)
        {
			value--;
		}
		$pval.find(".qtyValue").val(value);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(function() {
	// $('.delete').click(function(r){
	// 	var i = r.parentNode.parentNode.rowIndex;
	// 	document.getElementById("carttable").deleteRow(i);
		
	// })
	
    $('.increaseqty').click(function(e){
        e.preventDefault();
        fieldName = $(this).attr('field');
        var qtys = $(this).closest('.cart_item').find('.qty');
        //var qty = $(this).closest('tr').find('input[name='+fieldName+']');

        var currentVal = parseInt(qtys.val());
        if (!isNaN(currentVal)) {
            qtys.val(currentVal + 1);
        } else {
            qtys.val(0);
        }
        qtys.trigger('change');
    });

    $(".decreaseqty").click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var qtys = $(this).closest('.cart_item').find('.qty');
        //var qty = $(this).closest('tr').find('input[name='+fieldName+']');

        var currentVal = parseInt(qtys.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            qtys.val(currentVal - 1);
        } else {
            qtys.val(0);
        }
        qtys.trigger('change');
    });  
	// $(".updatecart").click(function(e) {
    //     e.preventDefault();
    //     fieldName = $(this).attr('field');

    //     var qtys = $(this).closest('.cart_item').find('.qty');
    //     //var qty = $(this).closest('tr').find('input[name='+fieldName+']');

    //     var currentVal = parseInt(qtys.val());
    //     if (!isNaN(currentVal)) {
    //         qtys.val(currentVal);
    //     }
    //     qtys.trigger('change');
    // });        
	deleteRow=(r)=> {
		var i = r.parentNode.parentNode.rowIndex;
		document.getElementById("carttable").deleteRow(i);
	  }
    //Bind the change event
    $(".qty").change(function() {
        var sum = 0;
        var total = 0;
        $('.actual_price').each(function () {
            var price = $(this);
            var count = price.closest('.cart_item').find('.qty');
            sum = (price.html() * count.val());
            total = total + sum;
            price.closest('.cart_item').find('.item_price').html("$"+sum+".00");
        });
        $('.total_price').html("<h5>$" + total + ".00</h5>");

    }).change(); //trigger change event on page load
});
// $('.updatecart').click(function(e){
// 	e.preventDefault();
//         fieldName = $(this).attr('field');
// 	var qtys = $(this).closest('.cart_item').find('.qty');
// 		qtys.trigger('change');
// })
/////////////////////////
//applycoupon
// $(document).ready(function(){
// 	$('#applycoupbtn').click(function(){
// 		if($('.coupon-text').val()===""){
// 			$('#coupalert').text("please enter coupon code").
// 		}
// 		else{
// 			$('#coupalert').text("your coupon is applied")
// 		}
// 	})
// })
$(document).ready(function(){
    $("#applycoupbtn").click(function(){
        if($('.coupon-text').val()===""){
            alert('You have not entered any coupon code')
        }
        else{
          alert("Your coupon has been applied !!!!")
        }
    });
    
  });
  ///////

//newsletter
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
  ////////////
  //checkoutvalidation
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