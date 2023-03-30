$(function(){
  

  /**
   * @헤더의gnb메뉴글자스플릿
   */
  const headTxt = new SplitType('.header .group-header .gnb .menu-list .menu-item a', { types: 'words, chars', });


  /**
   * @헤더의gnb메뉴글자효과투명도조절
   */
  $('.header .menu-item a').hover(function(){
      gsap.to($(this).find('.char'),{
        opacity:0,
        stagger:0.1,
      })
  },function(){
    gsap.to($(this).find('.char'),{
      opacity:1,
      stagger:0.1,
    })
  })


      /**
       * @스크롤하면헤더고정
       */
      $(window).trigger('scroll');
      $(window).scroll(function(){
        curr = $(this).scrollTop();
        if(curr > 0){
          $('.header').addClass('fix')
        }else {
          $('.header').removeClass('fix')
        }
      })
      

      /**
       * @스크롤하면메인이어두어지는효과
       */
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.overlay', {
        scrollTrigger: {
          trigger: ".sc-main",
          start: "0% 0%",
          end:"100% 0%",
          scrub: 1,
        },
        opacity:1,
        
      });

      /**
       * @메인의텍스트좌우퍼짐
       */
      const textList = document.querySelectorAll('.sc-main .row p');
      textList.forEach(element => {
        xVal = element.dataset.x;
        gsap.to(element, {
            scrollTrigger: {
              trigger: ".sc-main",
              start: "0% 0%",
              end:"100% 0%",
              scrub: 1,
            },
            xPercent: xVal
          });
      });
      

      /**
       * @메인슬라이드스와이퍼
       */
      var swiper = new Swiper(".main-slide", {
        loop:true,
        autoplay: {
          delay: 4000,
          duration: 1,
          disableOnInteraction: false,
        },
        effect: "fade",
      });

      /**
       * @메인슬라이드배경처리
       */
      bgLine = gsap.timeline({ })
      bgLine
      .set('.sc-main .bg',{bottom:0,top:'auto'})
      .to('.sc-main .bg',0.7,{ delay:2,height:'100%', stagger:{ from:"random", amount:0.2 } }) 
      .to('.sc-main .bg',0.3,{ delay:1, height:'0', bottom:'auto', top:0, stagger:{ from:"random", amount:0.2 }, })
      bgLine.repeat(-1);





      /**
       * @텍스트좌우퍼지는코드
       */
      const textList2 = document.querySelectorAll('.sc-intro .item');
      textList2.forEach(element => {
        xVal = element.dataset.x;
        gsap.to(element, {
            scrollTrigger: {
              trigger: ".sc-intro .group-flex",
              start: "0% 50%",
              end:"0% 30%",
              scrub: 1,
              // markers:true,  
            },
            xPercent: xVal,
          })
      });


      /**
       * @도형움직이는코드
       */
      gsap.set('.shape1',{
        'position':'absolute',
        bottom:0,
      })
      
      const shapeMotion1 = gsap.timeline({})
      shapeMotion1
      .to('.shape1',{delay:1,height:'0%',
      onComplete:function(){
        gsap.set('.shape1',{
          bottom:'auto',
          top: 'auto'
        })
      }
      })
      .to('.shape1',{height:'100%',
      onComplete:function(){
        gsap.set('.shape1',{
          bottom:0,
          top: 'auto'
        })
        }
      })
      .to('.shape1', {bottom: 0})
      .to('.shape1', {height: '30%', bottom: 0,
      onComplete:function(){
        gsap.set('.shape1',{
          bottom:0
        })
        }
      })
      .to('.shape1',{height:'30%',bottom:0})
      .addLabel('1')
      .to('.shape2',{xPercent:100},'a')
      .to('.shape3',{xPercent:-100},'a')
      .to('.shape3',{yPercent:-100},'b')
      .to('.shape2',{yPercent:100},'b')
      .to('.shape4',1,{delay:-0.1,y:'-80%',scrub:1})
      .to('.shape5',1,{delay:-0.8,y:'-80%',scrub:1})
      .to('.shape4',1.5,{delay:-0.1,y:0,scrub:1})
      .to('.shape5',1.5,{delay:-0.8,y:0,scrub:1})
      .to('.rotatebox',1,{scaleX: 0.6})
      .to('.rotatebox',1,{rotate: 720, scaleX: 0.1})
      .to('.rotatebox',1,{scaleX: 1, scalseY: 1})

      shapeMotion1.repeat(-1)



      /**
       * @텍스트레일
       */
      gsap.to('.sc-project .marquee-area .text',10,{
        xPercent:-100,
        repeat:-1,
        ease:'none'
      })

      /**
       * @y축으로배경입히는코드
       */
      const barList = document.querySelectorAll('.bar-motion .bg');
      barList.forEach(element => {
        yVal = element.dataset.y;
        gsap.from(element,{
            scrollTrigger: {
              trigger: ".bar-motion",
              start: "0% 80%",
              end:"100% 70%",
              scrub: 1,
              // markers:true,
            },
            yPercent:yVal,
          });
      });


      /**
       * @프로젝트리스트마우스오버
       */
      $('.sc-project .project-item .simple').mouseleave(function(e){
        $('.sc-project .project-item .simple').addClass('top')
      })
      $('.sc-project .project-item .simple').mousemove(function(e){
        centerPos = $(this).outerHeight()/2;
        console.log();
        if(centerPos < e.offsetY){
          $(this).addClass('bottom');
        }
      })

      /**
       * @리스트토글버튼
       */
      $('.project-item').click(function(e){
        e.preventDefault();
        $(this).children('.detail').toggleClass('active');
        $(this).siblings('.detail').stop().slideToggle();
      })

    /**
     * @수직형스와이퍼
     */
    var verticalSwiper = new Swiper(".swiper.verticalSwiper", {
      direction: "vertical",
      simulateTouch:false,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    /**
     * @텍스트스와이퍼
     */
    var textSwiper = new Swiper(".swiper.textSwiper", {
      direction: "vertical",
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    var projectSwiper = new Swiper(".swiper.project", {
      loop:true,
      autoplay: {
        delay: 4000,
        duration: 1,
        disableOnInteraction: false,
      },
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
      },
    });

    /**
     * @푸터애니메이션효과
     */
    const contactMove = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-intro",
        start: "20% 50%",
        end:"50% 30%",
        scrub: 1,
        // markers: true,
      },
    })
    contactMove
    .from('.contact .headline-sm',2, { y: 30, opacity: 0 })
    .from('.contact a',1.2, { delay: -0.7, y: 30, opacity: 0 })
    // contactMove.repeat(-1)

    const creditMove = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-intro",
        start: "20% 50%",
        end:"50% 30%",
        scrub: 1,
        // markers: true,
      },
    })
    creditMove
    .from('.credit .headline-sm',2, { y: 30, opacity: 0 })
    .from('.credit ul',1.2, { delay: -0.7, y: 30, opacity: 0})
    // creditMove.repeat(-1)


    const nameMove = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-intro",
        start: "20% 50%",
        end:"50% 30%",
        scrub: 1,
        // markers: true,
      },
    })
    nameMove
    .from('.des',1.2, {y: 20, opacity: 0})
    .from('.becots',1,{ delay: -0.7, y: 20, opacity: 0})

    // nameMove.repeat(-1)


})