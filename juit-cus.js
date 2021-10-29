$(document).ready(function() {
	

	
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $(".inner-banner .menu-search").addClass("fixed");
        } else {
            $(".inner-banner .menu-search").removeClass("fixed");
        }
    });
    
    // banner slider
    $(".bnsl-outer").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // asNavFor: ".slider-nav"
    });
    /*juit admission slider*/
     $(".addmi-helpdesk ul").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
         responsive: [
        {
          breakpoint: 1101,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    
    
    $(".fetch-faculty-data img").attr("align" , "left")
    
    //alert();
    $(function() {
        $('a[href$=".pdf"]').prop("target", "_blank");
        $('a[href$=".xls"]').prop("target", "_blank");
        $('a[href$=".xlsx"]').prop("target", "_blank");
        $('a[href$=".doc"]').prop("target", "_blank");
        $('a[href$=".docx"]').prop("target", "_blank");
    });
    $(".councslider").owlCarousel({
        loop: true,
        margin: 0,
        navigation: true,
        items: 4,
        pagination: false,
        autoPlay:true,
        autoplayTimeout:5000,
        autoplaySpeed:200,
        dots: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 1],
        itemsMobile: [481, 1]
    });
    $(".vid-s").owlCarousel({
        loop: true,
        margin: 0,
        navigation: true,
        items: 1,
        pagination: false,
        dots: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1]
    });
    $(".gr-slider").owlCarousel({
        loop: true,
        margin: 0,
        navigation: true,
        items: 2,
        pagination: false,
        dots: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [701, 2],
        itemsMobile: [481, 1]
    });
    $(".research-slider").owlCarousel({
        loop: true,
        margin: 20,
        navigation: true,
        items: 3,
        dots: false,
        pagination: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
    $(".ex-sl").owlCarousel({
        loop: true,
        margin: 0,
        navigation: true,
        items: 1,
        dots: true,
        autoPlay:true,
        autoplayTimeout:5000,
        autoplaySpeed:100,
        slideTransition:'linear',
        autoplayHoverPause:true,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1]
    });
    $(".ban-dsl").owlCarousel({
        loop: true,
        margin: 0,
        navigation: true,
        items: 4,
        pagination: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1]
    });
    $(".ac-slider").owlCarousel({
        loop: true,
        margin: 30,
        navigation: true,
        items: 4,
        pagination: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [500, 1]
    });
    $(".gal-image-slider").owlCarousel({
        loop: true,
        margin: 30,
        navigation:false,
        dots: true,
        autoPlay:true,
        autoplayTimeout:5000,
        autoplaySpeed:100,
        slideTransition:'linear',
        autoplayHoverPause:true,
        items: 3,
        pagination: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 3],
        itemsMobile: [500, 2]
    });
    $(".stu-act-slider").owlCarousel({
        loop: true,
        margin: 30,
        navigation: true,
        items: 1,
        pagination: false,
        autoPlay:true,
        autoplayTimeout:5000,
        autoplaySpeed:100,
        slideTransition:'linear',
        autoplayHoverPause:true,
        // rewind:true,
        // itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsMobile: [500, 1]
    });
    $(".ev-slider").owlCarousel({
        loop: true,
        margin: 0,
        navigation: true,
        items: 1,
        pagination: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1]
    });
    var ht = $("nav ul").html();
    //alert(ht);
    if ($(window).width() < 1100) {
        $(".h-l > ul").prepend(ht);
    }
    $(".h-l > ul").slicknav({
        closedSymbol: "+",
        openedSymbol: "-"
    });
    $(".scroll-data").mCustomScrollbar();
    $(".chance-data-wrap li .text , .dean-data .text,.student-activity #tab1 .ul-wrap").mCustomScrollbar();
    $(".fancybox-video").fancybox({
        type: "iframe"
        // other API options
    });
    $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        //fade: true,
        //autoPlay:true,
        autoplayTimeout:100,
        //autoplaySpeed:5000,
        //slideTransition:'linear',
        //autoplayHoverPause:true,
        asNavFor: ".slider-nav"
    });
    $(".slider-nav").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        //fade: true,
        autoPlay:true,
        autoplayTimeout:100,
        autoplaySpeed:5000,
        //slideTransition:'linear',
        //autoplayHoverPause:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    $(".nt-example1").newsTicker({
        row_height: 60,
        max_rows: 2,
        autostart:false,
        duration: 4000,
        prevButton: $("#nt-example1-prev"),
        nextButton: $("#nt-example1-next")
    });
    $(".nt-example2").newsTicker({
        row_height: 80,
        max_rows: 2,
        duration: 4000,
        prevButton: $("#lt-upd-prev"),
        nextButton: $("#lt-upd-next")
    });
    // $("ul.main").each(function() {
    //     $(this).wrap(`<div class='ul-wrap'></div>`);
    // });
    //student activity tab for tab and mobile
    if ($(window).width() < 767) {
        $(".image-sec").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    //   $('.header_top').detach().appendTo('header.header .container > .flex');
    }

	$(".tab-container .content").hide();
	$(".tab-container .content").first().show();
    $(".main li").first().addClass("active");
    $(".main li").each(function(){
        $(this).click(function(){
            $(".main li").removeClass("active");
            $(this).addClass("active");
            $(".tab-container .content").hide();
            $(".tab-container .content").eq($(this).index()).show();
        })
    })
	
	$(".search > img").click(function(){
		$(".search-div").toggle();
	})
});
/*
var tab = idname => {
    var x = document.querySelectorAll(`#${idname} .main li`);
    var y = document.querySelectorAll(`#${idname} .tab-container .content`);
    for (let i = 0; i < x.length; i++) {
        y[i].style.display = "none";
        y[0].style.display = "block";
        x[0].classList.add("active");
        x[i].addEventListener("click", () => {
            for (let i = 0; i < y.length; i++) {
                y[i].style.display = "none";
            }
            for (let i = 0; i < x.length; i++) {
                x[i].classList.remove("active");
            }
            x[i].classList.add("active");
            y[i].style.display = "block";
            //img_src = y[i].getAttribute('attr');
            //alert(img_src)
            //document.querySelector(".ge-r img").src = img_src;
        });
    }
};
tab("tab1");
tab("tab2");
document.querySelector(".search > img").onclick = () => {
    var x = document.querySelector(".search-div");
    x.style.display == "block"
        ? (x.style.display = "none")
        : (x.style.display = "block");
};
*/
// var nav = document.querySelector(".main-nam");
// var nav_top = nav.offsetTop;
//console.log(nav_top);
// document.onscroll = () => {
//     window.scrollY > nav_top ? nav.classList.add('nav-fixed') : nav.classList.remove('nav-fixed');
// // }
// document.addEventListener("scroll", function() {
//     window.scrollY > nav_top
//         ? nav.classList.add("nav-fixed")
//         : nav.classList.remove("nav-fixed");
// });
// function numberToWords(number) {
//     var digit = [
//         "zero",
//         "one",
//         "two",
//         "three",
//         "four",
//         "five",
//         "six",
//         "seven",
//         "eight",
//         "nine"
//     ];
//     var elevenSeries = [
//         "ten",
//         "eleven",
//         "twelve",
//         "thirteen",
//         "fourteen",
//         "fifteen",
//         "sixteen",
//         "seventeen",
//         "eighteen",
//         "nineteen"
//     ];
//     var countingByTens = [
//         "twenty",
//         "thirty",
//         "forty",
//         "fifty",
//         "sixty",
//         "seventy",
//         "eighty",
//         "ninety"
//     ];
//     var shortScale = ["", "thousand", "million", "billion", "trillion"];
//     number = number.toString();
//     number = number.replace(/[\, ]/g, "");
//     if (number != parseFloat(number)) return "not a number";
//     var x = number.indexOf(".");
//     if (x == -1) x = number.length;
//     if (x > 15) return "too big";
//     var n = number.split("");
//     var str = "";
//     var sk = 0;
//     for (var i = 0; i < x; i++) {
//         if ((x - i) % 3 == 2) {
//             if (n[i] == "1") {
//                 str += elevenSeries[Number(n[i + 1])] + " ";
//                 i++;
//                 sk = 1;
//             } else if (n[i] != 0) {
//                 str += countingByTens[n[i] - 2] + " ";
//                 sk = 1;
//             }
//         } else if (n[i] != 0) {
//             str += digit[n[i]] + " ";
//             if ((x - i) % 3 == 0) str += "hundred ";
//             sk = 1;
//         }
//         if ((x - i) % 3 == 1) {
//             if (sk) str += shortScale[(x - i - 1) / 3] + " ";
//             sk = 0;
//         }
//     }
//     if (x != number.length) {
//         var y = number.length;
//         str += "point ";
//         for (var i = x + 1; i < y; i++) str += digit[n[i]] + " ";
//     }
//     str = str.replace(/\number+/g, " ");
//     return str.trim() + ".";
// }
// document.getElementById("changen").addEventListener("input" , () => {
//     var val =  document.getElementById("changen").value;
//     if(isNaN(val))
//     {
//         alert('please enter numeric digit');
//         val = val.slice(0, -1);
//         document.getElementById("changen").value = val;
//     }
//     else{
//         document.getElementById("text").innerText =  numberToWords(val);
//     }
// })
