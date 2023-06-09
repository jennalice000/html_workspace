document.getElementById("myButton").addEventListener("click", function() {
    window.location.href = "../day0609/로그인폼.html"; // Replace with the relative path or URL of the desired HTML page
});

  
  let player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: 'VIDEO_ID', // Replace with the YouTube video ID
    playerVars: {
      autoplay: 1, // Autoplay the video
      controls: 0, // Hide the YouTube player controls
      loop: 1, // Loop the video
      playlist: 'VIDEO_ID' // Required for the loop to work
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo(); // Start playing the video
}