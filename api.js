'use strict';
/*global fetchVideos */

const api = (function() {
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const API_KEY = 'AIzaSyB6o7FIkL6-u9sc4mC_fHr8hst0gQMPSNE';
  const fetchVideos = function (searchTerm, callback) {
    console.log('fetchVideos');
    const query = {
      part: 'snippet',
      key: API_KEY,
      q: `${searchTerm} in:video`
    };
    $.getJSON(BASE_URL, query, callback);
  };

  // const decorateResponse = function (response) {
  //   const decoratedResponse = response.items.map(youtubeObj => (
  //     {
  //       videoId: youtubeObj.id.videoId,
  //       videoThumbnail: youtubeObj.snippet.thumbnails.default.url,
  //       videoTitle: youtubeObj.snippet.title,
  //     }));
  //   	console.log('our deco response is',decoratedResponse);
  //   	store.setVideos(decoratedResponse);
  //   return decoratedResponse;
  // };
  return {
    fetchVideos
   
  };


}());
