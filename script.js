let a = document.getElementById("interacaoa");

new Sortable(a, {
    group: 'shareda',
    ghostClass: 'myghostclass',
    animation: 250
});
 

let b = document.getElementById("interacaob");

new Sortable(b, {
    ghostClass: 'myghostclass',
    group: 'sharedb',
    animation: 250
});

let c = document.getElementById("interacaoc");

new Sortable(c, {
    group: 'sharedc',
    ghostClass: 'myghostclass',
    animation: 250
});

let d = document.getElementById("interacaod");

new Sortable(d, {
    group: 'sharedd',
    ghostClass: 'myghostclass',
    animation: 250
});

let enviar = document.getElementById("enviar")
enviar.addEventListener("click", enviardiscord);

function enviardiscord(){

    let grupoA = document.querySelectorAll('#interacaoa div.conteudo');
    let grupoB = document.querySelectorAll('#interacaob div.conteudo');
    let grupoC = document.querySelectorAll('#interacaoc div.conteudo');
    let grupoD = document.querySelectorAll('#interacaod div.conteudo');
    let nome = document.getElementById('nome').value;

    var whurl = document.getElementById("urlwebhook").value;
    var msgpronta = {"content":"","username":"PICA LALAU WORLDS 2020", "avatar_url":"https://cdn.discordapp.com/attachments/761361609402220544/761394300327034910/Words_icon.png", "embeds":[
        {
            "color": 15855103,
            "title":"BOLÃO 2020",
            "description":"**"+nome+"**"+
            
            "\n\n"+ "**GRUPO A**" +
            "\n"+ grupoA[0].textContent +
            "\n"+ grupoA[1].textContent +
            "\n"+ grupoA[2].textContent +
            "\n"+ grupoA[3].textContent +
            "\n\n"+ "**GRUPO B**"+
            "\n"+ grupoB[0].textContent +
            "\n"+ grupoB[1].textContent +
            "\n"+ grupoB[2].textContent +
            "\n"+ grupoB[3].textContent +
            "\n\n"+ "**GRUPO C**"+
            "\n"+ grupoC[0].textContent +
            "\n"+ grupoC[1].textContent +
            "\n"+ grupoC[2].textContent +
            "\n"+ grupoC[3].textContent +
            "\n\n"+ "**GRUPO D**"+
            "\n"+ grupoD[0].textContent +
            "\n"+ grupoD[1].textContent +
            "\n"+ grupoD[2].textContent +
            "\n"+ grupoD[3].textContent,
             "thumbnail": {
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/LoL_Worlds_2020_Logo.svg/1200px-LoL_Worlds_2020_Logo.svg.png"
        }
        }]};

  fetch(whurl, 
        {
        "method":"POST", 
        "headers": {"content-type": "application/json"},
        "body": JSON.stringify(msgpronta)})

}