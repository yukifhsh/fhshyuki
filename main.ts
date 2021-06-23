namespace SpriteKind {
    export const projectile2 = SpriteKind.create()
    export const emeny2 = SpriteKind.create()
    export const emeny3 = SpriteKind.create()
}
namespace StatusBarKind {
    export const emenyhealth2 = StatusBarKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . 9 9 . 9 9 . . . . . . . . 
        . . 9 9 1 9 1 9 9 . . . . . . . 
        . . 9 1 1 1 1 1 9 . . 5 . 5 . . 
        . . . 9 1 1 1 9 . . 5 1 5 1 5 . 
        . . . . 9 1 9 . . . 5 1 1 1 5 . 
        . . . . . 9 . . . . . 5 1 5 . . 
        . . . . . . . . . . . . 5 . . . 
        a a . a a . . . . . . . . . . . 
        a 1 1 1 a . . . . . 4 4 . 4 4 . 
        . a 1 a . . . . . . 4 1 4 1 4 . 
        . . a . . . . . . . 4 1 1 1 4 . 
        . . . . . 3 . 3 . . . 4 1 4 . . 
        . . . . . 1 1 1 . . . . 4 . . . 
        . . . . . 3 1 3 . . . . . . . . 
        . . . . . . 3 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.emeny2, function (sprite, otherSprite) {
    sprite.destroy(effects.spray, 100)
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.projectile2, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.spray, 500)
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    status.spriteAttachedTo().destroy(effects.disintegrate, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.emeny3, function (sprite, otherSprite) {
    sprite.destroy(effects.spray, 500)
    statusbars.getStatusBarAttachedTo(StatusBarKind.emenyhealth2, otherSprite).value += -3
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . 9 9 . 9 9 . . . . . . . . 
        . . 9 9 9 9 9 1 9 . . . . . . . 
        . . 9 9 9 9 9 9 9 . . 2 . 2 . . 
        . . . 9 9 9 9 9 . . 2 2 2 1 2 . 
        . . . . 9 9 9 . . . 2 2 2 2 2 . 
        . . . . . 9 . . . . . 2 2 2 . . 
        . 5 . 5 . . . . . . . . 2 . . . 
        5 5 5 1 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . 7 . 7 . . 
        . 5 5 5 . . . . . . 7 7 7 1 7 . 
        . . 5 . . 3 . 3 . . 7 7 7 7 7 . 
        . . . . 3 3 3 1 3 . . 7 7 7 . . 
        . . . . 3 3 3 3 3 . . . 7 . . . 
        . . . . . 3 3 3 . . . . . . . . 
        . . . . . . 3 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 500, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.emeny3, function (sprite, otherSprite) {
    info.changeLifeBy(-3)
    otherSprite.destroy(effects.disintegrate, 1000)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.emeny2, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    otherSprite.destroy(effects.disintegrate, 1000)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.projectile2, SpriteKind.emeny3, function (sprite, otherSprite) {
    sprite.destroy(effects.spray, 500)
    statusbars.getStatusBarAttachedTo(StatusBarKind.emenyhealth2, otherSprite).value += -3
    info.changeScoreBy(1)
})
statusbars.onZero(StatusBarKind.emenyhealth2, function (status) {
    status.spriteAttachedTo().destroy(effects.disintegrate, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.spray, 500)
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 1000)
    scene.cameraShake(4, 500)
})
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let statusbar: StatusBarSprite = null
let boss: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ..............ffffff....
    ..f7.........f7778ff....
    ..f57.....fff7778ff.....
    ..f55777778888888877....
    ..f855777888885558497...
    ..7f858888888888559997..
    .77f8888888888888199487.
    f78877888888884111148887
    f8877777778888991888888f
    ffffff7888788888888888f.
    ....ff88885578888888ff..
    ...7f888855fffffffff....
    ...7888855ff78f.........
    ...788887fff77f.........
    ...ffffffff87f..........
    ........fff87...........
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
game.onUpdateInterval(5000, function () {
    boss = sprites.create(img`
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        ..................888888888..................
        .................88999999988.................
        ................8891199999988................
        ...............889119999999988...............
        ...............899117777777998...............
        ..............88997777777779988..............
        .............889117f1777f1779988.............
        .............899117f1777f1779998.............
        ............889997777777777799988............
        ............899997777777777799998............
        ...........88999777777777777799988...........
        ...........89999777777777777799998...........
        ..........4455555555555555555555544..........
        .........445555555555555555555555544.........
        ........44522522522522522522522522544........
        ........44422422422422422422422422444........
        .........444444444444444444444444444.........
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        `, SpriteKind.emeny3)
    boss.x = scene.screenWidth()
    boss.y = randint(20, scene.screenHeight() - 20)
    boss.vx = -20
    statusbar = statusbars.create(20, 4, StatusBarKind.emenyhealth2)
    statusbar.attachToSprite(boss)
})
game.onUpdateInterval(2500, function () {
    mySprite3 = sprites.create(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        3 3 b b b b b 3 3 b c c c b c . 
        3 3 1 f f 1 c 3 3 c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.emeny2)
    mySprite3.x = randint(20, scene.screenWidth() - 20)
    mySprite3.y = scene.screenHeight()
    mySprite3.vy = -50
})
game.onUpdateInterval(1000, function () {
    mySprite2 = sprites.create(img`
        ....................2...
        ....................22..
        ....................22..
        ....................222.
        ..........ffff......222.
        ........ff1111ff....222.
        .......fb111111bf...222.
        .......f11111111f...22..
        ......fd11111111df..ff..
        ......fd11111111df..f...
        ......fddd1111dddf..f...
        ......fbdbfddfbdbf.ff...
        ......fcdcf11fcdcf.f....
        .....ffff111111bf.ff....
        ....fc111cdb1bdffff.....
        ....f1b1bcbfbfc11fff....
        ....fbfbfbffff1b1f1f....
        .........fffffffffbf....
        .........bfffffdf.......
        ..........bfffbff.......
        ...........fff.f........
        ...........bfb..........
        ............f...........
        ............b...........
        `, SpriteKind.Enemy)
    mySprite2.x = scene.screenWidth()
    mySprite2.y = randint(20, scene.screenHeight() - 20)
    mySprite2.vx = -100
})
