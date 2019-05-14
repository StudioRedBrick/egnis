$(document).ready(function(){ 
    
    instructor();
    
    
}); //document ready END 


function instructor(){
    // flexslider
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow:true,
        itemWidth: 210,
        itemMargin: 160,
        minItems: 2,
        maxItems: 2,
        move:1,
//        end : function(slider){
//                $('.flexslider .slides li').each(function(){ slider.addSlide('<li>'+j$(this).context.innerHTML+'</li>', slider.count);
//                    jQuery('.flexslider .slides').append('<li>'+jQuery(this).context.innerHTML+'</li>');
//                });
//            }
      });
}