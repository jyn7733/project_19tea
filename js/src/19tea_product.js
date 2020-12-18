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

  var TeaList = [
    {
      "title" : "그린티&연유크림",
      "img" : "tea_img_01.png"
    },
    {
      "title" : "자몽 그린티",
      "img" : "tea_img_02.png"
    },
    {
      "title" : "레몬 그린티",
      "img" : "tea_img_03.png"
    },
    {
      "title" : "수박 그린티",
      "img" : "tea_img_04.png"
    },
    {
      "title" : "유자 그린티",
      "img" : "tea_img_05.png"
    },
    {
      "title" : "오리지널티",
      "img" : "tea_img_06.png"
    }
  ];


  var productBox = $('#productBox');
  var milkTeaBox = productBox.find('.milktea');
  var milkTeaUl = milkTeaBox.children('ul');
  var TeaBox = productBox.find('.tea');
  var TeaUl = TeaBox.children('ul');

  var url_01 = "../../img/product/milktea_menu/";
  var Code = "<li><span></span></li>";

  var i =0;
  for(; i<MilkteaList.length; i+=1 ){
    milkTeaUl.append(Code);
    var milkLi = milkTeaUl.find('li');
    milkLi.eq(i).css({backgroundImage:'url('+ url_01 + MilkteaList[i].img +')' })

    var milkSpan = milkLi.children('span');
    milkSpan.eq(i).text(MilkteaList[i].title);
  }

  var url_02 = "../../img/product/tea_menu/";
  var j=0;
  for(; j<TeaList.length; j+=1){
    TeaUl.append(Code);
    var teaLi =  TeaUl.find('li');
    teaLi.eq(j).css({backgroundImage:'url('+ url_02 + TeaList[j].img +')' })

    var teaSpan = teaLi.children('span');
    teaSpan.eq(j).text(TeaList[j].title);
  }

})(jQuery);
//jQuery end
