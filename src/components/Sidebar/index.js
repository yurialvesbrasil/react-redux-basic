import React from "react";

//Para buscar informações do redux
import { connect } from 'react-redux';

//Importa as actions
import * as CourseActions from '../../store/actions/course';

import { bindActionCreators } from 'redux';

//stateless component
// dispatch: serve para disparar ações para o redux e essas
// ações vão ser ouvidas por todos os reduxers da aplicação
const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map((module) => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map((lesson) => (
            <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => toggleLesson(module, lesson)}>Selecionar</button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);
const mapStateToProps = state => ({
    modules: state.course.modules
})

const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
