$(document).ready(function() {
    $('.recipe img').click(function() {
        var ingredients = $(this).attr('alt') + ' Ingredients';
        var ingredientsList = $(this).siblings('p').text();
        $('#ingredients-heading').text(ingredients);
        $('#ingredients-list').html('');
        $.each(ingredientsList.split(', '), function(index, ingredient) {
            $('#ingredients-list').append('<li>' + ingredient + '</li>');
        });
        $('.lightbox').fadeIn();
    });

    $('.lightbox-close').click(function() {
        $('.lightbox').fadeOut();
    });
});