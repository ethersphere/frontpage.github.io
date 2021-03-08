

$(document).ready(function () {


  // ==========================================
  // SMOOTH SCROLL MENU & SCROLLSPY OFFSET FIX
  // ==========================================

  $(document).on('click', 'a[class=nav-link]', function (event) {
    var headerheight = $("#header").outerHeight();
    $("body").attr("data-offset", headerheight);

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        // var targetOffset = $target.offset().top - 128;
        var targetOffset = $target.offset().top - headerheight;
        $('html,body').animate({ scrollTop: targetOffset }, 1000);
        // $("#navbarSupportedContent").removeClass("show");
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
          $(".navbar-toggler").click();
        }
        return false;
      }
    }
  });



  // ====================================
  // CHANGE LINK TEXT WHEN CLICKED (SHOW MORE/SHOW LESS)
  // ====================================

  $("a.more").click(function () {
    var more = $(this).attr("moretext");
    if (typeof more !== typeof undefined && more !== false) {
      // console.log(more); 
      $(this).text(function (i, text) {
        return text === "show less" ? more : "show less";
      })
    }
  });


  // ====================================
  // "WHO" SECTION SLACK REQUEST FORM
  // ====================================

  $(function () {
    // Get the form.
    var form = $('#slackForm');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function (event) {
      // Stop the browser from submitting the form.
      event.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
      })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass('error');
          $(formMessages).addClass('success');

          // Set the message text.
          $(formMessages).text(response);

          // Clear the form.
          $('#requestEmailAddress').val('');
          $('#voucherHandle').val('');

          // Hide the form
          $(form).hide();
        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass('success');
          $(formMessages).addClass('error');

          // Set the message text.
          if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
          }
        });
    });
  });


  // ====================================
  // "WHO" SECTION SLIDER INITIALIZER
  // ====================================

  $('.slider-who').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    centerMode: false,
    autoplaySpeed: 5000,
    mobileFirst: true,
    prevArrow: "<i class='fa fa-angle-left slick-prev' aria-hidden='true'></i>",
    nextArrow: "<i class='fa fa-angle-right slick-next' aria-hidden='true'></i>"
    ,
    responsive: [
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 3
        }
      }
      ,
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3
        }
      }
      ,
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4
        }
      }
      ,
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 6
        }
      }
    ]
  });


  // =======================================
  // "WHEN" SECTION SLIDER *NAV* INITIALIZER
  // =======================================

  $('.slider-when-nav').slick({
    slidesToShow: 5,
    // slidesToScroll: 1,
    asNavFor: '.slider-when',
    dots: false,
    centerMode: false,
    arrows: false,
    focusOnSelect: true
  });


  // ====================================
  // "WHEN" SECTION SLIDER INITIALIZER
  // ====================================

  $('.slider-when').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerMode: false,
    autoplaySpeed: 5000,
    asNavFor: ".slider-when-nav",
    prevArrow: "<i class='fa fa-angle-left slick-prev' aria-hidden='true'></i>",
    nextArrow: "<i class='fa fa-angle-right slick-next' aria-hidden='true'></i>"
  });

  // ====================================
  // "GRANTS" SECTION SLIDER INITIALIZER
  // ====================================

  $('.slider-grants').slick({
    dots: true,
    infinite: true,
    centerMode: false,
    autoplaySpeed: 5000,
    slidesToScroll: 3,
    slidesToShow: 3,
    prevArrow: "<i class='fa fa-angle-left slick-prev' aria-hidden='true'></i>",
    nextArrow: "<i class='fa fa-angle-right slick-next' aria-hidden='true'></i>",
    responsive: [
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ,
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ,
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ,
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });
});

