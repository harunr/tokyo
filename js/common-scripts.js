
(function($){
	$(function(){
        
        // Phone nav click function
        $('#show-nav').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeIn();
        });


        const container = document.body
        const itemsWrapper = document.querySelector('.hover-action-inner');
         const itemsWrapper1 = document.querySelector('#hover-action-inner')

        // Preload images
        const preloadImages = () => {
            return new Promise((resolve, reject) => {
                imagesLoaded(document.querySelectorAll('img'), resolve);
            });
        };
        // And then..
        preloadImages().then(() => {
            // Remove the loader
            document.body.classList.remove('loading');
            const effect = new StretchEffect(container, itemsWrapper)
        });

        // Preload images
        const preloadImages1 = () => {
            return new Promise((resolve, reject) => {
                imagesLoaded(document.querySelectorAll('img'), resolve);
            });
        };
        // And then..
        preloadImages1().then(() => {
            // Remove the loader
            document.body.classList.remove('loading');
            const effect = new StretchEffect(container, itemsWrapper1)
        });
        
        
        
		
	})// End ready function.
    
    
    $(window).on('load', function(){
        
         
         //Place as last thing before the closing </body> tag
        if(location.search.indexOf('reloaded=yes') < 0){
            var hash = window.location.hash;
            var loc = window.location.href.replace(hash, '');
            loc += (loc.indexOf('?') < 0? '?' : '&') + 'reloaded=yes';
            // SET THE ONE TIME AUTOMATIC PAGE RELOAD TIME TO 5000 MILISECONDS (5 SECONDS):
            setTimeout(function(){window.location.href = loc + hash;}, 1);
        }
        var uri = window.location.toString();

        if (uri.indexOf("?") > 0) {

            var clean_uri = uri.substring(0, uri.indexOf("?"));

            window.history.replaceState({}, document.title, clean_uri);

        }
        $('.preloader-wrap').delay(50).fadeOut(400);
    })
   


})(jQuery)

