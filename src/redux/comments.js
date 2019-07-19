import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments:[], feedback:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {...state, errMess: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_COMMENT:
        var comment = action.payload;
        return { ...state, comments: state.comments.concat(comment)};
    case ActionTypes.DISPLAY_FEEDBACK:
        var feedback = action.payload;
        return { ...state, feedback: state.feedback.concat(feedback)};
    default:
      return state;
  }
};