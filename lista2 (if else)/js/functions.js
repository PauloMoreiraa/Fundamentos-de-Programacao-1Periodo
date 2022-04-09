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

function calculo(){
    por = sal * 0.3;

    if(em > por){
        document.write('Empréstimo RECUSADO!');
    } else {
        document.write('Empréstimo APROVADO!');
    }
}

function multiplo(){
    if(num % 3 == 0){
        document.write(num +' é multiplo de 3');
    }else{
        document.write(num + ' não é multiplo de 3');
    }
}

function divisivel(){
    if(num == 0){
        document.write(num + ' não é divisível por 3 e nem por 7!');
    } 
    else if(num % 3 == 0 && num % 7 == 0){
        document.write(num + ' é divisível por 3 e 7');
    } else if(num % 3 == 0){
        document.write(num + ' é divisível por 3');
    } else if(num % 7 == 0){
        document.write(num + ' é divisível por 7');
    } else{
        document.write(num + ' não é divisível por 3 e nem por 7!');
    }
}

function maiormenor(){
    if(n1 == n2){
        document.write(n1 + ' é igual a ' + n2);
    } else if(n1 > n2){
        document.write(n1 + ' é maior que ' + n2);
    } else{
        document.write(n2 + ' é maior que ' + n1);
    }
}

  