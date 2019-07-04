$(document).ready(function(){ 
    centerLogin();
    delCheckbox();
    getList();
    clearTxt();
}); //document ready END 

function centerLogin(){
    var winHeight = $(window).height()/2;
    var modalHeight = ($(".login_wrap .pos_fix .modal_wrap").height()+50)/2;
    var loginTop = winHeight-modalHeight;
    $(".login_wrap .pos_fix .modal_wrap").css({"margin-top":loginTop});
    
    $(window).resize(function(){
        var winHeight = $(window).height()/2;
        var modalHeight = ($(".login_wrap .pos_fix .modal_wrap").height()+50)/2;
        var loginTop = winHeight-modalHeight;
        $(".login_wrap .pos_fix .modal_wrap").css({"margin-top":loginTop});
    });
}

function centerAlert(){
    var winHeight = $(window).height()/2;
    var alertHeight = ($(".alert_wrap .blanket .alert").height()+50)/2;
    var alertTop = winHeight-alertHeight;
    $(".alert_wrap .blanket .alert").css({"margin-top":alertTop});
    
    $(window).resize(function(){
        var winHeight = $(window).height()/2;
        var alertHeight = ($(".alert_wrap .blanket .alert").height()+50)/2;
        var alertTop = winHeight-alertHeight;
        $(".alert_wrap .blanket .alert").css({"margin-top":alertTop});
    });
}

function delCheckbox(){
    $(".delete_btn").on('click',function(){
        centerAlert();
        $(".alert_wrap").css({"display":"block"});
    });
    
    //if yes clicked
    $(".alert_wrap .blanket .alert ul li:nth-child(1)").on('click',function(){

        let aelSubsIds = document.querySelectorAll("._subsId");
        // index는 0부터 시작해서, lenth - 1해줌.
        const nSubsIdCount = aelSubsIds.length - 1;

        let aDeleteSubs = [];

        aelSubsIds.forEach( (value,index) => {
            if (value.checked) {
                aDeleteSubs.push(value.value);
            }

            if (index == nSubsIdCount) {
                $.ajax({
                    type: "post",
                    url: "/subscriber/remove-subs",
                    dataType: "json",
                    contentType: "application/json; charset=UTF-8",
                    data: JSON.stringify(aDeleteSubs),
                    success: function (result) {
                        if( result !== "2222") {
                            alert("에러발생! 개발자에게 문의해주세요 :) error code : ", result);
                            return;
                        }
                        console.log("Completed deleting the selected Subscribers list.");
                        $(".list_wrap .firstwrap ul li input:checked").parent().remove();
                        $(".alert_wrap").css({"display":"none"});
                    },
                    error: function (result) {
                        alert("에러발생! 개발자에게 문의해주세요 :) ");
                    }
                })
            }
        });



    });
    
    //if no clicked
    $(".alert_wrap .blanket .alert ul li:nth-child(2)").on('click',function(){
        $(".list_wrap .firstwrap ul li input").prop('checked',false);
        $(".alert_wrap").css({"display":"none"});
    });
}

function getList(){
    $(".list_wrap .secwrap .getlist").on('click',function(){

        var content = $(".list_wrap .firstwrap ul li p").text();
        //console.log('content= '+content);
        var value = content.substring(0,content.length-1);
        $(".list_wrap .secwrap textarea").empty();
        $(".list_wrap .secwrap textarea").append(value);
    });
}


function clearTxt(){
    $(".list_wrap .secwrap .clearlist").on('click',function(){
 
        var content = $(".list_wrap .secwrap textarea").empty();
    });
}




























