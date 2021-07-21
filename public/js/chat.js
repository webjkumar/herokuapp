const socket = io()
socket.on('countUpdated', (count) =>{
    console.log('The count has been updated ' + count)
})

socket.on('message', (msg) => {
    console.log("Message: ", msg);
})

document.querySelector("#increment").addEventListener("click", ()=>{
    socket.emit('increment')
})
document.querySelector("#message-form").addEventListener('submit', (e)=> {
    e.preventDefault();
    //let msg = document.querySelector("input").value;
    let msg = e.target.elements.message.value;
    socket.emit('sendMessage', msg);
})