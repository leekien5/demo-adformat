function showMM()
{
  $('#subMM').toggle();
}
function loadSubMenuMobi(p_intID)
{
  $('#subm-'+p_intID).toggle();
  $('#arrow-'+p_intID).toggleClass( "fa-angle-down fa-angle-up" );
}
function showMenuMobi(p_intFlag)
{
  if(p_intFlag==1)
  {
    $('#menu-mobi').css('display','block');
    console.log('open menu mobi');
  }
  else
  {
    $('#menu-mobi').css('display','none');
    console.log('close menu mobi');
  }
}
window.onload = function() {
    var elements = document.getElementsByTagName('*');
    for (i in elements) {
        if (elements[i].hasAttribute && elements[i].hasAttribute('data-include')) {
            fragment(elements[i], elements[i].getAttribute('data-include'));
        }
    }
    function fragment(el, url) {
        var localTest = /^(?:file):/,
            xmlhttp = new XMLHttpRequest(),
            status = 0;

        xmlhttp.onreadystatechange = function() {
            /* if we are on a local protocol, and we have response text, we'll assume
             *          things were sucessful */
            if (xmlhttp.readyState == 4) {
                status = xmlhttp.status;
            }
            if (localTest.test(location.href) && xmlhttp.responseText) {
                status = 200;
            }
            if (xmlhttp.readyState == 4 && status == 200) {
                el.outerHTML = xmlhttp.responseText;
            }
        }

        try {
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        } catch(err) {
            /* todo catch error */
        }
    }
}

function showMyMenu(intID)
{
    $('#subMyMenu'+intID).toggle('slow');
}

function getTemp(val)
{
    if(val!='')
    {
        $.ajax({
            type: "POST",
            url: DOMAIN + "index/getthoitiet?v=" + val,
            data: {},
            success: function(data)
            {
                if(data)
                {
                    $('#conttemp').html(data);
                }
            }
        });
    }
}

function openweb(p_strLink)
{
    if(p_strLink)
    {
        window.open(p_strLink,'new');
    }
}

function doSearch(strObj)
{
    var txtsearch = $('#'+strObj).val();
    if(txtsearch)
    {
        txtsearch = txtsearch.replace("<script>", "");
        txtsearch = txtsearch.replace("</script>", "");
        txtsearch = encodeURIComponent(txtsearch);
        //alert(DOMAIN +'tim-kiem/'+txtsearch+'.html?p=1&t=0&sd=&ed=&c=0&ci=0&ts=3');return false;
        window.location.href = DOMAIN +'tim-kiem/'+txtsearch+'.html?p=1&t=0&sd=&ed=&c=0&ci=0&ts=3&l=vi';
    }
    else
    {
        alert("Vui lĂ²ng nháº­p tá»« khoĂ¡ tĂ¬m kiáº¿m!");
    }
}

function getnewsreadhome()
{
    $('#newhome').css("display","none");
    $('a#mn').removeAttr('class');
    $('a#adnn').attr('class','active');
    $('#newreadhome').css("display","block");
}
function getnewshome()
{
    $('#newreadhome').css("display","none");
    $('#newhome').css("display","block");
    $('a#adnn').removeAttr('class');
    $('a#mn').attr('class','active');
}

function getDateVI()
{
    var monthNames = [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ];
    var dayNames= ["Chá»§ Nháº­t","Thá»© hai","Thá»© ba","Thá»© tÆ°","Thá»© nÄƒm","Thá»© sĂ¡u","Thá»© báº£y"];
    var minutes = new Date().getMinutes();
    var hours   = new Date().getHours();
    var newDate = new Date();
    newDate.setDate(newDate.getDate());
    $('#datenow').html(dayNames[newDate.getDay()] + ", ngĂ y " + newDate.getDate() + '/' + monthNames[newDate.getMonth()] + '/' + newDate.getFullYear());
}
function getDateEN()
{
    var monthNames = [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ];
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var minutes = new Date().getMinutes();
    var hours = new Date().getHours();
    var newDate = new Date();
    newDate.setDate(newDate.getDate());
    $('#datenow').html(dayNames[newDate.getDay()] + ", " + newDate.getDate() + '-' + monthNames[newDate.getMonth()] + '-' + newDate.getFullYear() +', ' + hours + ':' + (minutes<10?'0' + minutes:minutes));
}

function chkNum(obj)
{
    obj.value = obj.value.replace(/[^-0-9]/g,'') // numbers only
}
function checkEmail(emailaddressVal)
{
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(emailaddressVal))
    {
        return 0;
    }
    return 1;
}
function checkPassword(idinput1,idinput2,iderror,message)
{
    var strInput1 = $('#' + idinput1).val();
    var strInput2 = $('#' + idinput2).val();
    var objError = $('#' + iderror);
    if(strInput1!=strInput2)
    {
        objError.html(message);
        return 1;
    }
    else
    {
        objError.html('');
        return 0;
    }
}
function checkElement(idinput,iderror,message,errornumber)
{
    var strInput = $('#' + idinput).val();
    var objError = $('#' + iderror);
    switch(errornumber)
    {
        case 1://-- kiem tra ko dc trong
            if(strInput=='')
            {
                objError.html(message);
                return 1;
            }
            else
            {
                objError.html('');
                return 0;
            }
            break;
        case 2://-- kiem tra email
            if(strInput=='' || checkEmail(strInput)==0)
            {
                objError.html(message);
                return 1;
            }
            else
            {
                objError.html('');
                return 0;
            }
            break;
        case 3://-- kiem tra select all || 0
            if(strInput=='all' || strInput==0)
            {
                objError.html(message);
                return 1;
            }
            else
            {
                objError.html('');
                return 0;
            }
            break;
        case 4://-- kiem tra con so
            if(!$.isNumeric(strInput))
            {
                objError.html(message);
                return 1;
            }
            else
            {
                objError.html('');
                return 0;
            }
            break;
    }
}
function checkYkien(idinput,iderror,message,errornumber)
{
    var strInput = $('#' + idinput).val();
    var objError = $('#' + iderror);
    switch(errornumber)
    {
        case 1://-- kiem tra ko dc trong
            if(strInput=='TĂªn cá»§a báº¡n'||strInput=='')
            {
                objError.html(message);
                return 1;
            }
            else
            {
                objError.html('');
                return 0;
            }
            break;
        case 2://-- kiem tra email
            if(strInput=='Email cá»§a báº¡n' || checkEmail(strInput)==0||strInput=='')
            {
                objError.html(message);
                return 1;
            }
            else
            {
                objError.html('');
                return 0;
            }
            break;
        case 3://-- kiem tra ko dc trong
            if(strInput=='Ă kiáº¿n cá»§a báº¡n'||strInput=='')
            {
                objError.html(message);
                return 1;
            }
            else
            {
                objError.html('');
                return 0;
            }
            break;
    }
}

function setHomepage()
{
    if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage('http://phunuonline.com.vn');
    }
    else if (window.sidebar) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }
            catch (e) {
                alert("TrĂ¬nh duyá»‡t cá»§a báº¡n khĂ´ng há»— trá»£ tĂ­nh nÄƒng nĂ y!");
            }
        }
        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
        prefs.setCharPref('browser.startup.homepage', 'http://phunuonline.com.vn');
    }
}

function scrollBannerHome(){
    var scrollTop = $(window).scrollTop();
    var posObj;
    var heightObj;
    var objScrollingLimmit;
    var posScrollingLimmit;
}

(function ($) {
    var timer = null;
    $(window).bind('resize.resizeEnd', function () {
        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(function () {
            clearInterval(timer);
            $(window).trigger('resizeEnd');

            /* coding resize */
            setHomeBox6ItemFull();
            var $width = jQuery(window).width();
            if($width>(1120+100))
            {
                $right = ($width-1120)/2;
            }
            else
            {
                $right = 60;
            }

            $("#bell-notification").css({'right':$right});

            /* END coding resize */
        }, 250);
    });

    $(window).bind('scroll', function () {
        /* coding scroll no */
        scrollBannerHome();

        /* END coding scroll */


        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(function () {
            clearInterval(timer);
            $(window).trigger('scrollEnd');

            /* coding scroll */
            //scrollBannerHome();

            /* END coding scroll */
        }, 250);
    });

})(jQuery);
var page;
jQuery(document).ready(function() {
    setHomeBox6ItemFull();
    
    // processImg(5,3);
    // processImg(4,3);
    // processImg(16,9);
    // processImg(4,6);
    // processImg(5,6);
    // processImg(10,9);
    //Gallery($('.content-fck'));

    $( "#slick-anhdep" ).each(function() {
        $(this).slick({
            autoplaySpeed:3000, //df:3000
            lazyLoad: 'ondemand',
            arrows: false,
            dots: false,
            infinite: true,
            //fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true,
            dotsClass: 'slick-dots slick-dots-about',
            //prevArrow: '<button type="button" class="slick-prev slick-arrow-circle"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            //nextArrow: '<button type="button" class="slick-next slick-arrow-circle"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
            asNavFor: '#slick-anhdep-nav',
        });

        $('#slick-anhdep-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '#slick-anhdep',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '60px',
            prevArrow: '<button type="button" class="slick-prev "><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" class="slick-next "><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
        });


    });

    if ( $('.slider-jsgallery img.zoomimg').length > 0 ) {
        $("body").jsgallery({
            imgSelector : ".slider-jsgallery img.zoomimg", //default is img, ommit this property to use default
            // 0 = image 1
            currentImage: 0,
            // playSpeed: 2000
            playSpeed: 2000,

            // custom footer of the gallery
            customHTMLFooter : "",

            // click background overlay to close
            bgClickClose : false,

            // templates for nav buttons and close button HTML
            leftNavHTML : '<i class="fa fa-angle-left" aria-hidden="true"></i>',  //<i class="fa fa-chevron-left">',
            rightNavHTML : '<i class="fa fa-angle-right" aria-hidden="true"></i>',  //'<i class="fa fa-chevron-right">',
            closeHTML : '<span class="icon-close"></span>', // '<i class="fa fa-times"></i>',
            sideShowHTML : '<i class="fa fa-play" aria-hidden="true"></i>', //'<i class="fa fa-play" aria-hidden="true"></i>'
            pauseSideShowHTML : '<i class="fa fa-pause" aria-hidden="true"></i>', // '<i class="fa fa-pause" aria-hidden="true"></i>'
        });
    }

    // $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({
    //  default_offset_pct: 0.5,  // 0.5
    //  orientation: 'horizontal',  // 'horizontal'
    //  before_label: 'Before', // 'Before'
    //  after_label: 'After', // 'After'
    //  no_overlay: false,  // false : hover vo hien opacity - before_label - after_label
    //  move_slider_on_hover: true, // false: cho phep hover
    //  move_with_handle_only: true,  // true
    //  click_to_move: true // false
    // });

    $('#btn-nav-mobi').click(function() {
        if ( $(this).hasClass('collapsed') ){
            $(this).addClass('collapse-in');
        } else {
            $(this).removeClass('collapse-in');
        }

    });

    $('.nav-mobi li a').click(function() {
        $('.nav-mobi li a').removeClass("active");
        $(this).addClass("active");
        $('#btn-nav-mobi').removeClass('collapse-in');
        $('.nav-mobi').collapse('hide');
    });


    if ( document.getElementById("loadcomment") && $(window).width() >= 768 )
    {
        var h_bg_box_video  = $("#boxtopvideo #leftv").height();
        //console.log("h_bg_box_video =" +h_bg_box_video);
        if (h_bg_box_video <= 0)
        {
            h_bg_box_video = 380;
        }
        console.log("h_bg_box_video22222 ====" + $("#vrh-detail #loadcomment").height() );
        if ($("#vrh-detail #loadcomment").height() >= 100 )
        {

            var h_vrh_detail = $("#vrh-detail").outerHeight();

            var h_tab_content = $("#vrh-detail .box-video-detail .tab-content").outerHeight();
            var h_postcomment = $("#vrh-detail #postcomment").outerHeight();

            h_bg_box_video = h_bg_box_video - (h_vrh_detail - (h_tab_content - h_postcomment) );

            console.log("h_bg_box_video22222 ====" + h_bg_box_video);
            if (h_bg_box_video<100)
            {
                h_bg_box_video = 100;
            }

            $('#loadcomment').slimScroll({
                alwaysVisible: false,
                width: '100%',
                height: h_bg_box_video + "px",
                color: '#ccc',
                railOpacity: 1,
                size : "3px",//df: 7px
                distance : "0px",
            });

            // $('#vrh-detail').slimScroll({
            // alwaysVisible: false,
            // width: '100%',
            // height: h_bg_box_video + "px",
            // color: '#ccc',
            // railOpacity: 1,
            // size : "4px",//df: 7px
            // distance : "0px",
            // });
        }
        else
        {
            $("#vrh-detail #loadcomment").css({"min-height":"0px"});

            if ($("#vrh-detail .box-video-detail").height() <  h_bg_box_video)
            {
                h_bg_box_video = h_bg_box_video - $("#vrh-detail .box-video-detail").height();

                console.log("h_bg_box_video 111= " +h_bg_box_video);
                $("#vrh-detail #loadcomment").css({"min-height": h_bg_box_video+"px"});

            }
        }
    }

    $("#box-head-cong-nghe").each(function(){
        //var hBot = $(this).children(".box-item:nth-child(1)").outerHeight(true);
        var hBot = $(' .box-item[data-type="big"]', this).outerHeight(true);
        $(' .box-item:not([data-type="big"])', this).css("height", (hBot-10)/2 );
    });

    $("#silde-videonoibat").each(function(){
        $(this).slick({
            //autoplay:true,  //df: false
            //autoplaySpeed:1000, //df:3000
            speed:500,  //df: 300
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            centerMode: false,
            prevArrow: '<button type="button" class="slick-prev slick-arrow-circle"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow-circle"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
            //speed: 300,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 360,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ],
        });
    });

    $("#silde-audiohot").each(function(){
        $(this).slick({
            //autoplay:true,  //df: false
            //autoplaySpeed:1000, //df:3000
            speed:500,  //df: 300
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerMode: false,
            prevArrow: '<button type="button" class="slick-prev slick-arrow-circle"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow-circle"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
            //speed: 300,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 360,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ],
        });
    });


    $('[data-slick="slick-cate-video"]').each(function(){
        $(this).slick({
            //autoplay:true,  //df: false
            //autoplaySpeed:1000, //df:3000
            speed:500,  //df: 300
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            //speed: 300,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 360,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ],
        });
    });

    // $( ".slick-auto" ).each(function() {
    //     var temp_slick = $( this ).attr('id');
    //     console.log('temp_slick='+temp_slick);
    //     if (temp_slick != "")
    //     {
    //         $(this).slick({
    //             //autoplay:true, //df: false
    //             autoplaySpeed:3000,  //df:3000
    //             lazyLoad: 'ondemand',
    //             arrows: true,
    //             dots: false,
    //             infinite: true,
    //             slidesToShow: 4,
    //             slidesToScroll: 4,
    //             focusOnSelect: true,
    //             prevArrow: '<button type="button" class="slick-prev slick-arrow-circle"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    //             nextArrow: '<button type="button" class="slick-next slick-arrow-circle"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    //             responsive: [
    //                 {
    //                     breakpoint: 992,
    //                     settings: {
    //                         slidesToShow: 3,
    //                         slidesToScroll: 3,
    //                     }
    //                 },
    //                 {
    //                     breakpoint: 768,
    //                     settings: {
    //                         slidesToShow: 2,
    //                         slidesToScroll: 2,
    //                     }
    //                 },
    //                 {
    //                     breakpoint: 480,
    //                     settings: {
    //                         slidesToShow: 1,
    //                         slidesToScroll: 1,
    //                     }
    //                 },
    //             ],
    //         });
    //     }
    // });

    var hasScrollbar = jQuery('body').outerHeight() > jQuery(window).height();
    //if(hasScrollbar)
    //{


    //-- xu ly menu ngang
    if($('#wrapper-scroll-top').length > 0)
    {
        var _top = $('#wrapper-scroll-top:not(.is-croll)').offset().top;

        $(window).scroll(function(evt)
        {
            if (jQuery(window).width()>=768)
            {
                var _y = $(this).scrollTop();
                if (_y > _top) {
                    $('#wrapper-scroll-top').addClass('is-croll');
                } else {
                    $('#wrapper-scroll-top').removeClass('is-croll');
                }
            }
            else
            {
                $('#wrapper-scroll-top').removeClass('is-croll');
            }
        });
    }

    //-- xu ly menu ngang mobi
    if($('#wrapper-mobi-scroll-top').length > 0)
    {
        var _topMobi = $('#wrapper-mobi-scroll-top:not(.is-croll)').offset().top;
        $(window).scroll(function(evt)
        {
            if (jQuery(window).width()<768)
            {
                var _y = $(this).scrollTop();
                if (_y > _topMobi) {
                    $('#wrapper-mobi-scroll-top').addClass('is-croll');
                } else {
                    $('#wrapper-mobi-scroll-top').removeClass('is-croll');
                }
            }
            else
            {
                $('#wrapper-mobi-scroll-top').removeClass('is-croll');
            }
        });
    }

    if (document.body.clientWidth <= 1224)
    {
        $("#divAdRight").css("display", "none");
        $("#divAdLeft").css("display", "none");
    }
    else
    {
        $("#showFloating").css("display", "block");
    }
    $(window).resize(function(){
        fnResize();
    });

    getDateVI();

    showTop();
    showTopScroll();

    jQuery('#top').click(function() {
        clickTopScroll();
    })
});

jQuery(window).scroll(function() {
    showTopScroll();
});



function showTop() {
    var $top = jQuery('#top');
    if($top.length<1) {
        jQuery('body').append('<div id="top"> </div>');
    }
    showTopPos();
}
function showTopPos() {
    var $width = jQuery(window).width();
    if($width>(1120+100))
    {
        $right = ($width-1120)/2;
    }
    else
    {
        $right = 60;
    }
    jQuery('#top').css({'right':$right, 'transform': 'translate(100%, 0)'});
}

function showTopScroll() {
    if(jQuery(window).scrollTop() > 100) {
        jQuery('#top').fadeIn();
    } else {
        jQuery('#top').fadeOut();
    }
}

function clickTopScroll() {
    jQuery('html, body').animate({scrollTop:0},500);
}


function printPopup(url) {
    window.open(url, "_blank", "left=300,top=0,width=550,height=600,toolbar=0,scrollbars=1,status=0")
}

function toggleLatestNews(){
    $('body').toggleClass('show-latest-news');
}


function processImg2(ratioWith,ratioHeight)
{
    //alert(ratioWith); alert(ratioHeight);
    //$('.overflow-'+ratioWith+'x'+ratioHeight+' img:not(.process-img-done)').each(function () {
    $('.overflow-'+ratioWith+'x'+ratioHeight+':not(.box-process-img-done) img').each(function () {
        let that = this;
        var $img = new Image();
        $img.src = $(that).attr("src");

        var imgWidth = $img.naturalWidth>0 ? $img.naturalWidth : 0;
        var imgHeight = $img.naturalHeight>0 ? $img.naturalHeight : 0;
        var ratio = 0;
        if (imgWidth > 0 && imgHeight > 0) {
            ratio = imgWidth / imgHeight;
            console.log($img.src + '/w='+imgWidth + '/h='+imgHeight);
            if ( ratio >= (ratioWith / ratioHeight) ) {
                $(that).addClass( 'img-horizontal-' + ratioWith + 'x' + ratioHeight);
                console.log($(that).attr("id")+'/'+$(that).id);
            }
            else {
                $(that).addClass( 'img-vertical-' + ratioWith + 'x' + ratioHeight);
            }
            $(that).closest('.overflow-'+ratioWith+'x'+ratioHeight).addClass('box-process-img-done');
            $(that).addClass('process-img-done');
        }
    });
}

function fnResize()//--handle floating banner
{
  // if (document.body.clientWidth <= 1224)
  // {
  //     $("#divAdRight").css("display", "none");
  //     $("#divAdLeft").css("display", "none");
  // }
  // else
  // {
  //     $("#divAdRight").css("display", "block");
  //     $("#divAdLeft").css("display", "block");
  // }
}


function setHomeBox6ItemFull()
{
    $('.box-6-item-full-index .col-item').css({'min-height': '1px'});
    var $width = jQuery(window).width();
    if ($width >= 992) {
        var minHeightColItem = 0;
        $('.box-6-item-full-index .col-item').each(function() {
            var tempHeight = $(this).outerHeight();
            if (tempHeight > minHeightColItem){
                minHeightColItem = tempHeight;
            }
        });

        $('.box-6-item-full-index .col-item').css({'min-height': minHeightColItem + 'px'});
    }
}

var intUp    = 1;
var intDown  = 1;
var fontSize = 2.0;
function contentFckFontSize(isUp) {
    //var fontSize = parseInt($('.content-fck .content-fck-font-size').attr('data-font-size'));
    // if (!fontSize || fontSize==0) {
    //     fontSize = 100;
    // } else if ( fontSize > 120) {
    //     fontSize = 120;
    // } else if ( fontSize < 80) {
    //     fontSize = 80;
    // }
    // if (isUp){
    //     fontSize = fontSize + 20;
    // } else {
    //     fontSize = fontSize - 20;
    // }

    if (isUp)
    {
      fontSize = parseFloat(fontSize) + 0.2;
      if(fontSize>3.0) fontSize = 3.0;
    } 
    else
    {
      fontSize = parseFloat(fontSize) - 0.2;
      if(fontSize<1.0) fontSize = 1.0;
    }

    $('.content-fck .content-fck-font-size').attr('data-font-size', fontSize+'rem');
    $('.content-fck .content-fck-font-size').attr('style', 'font-size:' + fontSize+'rem');
    $('.content-fck .content-fck-font-size p').attr('style', 'font-size:' + fontSize+'rem');
    $('.detail-desc .fontd').css({'font-size': fontSize+'rem'});
    $('.detail-desc .fontd').attr('style', 'font-size:' + fontSize+'rem');
    $('.detail-desc .fontd').attr('data-font-size', fontSize+'rem');
    $('.tblImage em').attr('style', 'font-size:' + fontSize+'rem');
    $('.content-fck p strong').attr('style', 'font-size:' + fontSize+'rem');
    $('.sp-detail p').attr('style', 'font-size:' + fontSize+'rem');
    console.log('fontSize='+fontSize);
}
function contentFckTable() {
  $( ".content-fck table" ).each(function() {
    let that = this;
    var wClosest = $(that).closest('.content-fck').width();
    $(this)[0].style.setProperty('max-width', wClosest+'px', 'important');
    //$(this).attr('style', 'max-width: '+wClosest+'px !important');
    console.log(wClosest);
  });
}
$('#menu-mobi').on('click', function (e) {
  if ($(e.target).closest("#cont-m-m").length === 0) {
    showMenuMobi(0);
  }
});

//-- check resize pc to mobi
var resizeTimer;
var cachedWidth = $(window).width();
$(window).resize(function ()
{
  var newWidth = $(window).width();
  if(newWidth !== cachedWidth){
    cachedWidth = newWidth;
    if($(window).innerWidth() <= 767) {
      if (typeof(Storage) !== "undefined") {
        sessionStorage.resize = 'resize';
        sessionStorage.setItem('resize', 1);
      }
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(Resized(), 100);
    }
    else
    {
      if (typeof(Storage) !== "undefined") {
        sessionStorage.removeItem('resize');
        //-- sessionStorage.clear();
      }
    }
  }
});
//Actual Resizing Event
function Resized()
{
  if($(window).innerWidth() <= 767) {
    if(sessionStorage.getItem('resize'))
    {
      sessionStorage.removeItem('resize');
      window.location.href = window.location.href;
    }
  }
};

function tieudiem() {
    if($('#vTicker-event-news').length)
    {
      $('#vTicker-event-news').vTicker('init', {
          speed: 700,
          pause: 4000,
          showItems: 1,
          padding: 0
          //height: 20,
          //margin: 0,
          //mousePause: true,
          //animate: true,
          //startPaused: false
      });
      $('#vTicker-event-news-prev').click(function() {
          $('#vTicker-event-news').vTicker('prev', {animate:true});
      });
      $('#vTicker-event-news-next').click(function() {
          $('#vTicker-event-news').vTicker('next', {animate:true});
      });
    }
    if($('#vTicker-event-news-m').length)
    {
      $('#vTicker-event-news-m').vTicker('init', {
          speed: 700,
          pause: 4000,
          showItems: 1,
          padding: 0
          //height: 20,
          //margin: 0,
          //mousePause: true,
          //animate: true,
          //startPaused: false
      });
      $('#vTicker-event-news-m-prev').click(function() {
          $('#vTicker-event-news-m').vTicker('prev', {animate:true});
      });
      $('#vTicker-event-news-m-next').click(function() {
          $('#vTicker-event-news-m').vTicker('next', {animate:true});
      });
    } 
}
setTimeout(function(){ tieudiem(); }, 10000);//-- sau 10s chay tieu diem

//-- kiem tra height ko co thi an di
function setIframeHeight(id) {
    var ifrm = document.getElementById(id);
    var doc = ifrm.contentDocument? ifrm.contentDocument:
        ifrm.contentWindow.document;
    ifrm.style.visibility = 'hidden';
    ifrm.style.height = "10px"; // reset to minimal height ...
    // IE opt. for bing/msn needs a bit added or scrollbar appears
    ifrm.style.height = getDocHeight( doc ) + 4 + "px";
    ifrm.style.visibility = 'visible';
}

function setOrientation(isLandscape)
{
  $.ajax({
    url: DOMAIN + "index/setorientation",
    type: "get",
    data: {type : isLandscape},
    success: function(data){
     //if(data==1) window.location.href = window.location.href;
    }
  });
}
$(function() {
  if (window.innerWidth > window.innerHeight) {
    isLandscape = 1;
    //console.log('landscape');
  }
  if(device=='phone' && orientation==1) isLandscape = 1;
  setOrientation(isLandscape);
});

// Listen for orientation changes      
window.addEventListener("orientationchange", function() {
  if(window.orientation==90) isLandscape = 1;
  else if(window.orientation==0) isLandscape = 0;
  setOrientation(isLandscape);
}, false);

//-- plugin loop
(function ($) { jQuery.fn.loop = function (d, f) { var e = this.children(); var el = function (i) { if (i == e.length) i = 0; e.fadeTo(f, 0).eq(i).fadeTo(f, 1); setTimeout(function () { el(++i); }, d); }; el(0); }; })(jQuery);
//-- $("#dskien").loop(8000, 200);

$(function () {
  //onchange="getWeather(this:selected)"
  $( "#sCityWeather" ).change(function ()
  {
    var strCity = this.value;
    $.ajax({
      url: DOMAIN + "index/getweather",
      type: "get",
      data: {city : strCity},
      success: function(html){
        var data = JSON.parse(html);
        $("#conttemp .b-ic-weather").html('<img src="//stc-laban.zdn.vn/v4/images/icon_weather_home/'+data['icon']+'" />');
        $("#conttemp .temp-desc").html(data['weather_short']);
        $("#conttemp .temp-temp").html(data['tempMin']+'Â°C - ' + data['tempMax']+'Â°C ');
      }
    });
  }).change();

  getTemp(1);
});

function showTygia()
{
  $('#modeltygia').modal('show');
  $.ajax({
     type: "POST",
     url: DOMAIN + "index/getbox?id=tygia",
     data: {  },
    success: function(data)
    {
      //alert(data);
      $('#loadtygia').html(data);
    }
  });
}

function showGiavang()
{
  $('#modelgiavang').modal('show');
  $.ajax({
     type: "POST",
     url: DOMAIN + "index/getbox?id=giavang",
     data: {  },
    success: function(data)
    {
      //alert(data);
      $('#loadgiavang').html(data);
    }
  });
}

function loadrv(idx)
{
  $('#idrv_1').removeClass('act');
  $('#idrv_2').removeClass('act');
  $('#idrv_'+idx).addClass('act');

  $('#datarv_1').css('visibility','hidden');
  $('#datarv_1').css('height','0px');
  $('#datarv_2').css('visibility','hidden');
  $('#datarv_2').css('height','0px');
  $('#datarv_'+idx).css('visibility','visible');
  $('#datarv_'+idx).css('height','auto');
  if(idx==2)
  {
    //$('#datarv_'+idx).css('height','140px');
    slickdoanhnghiep();
  }
}

function slickdoanhnghiep()
{
  showItem  = 5;
  var width = $(window).width();
  if(width<568)
  {
    showItem = 1;
  }
  $( "#silde-customer" ).each(function() {
    $(this).slick({
      autoplay:true,  //df: false
      autoplaySpeed:6000,
      df:3000,
      speed:1000,
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: showItem,
      slidesToScroll: showItem,
      centerMode: true,
      variableWidth: false
    });
  });
}

function slickRaovat()
{
  if($('#datarv_1').length)
  $('#datarv_1').slick({
    //centerMode: true,
    //centerPadding: '60px',
    infinite: true,
    lazyLoad: 'ondemand',
    dots: false,
    speed: 300,
    //slidesToShow: 8,
    //slidesToScroll: 8,
    autoplay: true,
    autoplaySpeed: 8000,
    rows: 2,
    slidesPerRow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          //slidesToShow: 8,
          //slidesToScroll: 8,
          infinite: true,
          dots: true,
          rows: 2,
          slidesPerRow: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          //slidesToShow: 2,
          //slidesToScroll: 2,
          rows: 1,
          slidesPerRow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          //slidesToShow: 2,
          //slidesToScroll: 2,
          rows: 2,
          slidesPerRow: 2
          //centerMode: true
          //centerPadding: '20px'
        }
      }
    ]
  });
}

$(function() { 
  slickRaovat();
});


function GetUserIP()
{
  var ret_ip;
  $.ajaxSetup({async: false});
  $.get('https://jsonip.com/', function(r){ 
    ret_ip = r.ip; 
  });
  return ret_ip;
}

//-- view
$(function() { 
  var strIPClient = GetUserIP();
  $.ajax({
     type: "POST",
     url: DOMAIN + "crontjobs/counter?type=PAGEVIEW",
     data: { ip: strIPClient },
    success: function(data)
    {
      
    }
  });
})
