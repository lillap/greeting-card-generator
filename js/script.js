

const receiverElement = document.getElementById('receiver');
const receiverOutput = document.getElementById('receiverOutput');


const senderElement = document.getElementById('sender');
const senderOutput = document.getElementById('senderOutput');

const messageElement = document.getElementById('message');
const messageOutput = document.getElementById('messageOutput');

const greetingCardDisplay = document.getElementById('greetingCardDisplay');
const backgroundColorElement = document.getElementById('backgroundColor');

const font = document.getElementById('font');

const fontSize = document.getElementById('fontSize');

const fontColor = document.getElementById('fontColor');

const submit = document.getElementById('submitBtn');


submit.addEventListener('click',(event) => {
    event.preventDefault();
    generateCard();
})

function getReceiverDetails(){
    receiverOutput.style.fontFamily = font.value;
    receiverOutput.style.color = fontColor.value;
    receiverOutput.style.fontSize = fontSize.value + "px";
    
    const receiver = receiverElement.value;
    receiverOutput.innerText = "To: " + receiver;
}

function getSenderDetails(){
    senderOutput.style.fontFamily = font.value;
    senderOutput.style.color = fontColor.value;
    senderOutput.style.fontSize = fontSize.value + "px";
    
    const sender = senderElement.value;
    senderOutput.innerText = "From: " + sender;

}

function getMessageDetails(){
    messageOutput.style.fontFamily = font.value;
    messageOutput.style.color = fontColor.value;
    messageOutput.style.fontSize = fontSize.value + "px";
    
    const message = messageElement.value;
    messageOutput.innerText = message; 
}

function getCardStyling() {
    const backgroundColor = backgroundColorElement.value;
    greetingCardDisplay.style.backgroundColor = backgroundColor;

}

function generateCard(){
    getReceiverDetails();
    getSenderDetails();
    getMessageDetails();
    getCardStyling();

}
