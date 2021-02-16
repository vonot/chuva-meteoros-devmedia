import {retornaHemisferio, retornaIntensidade, inverteMesAno} from './funcoes_logicas'

export const imprimeListaChuva = (listaChuva) => {
    let ocorrendo = [];
    let proxima = [];
    listaChuva.forEach(chuva => {
        if(chuva.ocorrendo)
            ocorrendo.push(chuva);
        else if(chuva.proxima)
            proxima.push(chuva);
    });
    let informacoes = ['nome do meteoro', '- intensidade', '- hemisfério', '- período'];
    let informacoesFormatadas = '';
    for(let informacao of informacoes){
        informacao = informacao.toUpperCase();
        informacao = informacao.padEnd(30, ' ');
        informacoesFormatadas+= informacao;
    }
    if(ocorrendo.length==0){
        console.log('Não há chuvas de meteoros ocorrendo no momento!')
    } else{
        console.log((ocorrendo.length==1) ? 'Encontramos ' + ocorrendo.length +  ' chuva de meteoro' : 'Encontramos ' + ocorrendo.length + ' chuvas de meteoros ')
        console.log('\n' + informacoesFormatadas);
        imprimeChuva(ocorrendo);
    }
    console.log('\n');

    if(proxima.length==0){
        console.log('Não há chuvas de meteoros próximas!')
    } else{
        console.log((proxima.length==1) ? 'Não perca a próxima chuva de meteoros' : 'Não perca as próximas chuvas de meteoros');
        console.log('\n' + informacoesFormatadas);
        imprimeChuva(proxima);
    }
}

export const imprimeChuva = (chuva) =>{
    chuva.forEach(element => {
    let nome = element.nome;
    let hemisferio = retornaHemisferio(element.declinacao);
    let intensidade = retornaIntensidade(element.intensidade);
    let data = [element.inicio, element.fim];
    let dataFormatada = inverteMesAno(data);
    let informacoesFormatadas = '';
    let informacoes = [nome,'- ' + intensidade,'- ' + hemisferio,'- ' + dataFormatada[0] + ' à ' + dataFormatada[1]];
    for(let informacao of informacoes){
        informacao = informacao.padEnd(30, ' ');
        informacoesFormatadas+= informacao;
    }
    console.log(informacoesFormatadas); 
    });
}