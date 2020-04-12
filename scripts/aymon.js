var canvas = document.getElementById('granim-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#020024', '#784f5a'],
                ['#784f5a', '#096477'],
                ['#096477', '#020024']
            ]
        }
    }
});

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);