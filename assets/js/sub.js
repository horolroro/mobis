
//const { scrollTop, scrollHeight, clientHeight } = document.documentElement;



let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

function handleScroll() {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  

  if (currentScrollPosition > lastScrollPosition) {
    // 아래로 스크롤 
    $(".gnb_wrap").addClass("hide")
    $(".toggle_wrap").addClass("hide")
  } else if (currentScrollPosition < lastScrollPosition) {
    
    // 위로 스크롤
    $(".gnb_wrap").removeClass("hide")
    $(".toggle_wrap").removeClass("hide")
    
  }

  //음..?
  if (currentScrollPosition > 0) {
    $(".gnb_wrap").addClass("solid")
  } else {
    $(".gnb_wrap").removeClass("solid")
  }


  lastScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', handleScroll);

$(function(){

    /* toggle */
    $("#toggle .tg_btn").click(function(){
        $(this).toggleClass("on");
        toggleDt();
    });

    toggleDt();
    

    var swiper1 = new Swiper('.slide.bike', {
        slidesPerView: 1,
        speed: 600,
        effect : 'fade',
        fadeEffect: { 
            crossFade: true 
        },		
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        observer: true,
		observeParents: true,
        pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
        on: {
            slideChange: function () {
                //console.log(this.realIndex);
                var eq = this.realIndex
                $(".landing.bike .section6 .howTo_wrap .txt_box .txt .each").removeClass("on")
                $(".landing.bike .section6 .howTo_wrap .txt_box .txt .each" + (eq+1)).addClass("on")
            }
        }
    });

    var swiper2 = new Swiper('.slide.cargo', {
        slidesPerView: 1,
        speed: 600,
        effect : 'fade',
        fadeEffect: { 
            crossFade: true 
        },		
        loop: true,
        autoplay: {
            delay: 3000,
            //disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
        on: {
            slideChange: function () {
                //console.log(this.realIndex);
                var eq = this.realIndex
                $(".landing.cargo .section6 .howTo_wrap .txt_box .txt .each").removeClass("on")
                $(".landing.cargo .section6 .howTo_wrap .txt_box .txt .each" + (eq+1)).addClass("on")
            }
        }
    });

    function toggleDt(){
        if ($("#toggle .tg_btn").hasClass("on")){
            // cargo on
            $(".landing.bike").removeClass("on");
            $(".landing.cargo").addClass("on");
            $(".toggle_wrap").addClass("on");
            $(".toggle_wrap .btn_wrap .bike").removeClass("on");
            $(".toggle_wrap .btn_wrap .cargo").addClass("on");
            $(".toggle_wrap a.link").attr("href","cargo_detail.html");
            $(".toggle_wrap.type02 a.link").attr("href","cargo.html");
        } else {
            // bike on
            $(".landing.cargo").removeClass("on");
            $(".landing.bike").addClass("on");
            $(".toggle_wrap").removeClass("on");
            $(".toggle_wrap .btn_wrap .cargo").removeClass("on");
            $(".toggle_wrap .btn_wrap .bike").addClass("on");
            $(".toggle_wrap a.link").attr("href","bike_detail.html");
            $(".toggle_wrap.type02 a.link").attr("href","bike.html");
        }
    }

});
