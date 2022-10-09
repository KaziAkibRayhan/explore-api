/* fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response))
  .then(json => console.log(json)) */

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}