function Shape({
    center,
    radius,
    color,
    numPoints,
    wiggle
}) {
    
    this.center = center;
    this.radius = radius;
    this.color = color;
    this.numPoints = numPoints;
    this.wiggle = wiggle;
    this.z =0;
    this.points = [...Array(this.numPoints)].map((elem, i) =>
        {
            let theta = i * 2 * PI / this.numPoints;
            
            return {r : this.radius, theta : theta, x : this.radius * cos(theta) + center.x, y : this.radius * sin(theta) + center.y}
        });

    this.draw = function() {
        stroke(this.color);
        noFill();
        beginShape();
        for(let i = 0; i < this.numPoints + 3; i++){
            let p = this.points[i%this.numPoints];
            curveVertex(p.x,p.y);
        }
        endShape();
    };

    this.update = function() {
        for(let i = 0; i < this.numPoints; i++){
            let p = this.points[i];
            p.r += map(noise(p.x,p.z, this.z), 0, 1, -this.wiggle, this.wiggle);
            p.x = p.r*cos(p.theta) + center.x;
            p.y = p.r*sin(p.theta) + center.y;
        }
        this.z+=10;
       
    };

}
