const socket = io()

//Elements
const $messageForm = document.querySelector("#message-form")
const $messageText = document.querySelector("#message-text")
const $messageFormButton = document.querySelector("#message-submit-button")
const $messages = document.querySelector('#messages')

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML

socket.on('message', (msg) => {
    console.log(msg);
    const html = Mustache.render(messageTemplate, {
        message: msg
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    $messageFormButton.setAttribute('disabled', 'disabled');

    //let msg = document.querySelector("input").value;
    let msg = e.target.elements.message.value;
    socket.emit('sendMessage', msg, (aknowledgement) => {
        console.log(aknowledgement);
        $messageFormButton.removeAttribute('disabled');
        $messageText.value = '';
        $messageText.focus();
    });
})