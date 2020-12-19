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
var milkLi;

var TeaBox = productBox.find('.tea');
var TeaUl = TeaBox.children('ul');
var TeaLi;

var moreBtn = productBox.find('button');


var url_01 = "../img/product/milktea_menu/";
var Code = "<li><span></span></li>";

var i=0; //임의의 변수
var myLen = i;//임의의 변수
var myViewLen = 6;//임의의 변수(최대 수를 지정)
var maxLen = MilkteaList.length;

var moreFn = function(j){
  var k
  (j === undefined)? k = myViewLen:k =j;

  myLen = i + k
  for(; i< myLen; i+=1){
    if( i >= maxLen){
      moreBtn.remove();//최대값까지 되면 more버튼을 지워라
      break
    }else{
      milkTeaUl.append(Code);
      milkLi = milkTeaUl.children('li');
      milkLi.eq(i).css({backgroundImage:'url('+ url_01 + MilkteaList[i].img +')'});
      milkLi.find('span').eq(i).text(MilkteaList[i].title);
    }
  }
};
moreFn();

moreBtn.on('click', function(e){
  e.preventDefault();
  moreFn(2);//위에서 만든 함수를 버튼 이벤트에 넣어 기능하게끔 해줌
});

var url_02 = "../img/product/tea_menu/";
var l =0;
for(; l<TeaList.length; l+=1){
  TeaUl.append(Code);
  TeaLi =  TeaUl.find('li');
  TeaLi.eq(l).css({backgroundImage:'url('+ url_02 + TeaList[l].img +')' })

  var teaSpan = TeaLi.children('span');
  teaSpan.eq(l).text(TeaList[l].title);
}

})(jQuery);
//jQuery end
