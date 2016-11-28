var announcements = [
    {
      idx: 'newsletters/wrns-2016-12-16.pdf',
      message: 'Click here for our December newsletter.',
      url: 'newsletters/wrns-2016-12-16.pdf',
      icon: 'newspaper-o',
    },
    {
      idx: 'open-enrollment-2016-2017',
      message: 'Enrollment is open for the 2016-2017 school year.  Apply today!',
      url: '#enroll',
      icon: 'paperclip',
    },
    {
      idx: 'new-site',
      message: "Welcome to our new website.  We hope you like it.  Email webmaster@wintonroad.org with any suggestions!",
      url: 'mailto:webmaster@wintonroad.org',
      icon: 'code-fork',
    },
];
$.each(announcements, function(i, a) {
  if (Cookies.get(a.idx) != undefined) return;
  var blurb = '<div class="announcement alert alert-dismissible alert-danger">' +
      '<button type="button" class="close btn btn-sm mybutton_standard" data-dismiss="alert" ' +
        'onclick="javascript:Cookies.set(\'' + a.idx + '\', \'set\', {expires: 365});">' +
        '<span class="fa-stack">' +
            '<i class="fa fa-circle-thin fa-stack-2x"></i> ' +
            '<i class="fa fa-times fa-stack-1x"></i> ' +
        '</span> dismiss' +
      '</button>';
  blurb = blurb + '<p>';
  blurb = blurb + '<a href="' + a.url + '" class="alert-link">';
  if (a.icon != undefined) {
    blurb = blurb +
        '<span class="fa-stack fa-lg">' +
            '<i class="fa fa-circle-thin fa-stack-2x"></i> ' +
            '<i class="fa fa-' + a.icon + ' fa-stack-1x"></i> ' +
        '</span>';
  }
  blurb = blurb + a.message + '</a></p></div>';
  $('.intro-header').prepend(blurb);
});
