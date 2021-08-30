const arr = [
    "https://i1.wp.com/www.lightake.com/wp-content/uploads/2021/08/1fa46a14-289d-4d58-98bc-d1e4bd10a8ce.jpg?fit=1100%2C1100&ssl=1",
    "https://i2.wp.com/www.lightake.com/wp-content/uploads/2021/08/11e6e7ff-45f1-470e-a8c3-1d2efb9844cf.jpg?fit=1100%2C1100&ssl=1",
    "https://i2.wp.com/www.lightake.com/wp-content/uploads/2021/08/91949222-008d-4f0e-bf76-28596ed63a71.jpg?fit=1100%2C1100&ssl=1",
    "https://i0.wp.com/www.lightake.com/wp-content/uploads/2021/08/8e996405-ce6a-4efe-a628-ec38f3b19b82.jpg?fit=1100%2C1100&ssl=1",
    "https://i2.wp.com/www.lightake.com/wp-content/uploads/2021/08/6e19666b-b9a4-4b6a-85b7-acf1be57df76.jpg?fit=1100%2C1100&ssl=1",
    "https://i0.wp.com/www.lightake.com/wp-content/uploads/2021/08/0f1c75a7-a4d2-4442-be24-e5501fe318aa.jpg?fit=1100%2C1100&ssl=1"
];

if (localStorage.getItem('bag') == null) localStorage.setItem('bag', JSON.stringify(arr));

function slideShow() {
    var arr = JSON.parse(localStorage.getItem('bag'));

    var left = document.getElementById('left');
    var right = document.getElementById('right');

    var slider = document.getElementById('slider');

    var div = document.getElementById('verticalSlider');
    var image1 = document.createElement('img');
    image1.src = arr[0];
    slider.append(image1);
    var i = 1;

    function leftMoveSlider() {
        var arr = JSON.parse(localStorage.getItem('bag'));
        i--;
        if (i == -1) {
            i = arr.length - 1;
        }

        image1.src = arr[i];
        slider.append(image1);
    }


    function rightMoveSlider() {
        var arr = JSON.parse(localStorage.getItem('bag'));
        i++;
        if (i == arr.length) {
            i = 0;
        }

        image1.src = arr[i];
        div.append(image1);
    }

    left.addEventListener('click', leftMoveSlider)
    right.addEventListener('click', rightMoveSlider)
}

slideShow();