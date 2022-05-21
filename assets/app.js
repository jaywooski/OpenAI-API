const responseArea = document.querySelector('#prompt-area')
const submitBtn = document.querySelector('#text-button');
const formInput = document.querySelector('.form-input');

function buttonHandler(e) {
    e.preventDefault();
    var content = formInput.value;
    console.log(content);
    formInput.value = '';
    
}

submitBtn.addEventListener('click', buttonHandler);