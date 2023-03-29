const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: 'your-openai-api-key',
});
const openai = new OpenAIApi(configuration);

async function start() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "write a code with O(n) time-complexity for fibbonacci series",
    temperature: 0,
    max_tokens: 1000,
  });
  
  console.log(response.data.choices[0].text)

}

start()

