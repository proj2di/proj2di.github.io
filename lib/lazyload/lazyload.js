jQuery(function($){
    $("img.lazy").lazyload({
        effect: 'fadeIn',
        effectspeed: 1000,
        threshold: 300
    });
});