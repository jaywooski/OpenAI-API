// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion("text-curie-001", {
//   prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA:",
//   temperature: 0,
//   max_tokens: 100,
//   top_p: 1,
//   frequency_penalty: 0.0,
//   presence_penalty: 0.0,
//   stop: ["\n"],
// });

const responseArea = document.querySelector('#prompt-area');
const submitBtn = document.querySelector('#text-button');
const formInput = document.querySelector('.form-input');

// apiKey
const apiKey = process.env.OPENAI_API_KEY;

// apiURL
const apiURL = 'https://api.openai.com/v1/engines/text-curie-001/completions';

function buttonHandler(e) {
    e.preventDefault();
    var content = formInput.value;
    console.log(content);
    formInput.value = '';
    
}

function askQuestion(question) {
    
    question = response;

    fetch(apiURL, 
        // {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
        //     }, body: JSON.stringify(data),
        // }
    )
        .then((data)=> {
            console.log(data);
        })

}

submitBtn.addEventListener('click', question);