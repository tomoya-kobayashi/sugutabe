'use strict';
{
  $(function(){
    // ハンバーガーメニュークリック時，ドロワーメニューを開く
    $('.header__nav--hamburger').on("click", function(){
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
    // scrollToContent('.nav-item--work', '#work');
    // scrollToContent('.nav-item--profile', '#profile');
    // scrollToContent('.nav-item--skill', '#skill');
    // scrollToContent('.nav-item--access', '#access');
    // scrollToContent('.logo', '#fv');
  });
}