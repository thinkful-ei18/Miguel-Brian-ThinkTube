'use strict';

const GenerateListItem = (function() {
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

  const handleSubmitForm = function() {
    $('#search-videos').on('submit', event => {
      event.preventDefault();
      const userSearch = $('#search-term').val();
      $('#search-term').val('');
      api.fetchVideos(userSearch, api.decorateResponse);
    });
  };
  const render = function () {
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