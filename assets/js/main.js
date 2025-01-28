'use strict';
{
  $(function(){
    // ハンバーガーメニュークリック時，ドロワーメニューを開く
    $('.header__nav-item--hamburger').on("click", function(){
      $('.drawer').addClass('open');
    });
    // ドロワーメニュー内をクリック時，ドロワーメニューを閉じる 
    $('.drawer').on('click', function(){
      $('.drawer').removeClass('open');
    });
  
    
    $(window).on('load scroll', function(){
      // headerの高さを取得
      const headerHeight = $('header').outerHeight();
      // ヘッダーの高さ分だけ，余白を追加
      $('.fv').css('padding-top', headerHeight + 'px');
    })
  

    // 関数：fromをクリック時，toまでスムーズにスクロール
    function scrollToContent(from, to){
      // ヘッダーの高さを取得
      const headerHeight = $('header').outerHeight();
      $(from).on('click', function(){
        const pos = $(to).offset().top;
        $('html, body').animate(
          {
            scrollTop :pos-headerHeight //スクロール先の指定（ヘッダーに被らないようにする）
          },
          300 // 秒数
        );
      });
    }
  
    // ページ内リンクの設定
    scrollToContent('.nav-item--about', '#about');
    scrollToContent('.nav-item--reason', '#reason');
    scrollToContent('.nav-item--voice', '#voice');
    scrollToContent('.nav-item--faq', '#faq');
    scrollToContent('.nav-item--trial', '#trial-1');
    scrollToContent('.logo', '#fv');

    // swiperの設定（fvの画像）
    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      breakpoints: {
        // 768px以上の場合は３枚表示
        768: {
          slidesPerView: 3
        }
      },
      // ページネーション
      pagination: {
        el: ".swiper-pagination"
      },
    
      // ナビボタン
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    // fadeIn
    $(window).on('load scroll', function(){
      const fadeIn = $('.fadeIn');

      fadeIn.each(function(){
        const boxOffset = $(this).offset().top;
        const scrollPos = $(window).scrollTop();
        const wh = $(window).height();

        if(scrollPos > boxOffset - wh + 100){
          $(this).addClass('animated');
        }
      });
    });

  });
}