export const verificaChuvaOcorrendo = (chuva, data) =>{
    let inicioChuvaString = chuva.inicio.split('/');
    let fimChuvaString = chuva.fim.split('/');

    let dataInicioChuva = new Date(data.getFullYear(),parseInt(inicioChuvaString[0]-1),parseInt(inicioChuvaString[1]))
    let dataFimChuva = new Date(data.getFullYear(),parseInt(fimChuvaString[0]-1),parseInt(fimChuvaString[1]))

    if(dataInicioChuva>dataFimChuva){
        if(data>=dataInicioChuva || dataFimChuva>=data)
            return true;
    }
    else if(data>=dataInicioChuva && dataFimChuva>=data)
            return true;
    else return false;
}

export const verificaChuvaProxima = (chuva, data) =>{
    let inicioChuvaString = chuva.inicio.split('/');
    let dataInicioChuva = new Date(data.getFullYear(),parseInt(inicioChuvaString[0]-1),parseInt(inicioChuvaString[1]));
    let diferencaMes = dataInicioChuva.getMonth()-data.getMonth()
    if(dataInicioChuva>data && diferencaMes<=2){
        if(diferencaMes==2){
            if(data.getDate()-dataInicioChuva.getDate()>=0)
            return true;
            else return false;
        }else return true;
    }
    else return false;
}

export const retornaIntensidade = (intensidade) =>{
    if(intensidade.includes('Fraca')){
        return ('1 (fraca)');
    }else if(intensidade.includes('Média')){
        return ('2 (média)');
    }else if(intensidade.includes('Forte')){
        return ('3 (forte)');
    }else return ('(irregular)');
}

export const retornaHemisferio = (declinacao) =>{
    return (declinacao >= 0) ? "Norte" : "Sul";
}

export const inverteMesAno = (data) =>{
    const formato = {
        day: '2-digit',
        month: '2-digit'
    };

    let arrayData = [];
    for(let acontecimento of data){
        let dataConvertida = new Date(acontecimento).toLocaleDateString('native',formato);
        arrayData.push(dataConvertida);
    }
    return arrayData;
}