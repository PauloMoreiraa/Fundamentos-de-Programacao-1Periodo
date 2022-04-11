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

function menor(){
    if(n1 < n2){
        document.write(`${n1} é o menor número informado!`);
    } else if(n1 > n2){
        document.write(`${n2} é o menor número informado!`);
    } else{
        document.write('Os números informados são iguais!')
    }
}

function maiormenor(){
    if(n1 == n2){
        document.write(`${n1} é igual à ${n2}`);;
    } else if(n1 > n2){
        document.write(`${n2}, ${n1}`);
    } else{
        document.write(`${n1}, ${n2}`);
    }
}

function maior(){
    if (n1 >= n2 && n1 >= n3){
        document.write(`${n1} é o maior!`);
    } else if(n2 >= n1 && n2 >= n3){
        document.write(`${n2} é o maior!`); 
    } else if(n3 >= n1 && n3 >= n2){
        document.write(`${n3} é o maior!`); 
    } else{
        document.write(`Dados inválidos!`); 
    }
}

function diferente(){
    if(n2 < n1){
        r = n1 - n2;
        document.write(`A difenrença entre ${n1} e ${n2} é de ${r}`);
    } else{
        alert(`O segundo número PRECISA ser menor do que o primeiro!!!`);

        n1 = Number(prompt('Informe algum número novamente:'));
        n2 = Number(prompt('Informe outro número novamente:'));

        if(n2 < n1){
            r = n1 - n2;
            document.write(`A difenrença entre ${n1} e ${n2} é de ${r}`);
        } else{
            alert(`O segundo número PRECISA ser menor do que o primeiro!!!!!!!!!!!!!!!!!!!!!`);
        }
    }
}

function maiorDiferente(){
    if(n1 == n2){
        alert('Os números PRECISAM ser diferentes!');

        n1 = Number(prompt('Informe algum número novamente:'));
        n2 = Number(prompt('Informe outro número novamente:'));

        if(n1 == n2){
            alert('OS NÚMEROS PRECISAM SER DIFERENTES!!!!')
        }else if(n1 > n2){
            document.write(`${n1} é o maior`);
        } else{
            document.write(`${n2} é o maior`);
        }

    }else if(n1 > n2){
        document.write(`${n1} é o maior`);
    } else{
        document.write(`${n2} é o maior`);
    }
}

function dosa(){
    
}
  