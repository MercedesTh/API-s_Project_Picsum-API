fetch('https://picsum.photos/v2/list')
    .then(response => response.json())
    .then(json => {

        console.log(json)
        json.forEach(e => {
            document.body.innerHTML += `<figure>
            <img src="${e.download_url}" alt="">
            <figcaption>
            <h1>${e.author}</h1>
            <a href="${e.url}">See more</a>
            </figcaption>
            </figure>
            `
        })

    }
    )

// Die Aktion kommt immer direkt in das zweite .then!!!