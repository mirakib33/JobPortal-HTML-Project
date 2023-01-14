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

// Tabs ends here

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

document.addEventListener("DOMContentLoaded", function(event) {
   
  const showNavbar = (toggleId, navId, divId, headerId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId),
  bodypd = document.getElementById(divId),
  headerpd = document.getElementById(headerId)
  
  // Validate that all variables exist
  if(toggle && nav && bodypd && headerpd){
  toggle.addEventListener('click', ()=>{
  // show navbar
  nav.classList.toggle('show')
  // change icon
  toggle.classList.toggle('bx-x')
  // add padding to body
  bodypd.classList.toggle('body-pd')
  // add padding to header
  headerpd.classList.toggle('body-pd')
  })
  }
  }
  
  showNavbar('header-toggle','nav-bar','body-pd','header')
  
  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll('.nav_link')
  
  function colorLink(){
  if(linkColor){
  linkColor.forEach(l=> l.classList.remove('active'))
  this.classList.add('active')
  }
  }
  linkColor.forEach(l=> l.addEventListener('click', colorLink))
  
   // Your code to run since DOM is loaded and ready
  });