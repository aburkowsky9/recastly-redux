import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //get data using search youtube
  //parse data into action creators
  //dispatch? data to store or to rootTeducer
  return (dispatch) => {
    searchYouTube({YOUTUBE_API_KEY, q}, (data) => {
      dispatch(changeVideo(data[0])),
      dispatch(changeVideoList(data.slice(1)))
    });
  }
};


export default handleVideoSearch;


