# :green_heart:	FullStackJS com TypeScript, Node e Vue.js

Projeto desenvolvido no curso FullStackJS do [Rodrigo Branas](https://branas.io).
Os contrúdos de estudo, desenvolvidos ao longo das aulas se encontram na pasta [`aulas`](./aulas/) enquanto o projeto final pode ser visualizado na pasta [`projeto`](./projeto/).

## :scroll:	Descrição e requisitos do projeto final

Criar uma ferramenta similar ao Trello, que tenha um quadro com colunas e cartões, permitindo que esses cartões tenham estimativa, com isso podendo calcular a estimativa tanto das colunas quanto do quadro todo e também um front-end que permita utilizando drag-and-drop mudar a ordem das colunas, dos cartões, inserir, editar e deletar tanto colunas quanto cartões.

### Parte :one:

- [x] 1. Deve criar um novo quadro com nome e descrição
- [x] 2. Deve permitir incluir colunas no quadro (por exemplo: Todo, Doing e Done) indicando se ela deve ou não contar o tempo do cartão
- [x] 3. Deve associar cartões em cada uma das colunas contendo o título da tarefa e a estimativa em horas
- [x] 4. Deve ser possível calcular a estimativa total de cada coluna

### Parte :two:

- [x] 1. Crie uma API para fornecer dados do quadro

```
GET /boards # retorna os quadros
GET /boards/id/columns # retorna as colunas do quadro
GET /boards/id/columns/id/cards # retorna os cartões da coluna
```

- [x] 2. Utilize o que aprendemos nos decorators para criar mapear as rotas http e persistir no banco de dados

### Parte :three:

O escopo dessa etapa é:
- [x] 1. Calcular a estimativa total do quadro
- [x] 2. Calcular a estimativa total por coluna

Considerações: Implementar a API e o banco de dados

### Parte :four:

Escopo dessa parte:
- [ ] 1. Salvar quadro
- [ ] 2. Salvar coluna
- [ ] 3. Salvar card
- [ ] 4. Mover um card de coluna
- [ ] 5. Ordenar as colunas
- [ ] 6. Ordenar os cards

### Parte :five:

- [ ] Implemente o front-end para a aplicação de kanban utilizando Vue.js

### Parte :six:

- [ ] Implementar o drag and drop dos cards para movê-los entre colunas e entre os cards.

### Extra :asterisk:

- [ ] Adicionar suporte à migrations para o banco de dados.
- [ ] Adicione validação a nível de API e Banco à todas as entradas de dados.
- [ ] Utilize suas habilidades como dev frontend para melhorar o design da solução implementada no curso;
- [ ] Refatore os códigos CSS aplicando os conceitos da metodologia [BEM](https://getbem.com/introduction)
- [ ] Faça deploy da solução implementada;
