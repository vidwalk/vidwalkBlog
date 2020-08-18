$(document).ready(function () {
    $('.read-more-button').click(function (event) {
        
        
        var email = $('.email-input').val();
        var message = $('.message-input').val();
        var statusElmEmail = $('.status-email .error-para');
        var statusElmMessage = $('.status-message .error-para');
        
        
        statusElmEmail.empty();
        statusElmMessage.empty();

        if(email.length > 3 && email.includes('@') && email.includes('.')){
            /*Remove when ready to send */
            statusElmEmail.append('');
        }
        else{
            event.preventDefault();
            document.getElementById('email-input').classList.add('active')
            statusElmEmail.append('email invalid');
        }
        if(message.length > 5 ){
            /*Remove when ready to send */
            statusElmMessage.append('');
        }
        else{
            event.preventDefault();
            document.getElementById('message-input').classList.add('active')
            statusElmMessage.append('message invalid');
        }
    })
})

$(document).click(function () {
    var statusElmMessage = $('.status-message .error-para');
    var statusElmEmail = $('.status-email .error-para');
    if($('.message-input').is(":focus")){
        
        document.getElementById('message-input').classList.remove('active')
        statusElmMessage.empty()
        statusElmMessage.append('')
    }
    if($('.email-input').is(":focus")){
        document.getElementById('email-input').classList.remove('active')
        statusElmEmail.empty()
        statusElmEmail.append('')
    }
})