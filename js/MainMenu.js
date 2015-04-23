var lunchdemon = lunchdemon || {};

lunchdemon.MainMenu = function(){};

lunchdemon.MainMenu.prototype = {
	init: function(score) {
    	var score = score || 0;
    	this.highestScore = this.highestScore || 0;

   		this.highestScore = Math.max(score, this.highestScore);
   	},

	create: function() {

    this.game.stage.backgroundColor = '#000';

    var text = "The world has been thrown into chaos by the likes of the time traveling lunch demons. They will not cease until their fiendish sandwiches have been forcebly devoured by every generation. Survive the onslaught, for if you do not, there may be no other generation to feed.\n Place your cursor down here, and be prepared, they are merciless.\n Click to advance prematurely.";
    var style = { font: "30px Times New Roman", fill: "#B80000", align: "center", wordWrap: true, wordWrapWidth:500 };
    var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
    t.anchor.set(0.5);
   	this.game.add.tween(t).to( { alpha: 0 }, 15000, Phaser.Easing.Linear.None, true);

   	var text2 = "Highest score: "+this.highestScore+" seconds";
    var style2 = { font: "20px Times New Roman", fill: "#B80000", align: "center" };
  
    var h = this.game.add.text(this.game.width/2, this.game.height/2 + 250, text2, style2);
    h.anchor.set(0.5);
   	this.game.time.events.add(15000, this.advance, this);
	},
	
	update: function() {
		if(this.game.input.activePointer.justPressed()) {
      		this.game.state.start('Game');
    	}
	}, 
	
	advance: function() {
		this.game.state.start('Game');
	}

};