class IdleState extends State {
  enter(scene, hero) {
    hero.anims.play(`walk-${hero.direction}`, true);
    hero.anims.stop();
  }
  
  execute(scene, hero) {
    const {left, right, up, down} = scene.keys;
    
    // Transition to move if pressing a movement key
    if (left.isDown || right.isDown || up.isDown || down.isDown) {
      this.stateMachine.transition('move');
      return;
    }
  }
}

class MoveState extends State {
  execute(scene, hero) {
    const {left, right, up, down} = scene.keys;
    
    // Transition to idle if not pressing movement keys
    if (!(left.isDown || right.isDown || up.isDown || down.isDown)) {
      this.stateMachine.transition('idle');
      return;
    }
    
    hero.setVelocity(0);
    if (up.isDown) {
      hero.direction = 'up';
    } else if (down.isDown) { 
      hero.direction = 'down';
    }
    if (left.isDown) {
      hero.direction = 'left';
    } else if (right.isDown) {
      hero.direction = 'right';
    }
    
    hero.anims.play(`walk-${hero.direction}`, true);
  }
}