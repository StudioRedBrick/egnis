$(document).ready(function(){ 
    instructor();
    bxSlider();
    faqAco();
    scrollNav();
    menuScroll();
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
                $(".box6 .aco1 .txt").stop().animate({"height":"105px","opacity":"0.8","transform":"scaleY(100%)"},300);
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
                $(".box6 .aco2 .txt").stop().animate({"height":"105px","opacity":"0.8","transform":"scaleY(100%)"},300);
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
                $(".box6 .aco3 .txt").stop().animate({"height":"105px","opacity":"0.8","transform":"scaleY(100%)"},300);
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
 
    
    $('.instr_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
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
    $(".box1 .menu li:nth-child(1)").on('click', function(){
        $('html,body').animate({scrollTop: $(".box6").position().top},'slow');    
    });
    $(".box1 .menu li:nth-child(2)").on('click', function(){
        $('html,body').animate({scrollTop: $(".box5").position().top},'slow');    
    });
    $(".box1 .menu li:nth-child(3)").on('click', function(){
        $('html,body').animate({scrollTop: $(".box4").position().top},'slow');    
    });
    $(".box1 .menu li:nth-child(4)").on('click', function(){
        $('html,body').animate({scrollTop: $(".box3").position().top},'medium');    
    });
}