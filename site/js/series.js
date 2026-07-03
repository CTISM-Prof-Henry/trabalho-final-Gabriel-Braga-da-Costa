const series = [

    {
        titulo: "Marianne",

        categorias: [
            "Horror Bruxo",
            "Terror Popular",
            "Drama",
            "Terror Sobrenatural",
        ],

        atores: [
            "Victoire Du Bois",
            "Lucie Boujenah",
            "Tiphaine Daviot"
        ],

        imagem: "css/images/marianne.png",

        sinopse: "Quando uma famosa escritora de horror retorna à sua cidade natal, ela descobre que o espírito maligno que atormenta seus sonhos também está lá na vida real."
    },

    {
        titulo: "A Maldição da Residência Hill",

        categorias: [
            "Mistério",
            "Suspense",
            "Terror Sobrenatural",
            "Drama",
            "Terror Psicológico",
        ],

        atores: [
            "Michiel Huisman",
            "Carla Gugino",
            "Henry Thomas"
        ],

        imagem: "css/images/aMaldicaoHill.png",

        sinopse: "Uma família fraturada confronta memórias assombradas de sua antiga casa e os eventos aterrorizantes que os expulsaram dela."
    },

    {
        titulo: "Missa da Meia-Noite",

        categorias: [
            "Mistério",
            "Suspense",
            "Terror Sobrenatural",
            "Terror Vampírico",
            "Terror Psicológico",
        ],

        atores: [
            "Kate Siegel",
            "Zach Gilford",
            "Kristin Lehman"
        ],

        imagem: "css/images/missaDaNoite.png",

        sinopse: "A história se passa em uma ilha isolada povoada por uma pequena comunidade que já enfrenta algumas cisões internas e se vê ainda mais dividida com a volta de um jovem desafortunado e a chegada de um padre carismático."
    },

    {
        titulo: "Arquivo 81",

        categorias: [
            "Imagens Encontradas de Terror",
            "Suspense",
            "Drama",
            "Mistério",
            "Ficção Científica"
        ],

        atores: [
            "Mamoudou Athie",
            "Dina Shihabi",
            "Evan Jonigkeit"
        ],

        imagem: "css/images/arquivo81.png",

        sinopse: "Um arquivista é contratado para recuperar fitas de vídeo danificadas e fica obcecado em resolver um mistério envolvendo a diretora desaparecida e uma seita demoníaca."

    },

    {
        titulo: "Arquivo X",

        categorias: [
            "Invasão Alienígena",
            "Investigação Policial",
            "Suspense",
            "Mistério",
            "Thriller de Conspiração"
        ],

        atores: [
            "David Duchovny",
            "Gillian Anderson",
            "Mitch Pileggi"
        ],

        imagem: "css/images/arquivoX.png",

        sinopse: "Dois agentes do FBI, Fox Mulder, quem acredita e Dana Scully a cética, investigam o insólito e inexplicável."

    },

    {
        titulo: "Chernobyl",

        categorias: [
            "Desastre",
            "Docudrama",
            "Drama da Época",
            "Épico",
            "História"
        ],

        atores: [
            "Jared Harris",
            "Jessie Buckley",
            "Stellan Skarsgård"
        ],

        imagem: "css/images/chernobyl.png",

        sinopse: "Minissérie em cinco partes que conta a história do pior acidente causado pelo homem na história, o desastre da Usina Nuclear de Chernobyl."

    },

];

const conteudo = document.querySelector(".conteudo");

function mostrarSeries(lista) {

    conteudo.innerHTML = "";

    lista.forEach(serie=>{

        conteudo.innerHTML += `
            
            <article class="itens">
                
                <h2 class="titulo">
                    
                    ${serie.titulo}
                
                </h2>
                
                <ul class="categorias">
                
                    ${serie.categorias.map(categoria=>`<li>${categoria}</li>`).join("")}
                
                </ul>
                
                <div class="conteudo-card">
                
                    <div class="ladoEsquerdo">
                    
                        <img src="${serie.imagem}">
                    
                    </div>
                    
                    <div class="ladoDireito">
                        
                        <h3>
                        
                            Atores:
                                                                                
                                ${serie.atores.map(ator=>`<a href="#">${ator}</a>`).join("")}                                                       
                            
                        </h3>     
                        
                        <hr>
                        
                        <h4>Sinopse</h4>   
                        
                        <p class="sinopse">
                        
                            ${serie.sinopse}
                        
                        </p>    
                    
                    </div>
                
                </div>
            
            </article>
        `;
    });
}

mostrarSeries(series);

const input = document.getElementById("search");

input.addEventListener("input", ()=> {

    const texto = input.value.toLowerCase();

    const resultado = series.filter(serie=>{

        return serie.titulo.toLowerCase().includes(texto);

    });

    mostrarSeries(resultado);

});

