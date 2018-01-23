'use strict';

const videoList = (function() {
  const generateVideoItemHtml = function (video) {
    return `
			<li>
			<p>${video.videoTitle}</p>
			<a href="https://www.youtube.com/watch?v=${video.videoId}"><img src="${video.videoThumbnail}"></a>
			</li>
    `	;
  };
  const generateVideoItemString = function (videoList) {
    const videosString = videoList.map((item) => generateVideoItemHtml(item));
    return videosString.join('');
  };

    const decorateResponse = function (response) {
    const decoratedResponse = response.items.map(youtubeObj => (
      {
        videoId: youtubeObj.id.videoId,
        videoThumbnail: youtubeObj.snippet.thumbnails.default.url,
        videoTitle: youtubeObj.snippet.title,
      }));
    	console.log('our deco response is',decoratedResponse);
    	
    return decoratedResponse;
  };

  const handleSubmitForm = function() {
    $('#search-videos').on('submit', event => {
      console.log('we got to here');
      event.preventDefault();
      const userSearch = $('#search-term').val();
      $('#search-term').val('');
      api.fetchVideos(userSearch,response=>{
      	const videos= decorateResponse(response);
      	 store.setVideos(videos);
      	 render();
      }
      );
  
    
      console.log('render should have ran');

    });
  };
  const render = function () {
		console.log('inside render',store.videos);
    const videoListString = generateVideoItemString(store.videos);
    $('.results').html(videoListString);
  };

  const bindEventListeners = function() {
    handleSubmitForm();
  };
  

  return {
    bindEventListeners
  };

}());
