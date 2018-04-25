var skillA = document.getElementById("HTML");
skillA.width = 120;
skillA.height = 120;

var skillB = document.getElementById("CSS");
skillB.width = 120;
skillB.height = 120;

var skillC = document.getElementById("JavaScript");
skillC.width = 120;
skillC.height = 120;

var skillD = document.getElementById("Bootstrap");
skillD.width = 120;
skillD.height = 120;

var ctx = skillA.getContext("2d");

var blankChart = {
	"percentage": 100
}
var skillLevelA = {
	"percentage": 70
}

var skillLevelB = {
	"percentage": 70
}

var skillLevelC = {
	"percentage": 50
}

var skillLevelD = {
	"percentage": 50
}

var Piechart = function(options) {
	this.options = options;
	this.canvas = options.canvas;
	this.ctx = this.canvas.getContext("2d");
	this.colors = options.colors;

	this.draw = function() {
		var total_value = 0;
		var color_index = 0;
		for (var categ in this.options.data) {
			var val = this.options.data[categ];
			total_value += val;
		}

		var start_angle = 4.71239;
		for (categ in this.options.data) {
			val = this.options.data[categ];
			var slice_angle = 2 * Math.PI * val / 100;

			drawPieSlice(
				this.ctx,
				this.canvas.width/2,
				this.canvas.height/2,
				Math.min(this.canvas.width/2,this.canvas.height/2),
				start_angle,
				start_angle+slice_angle,
				this.colors[color_index%this.colors.length]
				);

				start_angle += slice_angle;
				color_index++;
		}

		//drawing a white circle over the chart
		//to create the dougnut chart
		if(this.options.doughnutHoleSize) {
			drawPieSlice(
				this.ctx,
				this.canvas.width/2,
				this.canvas.height/2,
				this.options.doughnutHoleSize * Math.min(this.canvas.width/2,this.canvas.height/2),
				0,
				2 * Math.PI,
				"#FAFAFA"
			);
			var labelText = Math.round(100 * val / 100);
    		this.ctx.fillStyle = "#00264D";
    		this.ctx.font = "bold 25px Ubuntu";
    		this.ctx.fillText(labelText+"%", this.canvas.width/3.33,this.canvas.height/1.75);
		}
	}
}

function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(centerX, centerY);
	ctx.arc(centerX, centerY, radius, startAngle, endAngle);
	ctx.closePath();
	ctx.fill();
};

var blank = new Piechart({
	canvas: skillA,
	data: blankChart,
	colors: ["#E6E6E6"],
	doughnutHoleSize: 0.75
});
blank.draw();

var htmlSkill = new Piechart({
	canvas: skillA,
	data: skillLevelA,
	colors: ["#00264D", "#E6E6E6"],
	doughnutHoleSize: 0.75
});
htmlSkill.draw();

var blank = new Piechart({
	canvas: skillB,
	data: blankChart,
	colors: ["#E6E6E6"],
	doughnutHoleSize: 0.75
});
blank.draw();

var cssSkill = new Piechart({
	canvas: skillB,
	data: skillLevelB,
	colors: ["#00264D", "#E6E6E6"],
	doughnutHoleSize: 0.75
});
cssSkill.draw();

var blank = new Piechart({
	canvas: skillC,
	data: blankChart,
	colors: ["#E6E6E6"],
	doughnutHoleSize: 0.75
});
blank.draw();

var JavaScript = new Piechart({
	canvas: skillC,
	data: skillLevelC,
	colors: ["#00264D", "#E6E6E6"],
	doughnutHoleSize: 0.75
});
JavaScript.draw();

var blank = new Piechart({
	canvas: skillD,
	data: blankChart,
	colors: ["#E6E6E6"],
	doughnutHoleSize: 0.75
});
blank.draw();

var Bootstrap = new Piechart({
	canvas: skillD,
	data: skillLevelD,
	colors: ["#00264D"],
	doughnutHoleSize: 0.75
});
Bootstrap.draw();