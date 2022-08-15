function Shape({
    center,
    radius,
    color,
    numPoints,
    noise,
}) {
    
    this.center = center;
    this.radius = radius;
    this.color = color;
    this.noise = noise;
    this.numPoints = numPoints;
    this.offsets = [...Array(this.numPoints)].map(() => random(-noise,noise));

    this.draw = function() {
        stroke(this.color);
        noFill();
        beginShape();
        for(let i = 0; i < this.numPoints + 3; i++){
            let theta = i * 2 * PI / this.numPoints;
            let r = this.radius + this.offsets[i % this.offsets.length];
            let x = r * cos(theta) + center.x;
            let y = r * sin(theta) + center.y;
            curveVertex(x,y);
        }
        endShape();
    };

    this.update = function() {};

}

function toColorRGB(x) {
    return color(x.r, x.g, x.b);
}
