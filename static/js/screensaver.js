$( document ).ready(function() {

    var mousetimeout;
    var screensaver_active = false;
    var idletime = 10;

    function show_screensaver(){
        console.log("fadein");
        $('#screensaver').fadeIn();
        screensaver_active = true;
        screensaver_animation();
    }

    function stop_screensaver(){
        console.log("fadeout");
        $('#screensaver').fadeOut();
        screensaver_active = false;
    }

    function getRandomColor() {
        console.log("random color");
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }

    $(document).mousemove(function(){
        clearTimeout(mousetimeout);

        if (screensaver_active) {
            stop_screensaver();
        }

        mousetimeout = setTimeout(function(){
            show_screensaver();
        }, 2000 * idletime);
    });

    $(document).keypress(function(e) {
        clearTimeout(mousetimeout);

        if (screensaver_active) {
            stop_screensaver();
        }

        mousetimeout = setTimeout(function(){
            show_screensaver();
        }, 2000 * idletime); 
    });

    function screensaver_animation(){
        if (screensaver_active) {
          console.log("animate");
            $('#screensaver').animate(
                {backgroundColor: getRandomColor()},
                2500,
                screensaver_animation);
        }
    }

});
