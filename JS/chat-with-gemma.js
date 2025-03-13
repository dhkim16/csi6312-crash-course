"use strict"

function sendMessage() {
    // Get the message from the input
    const chatInput = document.getElementById("chat-input");
    const message = chatInput.value;

    // Reset the input field and disable it along with the button.
    chatInput.value = "";
    chatInput.disabled = true;
    const sendButton = document.getElementById("send-button");
    sendButton.disabled = true;


    // Add the message to the chat history.
    const chatHistory = document.getElementById("chat-history");
    const newMessage = document.createElement("p");
    newMessage.textContent = `You: ${message}`;
    chatHistory.appendChild(newMessage);

    // Wait for a response from ChatGPT.
    receiveMessage(message);
}


function receiveMessage(message) {
    const response = fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gemma3:4b',
          prompt: message,
          stream: false      // set to true for streaming responses (requires additional handling)
        })
    });

    console.log(response); // Prints a promise!

    // const data = response.json() includes the json format
    // console.log(data); // Prints a promise!
    // const gemmaResponse = data.response; // if everything goes right...

    // // Add the response to the chat history.
    // const chatHistory = document.getElementById("chat-history");
    // const newMessage = document.createElement("p");
    // newMessage.textContent = `Gemma: ${gemmaResponse}`;
    // chatHistory.appendChild(newMessage);

    // // Re-enable the input field and the button
    // const chatInput = document.getElementById("chat-input");
    // chatInput.disabled = false;
    // const sendButton = document.getElementById("send-button");
    // sendButton.disabled = false;
}
