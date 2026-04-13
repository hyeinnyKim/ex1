$(function () {
  let page1 = $(".page1").offset().top;
  console.log(page1);
  let page2 = $(".page2").offset().top;
  console.log(page2);
  let page3 = $(".page3").offset().top;
  console.log(page3);
  let page4 = $(".page4").offset().top;
  console.log(page4);

  $("header li").on("click", function () {
    let i = $(this).index();
    // console.log(i);
    let target = $("section").eq(i).offset().top;
    // console.log(target);
    $("html, body").stop().animate({ scrollTop: target });

    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
  });

  $("#navi li").on("click", function () {
    let i = $(this).index();
    // console.log(i);
    $("section").hide();
    $("section").eq(i).show();
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
  });

  // 꼭 맨위의 offset()top;을 선언해야 실행됨!
  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    console.log(scroll);
    base = -200;
    if (scroll >= page1 + base && scroll < page2 + base) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(0).addClass("on");
      $("section").removeClass("on");
      $(".page1").addClass("on");
    } else if (scroll >= page2 + base && scroll < page3 + base) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(1).addClass("on");
      $("section").removeClass("on");
      $(".page2").addClass("on");
    } else if (scroll >= page3 + base && scroll < page4 + base) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(2).addClass("on");
      $("section").removeClass("on");
      $(".page3").addClass("on");
    } else {
      $("#navi li").removeClass("on");
      $("#navi li").eq(3).addClass("on");
      $("section").removeClass("on");
      $(".page4").addClass("on");
    }
  });
});
