

$("#hands-image").ready(function () {
    var imageWidth = $("#hands-image").width();
    var imageHeigth = imageWidth * 0.43;
    var windoWidth = $(window).width();
    var polygonSides = 6;
    //Set background particles size
    $("#particles-js").width(imageWidth - imageWidth * 0.2);
    $("#particles-js").height(imageHeigth - imageHeigth * 0.2);

    //Set Front layer particles size
    $("#particles2-js").width(imageWidth - imageWidth * 0.3);
    $("#particles2-js").height(imageHeigth - imageHeigth * 0.3);

    var backgroundImgConfig = {
        "particles":
        {
            "number":
            {
                "value": Math.ceil(  Math.pow($(window).width(), Math.log(250) / Math.log($(window).width()) ) ),
                "density":
                {
                    "enable": true,
                    "value_area": imageWidth
                }
            },
            "color":
            {
                "value": "#9e9e9e"
            },
            "shape":
            {
                "type": "polygon",
                "stroke":
                {
                    "width": 0,
                    "color": "#adadad"
                },
                "polygon":
                {
                    "nb_sides": polygonSides
                },
                "image":
                {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity":
            {
                "value": 0.5,
                "random": false,
                "anim":
                {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size":
            {
                "value": 1.5,
                "random": true,
                "anim":
                {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked":
            {
                "enable": true,
                "distance": Math.ceil( Math.pow(imageWidth, Math.log(50) / Math.log( imageWidth ) ) ),
                "color": "#9e9e9e",
                "opacity": 1,
                "width":  0.5
            },
            "move":
            {
                "enable": true,
                "speed": Math.ceil( Math.pow(imageWidth, Math.log(2) / Math.log( imageWidth ) ) ),
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract":
                {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity":
        {
            "detect_on": "canvas",
            "events":
            {
                "onhover":
                {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick":
                {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes":
            {
                "grab":
                {
                    "distance": 400,
                    "line_linked":
                    {
                        "opacity": 1
                    }
                },
                "bubble":
                {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse":
                {
                    "distance": 200,
                    "duration": 0.4
                },
                "push":
                {
                    "particles_nb": 4
                },
                "remove":
                {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }

    var frontLayerConfig = {
        "particles":
        {
            "number":
            {
                "value": Math.ceil( windoWidth * 0.015 ),
                "density":
                {
                    "enable": true,
                    "value_area": imageWidth
                }
            },
            "color":
            {
                "value": "#9e9e9e"
            },
            "shape":
            {
                "type": "polygon",
                "stroke":
                {
                    "width": 0,
                    "color": "#adadad"
                },
                "polygon":
                {
                    "nb_sides": polygonSides
                },
                "image":
                {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity":
            {
                "value": 0.5,
                "random": false,
                "anim":
                {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size":
            {
                "value": 2,
                "random": true,
                "anim":
                {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked":
            {
                "enable": false,
                "distance": 40,
                "color": "#9e9e9e",
                "opacity": 0.4,
                "width": 1.5
            },
            "move":
            {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract":
                {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity":
        {
            "detect_on": "canvas",
            "events":
            {
                "onhover":
                {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick":
                {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes":
            {
                "grab":
                {
                    "distance": 400,
                    "line_linked":
                    {
                        "opacity": 1
                    }
                },
                "bubble":
                {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse":
                {
                    "distance": 200,
                    "duration": 0.4
                },
                "push":
                {
                    "particles_nb": 4
                },
                "remove":
                {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }

    var pageLayerParticles = {
        "particles":
        {
            "number":
            {
                "value": windoWidth * 0.03,
                "density":
                {
                    "enable": true,
                    "value_area": $("#outer-particles").width()
                }
            },
            "color":
            {
                "value": "#9e9e9e"
            },
            "shape":
            {
                "type": "polygon",
                "stroke":
                {
                    "width": 0,
                    "color": "#adadad"
                },
                "polygon":
                {
                    "nb_sides": polygonSides
                },
                "image":
                {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity":
            {
                "value": 0.5,
                "random": false,
                "anim":
                {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size":
            {
                "value": 1,
                "random": true,
                "anim":
                {
                    "enable": false,
                    "speed": 160,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked":
            {
                "enable": true,
                "distance":  Math.pow($(window).width(), Math.log(150) / Math.log($(window).width()) ),
                "color": "#9e9e9e",
                "opacity": 0.4,
                "width": 0.3
            },
            "move":
            {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract":
                {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity":
        {
            "detect_on": "canvas",
            "events":
            {
                "onhover":
                {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick":
                {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes":
            {
                "grab":
                {
                    "distance": 400,
                    "line_linked":
                    {
                        "opacity": 1
                    }
                },
                "bubble":
                {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse":
                {
                    "distance": 200,
                    "duration": 0.4
                },
                "push":
                {
                    "particles_nb": 4
                },
                "remove":
                {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }

    //start Background image particles
    particlesJS("particles-js", backgroundImgConfig);
    
    //Start front layer particles
    particlesJS("particles2-js", frontLayerConfig);

    //Page background layer Particles
    particlesJS("outer-particles", pageLayerParticles);
})



