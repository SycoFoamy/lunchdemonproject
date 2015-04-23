var lunchdemon = lunchdemon || {};
var seconds = 0;
lunchdemon.Game = function(){};

lunchdemon.Game.prototype = {
	create: function() {
		this.game.world.setBounds(0, 0, this.game.width, this.game.height);

		//this.background = this.game.add.tileSprite(0, 0, 600, 695, 'background');
		this.game.stage.backgroundColor = '#000';
		//this.game.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.demons = this.game.add.group();
		this.demons.enableBody = true;
		this.demons.createMultiple(1000, 'demon', 0, false);

		this.game.time.events.repeat(Phaser.Timer.SECOND/3, 500, this.resurrect, this);


	},

	update: function() {
		seconds = Math.floor(this.game.time.time / 1000) % 60;
	},

	resurrect: function() {

    	//  Get a dead item
    	item = this.demons.getFirstDead();
    	item.enableBody = true;
    	item.inputEnabled = true;
    	item.scale.setTo(.2);
    	item.body.setSize(100,100,8,20);
    	item.events.onInputOver.add(this.killGame, this);

    	if (item)
    	{
    	    //  And bring it back to life
    	    item.reset(this.game.rnd.integerInRange(0,this.game.world.width), 0);

    	    //  This just changes its frame
    	    item.frame = this.game.rnd.integerInRange(0, 36);

    	    this.game.physics.enable(item, Phaser.Physics.ARCADE);
    		this.game.physics.arcade.moveToPointer(item, 60, this.game.input.activePointer, 2000);

    	}

	},

	killGame: function(){
		this.game.state.start('MainMenu', true, false, seconds);
	}
};