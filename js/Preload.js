var lunchdemon = lunchdemon || {};

lunchdemon.Preload = function(){};

lunchdemon.Preload.prototype = {
	preload: function() {

		    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
		    this.preloadBar.anchor.setTo(0.5);

		    this.load.setPreloadSprite(this.preloadBar);

		    this.load.image('background', 'assets/background.png');
		    this.load.image('demon', 'assets/demon.png');
	},
	create: function() {
		this.state.start('MainMenu');
	}
};