function calcSex(){
    switch(sexo){
        case 'm':
        case 'M':
            document.write('Masculino');
            break;
        case 'f':
        case 'F':
            document.write('Feminino');
            break;
        default:
            document.write('Valor não reconhecido');
    }
}

function parImpar(){
    switch(num){
        case '2':
        case '4':
        case '6':
        case '8':
        case '10':
            document.write('Par');
            break;
        case '1':
        case '3':
        case '5':
        case '7':
        case '9':
            document.write('Ímpar');
            break;
        default:
            document.write('Valor não reconhecido, digite de 1 à 10!');

    }
}

function parImparII(){
    var mod;
    mod = num % 2;

    switch(mod){
        case 1: 
            document.write('Ímpar');
            break;

        case 0:
            document.write('Par')
            break;
        
        default:
            document.write('Valor não reconhecido!');
    }
}

function calcmedia(){
    switch (true){
        case (nota >= 0) && (nota < 50):
            document.write('Insuficiente');
            break;
        case (nota < 65) && (nota >= 50):
            document.write('Regular');
            break;
        case (nota >= 65) && (nota < 85):
            document.write('Bom');
            break;
        case (nota >= 85) && (nota <= 100):
            document.write('Ótimo');
            break;
        default:
            document.write('Valor não reconhecido. Digite uma média de 0 à 100');
    }

}