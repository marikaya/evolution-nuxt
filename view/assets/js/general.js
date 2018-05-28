$(document).ready(function () {
    // Otomatik Tamamlama
    var $input = $('.top-search');
    $input.typeahead({
        source: [
            {id: 'someId1', name: 'alper'},
            {id: 'someId2', name: 'mustafa'},
            {id: 'someId2', name: 'kerem'},
            {id: 'someId2', name: 'can'}
        ],
        autoSelect: true,
        fitToElement: true,
        minLength: 3
    });
    $input.change(function () {
        var current = $input.typeahead('getActive');
        if (current) {
            if (current.name == $input.val()) {
                // Bir şeyler bldum
            } else {
                // Bir şey buldum
            }
        } else {

        }
    });

    //Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    //Tema Değiştirme
    let localTheme = localStorage.getItem('theme');

    if (localTheme){
        if (localTheme === 'white'){
            switchWhiteTheme();
        } else if (localTheme === 'dark'){
            switchDarkTheme();
        }
    }


    $('.theme-link').click(function () {
        if ($(this).data('theme') === 'white'){
            switchWhiteTheme();
            localStorage.setItem('theme', 'white');
        } else {
            switchDarkTheme();
            localStorage.setItem('theme', 'dark');
        }
    });



});