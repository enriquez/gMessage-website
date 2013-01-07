$(document).ready(function() {
  $('.answer').hide();
  $('.question').click(function(e) {
    e.preventDefault();
    $(this).next('.answer').slideToggle();
  });

  var hash = location.hash.replace('#', '');
  $('a[name="' + hash + '"]').parent().next('.answer').show();
});
