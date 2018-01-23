
const store = (function() {
  let videos= [];
  const setVideos = function(videosReceived) {
    console.log('the videos we got',videosReceived);
    console.log('videos before',videos);
    this.videos = videosReceived; 
    console.log('videos after',videos);

  };
  return {
    videos, 
    setVideos
  };

}());  
