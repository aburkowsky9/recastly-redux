import Redux from 'redux';
//REMINDER TO SET DEFAULT STATE

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return Object.assign({}, state, action.video);
    default:
      return state;
  }
};

// var currentVideoReducer = (state = {currentVideo: null}, action) => {
//   //TODO: define a reducer for the currentVideo field of our state.
//   switch (action.type) {
//     case 'CHANGE_VIDEO':
//       return Object.assign({}, state, action);
//     default:
//       return state;
//   }
// };

export default currentVideoReducer;
