const socket = io('https://localhost:3000')
const messageForm = document.getElementById('send-container')
const messageContainer = document.getElementById('message-container')

const messageInput = document.getElementById('message-input')

socket.on('chat-message', data =>{
appendMessage(data)

}
)

messageForm.addEventListener('submit', e => {
e.preventDefault()
const message = messageInput.value
socket.emit('send-chat-message', message)
messageInput.value = ''
})
function appendMessage(message){
const messageElement = document.createElement('div')
messageElement.innerText = message
messageContainer.append(messageElement)
}