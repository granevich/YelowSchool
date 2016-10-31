/**
 * Created by granevich on 06.05.2016.
 */

$(document).ready(function () {
    var smollNav = $('.small-screen');
    var aHref = $('.nav-bottom ul li a');
//mask input
    $("#namber").mask("(999)999-99-99" );
//mask input








    //feedback
    function validate(name, number) {
        var regExpName = /^[А-Яа-яA-Za-z ,.'-]+$/i;
        var bingo = regExpName.test(name);
        if(bingo === false){
            sweetAlert("Ой...", "Вы не ввели имя или номер телефона", "error");
        }
        else{
            swal("Спасибо!", "Мы свяжемся с вами в ближайшее время", "success")
        }
        if(number===''){
            sweetAlert("Ой...", "Вы не ввели имя или номер телефона", "error");
        }
    }

    var form = $('#ajax-contact');
    $(form).submit(function(event) {
        event.preventDefault();
    });

    $('#send-feedback').on('click', function () {
    var name= $('#name').val();
    var number = $('#namber').val();

    var formData = $(form).serialize();
        console.log(formData);
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        });
     validate(name, number)
    });

    //feedback









    //scrolling
    $('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
        //scrolling



    //yellow bus scrolling to large-screen
    $(document).on("scroll", function (e) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var Ycoord = $('#yellow_school_logo').offset();
        if(Ycoord.top<scrollTop ){
            $('.yellow_school_logo_nav').css('display' ,'inline-block');
            $('nav.nav-large_screen').css('padding', '0 5%');
            $('nav.nav-large_screen ul').css({'float': 'right',
                "margin-left":"10px"
            });
            $('nav.small-screen img').css({
                width:'14vw',
                height:'16vw',
                marginLeft: '5%'
            });
            $('div.logo-nav-small').css({
                display:'block'
            })
        }
        else{
            $('.yellow_school_logo_nav').css('display' ,'none');
            $('nav.nav-large_screen').css('padding', '0 10%');
            $('nav.nav-large_screen ul').css({'float': 'none',
            "margin-left":'3vw'
            });

            $('nav.small-screen img').css({
                width:'10vw',
                height:'12vw',
                marginLeft: '0'
            });
            $('div.logo-nav-small').css({
                display:'none'
            })
        }
    });
    //yellow bus scrolling to navbar



    //yellow bus nav small screen
    smollNav.on('click', function (e) {
        $('div.nav-bottom').animate({
            height:'toggle'
        }, 500)

    });
    aHref.on('click', function () {
           $('div.nav-bottom').animate({
               height:'toggle'
           }, 500)
       }) ;

    //yellow bus nav small screen



});