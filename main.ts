scene.setBackgroundImage(assets.image`carser city road`)
let mySprite = sprites.create(assets.image`decker`, SpriteKind.Player)
scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`carser city building1`)
scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`carser city building0`)
scroller.setLayerImage(scroller.BackgroundLayer.Layer2, assets.image`carser city building`)
scroller.setLayerImage(scroller.BackgroundLayer.Layer4, assets.image`carser city road`)
scroller.scrollBackgroundWithSpeed(0, 30, scroller.BackgroundLayer.Layer0)
scroller.scrollBackgroundWithSpeed(0, 40, scroller.BackgroundLayer.Layer1)
scroller.scrollBackgroundWithSpeed(0, 40, scroller.BackgroundLayer.Layer2)
scroller.scrollBackgroundWithSpeed(0, 70, scroller.BackgroundLayer.Layer4)
controller.moveSprite(mySprite)
