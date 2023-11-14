const form = document.querySelector('form');
const input = document.querySelector('input');
const imageContainer = document.getElementById('image-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const prompt = input.value;
  input.value = '';
  generateImage(prompt);
});

async function generateImage(prompt) {
  // /exampleエンドポイントにPOSTリクエストを送る
  const response = await fetch('http://localhost:3000/example', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt })
  });
  // レスポンスのJSONを取得する
  const { message } = await response.json();
  console.log(message);
  imageContainer.innerHTML = `${message}`;
}