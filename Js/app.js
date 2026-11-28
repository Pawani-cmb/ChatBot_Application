const userInput=document.getElementById("userInput");{
const sendBtn=document.getElementById("sendBtn");
const chatMessages = document.querySelector(".chat-messages");

sendBtn.addEventListener("click",sendMessage);

userInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});

function sendMessage(){
const message = userInput.value.trim();

if(message == ""){
      return;
}

const messageDiv=document.createElement("div");
messageDiv.className ="user-message";

const messageText=document.createElement("p");
messageText.textContent=message;

messageDiv.appendChild(messageText);
chatMessages.appendChild(messageDiv);

userInput.value = "";

getAurexReply(message);
 
}

function getAurexReply(message){

    let reply = "";

    if(message.toLowerCase().includes("hi")){
          reply = "Hello , Welcome to Aurex";
    }else if(message.toLowerCase().includes("Hello")){

        reply= "Hey there! How can I help you today?";
    }
}
