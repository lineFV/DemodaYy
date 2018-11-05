# Aula de Introducão - JavaScript

### O vamos aprender?

- Variaveis
``` js
    let nome = 'Diego';
    let idade = 22;
    let peso = 68.5;
    let humano = true;

    let alunos = ['Diego', 'Gabriel', 'Lucas'];

    let aluno = {
    nome: alunos[0],
    idade: idade,
    peso: peso,
    humano: humano
    };

    console.log(alunos[0]);
    console.log(aluno.idade);
```

- Funções Matemáticas

- Funções

- Condicionais
``` js
    // function retornaSexo(sexo){
    //     if(sexo === 'M'){
    //         return 'Masculino';
    //     }else if(sexo === 'F'){
    //         return 'Feminino'
    //     }
    //     else{
    //         return 'Outro';
    //     }
    // }

    function retornaSexo(sexo){
    switch(sexo){
        case 'M':
            return 'Masculino';
        case 'F':
            return 'Feminino';
        default:
            return 'Outro';
    }

        }

    let res = retornaSexo('M');

    console.log(res);
```
- Operadores Lógicos

- Condição Ternária

``` js
    let sexo = 'M';

    let retorno = (sexo === 'M') ? 'Masculino' : 'Feminino';

    console.log(retorno);

```

- Estruturas de repetição

```js
    let num = Number(prompt('Digite um Numero'));

    for(var i = 0; i <= num; i++){
    console.log(i);
    }

    // let j = 0;
    // while(j <= num){
        // console.log(j);
        // j++;
    // }
```

- Intervalo e Timeout

``` js
    function exibeAlgo(){
        console.log('Hello World');
    }

    function exibe(){
        console.log('World');
    }

    function algo(){
        console.log('Hello');
    }

    // Exibe Algo Apenas 1 vez de Inicio;
    setInterval(exibeAlgo(), 1000);
    // Exibe Algo Apenas 1 VEZ Apos o Tempo Determinado;
    setTimeout(exibe, 1000); 
    // Exibe Algo Inumeras Vezes Apos o Tempo Determinado;
    setInterval(algo, 1000);
```

- Exercicio 1

``` js
    // Exercicio 1

    let endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    UF: "SP"
    };

    function mensagem(endereco) {
        return (
            console.log(`O usuario mora em ${endereco.cidade} / ${endereco.UF}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}`)
        );
    }
    console.log(mensagem(endereco));
```
- Exercicio 2

``` js
    let x = Number(prompt('Digite um numero minimo'));
    let y = Number(prompt('Digite um numero maximo'));

    function pares(x, y) {
        for (let i = x; i <= y; i++) {
        if (i % 2 === 0) {
            console.log(i);
            }
        }
    }
  
    pares(x, y);

    //   function impares(x, y) {
    //     for (let i = x; i <= y; i++) {
    //       if (i % 2 === 1) {
    //         console.log(i);
    //       }
    //     }
    //   }
  
    //   impares(x, y);
```

- Exercicio 3

``` js
    let skills = [
    'Javascript',
    'ReactJS',
    'React Native'
    ];

    function habilidade(skills){
        console.log(skills.indexOf("Javascript") !== -1);
    }

    habilidade(skills);
```

- Exercicio 4

```js
    let estudo = Number(prompt('Quantos anos de estudo você possui?'));

    function exp(anos) {
        if (anos <= 1) {
            return "Você é Noob";
        } else if (anos <= 3) {
            return "Você é Pro";
        } else if (anos <= 6) {
            return "Você é um Veterano";
        } else {
            return "VOcê é um Deus";
        }
    }
  
  console.log(exp(estudo));
```

- Exercicio 5
``` js
    let usuarios = [
        {
            nome: 'Diego',
            skills: ['Javascript', 'ReactJS', 'Redux']
        },
        {
            nome: 'Gabriel',
            skills: ['VueJS', 'Ruby on Rails', 'Elixir']
        }
    ];

    function mostrar(usuarios){
        for(usuario of usuarios){
            console.log(`O ${usuario.nome} possui as habilidades: ${usuario.skills.join(", ")}`)   
        }
    }
    console.log(mostrar(usuarios));
```

- Manipulação de DOM

- Requisições assíncronas

- Construindo um app do zero


