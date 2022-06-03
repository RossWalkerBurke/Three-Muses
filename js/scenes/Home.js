class Home extends Phaser.Scene {
	constructor() {
		super({key:"Home"});
	}
	
	preload(){
		this.load.image('tiles', 'assets/Art/Template_work/map_1_assets.png');
		this.load.tilemapTiledJSON('level', 'assets/Art/Template_work/map_1.json');
	}
	
	create() {
		const map = this.make.tilemap({ key: 'level', tileWidth: 32, tileHeight: 32});
		const tileset = map.addTilesetImage("map", 'tiles');
		const groundLayer = map.createLayer('ground', tileset, 0, 0);
		const wallLayer = map.createLayer('walls', tileset, 0, 0);
		const roofLayer = map.createLayer('roof', tileset, 0, 0);
	}
}