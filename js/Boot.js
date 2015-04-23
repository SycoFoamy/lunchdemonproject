var lunchdemon = lunchdemon || {};

lunchdemon.Boot = function(){};

lunchdemon.Boot.prototype = {
	preload: function() {

		this.load.image('preloadbar', 'assets/images/preloader_bar.png');
	},
	create: function(){
		this.game.stage.backgroundColor = '#fff';

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 240;
		this.scale.minHeight = 170;
		this.scale.maxWidth = 2880;
		this.scale.maxHeight = 1920;

		this.scale.pageAlignHorizontally = true;

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.state.start('Preload');
	}
};