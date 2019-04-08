//1.8 Escreva um programa para um terminal de banco, que recebe um valor inteiro R e determina
//o número de notas de 100, 50, 10, 5 e 1 reais necessárias para pagar a quantia R. Faça de
//forma que o número de notas usado seja o menor possível.
//ttt
const num_notas = valor => {
  let resto = 0;
  let n100 = 0;
  let n50 = 0;
  let n20 = 0;
  let n10 = 0;
  let n5 = 0;
  let n1 = 0;
  let retorno = "";
  let aux = 0;

  aux = notas(valor, 100);
  resto = aux[1];
  n100 = aux[0];
  retorno += `Notas de 100:${n100} , `;

  if (resto === 0) return retorno;
  else {
    aux = notas(resto, 50);
    resto = aux[1];
    n50 = aux[0];
    retorno += `Notas de 50:${n50} , `;

    if (resto === 0) return retorno;
    else {
      aux = notas(resto, 20);
      resto = aux[1];
      n20 = aux[0];
      retorno += `Notas de 20:${n20} , `;

      if (resto === 0) return retorno;
      else {
        aux = notas(resto, 10);
        resto = aux[1];
        n10 = aux[0];
        retorno += `Notas de 10:${n10} , `;
        if (resto === 0) return retorno;
        else {
          aux = notas(resto, 5);
          resto = aux[1];
          n5 = aux[0];
          retorno += `Notas de 5:${n5} , `;

          if (resto === 0) return retorno;
          else {
            aux = notas(resto, 1);
            resto = aux[1];
            n1 = aux[0];
            retorno += `Notas de 1:${n1} , `;
          }
        }
      }
    }
  }

  return retorno;
};

const notas = (valor, tipo) => {
  let ret = [];
  if (valor / tipo >= 1) {
    ret.push(Math.floor(valor / tipo));

    ret.push((resto = valor % tipo));
  } else {
    ret.push(0);
    ret.push(valor);
  }
  return ret;
};

let cal_notas = num_notas(798);
console.log(cal_notas);

//5.27 Escreva um programa que recebe um vetor de números inteiros e verica se algum número
//que está no vetor é a soma de outros dois números do vetor. Como seu programa se comporta
//se um dos elementos do vetor for zero?

const ésoma = array2 => {
  return array2.map((target, i1) =>
    array2.filter((e, i) =>
      array2.find((e2, i2) => e + e2 === target && i != i2 && i != i1)
    )
  );
};
let array2 = [10, 2, 5, 20, 18, 25, 9, 15, 21, 3];
let cal_soma = ésoma(array2);
console.log(cal_soma);

///5.28 Escreva o algoritmo que recebe duas palavras a e b e dá um destes três diagnósticos:
//(a) as palavras a e b são iguais
//(b) as palavras a e b tem o mesmo tamanho, mas alguns caracteres são diferentes (dizer
//quantos)
//(c) a palavra a inclui a palavra b (dizer quantas vezes)
//(d) a palavra b inclui a palavra a (dizer quantas vezes)

//5.29 Escreva um algoritmo que recebe 30 palavras e em seguida imprime as palavras fazendo-as
//caber em linhas de 80 caracteres, indo até a margem direita. Seu algoritmo deve escolher
//que palavras carão em que linhas
