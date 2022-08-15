function Art() {
    this.init = function() {
        this.shapes = [];
        this.background = color(floor(random(255)));
        this.minRadius = min(width,height)/20;
        this.maxRadius = min(width/height)/5;

        background(this.background);
    };
    this.init();

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
        let center = point === undefined ? randomPoint() : point;
        let s =
            new Shape({
                center: center,
                color: this.randomColor(),
                radius : floor(random(this.minRadius, this.maxRadius)),
            });
        this.shapes.push(s);
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

    this.randomColor = function() {
        return {
            r: random(255),
            g: random(255),
            b: random(255)
        };
    };

}

function randomPoint() {
    return {
        x: floor(random(0, width)),
        y: floor(random(0, height))
    };
}
