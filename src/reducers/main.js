import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = combineReducers({
  videoList,
  currentVideo
})


// var rootReducer = (state = {}, action) => {
//   return {
//     videoList: videoList(state.videoList, action),
//     currentVideo: currentVideo(state.currentVideo, action)
//   }
// };


//given a state and an action
//we pass it the individual reducer functions
//we need to make sure we pass the correct part of the state
  //to the corresponding reducer. this is so the defaults work
  //correctly for the individual state properties


export default rootReducer;
