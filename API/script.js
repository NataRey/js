function traerCaracteres (done){
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
    .then(response => response.json())
    .then(data =>{
        done(data)
    });

}

traerCaracteres(data => {
    data.results.forEach(personaje =>{
        const article = document.createRange().createContextualFragment(/**nos trae un fracmento del html */
            `<article>
            <div class="image-container">
                <img src="${personaje.image}" alt=" Personaje">
                <h2>${personaje.name}</h2>
                <span>${personaje.gender}</span>
                <p>${personaje.species}</p>
            </div>
        </article>`
        );

        const main = document.querySelector("main");

        main.append(article);
    })
})