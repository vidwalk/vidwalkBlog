//Stop the form from sending the contents if they don't follow certain standards
$(document).ready(function () {
  $('.read-more-button').click(function (event) {


    var email = $('.email-input').val();
    var message = $('.message-input').val();
    var statusElmEmail = $('.status-email .error-para');
    var statusElmMessage = $('.status-message .error-para');


    statusElmEmail.empty();
    statusElmMessage.empty();

    if (email.length > 3 && email.includes('@') && email.includes('.')) {
      /*Remove when ready to send */
      statusElmEmail.append('');
    } else {
      event.preventDefault();
      document.getElementById('email-input').classList.add('active')
      statusElmEmail.append('email invalid');
    }
    if (message.length > 5) {
      /*Remove when ready to send */
      statusElmMessage.append('');
    } else {
      event.preventDefault();
      document.getElementById('message-input').classList.add('active')
      statusElmMessage.append('message invalid');
    }
  })
})
//Code to reset the error message when we click on the message or email input
$(document).click(function () {
  var statusElmMessage = $('.status-message .error-para');
  var statusElmEmail = $('.status-email .error-para');
  if ($('.message-input').is(":focus")) {

    document.getElementById('message-input').classList.remove('active')
    statusElmMessage.empty()
    statusElmMessage.append('')
  }
  if ($('.email-input').is(":focus")) {
    document.getElementById('email-input').classList.remove('active')
    statusElmEmail.empty()
    statusElmEmail.append('')
  }
})


//Make sure that the form doesn't redirect and confirms when the email got through
//It uses FormSpree
window.addEventListener("DOMContentLoaded", function () {
  //Both the gsap code and the form code is here to make sure they run after everything has loaded
  // GSAP Code for animating posts and contents in sidebar
  var tl = gsap.timeline({
    defaults: {
      duration: 1
    }
  });

  tl.from(".post", {
      x: "-=50",
      stagger: .6,
      opacity: 0
    })
    .from(".sidebar-sticky", {
      y: 50,
      stagger: .6,
      opacity: 0
    }, '-=2');


  // get the form elements defined in your form HTML above

  var form = document.getElementById("contact-form");
  var button = document.getElementById("contact-button");
  var statusSuccess = $('.status-message .success-para');
  var statusError = $('.status-message .error-para');
  statusSuccess.empty();
  statusError.empty();

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = "display: none ";
    statusSuccess.append("Thanks, I will get back at you in max 24hr!");
  }

  function error() {
    statusError.append("Oops! There was a problem.");
  }

  // handle the form submission event
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    })
  };
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}