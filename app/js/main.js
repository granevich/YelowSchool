/**
 * Created by granevich on 06.05.2016.
 */

$(document).ready(function () {
    function modalAlert() {
       $('.modal-alert-wrapper').fadeIn();
        $(document).on('click touchend',function (event) {
            if(event.target.className==='modal-alert-wrapper'){
                $('.modal-alert-wrapper').fadeOut();
            }
        });
    }
    //MODAL FEEDBACK
    $('.ask-feedback').on('click', function () {


            $('.modal-feedback-wrapper').fadeIn();

        $(document).on('click touchend',function (event) {
            if(event.target.className==='modal-feedback-wrapper'){
                $('.modal-feedback-wrapper').fadeOut();
            }
        });


        $('#send-feedback-modal').on('click', function (e) {

            var name= $('#name-modal').val();
            var number = $('#namber-modal').val();
            var regExpName = /^[А-Яа-яA-Za-z ,.'-]+$/i;
            if(regExpName.test(name) === true && number!=='') {
                var form = $('#form-modal').serialize();
                $.ajax({
                    type: 'POST',
                    url: 'form.php',
                    beforeSend: function(){
                        $('#form-modal').hide();
                        $('.windows8').show()
                    },
                    dataType: "html",
                    data: form,
                    success: function(msg){
                        $('.windows8').hide();
                        $('#form-modal').show();
                    }

                })
                    .done(function () {
                        modalAlert();
                        $('#name-modal').val('');
                        $('#namber-modal').val('');
                        $('.modal-feedback-wrapper').fadeOut()
                    })
            }

        });
    });


    //MODAL FEEDBACK


    var smollNav = $('.small-screen');
    var aHref = $('.nav-bottom ul li a');

//mask input
    $("#namber").mask("(999)999-99-99" );
    $("#namber-modal").mask("(999)999-99-99" );
    $("#namber-modal-english").mask("(999)999-99-99" );
    $("#namber-modal-polish").mask("(999)999-99-99" );
    $("#namber-modal-chinese").mask("(999)999-99-99" );
    $("#namber-modal-business").mask("(999)999-99-99" );
//mask input


    $('input[type="text"]').on(' keypress', function (e) {
        if (e.keyCode == 8 || e.keyCode == 46) {}
        else
        {
            var letters=' ,.()zxcvbnmasdfghjklqwertyuiopQWERTYUIOPLKJHGFDSAZXCVBNM-йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ';
            return (letters.indexOf(String.fromCharCode(e.which))!=-1);
        }
      });
    // });


    // feedback
    // function validate() {
    //
    // }

    $('#send-feedback').on('click', function (e) {

        var name= $('#name').val();
        var number = $('#namber').val();
        var regExpName = /^[А-Яа-яA-Za-z ,.'-]+$/i;
        if(regExpName.test(name) === true && number!=='') {
            var form = $('#form').serialize();
            $.ajax({
                type: 'POST',
                url: 'form.php',
                dataType: "html",
                data: form
            })
                .done(function () {
                    modalAlert();
                    $('#name').val('');
                    $('#namber').val('');
                })
        }

    });
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



//modal-form_ENGLISH
    var wrapper;
    function allInOne() {
        var WrapperClassname = wrapper.attr('class');
        wrapper.fadeIn();
        console.log(wrapper);
        event.stopPropagation();
        $(document).on('click touchend',function (event) {
            if(event.target.className===WrapperClassname){

                wrapper.fadeOut();
            }
        });

    }
$('.try_English').on('click', function (event) {
    wrapper = $('.wrapper-modal-english');
   var onclick = true;
    allInOne();

        $('#learn-more-english').on('click', function (e) {
            if(onclick===true) {
                $('.modal-block-for-text-english').fadeOut();
                $('#form-modal-english').fadeIn();
                $(this).text('Отправить');
                onclick = false
            }
            else{
                var name= $('#name-modal-english').val();
                var number = $('#namber-modal-english').val();
                var regExpName = /^[А-Яа-яA-Za-z ,.'-]+$/i;
                if(regExpName.test(name) === true && number!=='') {
                    var form = $('#form-modal-english').serialize();
                    $.ajax({
                        type: 'POST',
                        url: 'form.php',
                        dataType: "html",
                        data: form,
                        beforeSend:function () {
                            $('#form-modal-english').hide();
                           $('.preloader').show();
                       },
                         success:function () {
                             $('.preloader').hide();
                             modalAlert();
                       }

                    })
                        .done(function () {
                            wrapper.hide();
                           $('#name-modal-english').val('');
                           $('#namber-modal-english').val('');

                            $('.modal-block-for-text-english').show();
                            $('#learn-more-english').show().text('Учить английский!');
                            onclick = false;
                        })
                        .error(function () {
                            alert('error')
                        })
                }
                onclick = true;
            }
        });
});
//modal-form_English
//modal-form_POLISH
    $('.try_Polish').on('click', function (event) {
        wrapper = $('.wrapper-modal-polish');
       var onclick = true;
        allInOne();

        $('#learn-more-polish').on('click', function (e) {
            if(onclick===true) {
                $('.modal-block-for-text-polish').fadeOut();
                $('#form-modal-polish').fadeIn();
                $(this).text('Отправить');
                onclick = false
            }
            else{
                var name= $('#name-modal-polish').val();
                var number = $('#namber-modal-polish').val();
                var regExpName = /^[А-Яа-яA-Za-z ,.'-]+$/i;
                if(regExpName.test(name) === true && number!=='') {
                    var form = $('#form-modal-polish').serialize();
                    $.ajax({
                        type: 'POST',
                        url: 'form.php',
                        dataType: "html",
                        data: form,
                        beforeSend:function () {

                            // $('.windows8').show();
                        },
                        success:function () {
                            // $('.windows8').hide();
                            modalAlert();
                        }

                    })
                        .done(function () {
                            wrapper.hide();
                            $('#form-modal-polish').hide();
                            $('#name-modal-polish').val('');
                            $('#namber-modal-polish').val('');
                            $('.modal-block-for-text-polish').show();
                            $('#learn-more-polish').show().text('Учить польский!');
                            onclick = false;
                        })
                        .error(function () {
                            alert('error')
                        })
                }
                onclick = true;
            }
        });
    });
//modal-form_POLISH
//modal-form_CHINESE
    $('.try_chinese').on('click', function (event) {
        wrapper = $('.wrapper-modal-chinese');
        var onclick = true;
        allInOne();

        $('#learn-more-chinese').on('click', function (e) {
            if(onclick===true) {
                $('.modal-block-for-text-chinese').fadeOut();
                $('#form-modal-chinese').fadeIn();
                $(this).text('Отправить');
                onclick = false
            }
            else{
                var name= $('#name-modal-chinese').val();
                var number = $('#namber-modal-chinese').val();
                var regExpName = /^[А-Яа-яA-Za-z ,.'-]+$/i;
                if(regExpName.test(name) === true && number!=='') {
                    var form = $('#form-modal-chinese').serialize();
                    $.ajax({
                        type: 'POST',
                        url: 'form.php',
                        dataType: "html",
                        data: form,
                        beforeSend:function () {

                            // $('.windows8').show();
                        },
                        success:function () {
                            // $('.windows8').hide();
                            modalAlert();
                        }

                    })
                        .done(function () {
                            wrapper.hide();
                            $('#form-modal-chinese').hide();
                            $('#name-modal-chinese').val('');
                            $('#namber-modal-chinese').val('');
                            $('.modal-block-for-text-chinese').show();
                            $('#learn-more-chinese').show().text('Учить китайский!');
                            onclick = false;
                        })
                        .error(function () {
                            alert('error')
                        })
                }
                onclick = true;
            }
        });

    });
   $('.try_business').on('click', function (event) {
        wrapper = $('.wrapper-modal-business');
        var onclick = true;
        allInOne();

        $('#learn-more-business').on('click', function (e) {
            if(onclick===true) {
                $('.modal-block-for-text-business').fadeOut();
                $('#form-modal-business').fadeIn();
                $(this).text('Отправить');
                onclick = false
            }
            else{
                var name= $('#name-modal-business').val();
                var number = $('#namber-modal-business').val();
                var regExpName = /^[А-Яа-яA-Za-z ,.'-]+$/i;
                if(regExpName.test(name) === true && number!=='') {
                    var form = $('#form-modal-business').serialize();
                    $.ajax({
                        type: 'POST',
                        url: 'form.php',
                        dataType: "html",
                        data: form,
                        beforeSend:function () {

                            // $('.windows8').show();
                        },
                        success:function () {
                            // $('.windows8').hide();
                            modalAlert();
                        }

                    })
                        .done(function () {
                            wrapper.hide();
                            $('#form-modal-business').hide();
                            $('#name-modal-business').val('');
                            $('#namber-modal-business').val('');
                            $('.modal-block-for-text-business').show();
                            $('#learn-more-business').show().text('Учить китайский!');
                            onclick = false;
                        })
                        .error(function () {
                            alert('error')
                        })
                }
                onclick = true;
            }
        });

    });


//modal-form_business


// modal form test
// open test modal
    var i =2 ;
    var progressval = 0;
    var numofquest = 0;
    var ball = 0;
$('#past_the_test').on('click touchend',function () {
    ball = 0;
    i=2;
    progressval =1.6;
    numofquest = 1;
    $('progress').val(progressval);
    $('.quesnum').text(numofquest);
        $('.modal-test-wrapper').css('display', 'flex');
         $('.questions').load('test.html .load-1', function () {
            $('.load p').on('click ', function () {

                for(var i=0;i<$('.load p').length; i++){
                    $('.load p').css('color', 'black');
                    $(this).css('color', '#fc9c00');
                    if($(this).attr('datatype') === 'true'){
                        $('.replace_empty').html($(this).html()).css('color', '#fc9c00').attr('datatype', 'true');
                    }
                    else{
                        $('.replace_empty').html($(this).html()).css('color', '#fc9c00').attr('datatype', 'false');
                    }

                    $('.modal-test button').removeClass('disabled').removeAttr('disabled')
                }
            })
         })
});
// open test modal

    $('#next').on('click ', function () {
        if($('.replace_empty').attr('datatype')==='true'){
            ball++;
            console.log(ball);
        }
        if(i<=2){
            $('.modal-test button').addClass('disabled');
            document.getElementById("next").disabled = true;
            $('.questions').load('test.html .load-'+i, function () {
                $('.load p').on('click ', function () {
                    for(var i=0;i<$('.load p').length; i++){
                        if($(this).attr('datatype') === 'true'){
                            $('.replace_empty').html($(this).html()).css('color', '#fc9c00').attr('datatype', 'true');
                        }
                        else{
                            $('.replace_empty').html($(this).html()).css('color', '#fc9c00').attr('datatype', 'false');
                        }
                        $('.load p').css('color', 'black');
                        $(this).css('color', '#fc9c00');

                        $('.modal-test button').removeClass('disabled').removeAttr('disabled')

                    }
                })
            });
            progressval=progressval+1.6;

            numofquest++;
            $('progress').val(progressval);
            $('.quesnum').text(numofquest);
            i++;
        }
        else{
            alert('stop')
        }

});

// close button
$('.close_icon').on('click', function () {
    $('.modal-test-wrapper').css('display', 'none');
});


// close button
// modal form test














});