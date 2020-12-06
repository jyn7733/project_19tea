(function($){
    //advantageBox 영역 버튼 클릭시 이미지 나타나게 처리.
    var advantageBox = $('#advantageBox');
    var aCon = advantageBox.find('.advantage_con_area');
    var aImg = aCon.find('.advantage_img');
    var aPlusBtn = aCon.find('button');

    //첫번째 버튼 클릭시 이미지 나타남
    aPlusBtn.eq(0).on('click',function(e){
      e.preventDefault();
      aImg.eq(0).fadeIn();
    })
    //두번째 버튼 클릭시 이미지 나타남
    aPlusBtn.eq(1).on('click',function(e){
      e.preventDefault();
      aImg.eq(1).fadeIn();
    })
    //세번째 버튼 클릭시 이미지 나타남
    aPlusBtn.eq(2).on('click',function(e){
      e.preventDefault();
      aImg.eq(2).fadeIn();
    })

})(jQuery);