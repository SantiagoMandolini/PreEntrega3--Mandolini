const juegos = [ 
    {
        nombre: "halo 5: guardians",
        consola: "xbox",
        año: "2015" ,
        genero: "shooter"
    },
    {
        nombre: "gears 5",
        consola: "xbox",
        año: "2018" ,
        genero: "shooter"
    },
    {
        nombre: "firewall zero hour",
        consola: "playstation",
        año: "2018" ,
        genero: "shooter"
    },
    {
        nombre: "kill zone 2",
        consola: "playstation",
        año: "2009" ,
        genero: "shooter"
    },
    {
        nombre: "goldeneye 007",
        consola: "nintendo",
        año: "1997" ,
        genero: "shooter"
    },
    {
        nombre: "splatoon",
        consola: "nintendo",
        año: "2015" ,
        genero: "shooter"
    },
    {
        nombre: "control",
        consola: "xbox",
        año: "2019",
        genero: "aventura"
    },
    {
        nombre: "sea of thieves",
        consola: "xbox",
        año: "2018",
        genero: "aventura"
    },
    {
        nombre: "god of war",
        consola: "playstation",
        año: "2018",
        genero: "aventura"
    },
    {
        nombre: "the last of us",
        consola: "playstation",
        año: "2013",
        genero: "aventura"
    },
    {
        nombre: "mario oddysey",
        consola: "nintendo",
        año: "2017",
        genero: "aventura"
    },
    {
        nombre: "the legend of zelda breath of the wild",
        consola: "nintendo",
        año: "2017",
        genero: "aventura"
    },
    {
        nombre: "starfield",
        consola: "xbox",
        año: "2023",
        genero: "rpg"
    },
    {
        nombre: "fable 2",
        consola: "xbox",
        año: "2018",
        genero: "rpg"
    },
    {
        nombre: "bloodborne",
        consola: "playstation",
        año: "2015",
        genero: "rpg"
    },
    {
        nombre: "ghost of tsushima",
        consola: "playstation",
        año: "2020",
        genero: "rpg"
    },
    {
        nombre: "xenoblade chronicles",
        consola: "nintendo",
        año: "2010",
        genero: "rpg"
    },
    {
        nombre: "chrono trigger",
        consola: "nintendo",
        año: "1995",
        genero: "rpg"
    },
    {
        nombre: "dead or alive 4",
        consola: "xbox",
        año: "2005",
        genero: "pelea"
    },
    {
        nombre: "phantom breaker",
        consola: "xbox",
        año: "2011",
        genero: "pelea"
    },
    {
        nombre: "soulcalibur: broken destiny",
        consola: "playstation",
        año: "2023",
        genero: "pelea"
    },
    {
        nombre: "jojo's bizarre adventure: eyes of heaven",
        consola: "playstation",
        año: "2015",
        genero: "pelea"
    },
    {
        nombre: "pokken tournament dx",
        consola: "nintendo",
        año: "2017",
        genero: "pelea"
    },
    {
        nombre: "super smash bros  ultimate",
        consola: "nintendo",
        año: "2018",
        genero: "pelea"
    }
];

function mostrarJuegos(juegos) {
    const listaJuegos = document.getElementById('juegos-container');
    listaJuegos.innerHTML = '';

    if (juegos.length === 0) {
        document.getElementById('resultadoTitulo').textContent = 'Sin resultados';
        return;
    }

    document.getElementById('resultadoTitulo').textContent = 'Juegos Disponibles';

    const row = document.createElement('div');
    row.classList.add('row');

    juegos.forEach(juego => {
        const col = document.createElement('div');
        col.classList.add('col-md-4', 'mb-3');

        const card = document.createElement('div');
        card.classList.add('card');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerHTML = `<strong>${juego.nombre}</strong>`;

        const cardInfo = document.createElement('p');
        cardInfo.classList.add('card-text');
        cardInfo.innerHTML = `<strong>Consola:</strong> ${juego.consola} - <strong>Género:</strong> ${juego.genero}`;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardInfo);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
    });

    listaJuegos.appendChild(row);
}

function filtrarJuegos(consola, genero) {
    return juegos.filter(juego => {
        const consolaMatch = juego.consola.toLowerCase().includes(consola.toLowerCase());
        const generoMatch = juego.genero.toLowerCase().includes(genero.toLowerCase());
        return consolaMatch && generoMatch;
    });
}

document.getElementById('filtrar-button').addEventListener('click', () => {
    const consola = document.getElementById('consola-input').value.trim();
    const genero = document.getElementById('genero-input').value.trim();

    const juegosFiltrados = filtrarJuegos(consola, genero);
    mostrarJuegos(juegosFiltrados);
});

document.getElementById('reiniciar-button').addEventListener('click', () => {
    document.getElementById('consola-input').value = '';
    document.getElementById('genero-input').value = '';
    document.getElementById('resultadoTitulo').textContent = '';
    document.getElementById('juegos-container').innerHTML = '';
});
