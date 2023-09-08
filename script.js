const traer = document.getElementById('btnIni');
const Container = document.getElementById('cont');


traer.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            const frase = data.value;

            fetch(frase)
                .then(response => response.json())
                    Container.innerHTML = `<p>${frase}</p>`;
                });
        })
        .catch(error => {
            Container.innerHTML = `<p>Error: ${error.message}</p>`;
        });

