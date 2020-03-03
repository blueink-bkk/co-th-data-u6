
  $(document).ready(function() {
  var showChar = 200;
  var ellipsestext = "...";
  var moretext = "more";
  var lesstext = "less";
  $('.new-card p').each(function() {
    var content = $(this).html();

    if(content.length > showChar) {

      var c = content.substr(0, showChar);
      var h = content.substr(showChar-1, content.length - showChar);

      var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

      $(this).html(html);
    }

  });

  $(".morelink").click(function(){
    if($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
});



jQuery(function () {
    var url = window.location.pathname;

    if (url == '<?= base_url; ?>') {
        jQuery('.navbar-nav li > a[href="/"]').parent().addClass('active');
    } else {
        var urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");
        jQuery('.navbar-nav li > a').each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
                jQuery(this).parent().addClass('active');
            }
        });
    }
});

  


    



