//filename

(function($){
//jQuery start
  var MilkteaList = [
    {
      "title" : "자이언티",
      "img" : "milktea_img_01.png"
    },
    {
      "title" : "시그니처 달고나 밀크티",
      "img" : "milktea_img_02.png"
    },
    {
      "title" : "달고나 밀크티",
      "img" : "milktea_img_03.png"
    },
    {
      "title" : "생딸기 크림 밀크티",
      "img" : "milktea_img_04.png"
    },
    {
      "title" : "그린 밀크티",
      "img" : "milktea_img_05.png"
    },
    {
      "title" : "머랭 밀크티",
      "img" : "milktea_img_06.png"
    },
    {
      "title" : "오리지널 밀크티",
      "img" : "milktea_img_07.png"
    },
    {
      "title" : "딸기밀크티",
      "img" : "milktea_img_08.png"
    },
    {
      "title" : "시그니처 밀크티",
      "img" : "milktea_img_09.png"
    },
    {
      "title" : "조리퐁 밀크티",
      "img" : "milktea_img_10.png"
    },
    {
      "title" : "초콜렛 밀크티",
      "img" : "milktea_img_11.png"
    },
    {
      "title" : "타로 밀크티",
      "img" : "milktea_img_12.png"
    }
  ];

  var productBox = $('#productBox');
  var milkTeaBox = productBox.find('.milktea');
  var milkTeaUl = milkTeaBox.children('ul');

  var url = "../../img/product/milktea_menu/";
  var milkTeaCode = "<li><span></span></li>";
  console.log(url);

  var i =0;
  for(; i<MilkteaList.length; i+=1 ){
    milkTeaUl.append(milkTeaCode);
    var milkLi =  milkTeaUl.find('li');
    milkLi.eq(i).css({backgroundImage:'url('+ url + MilkteaList[i].img +')' })

    var milkSpan = milkLi.children('span');
    milkSpan.eq(i).text(MilkteaList[i].title);
  }

})(jQuery);
//jQuery end
