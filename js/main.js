$(document).ready(function() {

    $('#carousel-example-generic').carousel({
        interval: 10000
    });
    
    console.log('hello World');
        
    $('#carousel-example-generic .item').each(function() {
        var next = $(this).next();
        
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    
        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});


