import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      return Object.assign([], state, action.videos)
    default:
      return state;
  }
};

// var videoListReducer = (state = {videoList: []}, action) => {
//   switch (action.type) {
//     case 'CHANGE_VIDEO_LIST':
//       return Object.assign({}, state, action);
//     default:
//       return state;
//   }
// };
export default videoListReducer;
