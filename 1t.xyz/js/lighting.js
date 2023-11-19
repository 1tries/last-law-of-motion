window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

var c = document.getElementById("canv");
var $ = c.getContext("2d");
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;

var lite = (function() {
  function lite(x, y) {
    this.x = x;
    this.y = y;
  }

  lite.prototype.upd = function() {
    this.x -= Math.sin(Math.random()) * 6 - 3;
    this.y -= Math.cos(Math.random()) * 6 - 3;
  };
  return lite;
})();

var strikes = [new lite(w / 2, h / 2)];

var rnd = function(min, max) {
  return Math.random() * (max - min) + min;
}

var draw = function() {
  // Clear the canvas
  $.clearRect(0, 0, w, h);

  $.globalCompositeOperation = 'source-over';
  // Set background color to transparent
  $.fillStyle = 'rgba(0, 0, 0, 0)';
  $.fillRect(0, 0, w, h);

  $.fillStyle = 'hsl(0,0%,0%,0.9)';
  $.lineWidth = rnd(1, 5);
  $.lineCap = 'round';
  $.shadowBlur = 30;
  $.shadowOffsetX = 3;
  $.shadowOffsetY = 3;
  $.shadowColor = 'hsl(280, 58%, 43%)'; 
  $.strokeStyle = 'hsl(280, 58%, 43%)';  // orginal 320, 100%, 70%
  $.globalCompositeOperation = 'lighter';
  $.beginPath();
  $.moveTo(strikes[0].x, strikes[0].y);
  strikes.forEach(function(itm, idx) {
    itm.upd();

    var idx = idx + (Math.floor(Math.random()) * 6 - 3);
    if (0 <= idx && idx < strikes.length) {
      var o = strikes[idx];
      $.lineTo(o.x, o.y);
    }
  });
  $.stroke();
  if (strikes.length > 200) {
    strikes.remove(0, 1);
  }
};

window.addEventListener("mousemove", function(e) {
  if (Math.random() * 100 < 50) {
    var x = e.pageX || e.screenX;
    var y = e.pageY || e.screenY;
    strikes.push(new lite(x, y));
  }
});

window.addEventListener("touchmove", function(e) {
  if (Math.random() * 100 < 50) {
    var x = e.touches[0].pageX || e.touches[0].screenX;
    var y = e.touches[0].pageY || e.touches[0].screenY;
    e.preventDefault();
    strikes.push(new lite(x, y));
  }
});

window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
  $.fillStyle = 'rgba(0, 0, 0, 0)';
  draw();
}, false);

function run() {
  window.requestAnimFrame(run);
  draw();
}
run();
