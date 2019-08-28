$( document ).ready(function() {

    // images for the slideshow
    var images = ['assets/logos/babel.svg', 'assets/logos/bootstrap.svg', 'assets/logos/css.svg', 'assets/logos/express.svg', 'assets/logos/heroku.svg', 'assets/logos/html.svg', 'assets/logos/javascript.svg', 'assets/logos/jquery.svg', 'assets/logos/material-ui.svg', 'assets/logos/mongodb.svg', 'assets/logos/mySQL.svg', 'assets/logos/node.svg', 'assets/logos/npm.svg', 'assets/logos/react.svg', 'assets/logos/redux.svg', 'assets/logos/sequelize.svg'];

    // setInterval
    var showImage;

    // track image index
    var index = 0;

    // push image to the logos div in index.html
    function displayImage() {
    $('#logos').html('<img src=' + images[index] + " width='200px'>");
    }

    // increment images index by 1 and loop
    function nextImage() {
        index++;
        setTimeout(displayImage, 2000);
        if (index === images.length) {
            index = 0;
        }
    }

    function startSlideshow() {
        showImage = setInterval(nextImage, 2000);
    }

    displayImage();
    startSlideshow();
});