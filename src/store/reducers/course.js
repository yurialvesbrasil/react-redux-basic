const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
      {
        id: 1,
        title: "Iniciando com React",
        lessons: [
          { id: 1, title: "Primeira aula" },
          { id: 2, title: "Segunda aula" },
        ],
      },
      {
        id: 1,
        title: "Aprendendo redux",
        lessons: [
          { id: 1, title: "Primeira aula" },
          { id: 2, title: "Segunda aula" },
        ],
      },
    ],
  };

// state: estado anterior antes da alteração
// action: estado posterior a ação enviada para o redux
export default function course(state = INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_LESSON'){
      //Retorna o estado inicial modificado pela a ação
      return { ...state, activeLesson: action.lesson, activeModule: action.module};
  }
  return state;
}