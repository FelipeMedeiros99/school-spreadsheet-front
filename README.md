# SCHOOL-SPREADSHEET-FRONTEND

Este é o projeto de uma plataforma que armazena dados de estudantes, guardando o nome, idade e turma. 


## Hospedagem

Levando em consideração que a hospedagem na AWS seria um diferencial, todo o projeto foi hospedado lá na **AWS**, no caso do frontend, foi utilizado o S3 para hospedagem do site estático, através do build gerado. O acesso é feito através de protocolo http. 

> obs: em caso de erro, verifique se o site foi aberto com o protocolo correto: http.
  - [Link do site hospedado](http://school-spreadsheet-front.s3-website-sa-east-1.amazonaws.com/sign-in) 
  
## Funcionalidades

### Responsividade
O projeto foi desenvolvido com um design responsivo, adaptando-se automaticamente a diferentes tamanhos de tela para garantir uma experiência otimizada em qualquer dispositivo.

### Telas
1. Cadastro e login: 
    - Todos os inputs de login possuem validação de dados para minimizar erros no preenchimento. Pop-ups interativos com mensagens personalizadas orientam o usuário sobre possíveis equívocos, garantindo uma experiência mais intuitiva.
    - Foi utilizado o **react-hook-form** para evitar redenrizações desnecessárias, otimizando a experiência de uso do usuário 

2. Home: 
    - Na home, é exibida uma tabela contendo os dados dos estudantes, organizados em ordem alfabética.
    - É possível filtrar os estudantes, através do input de pesquisa, tornando a experiência do usuário mais agradável e a tabela mais eficiente. 
    - Para agilizar a performance, a tabela busca e exibe apenas 10 estudantes por vez, evitndo sobrecarga na requisição e lentidão na resposta. 
    - Na parte inferior, há um índice de pesquisa, onde o usuário pode ir para o final dos dados de forma mais rápida.
    - É possível deletar facilmente qualquer estudante, clicando no ícone da lixeira.
    - Ao clicar em editar, o usuário é direcionado automaticamente para a tela de edição de cadastro. 

3. Criar registro e editar registro
    - Há validações em todos os inputs, impedindo o preenchimento de dados de forma incorreta. 
    - Foi utilizado o **react-hook-form** para evitar redenrizações desnecessárias, otimizando a experiência de uso do usuário




## Bibliotecas e frameworks utilizados: 
- axios
- react-rook-form
- typescript
- react 
- chakra UI
- react-loader-spinner


# INSTALAÇÃO

## Pré-requisitos 

1. Ter o node v22.13.1 ou versão similar instalado 

## Instalação local

1. Clone do repositório: 

  ```bash
  git clone https://github.com/FelipeMedeiros99/school-spreadsheet-front.git
  ```


2. Instale as dependências necessárias:

  ```bash 
  npm install 
  ```

3. Após isso, execute o comando para rodar o site localmente e efetuar os testes:

  ```bash
  npm start
  ```

