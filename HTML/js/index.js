var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
W = canvas.width = window.innerWidth;
H = canvas.height = window.innerHeight;
gridY = 7, gridX = 7;

type = "ball";

colors = [
    '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
    '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
    '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
    '#FF5722'
];

var message = document.getElementById('message'),
    gravity = document.getElementById('gra'),
    duration = document.getElementById('dur'),
    speed = document.getElementById('speed'),
    radius = document.getElementById('rad'),
    resolution = document.getElementById('res');

graVal = parseFloat(gravity.value);
durVal = parseFloat(duration.value);
spdVal = parseFloat(speed.value);
radVal = parseFloat(radius.value);
resVal = parseFloat(resolution.value);

var word = new Shape(W / 2, H / 2, message.value);
word.getValue();

function change() {
    context.clearRect(0, 0, W, H);
    gridX = parseFloat(resolution.value);
    gridY = parseFloat(resolution.value);
    const resolutionPercent = parseFloat(((gridX - 3) / 17), 2) * 100
    resolution.style.background = `linear-gradient(to right, #ffa200, white ${resolutionPercent}%, white)`
    word.placement = [];
    word.text = message.value;
    word.getValue();
}

function changeV() {
    graVal = parseFloat(gravity.value);
    durVal = parseFloat(duration.value);
    spdVal = parseFloat(speed.value);
    radVal = parseFloat(radius.value);

    const gravityPercent = parseFloat((graVal + 1) / 2, 2) * 100
    const durationPercent = parseFloat(durVal, 2) * 100
    const speedPercent = parseFloat((spdVal / 5), 2) * 100
    const radiusPercent = parseFloat((radVal / 20), 2) * 100
    gravity.style.backgroundSize = `${gravityPercent}%, 100%`
    duration.style.backgroundSize = `${durationPercent}%, 100%`
    speed.style.background = `linear-gradient(to right, #ffa200, white ${speedPercent}%, white`
    radius.style.background = `linear-gradient(to right, #ffa200, white ${radiusPercent}%, white)`
};


(function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas);
    context.clearRect(0, 0, W, H);

    for (var i = 0; i < word.placement.length; i++) {
        word.placement[i].update();
    }
}())

//resize
function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize, false);