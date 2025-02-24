const d = new Date();


window.addEventListener('load',()=>{
    console.log("Welcome to my website.");
    
    const year = document.getElementById('year');

    year.innerHTML = '<i class="ri-copyright-line"></i>'+ d.getFullYear();
})

tippy('#css', {
    content: 'CSS',
})

tippy('#bootstrap', {
    content: 'Bootstrap',
})

tippy('#vue', {
    content: 'Vue',
})

tippy('#laravel', {
    content: 'Laravel'
})

tippy('#sql', {
    content: 'SQL',
})

window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
        uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
      };
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };
  