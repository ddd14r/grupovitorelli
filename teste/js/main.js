var isMenu = false;
var lupa_clicada = false;
var lupa_src = "";    

$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    infinite: false                  
  });

  $('.carousel_vitrine').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]              
  });

  $('.navbar-toggler').click(function(){
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      if(isMenu == false) {
        isMenu = true;
        $nav.toggleClass('scrolled');
        $("#logo").attr("src", "img/logo2.png");
        $("#icon-lupa").attr("src", "img/icones/search2.png"); 
        $("#icon-user").attr("src", "img/icones/login2.png"); 
        $("#icon-bag").attr("src", "img/icones/cart2.png");
      } else {
        isMenu = false;
        var $nav = $(".fixed-top");
        $("#logo").attr("src", "img/logo.png"); 
        $("#icon-lupa").attr("src", "img/icones/search1.png"); 
        $("#icon-user").attr("src", "img/icones/login1.png"); 
        $("#icon-bag").attr("src", "img/icones/cart1.png");
      }      
  });  

  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    if($(this).scrollTop() > $nav.height() === false){
      $("#logo").attr("src", "img/logo.png"); 
      $("#icon-lupa").attr("src", "img/icones/search1.png"); 
      $("#icon-user").attr("src", "img/icones/login1.png"); 
      $("#icon-bag").attr("src", "img/icones/cart1.png");
    }else{
      $("#logo").attr("src", "img/logo2.png");      
      $("#icon-lupa").attr("src", "img/icones/search2.png"); 
      $("#icon-user").attr("src", "img/icones/login2.png"); 
      $("#icon-bag").attr("src", "img/icones/cart2.png");
    }
  }); 

  $(function () {
    var reference = $('.nav-link');
    var popover = $('.dropdown');
    $('[data-toggle="popover"]').popover();
    $(document).on('click touchend', function(e) {
      var target = $(e.target);
      if(target.is(popover)) return;
      if (!target.is(reference)) {
        reference.popover('hide');
      }
    });         
  })

  $('.produto').mouseover(function () {
        $(this).attr("src", $(this).attr("src").replace('1', '2')); 
  }).mouseout(function () {
        $(this).attr("src", $(this).attr("src").replace('2', '1'));        
  });

  $('.slide_img').mouseover(function () {
        $(this).attr('src', $(this).attr('src').replace('_1', '_2')); 
        $('#btn_'+this.id).css("display", "block");
  }).mouseout(function () {
        $(this).attr('src', $(this).attr('src').replace('_2', '_1'));        
        $('#btn_'+this.id).css("display", "none");
  }); 

  $('#icon-lupa').mouseover(function () {
          lupa_src = $(this).attr('src');
          $(this).attr('src', 'img/icones/search-click.png');
  }).mouseout(function () {
          $(this).attr('src', lupa_src);
  });

});