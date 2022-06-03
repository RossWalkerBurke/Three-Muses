class Home extends Phaser.Scene {
	constructor() {
		super({key:"Home"});
	}
	
	preload(){
		this.load.image('tiles', 'Production/tiled/map_1_assets.png');
		this.load.image('tilesTown', 'Production/tiled/town_map_1.png');
		this.load.tilemapTiledJSON('level', 'assets/Art/Template_work/map_1.json');
		
		this.load.spritesheet('hero', 'https://cdn.glitch.com/59aa1c5f-c16d-41a1-bfd2-09072e84a538%2Fhero.png?1551136698770', {
        frameWidth: 32,
        frameHeight: 32,
      });
	}
	
	create() {
		const map = this.make.tilemap({ key: 'level', tileWidth: 32, tileHeight: 32});
		const tileset = map.addTilesetImage("map", 'tiles');
		const townTiles = map.addTilesetImage("town", 'tilesTown');
		const waterLayer = map.createLayer('ground/water', tileset, 0, 0);
		const groundLayer = map.createLayer('ground/ground', tileset, 0, 0);
		const ground2Layer = map.createLayer('ground/ground 2', tileset, 0, 0);
		const groundShadowLayer = map.createLayer('ground/Shadow 1', townTiles, 0, 0);
		const houseLayer = map.createLayer('houses', townTiles, 0, 0);
		const wallLayer = map.createLayer('walls', tileset, 0, 0);
		const miscLayer = map.createLayer('miselanious', townTiles, 0, 0);
		const shad2Layer = map.createLayer('Shadow 2', townTiles, 0, 0);
		const roofLayer = map.createLayer('roof', tileset, 0, 0);
		const houseRoofLayer = map.createLayer('house roof', townTiles, 0, 0);
		const miscRoofLayer = map.createLayer('roof miselanious', townTiles, 0, 0);
		const shad3Layer = map.createLayer('Shadow 3', townTiles, 0, 0);
		
		this.keys = this.input.keyboard.createCursorKeys();
      
		this.hero = this.physics.add.sprite(200, 150, 'hero', 0);
		this.hero.setScale(2);
		this.hero.direction = 'down';
		  
		// The state machine managing the hero
		this.stateMachine = new StateMachine('idle', {
			idle: new IdleState(),
			move: new MoveState(),
		}, [this, this.hero]);
		  
		setupAnim(this);
    }
    
    update() {
      this.stateMachine.step();
    }
}

function setupAnim(scene) {
	scene.anims.create({
		key: 'walk-down',
		frameRate: 8,
		repeat: -1,
		frames: scene.anims.generateFrameNumbers('hero', {start: 0, end: 3}),
	});
	scene.anims.create({
		key: 'walk-right',
		frameRate: 8,
		repeat: -1,
		frames: scene.anims.generateFrameNumbers('hero', {start: 4, end: 7}),
	});
	scene.anims.create({
		key: 'walk-up',
		frameRate: 8,
		repeat: -1,
		frames: scene.anims.generateFrameNumbers('hero', {start: 8, end: 11}),
	});
	scene.anims.create({
		key: 'walk-left',
		frameRate: 8,
		repeat: -1,
		frames: scene.anims.generateFrameNumbers('hero', {start: 12, end: 15}),
	});
}