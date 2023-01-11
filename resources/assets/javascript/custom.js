// Tabs start here

$(document).ready(function(){
    $(".content .tab_content").hide();
    $(".content .tab_content:first-child").show();

    $("ul li").click(function(){
      
      $("ul li").removeClass("active");
      $(this).addClass("active");
      
      var current_tab = $(this).attr("data-list");
      $(".content .tab_content").hide();
      $("."+current_tab).show();
    })
});

// Tabs start here

// accordions start here

$(document).ready(function(){
  var accItem     =$('.accordion-item'),
      accItemTitle=accItem.find('.title'),
      accItemInfo =accItem.find('.info')

      accItemInfo.hide();

      accItem.each(function(){
        if($(this).hasClass('active')){
          $(this).find('.info').show();
          $(this).children('.title').find('.open').hide();
          $(this).children('.title').find('.close').show();
        } else {
          $(this).children('.title').find('.open').show();
          $(this).children('.title').find('.close').hide();
        }
      });

      accItemTitle.on('click', function(){
        $(this).parents('.accordion-item').addClass('active').siblings().removeClass('active').find('.info').slideUp();
        $(this).siblings('.info').slideDown();

        accItem.each(function(){
          if($(this).hasClass('active')){
            $(this).children('.title').find('.open').hide();
            $(this).children('.title').find('.close').show();
          } else {
            $(this).children('.title').find('.open').show();
            $(this).children('.title').find('.close').hide();
          }
        });
      })
});

// accordions end here



$(".container .form-academic").hide();

$(".container .edit-btn").click(function(){
  $(this).hide();
  $(".add-btn").hide();
  $(".container .academic-summary").hide();
  $(".container .form-academic").show();
});

$(".close-btn").click(function(){
  $(this).hide();
  $(".edit-btn").show();
  $(".add-btn").show();
  $(".container .form-academic").hide()
  $(".container .academic-summary").show();
  
});

$(".save-btn").click(function(){
  $(this).hide();
  $(".edit-btn").show();
  $(".add-btn").show();
  $(".container .form-academic").hide()
  $(".container .academic-summary").show();
  
});