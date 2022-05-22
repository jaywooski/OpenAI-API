import { Configuration, OpenAIApi } from "openai";

const responseArea = document.querySelector('#prompt-area')
const submitBtn = document.querySelector('#text-button');
const formInput = document.querySelector('.form-input');

// apiKey
const apiKey = process.env.OPENAI_API_KEY;

function buttonHandler(e) {
    e.preventDefault();
    var content = formInput.value;
    console.log(content);
    formInput.value = '';
    
}

function questionAnswerHandler(question) {
    
    // apiURL
    const apiURL =     

}

submitBtn.addEventListener('click', buttonHandler);