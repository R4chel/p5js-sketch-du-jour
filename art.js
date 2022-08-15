function Art() {

    this.draw = function() {
        background(this.background);
        for (let i = 0; i < this.shapes.length; i++) {
            this.shapes[i].draw();
        }
    };

    this.update = function() {
        for (let i = 0; i < this.shapes.length; i++) {
            this.shapes[i].update();
        }

    };

    this.addShape = function(point) {
        let center = point === undefined ? {x:width/2, y : height/2} : point;
        let initialRadius = this.maxRadius;
        colorMode(HSB, 100, 100, 100)
        let hue = floor(random(100));
        let sat = floor(random(70,100));
        let bright = 100;
        let r = floor( this.maxRadius );
        while(r > this.minRadius){
            let s =
                new Shape({
                    center: center,
                    color: color(hue, sat, bright),
                    radius : r, 
                    numPoints : this.numPoints,
                    wiggle : this.noise,
                });
            this.shapes.push(s);
            r -= 5;
            bright -= this.noise;
            
        }
    };

    

    this.keyPress = function(key) {
        switch (key) {
            case 0:
                this.addShape();
                break;
            default:
                console.log("Key not supported", key);
        }
    };


    this.init = function() {
        this.shapes = [];
        this.background = color(floor(random(255)));
        this.minRadius = min(width,height)/50;
        this.maxRadius = min(width,height)/2.1;
        this.noise = 10;
        this.numPoints = 10;

        background(this.background);

        this.addShape({x:width/2, y : height/2});
    };
    this.init();

}

function randomPoint() {
    return {
        x: floor(random(0, width)),
        y: floor(random(0, height))
    };
}

function randomColorRGB () {
    return {
        r: random(255),
        g: random(255),
        b: random(255)
    };
};
function toColorRGB(x) {
    return color(x.r, x.g, x.b);
}
