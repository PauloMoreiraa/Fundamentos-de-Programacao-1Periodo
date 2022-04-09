function opera(){
    switch(op){
        case '+':
            res = nUm + nDois;
            document.write('A soma é '+res);
            break;
        case '-':
            res = nUm - nDois;
            document.write('A subtração é '+res);
            break;
        case '*':
            res = nUm * nDois;
            document.write('A multiplicação é '+res);
            break;
        case '/':
            res = nUm / nDois;
            document.write('A divisão é '+res);
            break;
        default:
            document.write('operação não reconhecida');
    }
}

function parImpar(){
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

function operacoes(){
    switch (op){
        case 1:
            res = (nUm + nDois)/2
            document.write('A média aritmética entre os valores é de: '+res.toFixed(2));
            break;
        case 2:
            switch(true){
                case (nUm >= nDois):
                    res = nUm - nDois;
                    document.write('A diferença do maior para o menor é de: '+res.toFixed(2));
                    break;  
                case (nDois >= nUm):
                    res = nDois - nUm;
                    document.write('A diferença do maior para o menor é de: '+res.toFixed(2));
                    break;   
                default:
                    document.write('Valor inválido!');
            }
            break;
        case 3:
            res = nUm * nDois;
            document.write('O produto entre os números é: '+res.toFixed(2));
            break;
        case 4:
            res = nUm/nDois
            document.write('A divisão do 1º número pelo 2º número é igual à: '+res.toFixed(2));
            break;
        default:
            document.write('Valor inválido!');
    }
}

function mediapond(){
    med = (nUm*0.2)+(nDois*0.3)+(nTres*0.5);

    switch(true){
        case (med < 50):
            document.write('Insuficiente! <br> Sua média ponderada é de: ' + med);
            break;
        case (med >= 50 && med < 65):
            document.write('Regular! <br> Sua média ponderada é de: ' + med);
            break;
        case (med >= 65 && med < 85):
            document.write('Bom! <br> Sua média ponderada é de: ' + med);
            break;
        case (med > 85 && med < 101):
            document.write('Ótimo! <br> Sua média ponderada é de: ' + med);
            break;
        default:
            document.write('Dados inválidos, digite as notas de 0 a 100');
    }
}

function idade(){
    switch(true){
        case (id >= 5 && id <= 7):
            document.write('Infantil A');
            break;
        case (id >= 8 && id <=10):
            document.write('Infantil B');
            break;
        case (id >= 11 && id <= 13):
            document.write('Juvenil A');
            break;
        case (id >= 14 && id <= 17):
            document.write('Juvenil B');
            break;
        case (id >= 18 && id < 60):
            document.write('Adulto');
            break;
        case (id >= 60):
            document.write('Sênior');
            break;
        default:
            document.write('Idade inválida!')
    }
}

function calculaImc(){
    imc = peso / (alt * alt);

    switch(true){
        case (imc < 20):
            document.write('Abaixo do peso!');
            break;
        case (imc >= 20 && imc <=25):
            document.write('Normal!');
            break;
        case (imc > 25 && imc <= 30):
            document.write('Excesso de peso!');
            break;
        case (imc > 30 && imc <= 35):
            document.write('Obesidade!');
            break;
        case (imc > 35):
            document.write('Obesidade mórbida!');
            break;
        default:
            document.write('Valor Inválido!')
    }
}

function calcSal(){
    switch(true){
        case (sal < 945):
            reaj = (sal *  0.25) + sal;
            document.write('Seu salário sofreu um reajuste de 25%, então ele será R$' + reaj);
            break;
        case (sal >= 945 && sal < 1025):
            reaj = (sal *  0.1) + sal;
            document.write('Seu salário sofreu um reajuste de 10%, então ele será R$' + reaj);
            break;
        case (sal >= 1025):
            reaj = (sal *  0.03) + sal;
            document.write('Seu salário sofreu um reajuste de 3%, então ele será R$' + reaj);
            break;
        default:
            document.write('Valor inválido!');
    }
}