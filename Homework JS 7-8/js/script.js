$(document).ready(function(){  

// The 1st part - TABS

  // init first tab and header as active
  $("#tabs>ul>li:first-of-type").addClass("active");
  $("#tabs>div:first-of-type").addClass("active");

  // bind onClick handler 
  $('#tabs>ul>li>a').on("click", switchTab);

  function switchTab() { 
    
    $("#tabs .active").removeClass("active");
    
    $(this).parent().addClass("active");
    
    // find div with classname == anchor's href w/o 1st char
    $("."+$(this).attr('href').substr(1)).addClass("active"); 
    
    return false; // stopping propagation & preventing default action
  }

// The 2nd part - FORM.
  
  // bind event handlers
  $('input').hover(showHint, hideHint);
  $('button.help, em.help').on('click', showHelp);
  
  function showHint() {
    $(this).parent().find('.hint').remove(); // clear all prev hints
    $(this).parent().append("<span class='hint'>" 
                + $(this).attr('title') + "</span>");
  };

  function hideHint() {
    $(this).parent().find('.hint').remove();
  };

  function showHelp() {
    $('.form input').each(hideHint);
    $('.form input').each(showHint);    
  };

});

