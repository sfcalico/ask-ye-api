const url ="https://api.kanye.rest";

const yeRequest = () => {
    fetch(url).then((response) => {
        response.json().then((data) => {
            const wizdomNugget = document.createElement('p');
            console.log(data);
            wizdomNugget.innerText = data['quote'];
            console.log(wizdomNugget);
            document.getElementById('container').append(wizdomNugget);
        })
    })
}

const button = document.getElementById('btn');
button.addEventListener('click', yeRequest);

// stretch goals: add other API functionality
// const url2 = "https://icanhazdadjoke.com/api";
// const presser = document.getElementById('dad');
// presser.addEventListener('click', dadJokes);

// function dadJokes() {
//     fetch(url2).then((response) => {
//         response.json().then((data) => {
            
//         })
//     })
// }