class Game {
  constructor() {}

  getState(){
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value", function(data){
      gameState = data.val()
    })
  }

  updateState(state){
    database.ref("/").update({
      gameState: state
    })
  }

  start() {

    player = new Player();

    playerCount = player.getCount()

    form = new Form();
    form.display();
     
   
    car1 = createSprite(width/2 - 50, height - 100)
    //car1.addImage(car1img)
   // car1.scale = 0.07
    car2 = createSprite(width/2 + 100, height -100)
    //car2.addImage(car2img)
    //car2.scale = 0.07

    cars = [car1, car2]

    drawSprites()
  }

  handleElements(){
    form.hide()
    form.titleImg.position(40, 50)
    //form.titleImg.class("")
  }

  play(){
    this.handleElements()
    Player.getPlayerInfo()

    if (allPlayers != undefined) {
      image(track, 0, -height*5, width, height*6)

      var index = 0
      for (const plr in allPlayers) {
        index ++
        var x = allPlayers[plr].positionX
        var y = height - allplayers[plr].positionY
        
        cars[index-1].position.x = x
        cars[index-1].position.y = y
      }
      //this.handlePlayerControl()
      drawSprites()
    }
  }

  handlePlayerControl(){
    if (keyIsDown(UP_ARROW)) {
      player.positionY += 10
      player.update()
    }
  }
}
