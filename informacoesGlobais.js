const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
}

document.querySelector('.alert p').innerHTML = `
        Você sabia que o mundo tem <span class="highlight">${dados.populacao_mundial}</span> de pessoas e que aproximadamente <span class="highlight">${dados.usuarios_redes_sociais}</span> estão conectadas em alguma rede social e passam em média <span class="highlight">${dados.tempo_medio}</span> conectadas. Isso significa que aproximadamente <span class="highlight">${dados.percentual_usuarios}</span> de pessoas estão conectadas em alguma rede social.
    `;

vizualizarInformacoesGlobais()