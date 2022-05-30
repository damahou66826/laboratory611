//侧边栏 
var btn = document.getElementById("btn");
var control = document.getElementById("control");
var type = "ball";
var gravity = document.getElementById('gra')
duration = document.getElementById('dur')
speed = document.getElementById('speed')
radius = document.getElementById('rad');
message = document.getElementById('message');

btn.addEventListener('click', function(e) {
    btn.classList.toggle('vertical');
    // 动态添加类名和删除类名
    control.classList.toggle("slide");
})


//粒子选择
var ball = document.getElementById("ball");
var rect = document.getElementById("rect");

function chose(particleName) {
    particleName.addEventListener('click', function(e) {
        this.style.backgroundColor = "orange";
        (particleName == ball ? rect : ball).style.backgroundColor = "rgba(0, 0, 0, 0)";
        type = (type === "ball" ? "rect" : "ball");
        change();

    }, false)
}

chose(ball);
chose(rect);