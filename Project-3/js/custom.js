
    var params = {
        container: document.getElementById('lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: "data/loop.json"
    };

    var anim;

    anim = lottie.loadAnimation(params);
