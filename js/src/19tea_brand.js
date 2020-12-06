(function($){
  //버튼에 따라 introductionBox의 이미지가 fadeout처리
  var introductionBox =$('#introductionBox');
  var introductionArea = introductionBox.children('.introduction_area');
  var iConNextBtn = introductionArea.find('button');
  var introductionCon = introductionArea.children('.introduction_con');
  var iConUl = introductionCon.children('ul');
  var iConLi = iConUl.children('li');
  var selN = 0;
  var timeout = 10;
  
  var selectLiN = function(){ 
    var nn = iConUl.children('.action').index();
    console.log( nn);
    return nn;
  };
  iConLi.hide();
  iConLi.eq(selN).show().addClass('action');
  var permission = true;
  iConNextBtn.on('click',function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      selN += 1;
      if(selN >=  iConLi.length){
        selN = 0;
      }
      
      iConLi.eq(selN).stop().show(function(){
        iConLi.eq( selectLiN() ).stop().fadeOut(function(){
          iConLi.removeClass('action');
          iConLi.eq(selN).addClass('action');
          setTimeout(function(){
            permission = true;
          }, timeout);
        });    
      });
    }
    });
    //advantageBox 영역 버튼 클릭시 이미지 나타나게 처리.
    var advantageBox = $('#advantageBox');
    var aCon = advantageBox.find('.advantage_con_area');
    var aImg = aCon.find('.advantage_img');
    var aPlusBtn = aCon.find('button');

    //첫번째 버튼 클릭시 이미지 나타남
    aPlusBtn.eq(0).on('mouseenter',function(e){
      e.preventDefault();
      aImg.eq(0).fadeIn();
    })
    //두번째 버튼 클릭시 이미지 나타남
    aPlusBtn.eq(1).on('mouseenter',function(e){
      e.preventDefault();
      aImg.eq(1).fadeIn();
    })
    //세번째 버튼 클릭시 이미지 나타남
    aPlusBtn.eq(2).on('mouseenter',function(e){
      e.preventDefault();
      aImg.eq(2).fadeIn();
    })

})(jQuery);