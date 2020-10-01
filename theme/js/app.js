//Stop the form from sending the contents if they don't follow certain standards
$(document).ready(function () {
  $('.read-more-button').click(function (event) {


    let email = $('.email-input').val();
    let message = $('.message-input').val();
    let statusElmEmail = $('.status-email .error-para');
    let statusElmMessage = $('.status-message .error-para');


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
  let statusElmMessage = $('.status-message .error-para');
  let statusElmEmail = $('.status-email .error-para');
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

  //Every method here will have a comment. Here will run all bits of code that relate to things after they are loaded.
  // GSAP Code for animating posts and contents in sidebar
  let tl = gsap.timeline({
    defaults: {
      duration: 1
    }
  });

  tl.from(".post", {
    delay: .15,
    x: "-=50",
    stagger: .3,
    opacity: 0
  });

  //Zoom on Images
  mediumZoom('[zoom]')
  //form
  // get the form elements defined in your form HTML above

  let form = document.getElementById("contact-form");
  let button = document.getElementById("contact-button");
  let statusSuccess = $('.status-message .success-para');
  let statusError = $('.status-message .error-para');
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
      let data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    })
  };
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  let xhr = new XMLHttpRequest();
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