$(document).ready(function(){ 
    instructor();
    bxSlider();
    faqAco();
    scrollNav();
    menuScroll();
    sideNav();
}); //document ready END 

function faqAco(){
    
    var count1 = 0,
        count2 = 0,
        count3 = 0;
    
    $(".box6 .aco .highlight").on('click', function(){
        //close all accordion
        $(".box6 .aco .txt").stop().animate({"height":"0px","opacity":"0","transform":"scaleY(0%)"},300);
        
        var i = $(this).parent().index()+1;

        if(i == 1){
            count1++;
            count2 = 0;
            count3 = 0;
            var remain1 = count1%2;
            
            if(remain1 == 1){
            //open accordion
                $(".box6 .aco1 .txt").stop().animate({"height":"140px","opacity":"0.8","transform":"scaleY(100%)"},300);
            }else{
            //close accordion
                $(".box6 .aco1 .txt").stop().animate({"height":"0px","opacity":"0","transform":"scaleY(0%)"},300);
            }
        }else if(i == 2){
            count2++;
            count1 = 0;
            count3 = 0;
            var remain2 = count2%2;

            if(remain2 == 1){
            //open accordion
                $(".box6 .aco2 .txt").stop().animate({"height":"140px","opacity":"0.8","transform":"scaleY(100%)"},300);
            }else{
            //close accordion
                $(".box6 .aco2 .txt").stop().animate({"height":"0px","opacity":"0","transform":"scaleY(0%)"},300);
            }
        }else if(i == 3){
            count3++;
            count1 = 0;
            count2 = 0;
            var remain3 = count3%2;

            if(remain3 == 1){
            //open accordion
                $(".box6 .aco3 .txt").stop().animate({"height":"140px","opacity":"0.8","transform":"scaleY(100%)"},300);
            }else{
            //close accordion
                $(".box6 .aco3 .txt").stop().animate({"height":"0px","opacity":"0","transform":"scaleY(0%)"},300);
            }
        }
        //console.log('remain1= '+remain1+' remain2= '+remain2+' remain3= '+remain3);
        //console.log('count1= '+count1+' count2= '+count2+' count3= '+count3);
    });
}

function bxSlider(){
    $('.slider').bxSlider({
        auto:true,
        pause:30000,
        speed:500,
        touchEnabled:true
    });
}
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

function scrollNav(){
    //set position of side nav according to window size
    var getHeight = $(window).height(); 
    var value = getHeight/2;
    $(".box0").css({"top":value+"px"});
    
    $(window).resize(function(){
        var getHeight = $(window).height(); 
        var value = getHeight/2;
        //console.log(value);
        $(".box0").css({"top":value+"px"});
    });
    
    //when scrolltop clicked
    $(".box0 .nav_wrap .btn2").on('click',function(){
        $('html,body').animate({scrollTop: $(".box1").position().top},'slow');       
    });
}

function menuScroll(){
    $(".box1 .ham_wrap .menu li:nth-child(1)").on('click', function(){
        $(".box1 .ham_wrap").animate({"margin-left":"-100vw"});
        $('html,body').animate({scrollTop: $(".box3").position().top-75},'slow');    
    });
    $(".box1 .ham_wrap .menu li:nth-child(2)").on('click', function(){
        $(".box1 .ham_wrap").animate({"margin-left":"-100vw"});
        $('html,body').animate({scrollTop: $(".box4").position().top-75},'slow');    
    });
    $(".box1 .ham_wrap .menu li:nth-child(3)").on('click', function(){
        $(".box1 .ham_wrap").animate({"margin-left":"-100vw"});
        $('html,body').animate({scrollTop: $(".box5").position().top-75},'slow');    
    });
    $(".box1 .ham_wrap .menu li:nth-child(4)").on('click', function(){
        $(".box1 .ham_wrap").animate({"margin-left":"-100vw"});
        $('html,body').animate({scrollTop: $(".box6").position().top-75},'medium');    
    });
}

function sideNav(){
    //open side nav
    $(".box1 .ham_icon").on('click', function(){
        $(".box1 .ham_wrap").animate({"margin-left":"0"});
    });
    
    //close side nav
    $(".box1 .ham_wrap .header li:nth-child(2)").on('click',function(){
        $(".box1 .ham_wrap").animate({"margin-left":"-100vw"});
    });
}