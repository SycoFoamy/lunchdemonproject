var lunchdemon = lunchdemon || {};

lunchdemon.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game');

lunchdemon.game.state.add('Boot', lunchdemon.Boot);
lunchdemon.game.state.add('Preload', lunchdemon.Preload);
lunchdemon.game.state.add('MainMenu', lunchdemon.MainMenu);
lunchdemon.game.state.add('Game', lunchdemon.Game);

lunchdemon.game.state.start('Boot');