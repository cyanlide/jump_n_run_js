var LEVELS = [
	["                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                                                                  xxx           ",
		"                                                   xx      xx    xx!xx          ",
		"                                    o o      xx                  x!!!x          ",
		"                                                                 xx!xx          ",
		"                                   xxxxx                          xvx           ",
		"                                                                            xx  ",
		"  xx                                      o o                                x  ",
		"  x                     o                                                    x  ",
		"  x                                      xxxxx                             o x  ",
		"  x          xxxx       o                                                    x  ",
		"  x  @       x  x                                                xxxxx       x  ",
		"  xxxxxxxxxxxx  xxxxxxxxxxxxxxx    xxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
		"                              x    x                 x     x                    ",
		"                              x!!!!x                 x!!!!!x                    ",
		"                              x!!!!x                 x!!!!!x                    ",
		"                              xxxxxx                 xxxxxxx                    ",
		"                                                                                ",
		"                                                                                "],
	["                                      x!!x                        xxxxxxx                                    x!x  ",
		"                                      x!!x                     xxxx     xxxx                                 x!x  ",
		"                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
		"                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
		"                                       xxxxxxxxxx!!x         x                                    o   o   o  x!x  ",
		"                                                xx!x         x     o   o                                    xx!x  ",
		"                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ",
		"                                                 xvx         x     x   x                        !!!!!!!!!!!!!!xx  ",
		"                                                             xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx   ",
		"                                                              xx!!!!!!!!!!!xx            v                        ",
		"                                                               xxxx!!!!!xxxx                                      ",
		"                                               x     x            xxxxxxx        xxx         xxx                  ",
		"                                               x     x                           x x         x x                  ",
		"                                               x     x                             x         x                    ",
		"                                               x     x                             xx        x                    ",
		"                                               xx    x                             x         x                    ",
		"                                               x     x      o  o     x   x         x         x                    ",
		"               xxxxxxx        xxx   xxx        x     x               x   x         x         x                    ",
		"              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ",
		"             xx       xx        x o x          x    xx               x   x   x               x                    ",
		"     @       x         x        x   x          x     x               x   x   x               x                    ",
		"    xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                    ",
		"    x x      x         x       xx o xx         x     x               x     o     x x         x                    ",
		"!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                    ",
		"!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
		"!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ",
		"!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
		"!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
		"!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
		"!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
	["                                                                                                              ",
		"                                                                                                              ",
		"                                                                                                              ",
		"                                                                                                              ",
		"                                                                                                              ",
		"                                        o                                                                     ",
		"                                                                                                              ",
		"                                        x                                                                     ",
		"                                        x                                                                     ",
		"                                        x                                                                     ",
		"                                        x                                                                     ",
		"                                       xxx                                                                    ",
		"                                       x x                 !!!        !!!  xxx                                ",
		"                                       x x                 !x!        !x!                                     ",
		"                                     xxx xxx                x          x                                      ",
		"                                      x   x                 x   oooo   x       xxx                            ",
		"                                      x   x                 x          x      x!!!x                           ",
		"                                      x   x                 xxxxxxxxxxxx       xxx                            ",
		"                                    xxx   xx      x   x      x                                                ",
		"                           o       xx x   xxxxxxxxx   xxxxxxxx              x x                               ",
		"                                      x   x           x                    x!!!x                              ",
		"                                      x   x           x                     xxx                               ",
		"                                      x   xx          x                                                       ",
		"                           xxx        x   x= = = =    x            xxx                                        ",
		"                                      x   x           x           x!!!x                                       ",
		"                                      x   x    = = = =x     o      xxx       xxx                              ",
		"                                     xx   xx          x                     x!!!x                             ",
		"                              o   o   x   x           x     x                xxv        xxx                   ",
		"                                      x   x           x              x                 x!!!x                  ",
		"                             xxx xx  xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
		"                             x xxx   x xxx x          x!!!!!!!!!!!!!!x                                        ",
		"                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
		"                             xx           xx                                         xxx                      ",
		"  xxx                         x     x     x                                         x!!!x                xxx  ",
		"  x x                         x    xxx    x                                          xxx                 x x  ",
		"  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
		"  x                           x           x                              x   x                             x  ",
		"  x                           xx          x                              x x x                             x  ",
		"  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
		"  x                xxx             o o    x                              x         xxx                     x  ",
		"  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
		"  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
		"  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
		"  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
		"  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
		"                                                                                                              ",
		"                                                                                                              "],
	["                                                                                                                   ",
		"                                                                                                                   ",
		"                                                                                                                   ",
		"                                                                                                                   ",
		"                                                                                                                   ",
		"                                                                                                                   ",
		"                                        ooo                                                          o             ",
		"                                        xxx                                                       xxxxx            ",
		"                                                                                           x          x            ",
		"                                                  x                                               xxxxx            ",
		"                                                                                                  x                ",
		"                                                           x                   x        x       xxxxxxx            ",
		"                          o                                         x                             xxxxx            ",
		"                                                                                           o o o  xxxxx            ",
		"                   xxx                                                                                x            ",
		"       !  o  !                                             xxxx                               x       x            ",
		"       x     x                                                xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxx            ",
		"       x= o  x            x                     xxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx            ",
		"       x     x                                                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx           ",
		"       !  o  !            o                                  xxxx                                                  ",
		"                                                                                                                   ",
		"          o              xxx                              xx                                                       ",
		"                                                                                                                   ",
		"                                                       @                                                           ",
		"                                                      xx                                                           ",
		"                   xxx         xxx                                                                                 ",
		"                                                                                                                   ",
		"                          o                                                     x      x                           ",
		"                                                          xx     xx                                                ",
		"             xxx         xxx         xxx                                 x                  x                      ",
		"                                                                                                                   ",
		"                                                                 ||                                                ",
		"  xxxxxxxxxxx                                                                                                      ",
		"  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                        ",
		"  x         x   x       x   x       x   x                 ||                  x     x                              ",
		"  x         xxxxx   o   xxxxx   o   xxxxx                                                                          ",
		"  xxxxxxx                                     xxxxx       xx     xx     xxx                                     o  ",
		"        x=                  =                =x   x                     xxx                                     x  ",
		"        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
		"                                                                                                                   "]
];

// Defining the main vector function.
function Vector(x, y) {
	this.x = x; this.y = y;
}

// Add plus function to Vector prototype.
Vector.prototype.plus = function (other) {
	return new Vector(this.x + other.x, this.y + other.y);
};

// Add times function to Vector prototype.
Vector.prototype.times = function (scale) {
	return new Vector(this.x * scale, this.y * scale);
};

var actorchars = {
	"@": Player,
	"o": Coin,
	"=": Lava,
	"|": Lava,
	"v": Lava,
	"y": Lava
};

// Player object
function Player(pos) {
	this.pos = pos.plus(new Vector(0, -.5));
	this.size = new Vector(1.5, 1.5); // Block size - (.5, 1) - Mario size (1.5, 1.5) - may have some overlaps
	this.speed = new Vector(0, 0);
}

Player.prototype.type = "player";

// Lava object
function Lava(pos, ch) {
	this.pos = pos;
	this.size = new Vector(1, 1);
	if (ch === "=") {
		this.speed = new Vector(2, 0);
	}
	else if (ch === '|') {
		this.speed = new Vector(0, 2);
	}
	else if (ch === 'y') {
		this.speed = new Vector(0, -3)
		this.repeatPos = pos;
	}
	else if (ch === 'v') {
		this.speed = new Vector(0, 3);
		this.repeatPos = pos;
	}
}
Lava.prototype.type = "lava";

// Coin object
function Coin(pos) {
	this.basePos = this.pos = pos;
	this.size = new Vector(.6, .6);
	this.wobble = Math.random() * Math.PI * 2;
}
Coin.prototype.type = "coin";


Level.prototype.isFinished = function () {
	return this.status != null && this.finishDelay < 0;
};

//  Level object
function Level(plan) {
	this.width = plan[0].length;
	this.height = plan.length;
	this.grid = [];
	this.actors = [];

	for (var y = 0; y < this.height; y++) {
		var line = plan[y], gridLine = [];
		for (var x = 0; x < this.width; x++) {
			var ch = line[x], fieldType = null;
			var Actor = actorchars[ch];
			if (Actor)
				this.actors.push(new Actor(new Vector(x, y), ch));
			else if (ch === "x")
				fieldType = "wall";
			else if (ch === "!")
				fieldType = "lava";
			else if (ch === "|")
				fieldType = "lava";
			else if (ch === "y")
				fieldType = "lava";
			else if (ch === "=")
				fieldType = "lava";
			else if (ch === "v") {
				fieldType = "lava";
				console.log(fieldType);
			}
			gridLine.push(fieldType)
		}
		this.grid.push(gridLine);
	}
	this.player = this.actors.filter(function (actor) {
		return actor.type === "player"
	})[0];
	this.status = this.finishDelay = null;
}

function element(name, className) {
	var elem = document.createElement(name);
	if (className) elem.className = className;
	return elem;
}

// Draw the Document Object Model
function DOMDisplay(parent, level) {
	this.wrap = parent.appendChild(element("div", "game"));
	this.level = level;

	this.wrap.appendChild(this.drawBackground());
	this.actorLayer = null;
	this.drawFrame();
}

// Scaling of the array elements.
var scale = 15;
DOMDisplay.prototype.drawBackground = function () {
	var table = element("table", "background");
	table.style.width = this.level.width * scale + "px";
	table.style.height = this.level.height * scale + "px";
	this.level.grid.forEach(function (row) {
		var rowElement = table.appendChild(element("tr"));
		rowElement.style.height = scale + "px";
		row.forEach(function (type) {
			rowElement.appendChild(element("td", type));
		});
	});
	return table;
};

DOMDisplay.prototype.drawActors = function () {
	var wrap = element("div");
	this.level.actors.forEach(function (actor) {
		var rect = wrap.appendChild(element("div", "actor " + actor.type));
		rect.style.width = actor.size.x * scale + "px";
		rect.style.height = actor.size.y * scale + "px";
		rect.style.left = actor.pos.x * scale + "px";
		rect.style.top = actor.pos.y * scale + "px";
	});
	return wrap;
}

DOMDisplay.prototype.drawFrame = function () {
	if (this.actorLayer)
		this.wrap.removeChild(this.actorLayer);
	this.actorLayer = this.wrap.appendChild(this.drawActors());
	this.wrap.className = "game " + (this.level.status || "");
	this.scrollPlayerIntoView();
};

// Clear it later
DOMDisplay.prototype.scrollPlayerIntoView = function () {
	var width = this.wrap.clientWidth;
	var height = this.wrap.clientHeight;
	var margin = width / 3;

	// The viewport
	var left = this.wrap.scrollLeft, right = left + width;
	var top = this.wrap.scrollTop, bottom = top + height;

	var player = this.level.player;
	var center = player.pos.plus(player.size.times(0.5)).times(scale);

	if (center.x < left + margin)
		this.wrap.scrollLeft = center.x - margin;
	else if (center.x > right - margin)
		this.wrap.scrollLeft = center.x + margin - width;
	if (center.y < top + margin)
		this.wrap.scrollTop = center.y - margin;
	else if (center.y > bottom - margin)
		this.wrap.scrollTop = center.y + margin - height;
};

DOMDisplay.prototype.clear = function () {
	this.wrap.parentNode.removeChild(this.wrap);
};

Level.prototype.obstacleAt = function (pos, size) {
	var xStart = Math.floor(pos.x);
	var xEnd = Math.ceil(pos.x + size.x);
	var yStart = Math.floor(pos.y);
	var yEnd = Math.ceil(pos.y + size.y);

	if (xStart < 0 || xEnd > this.width || yStart < 0)
		return "wall";
	if (yEnd > this.height)
		return "lava";
	for (var y = yStart; y < yEnd; y++) {
		for (var x = xStart; x < xEnd; x++) {
			var fieldType = this.grid[y][x];
			if (fieldType) return fieldType;
		}
	}
};

Level.prototype.actorAt = function (actor) {
	for (var i = 0; i < this.actors.length; i++) {
		var other = this.actors[i];
		if (other != actor &&
			actor.pos.x + actor.size.x > other.pos.x &&
			actor.pos.x < other.pos.x + other.size.x &&
			actor.pos.y + actor.size.y > other.pos.y &&
			actor.pos.y < other.pos.y + other.size.y)
			return other;
	}
};

var maxStep = 0.05; // 0.05

Level.prototype.animate = function (step, keys) {
	if (this.status != null)
		this.finishDelay -= step;

	while (step > 0) {
		var thisStep = Math.min(step, maxStep);
		this.actors.forEach(function (actor) {
			actor.act(thisStep, this, keys);
		}, this);
		step -= thisStep;
	}
};

Lava.prototype.act = function (step, level) {
	var newPos = this.pos.plus(this.speed.times(step));
	if (!level.obstacleAt(newPos, this.size))
		this.pos = newPos;
	else if (this.repeatPos)
		this.pos = this.repeatPos;
	else
		this.speed = this.speed.times(-1);
};

var wobbleSpeed = 8, wobbleDist = 0.07;

Coin.prototype.act = function (step) {
	this.wobble += step * wobbleSpeed;
	var wobblePos = Math.sin(this.wobble) * wobbleDist;
	this.pos = this.basePos.plus(new Vector(0, wobblePos));
};

// Movement on the x-axis
var playerXSpeed = 10;
Player.prototype.moveX = function (step, level, keys) {
	this.speed.x = 0;
	if (keys.left) this.speed.x -= playerXSpeed;
	if (keys.right) this.speed.x += playerXSpeed;

	var motion = new Vector(this.speed.x * step, 0);
	var newPos = this.pos.plus(motion);
	var obstacle = level.obstacleAt(newPos, this.size);
	if (obstacle)
		level.playerTouched(obstacle);
	else
		this.pos = newPos;
};

// Movement on the y-axis
var gravity = 30;
var jumpSpeed = 17;
Player.prototype.moveY = function (step, level, keys) {
	this.speed.y += step * gravity;
	var motion = new Vector(0, this.speed.y * step);
	var newPos = this.pos.plus(motion);
	var obstacle = level.obstacleAt(newPos, this.size);
	if (obstacle) {
		level.playerTouched(obstacle);
		if (keys.up && this.speed.y > 0)
			this.speed.y = -jumpSpeed;
		else
			this.speed.y = 0;
	} else {
		this.pos = newPos;
	}
};

Player.prototype.act = function (step, level, keys) {
	this.moveX(step, level, keys);
	this.moveY(step, level, keys);

	var otherActor = level.actorAt(this);
	if (otherActor)
		level.playerTouched(otherActor.type, otherActor);

	// Level cleared animation
	if (level.status == "won") {
		this.pos.y += step;
		this.size.y -= step;
	}
	// Losing animation
	if (level.status == "lost") {
		this.pos.y += step;
		this.size.y -= step;
	}
};

Level.prototype.playerTouched = function (type, actor) {
	if (type == "lava" && this.status == null) {
		this.status = "lost";
		this.finishDelay = 1;
	} else if (type == "coin") {
		this.actors = this.actors.filter(function (other) { // make it disappear
			return other != actor;
		});
		if (!this.actors.some(function (actor) {
			return actor.type == "coin";
		})) {
			this.status = "won";
			this.finishDelay = 1;
		}
	}
	else if (type == "item") {
		console.log("HIT");
		this.actors = this.actors.filter(function (other) { // make it disappear
			return other != actor;
		});
		if (!this.actors.some(function (actor) {
			return actor.type == "item";
		})) {
			// TODO: What happpens to the actor when collecting an item

		}
	}
};

// Add Listeners to the keys
var arrowCodes = { 37: "left", 38: "up", 39: "right" };
function trackKeys(codes) {
	var pressed = Object.create(null);
	function handler(event) {
		if (codes.hasOwnProperty(event.keyCode)) {
			var down = event.type == "keydown";
			pressed[codes[event.keyCode]] = down;
			event.preventDefault();
		}
	}
	addEventListener("keydown", handler);
	addEventListener("keyup", handler);
	return pressed;
}

function runAnimation(frameFunc) {
	var lastTime = null;
	function frame(time) {
		var stop = false;
		if (lastTime != null) {
			var timeStep = Math.min(time - lastTime, 100) / 1000;
			stop = frameFunc(timeStep) === false;
		}
		lastTime = time;
		if (!stop)
			requestAnimationFrame(frame);
		// Animate frame at next repaint
	}
	requestAnimationFrame(frame);
}

var arrows = trackKeys(arrowCodes);

// Displays the level and clears it after code "won"
function runLevel(level, Display, andThen) {
	var display = new Display(document.body, level);
	runAnimation(function (step) {
		level.animate(step, arrows);
		display.drawFrame(step);
		if (level.isFinished()) {
			display.clear();
			if (andThen)
				andThen(level.status);
			return false;
		}
	});
}

// Runs the game cycle + endscreen display
function runGame(plans, Display) {
	function startLevel(n) {
		document.getElementById('pyro').style.display = "none";
		runLevel(new Level(plans[n]), Display, function (status) {
			if (status == "lost") {
				startLevel(n);
			}
			else if (n < plans.length - 1) {
				startLevel(n + 1);
			}
			else {
				document.getElementById('upline').style.display = "none";
				document.getElementById('pyro').style.display = "block";
			}
		});
	}
	startLevel(0);
}
runGame(LEVELS, DOMDisplay); // start