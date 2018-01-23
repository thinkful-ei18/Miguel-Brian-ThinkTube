'use strict';

/*global videos */

const store = (function() {
  videos: [];
  const setVideos = function(videosReceived) {
    videos = videosReceived;    
  };
  return {
    videos, 
    setVideos
  };

}());  