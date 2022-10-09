function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}

function displayUser(data) {
    console.log(data);
}