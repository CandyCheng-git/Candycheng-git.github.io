  $(document).ready(function() {
    // la magia aquí

    // This key only works for this demo on GitHub
    // You must create your own at:
    // https://developers.google.com/youtube/v3/getting-started
    window.api_key = 'AIzaSyDEs-oHsuNvGrjTtDuOat_enXBOsIje024';

    // Start all players on the page with default options
    // $('.RYPP').rypp('AIzaSyA1rpTMrNjth1R6-LfLe0UG8v1946nj3Xw');

    // Start two players by ID, with default settings
    $('#rypp-demo-1').rypp( window.api_key, { debug: true } );

    $('#rypp-demo-2').rypp( window.api_key, { debug: true } );

    // Start two players by ID, with default settings
    $('#rypp-demo-3').rypp( api_key ,{
      update_title_desc: true, // Default false
      autoplay: true,
      autonext: true,
      loop: true,
      mute: false,
      debug: false
    });

    // 100 videos in playlist
    $('#rypp-demo-4').rypp( window.api_key, { debug: true } );

  });
 