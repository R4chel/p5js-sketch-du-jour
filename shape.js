function Shape({
    center,
    radius,
    color,
}) {
    this.center = center;
    this.radius = radius;
    this.color = color;


    this.draw = function() {
        stroke(toColor(this.color));
        circle(this.center.x, this.center.y, this.radius);
    };

    this.update = function() {};

}

function toColor(x) {
    return color(x.r, x.g, x.b);
}
