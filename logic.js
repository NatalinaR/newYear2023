var d = new Date();
var todaysDate = d.getDate();
// var todaysDate = 2;
var target = $('#calendar .drop .content .day');

target.each(function(){
  var day = $(this).html();
  if (todaysDate == day) {
    $(this).parent().parent().addClass('today');
    if (localStorage.getItem('todayActive') == 'active'){
      $(this).parent().parent().addClass('active');
      localStorage.setItem('className', 'active');
      localStorage.removeItem('todayActive');
    }
  }
  if (todaysDate < day){
    $(this).parent().parent().addClass('future');
  }
  if (todaysDate > day){
    $(this).parent().parent().addClass('past'); 
    if (localStorage.getItem('className') == 'active'){
        $(this).parent().parent().addClass('active');
    }
  }
});

// handle clicks on days

$('.drop').click(function() {
   if ($(this).hasClass('future')) {
    $('#modal').addClass('active');
    $('#modal .wrapper .wrappercontent .box').html("<h2>Who is this handsome naughty boy, who trying see what coming :o</h2> <p>Szabi, it's too early to open this day ^^ <br> Meow</p>");
    
    // localStorage.removeItem('className');
} 
  if ($(this).hasClass('today')) {
    $(this).addClass('active');
    var content = $(this).children('.content').children('.surprise').html();
    $('#modal').addClass('active');
    localStorage.setItem('todayActive', 'active');
    localStorage.setItem('className', 'active');

    $('#modal .wrapper .wrappercontent .box').html('');
    $('#modal .wrapper .wrappercontent .box').html(content);
  } 

  if ($(this).hasClass('past')) {
    $(this).addClass('active');
    var content = $(this).children('.content').children('.surprise').html();
    $('#modal').addClass('active');
    localStorage.setItem('className', 'active');

    $('#modal .wrapper .wrappercontent .box').html('');
    $('#modal .wrapper .wrappercontent .box').html(content);
  } 
});

// close modal

$('.close').click(function(){
  var ultimateParent = $(this).parent().parent().parent();
  ultimateParent.addClass('moveOut');
  setTimeout(function(){
    ultimateParent.removeClass('moveOut').removeClass('active');
  },250);
});

