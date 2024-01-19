//Creazione dell'array di oggi per presentare il team
const teamMembri = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    },
]

const divContainer = document.querySelector(".staff");

// console.log(teamMembri);

//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
function stampaTeam(teamMembri) {
    for (let i = 0; i < teamMembri.length; i++) {
        console.log(`Membro ${i + 1}`)
        for (let key in teamMembri[i]) {
            console.log(`${key}: ${teamMembri[i][key]}`);
        }
    }
}

//Stampare le stesse informazioni su DOM sottoforma di stringhe, per poi inserire il tutto, tramite ciclo, nell'html
function stampaTeamDom(teamMembri) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < teamMembri.length; i++) {
        const divElement = document.createElement("li");
        divElement.classList.add("team-member");
        for (let key in teamMembri[i]) {
            if (key !== "foto") {
                const divInfo = document.createElement("div");
                divInfo.classList.add(key);
                divInfo.append(`${teamMembri[i][key]}`);
                divElement.append(divInfo);
            } else {
                const fotoDiv = document.createElement("img");
                fotoDiv.classList.add(key);
                fotoDiv.src = `./assets/img/${teamMembri[i][key]}`;
                divElement.append(fotoDiv);
            }
        }

        fragment.append(divElement);
    }
    divContainer.append(fragment);
}

console.log(stampaTeam(teamMembri));
stampaTeamDom(teamMembri);
