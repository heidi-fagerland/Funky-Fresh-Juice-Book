var images = [
  'img/juice1.jpg',
  'img/juice2.jpg',
  'img/juice3.jpg',
  'img/juice4.jpg',
  'img/juice5.jpg',
  'img/juice6.jpg',
  'img/juice7.jpg',
  'img/juice8.jpg',
];
var currentIndex;
var imagesCount = images.length;
var updateState = function (newIndex) {
    currentIndex = newIndex;
    $('.photogallery-picture').attr('src', images[currentIndex]);

    // update nav state
    $('.navdesign').find('li.selected').removeClass('selected');
    $('.navdesign').find('li[data-src="' + currentIndex + '"]').addClass('selected');
};

// build html
var navItemsHtml = '';
for (var i = 0; i < imagesCount; i++) {
    navItemsHtml += ' <li data-src="' + i + '"></li> ';
}
$('.navdesign').html(navItemsHtml);

// init state
updateState(0);

// set events
$('.previous').on('click', function () {
    if (currentIndex > 0) {
        updateState(currentIndex - 1);
    }
});

$('.next').on('click', function () {
    if (currentIndex < imagesCount - 1) {
        updateState(currentIndex + 1);
    }
});

$('.navdesign').find('li').on('click', function () {
    updateState(parseInt($(this).attr('data-src'), 10));
});
