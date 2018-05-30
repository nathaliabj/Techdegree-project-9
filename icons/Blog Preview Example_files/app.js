// $('#flashMessage').hide();
// $('#flashMessage').slideDown(1000);
// $('#flashMessage').delay(3000);
// $('#flashMessage').slideUp();

// $('#flashMessage')
//     .hide()
//     .slideDown(1000)
//     .delay(3000)
//     .slideUp();
//
// var title = 'My First Blog Post';
// var content = 'This is my <strong>first</strong> post!';
// // previews on the page what the variable title holds
// $('#blogTitlePreview').text(title);
// /* with the html method, we can display html tags like
// the <strong> one and get the desired behaviour,
// if for instance we would have written the text
// method instead, it would have shown the tags on the browser
// and not the behaviour we wanted. */
// $('#blogContentPreview').html(content);

$('#flashMessage')
   .hide()

$('#previewButton').click(function(){
  var title = $('#blogTitleInput').val();
  var content = $('#blogContentInput').val();
  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').html(content);

  $('#flashMessage')
     .slideDown(1000)
     .delay(3000)
     .slideUp();
});
