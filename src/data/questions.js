const data = [
  {
    question: 'Quais são os benefícios do uso do React?',
    options: [
      'Renderização eficiente',
      'Criação de interfaces gráficas complexas',
      'Suporte nativo a bancos de dados',
      'Substituição completa do JavaScript'
    ],
    answer: 'Renderização eficiente'
  },
  {
    question: 'Como os componentes são organizados no React?',
    options: ['Em um único arquivo gigante', 'Em vários arquivos separados', 'Em uma estrutura hierárquica', 'Em um banco de dados relacional'],
    answer: 'Em uma estrutura hierárquica'
  },
  {
    question: 'O que é o Virtual DOM no React?',
    options: ['Uma versão simulada do navegador', 'Uma biblioteca de animações', 'Uma abstração para atualizar o DOM real', 'Um serviço de hospedagem para aplicativos React'],
    answer: 'Uma abstração para atualizar o DOM real'
  },
  {
    question: 'Como o React lida com as atualizações no estado dos componentes?',
    options: ['Atualizando diretamente o DOM', 'Criando um novo componente a cada atualização', 'Utilizando a reconciliação do Virtual DOM', 'Ignorando as atualizações do estado'],
    answer: 'Utilizando a reconciliação do Virtual DOM'
  },
  {
    question:
      'O React segue um fluxo de dados unidirecional. Isso significa que:',
    options: ['Os dados fluem apenas de componentes filhos para componentes pais', 'Os dados fluem apenas de componentes pais para componentes filhos', 'Os dados fluem em todas as direções entre os componentes', 'Os dados são estáticos e não fluem entre os componentes'],
    answer: 'Os dados fluem apenas de componentes pais para componentes filhos'
  }
];

export default data;
