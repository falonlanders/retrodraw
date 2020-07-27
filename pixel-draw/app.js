function makeGrid() {
    for (let index = 0; index < 128; index = index + 1) {
        let cell = $('<div class="cell"></div>')
        $('.grid').append(cell);
    }
}
makeGrid();

function makePalette() {
    const PALETTE = [
        'red',
        'maroon',
        'orange',
        'yellow',
        'lime',
        'green',
        'aqua',
        'teal',
        'blue',
        'deeppink',
        'pink',
        'purple',
        'white',
        'gray',
        'black'
    ]

    for (let index = 0; index < PALETTE.length; index = index + 1) {
        const nextColor = PALETTE[index];
        let button = $('<button>' + PALETTE[index] + '</button>');
        button.css('backgroundColor', PALETTE[index]);
        button.css("color", PALETTE[index]);
        button.appendTo('.palette');
        $('.palette button').first().addClass('active');

    }
}

makePalette();

function onPaletteClick() {
    $('.palette .active').removeClass('active');
    $(this).addClass('active');
}
$('.palette button').click(onPaletteClick);



function onGridClick() {
    let activeColor = $('.palette .active').css('background-color');
    let cellColor = $(this).css('background-color');

    if (cellColor === activeColor) {
        $(this).css('background-color', '');
    } else {
        $(this).css('background-color', activeColor);
    }
    onGridClick();
}

$('.grid .cell').click(onGridClick);



function onClearClick() {
    $('.grid .cell').css('backgroundColor', '');
}

$('.controls .clear').click(onClearClick);


function onFillAllClick() {
    let activeColor = $('.palette .active').css('backgroundColor');
    $('.cell').css('backgroundColor', activeColor);
}

$('.fill-empty').click(onFillAllClick)





