/* const tree = new RBush(); */

function gaussianRand() {
    let rand = 0;
    for (let i = 0; i < 10; i += 1) {
        rand += Math.random();
    }
    return (rand / 10) - 0.5;
}

let X = [],
    Y = [],
    n = 10000000,
    i;

for (i = 0; i < n; i += 1) {
    X.push(gaussianRand());
    Y.push(gaussianRand());
}

let data = [{
    type: "scattergl",
    mode: "markers",
    marker: {
        color: 'rgb(12, 26, 199)',
        line: {
            width: 1,
            color: 'rgb(0,0,0)'
        }
    },
    x: X,
    y: Y
}]

Plotly.newPlot('content', data)

