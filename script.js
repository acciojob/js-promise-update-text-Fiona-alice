//your JS code here. If required.
function updateOutput() {
  const output = document.getElementById('output');
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });

  promise.then((message) => {
    output.innerText = message;
  });
}