export const REFRESH_QUESTIONS_REQUEST_ACTION = 'REFRESH_QUESTIONS_REQUEST';
export const REFRESH_QUESTIONS_DONE_ACTION = 'REFRESH_QUESTIONS_DONE';

export const createRefreshQuestionsRequestAction = () => ({
  type: REFRESH_QUESTIONS_REQUEST_ACTION,
});

export const createRefreshQuestionsDoneAction = questions => ({
  type: REFRESH_QUESTIONS_DONE_ACTION,
  questions,
});

export const refreshQuestions = () => {

  return dispatch => {

    dispatch(createRefreshQuestionsRequestAction());
    return fetch('http://localhost:3060/questions')
      .then(res => res.json())
      .then(questions => dispatch(createRefreshQuestionsDoneAction(questions)));

  };

};


export const ADD_QUESTION_REQUEST_ACTION = 'ADD_QUESTION_REQUEST';
export const DELETE_QUESTION_REQUEST_ACTION = 'DELETE_QUESTION_REQUEST';

export const createAddQuestionRequestAction = question => ({ type: ADD_QUESTION_REQUEST_ACTION, question });

export const addQuestion = question => {

  return dispatch => {

    dispatch(createAddQuestionRequestAction(question));
    return fetch('http://localhost:3060/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(question),
    })
      .then(() => dispatch(refreshQuestions()));

  };

};


export const createDeleteQuestionRequestAction = questionId => ({ type: DELETE_QUESTION_REQUEST_ACTION, questionId });

export const deleteQuestion = questionId => {

  return dispatch => {

    dispatch(createDeleteQuestionRequestAction(questionId));
    return fetch('http://localhost:3060/questions/' + encodeURIComponent(questionId), {
      method: 'DELETE',
    })
      .then(() => dispatch(refreshQuestions()));

  };
  
};
