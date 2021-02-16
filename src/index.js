import { Server } from "../Server";
import { chuvasDeMeteoros } from './informacao/colecao';
import { verificaChuvaOcorrendo, verificaChuvaProxima } from './funcoes/funcoes_logicas';
import { imprimeListaChuva } from './funcoes/funcoes_console';

const data = new Date();
 chuvasDeMeteoros.forEach(chuva => {
    if(verificaChuvaOcorrendo(chuva,data)){
        chuva.ocorrendo= true;
        chuva.proxima = false;
    }
    else if(verificaChuvaProxima(chuva,data)){
        chuva.proxima = true;
        chuva.ocorrendo = false;
    }
    else{
        chuva.proxima = false;
        chuva.ocorrendo = false;
    }
});

imprimeListaChuva(chuvasDeMeteoros);

const server = new Server();
server.startup();
