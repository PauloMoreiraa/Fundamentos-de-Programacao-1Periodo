function calcularArea(){
    area = (base*altura)/2;
}

function reajustar(){
    reajuste = salarioAtual * 0.128; 
    salarioReajuste = salarioAtual + reajuste;
}

function calcularEnergia(){
    fat = ene*0.41;
    tax= fat*0.03+fat+1.70;
}

function calcularBeneficio(){
    inss = sal * 0.05;
    ir = sal * 0.07;
    aa = sal * 0.08;
    total = sal + inss + ir + aa;

}

function calcularMedia(){
    media = (n1+n2)/2
}

function situacao(){
    if(media >= 7){
        document.write('Você tirou ' + media + '<br>' + 'Aprovado!')
    }else if(media <7){
        document.write('Você tirou ' + media + '<br>' + 'Reprovado!')
    }
}

function situacao2(){
    if(media >= 7){
        document.write('Você tirou ' + media + '<br>' + '<b>Aprovado!</b>')
    }else if(media > 4 && media < 7){
        document.write('Você tirou ' + media + '<br>' + '<b>Em exame!</b>')
    }else{
        document.write('Você tirou ' + media + '<br>' + '<b>Reprovado!</b>')
    }
}

function calculadora(){
    if(op == 1){
        result = n1 + n2;
        document.write('A adição é '+ result);
    } else if(op == 2){
        result = n1 - n2;
        document.write('A subtração é '+ result);
    } else if(op == 3){
        result = n1 * n2;
        document.write('A multiplicação é '+ result);
    } else if(op == 4){
        result = n1 / n2;
        document.write('A divisão é '+ result);
    } else{
        document.write('<b>Digite uma operação válida!</b>')
    }
}