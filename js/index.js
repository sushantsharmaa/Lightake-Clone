function slideShow() {

    const slider = ["https://i.ibb.co/t2XZgN7/one.png", "https://i.ibb.co/k4jJmnk/two.png", "https://i.ibb.co/NpCbRpw/three.png"];

    if (localStorage.getItem('lightake_slider') == null) localStorage.setItem('lightake_slider', JSON.stringify(slider));

    var slider_1 = document.getElementById('container-four');
    var image = document.createElement('img');

    var i = 0;

    setInterval(function () {
        i = i % JSON.parse(localStorage.getItem('lightake_slider')).length;
        image.src = JSON.parse(localStorage.getItem('lightake_slider'))[i];
        slider_1.append(image);
        i++;
    }, 3000);

}

slideShow();