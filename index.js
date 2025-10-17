const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/forest.png',
})

const board = new Sprite({
    position: {
        x: 670,
        y: 470
    },
    imageSrc: './img/board.png',
    scale: 1.5
})

const paper1 = new Sprite({
    position: {
        x: 690,
        y: 480
    },
    imageSrc: './img/paper1.png',
    scale: 1
})

const paper2 = new Sprite({
    position: {
        x: 720,
        y: 480
    },
    imageSrc: './img/paper2.png',
    scale: 1
})

const paper3 = new Sprite({
    position: {
        x: 710,
        y: 505
    },
    imageSrc: './img/paper3.png',
    scale: 1
})

const paper4 = new Sprite({
    position: {
        x: 740,
        y: 495
    },
    imageSrc: './img/paper4.png',
    scale: 1
})

const sign = new Sprite({
    position: {
        x: 800,
        y: 495
    },
    imageSrc: './img/sign.png',
    scale: 1.5
})

const words = new Sprite({
    position: {
        x: 810,
        y: 505
    },
    imageSrc: './img/words.png',
    scale: 1.5
})

const sign2 = new Sprite({
    position: {
        x: 950,
        y: 457
    },
    imageSrc: './img/sign2.png',
    scale: 2
})

const words2 = new Sprite({
    position: {
        x: 960,
        y: 473
    },
    imageSrc: './img/words2.png',
    scale: 2
})

const words3 = new Sprite({
    position: {
        x: 970,
        y: 505
    },
    imageSrc: './img/words3.png',
    scale: 2
})

const cauldron = new Sprite({
    position: {
        x: 100,
        y: 500
    },
    imageSrc: './img/cauldron.png',
    scale: 2
})

const cFire = new Sprite({
    position: {
        x: 108,
        y: 457
    },
    imageSrc: './img/cFire.png',
    scale: 0.8,
    framesMax: 6
})

const camp = new Sprite({
    position: {
        x: 450,
        y: 520
    },
    imageSrc: './img/camp.png',
    scale: 2
})

const campFire = new Sprite({
    position: {
        x: 480,
        y: 480
    },
    imageSrc: './img/campFire.png',
    scale: 0.8,
    framesMax: 6
})

const player = new Fighter({
    position: {
    x: 100,
    y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/p1/Idle.png',
    scale: 2.5,
    framesMax: 10,
    offset: {
        x: 160,
        y: 22
    },
    sprites: {
        idle: {
            imageSrc: './img/p1/Idle.png',
            framesMax: 10
        },
        run: {
            imageSrc: './img/p1/Run.png',
            framesMax: 8
        },
        jump: {
            imageSrc: './img/p1/Jump.png',
            framesMax: 3
        },
        fall: {
            imageSrc: './img/p1/Fall.png',
            framesMax: 3
        },
        attack: {
            imageSrc: './img/p1/Attack3.png',
            framesMax: 8
        },
        hit: {
            imageSrc: './img/p1/Hit.png',
            framesMax: 3
        },
        death: {
            imageSrc: './img/p1/Death.png',
            framesMax: 7
        }
    },
    attackBox: {
        offset: {
            x: 0,
            y: 50
        },
        width: 100,
        height: 50
    },attackBox: {
        offset: {
            x: 50,
            y: 150
        },
        width: 130,
        height: 50
    }
})

const enemy = new Fighter({
    position: {
    x: 800,
    y: 100
    },
    velocity: {
        x: 0,
        y: 0
    },
    color: 'blue',
    offset: {
        x: 50,
        y: 0
    },
    imageSrc: './img/p2/Idle.png',
    scale: 2.5,
    framesMax: 11,
    offset: {
        x: 100,
        y: 50
    },
    sprites: {
        idle: {
            imageSrc: './img/p2/Idle.png',
            framesMax: 11
        },
        run: {
            imageSrc: './img/p2/Run.png',
            framesMax: 8
        },
        jump: {
            imageSrc: './img/p2/Jump.png',
            framesMax: 3
        },
        fall: {
            imageSrc: './img/p2/Fall.png',
            framesMax: 3
        },
        attack: {
            imageSrc: './img/p2/Attack2.png',
            framesMax: 7,
        },
        hit: {
            imageSrc: './img/p2/Hit.png',
            framesMax: 4
        },
        death: {
            imageSrc: './img/p2/Death.png',
            framesMax: 11
        }
    },
    attackBox: {
        offset: {
            x: -80,
            y: 150
        },
        width: 200,
        height: 50
    }
})

console.log(player)

const keys = {
    a: {
        pressed : false
    },
    d: {
        pressed : false
    },
    ArrowLeft: {
        pressed : false
    },
    ArrowRight: {
        pressed : false
    }
}

decreaseTimer()

function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    board.update()
    paper1.update()
    paper2.update()
    paper3.update()
    paper4.update()
    sign.update()
    words.update()
    sign2.update()
    words2.update()
    words3.update()
    cauldron.update()
    cFire.update()
    campFire.update()
    camp.update()
    // c.fillStyle = 'rgba(255, 255, 255, 0.1)'
    // c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()
    
    player.velocity.x = 0
    enemy.velocity.x = 0

    // player movement
    if (keys.a.pressed && player.lastKey === 'a') {
        player.velocity.x = -5
        player.switchSprite('run')
    } else if (keys.d.pressed && player.lastKey === 'd') {
        player.velocity.x = 5
        player.switchSprite('run')
    } else {
        player.switchSprite('idle')
    }
   
    //Jump and fall
    if (player.velocity.y < 0) {
        player.switchSprite('jump')
    } else if (player.velocity.y > 0) {
        player.switchSprite('fall')
    } 

    // enemy movement
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
        enemy.velocity.x = -5
        enemy.switchSprite('run')
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
        enemy.velocity.x = 5
        enemy.switchSprite('run')
    } else {
        enemy.switchSprite('idle')
    }

    //Jump and fall
    if (enemy.velocity.y < 0) {
        enemy.switchSprite('jump')
    } else if (enemy.velocity.y > 0) {
        enemy.switchSprite('fall')
    } 

    // collision detection player
    if (rectangularCollision({
        rectangle1: player,
        rectangle2: enemy
    }) &&
        player.isAttacking && player.framesCurrent === 3
    ) {
        enemy.hit()
        player.isAttacking = false
        console.log('p1 hit');
        // document.querySelector('#p2Health').style.width = enemy.health + '%'
        gsap.to('#p2Health', {
            width: enemy.health + '%'
        })
    }

    // missed hit
    if (player.isAttacking && player.framesCurrent === 4) {
        player.isAttacking = false
    }

    // collision detection enemy
    if (rectangularCollision({
        rectangle1: enemy,
        rectangle2: player
    }) &&
        enemy.isAttacking && player.framesCurrent === 5
    ) {
        player.hit()
        enemy.isAttacking = false
        console.log('p2 hit');
        // document.querySelector('#p1Health').style.width = player.health + '%'
        gsap.to('#p1Health', {
            width: enemy.health + '%'
        })
    }

    // missed hit
    if (enemy.isAttacking && enemy.framesCurrent === 4) {
        enemy.isAttacking = false
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
        determineWinner({ player, enemy, timerId })
    }
}

animate()

window.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (!player.dead) {
        switch(event.key){
            // player keys
            case 'd':
                keys.d.pressed = true
                player.lastKey = 'd'
            break
            case 'a':
                keys.a.pressed = true
                player.lastKey = 'a'
            break
            case 'w':
                player.velocity.y = -20
            break
            case 's':
                player.velocity.y = 20
            break
            case ' ':
                player.attack()
            break
        }
    }
    if (!enemy.dead) {
        switch (event.key) {
            // arrows/enemy keys
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true
                enemy.lastKey = 'ArrowLeft'
            break
            case 'ArrowRight':
                keys.ArrowRight.pressed = true
                enemy.lastKey = 'ArrowRight'
            break
            case 'ArrowUp':
                enemy.velocity.y = -20
            break
            case 'ArrowDown':
                enemy.velocity.y = 20
            break
            case '0':
                enemy.attack()
            break
        }
    }  
})

window.addEventListener('keyup', (event) => {
    // player keys
    switch(event.key){
        case 'd':
            keys.d.pressed = false
        break
        case 'a':
            keys.a.pressed = false
        break
        case 'w':
            keys.a.pressed = false
        break
    }

    // arrows/enemy keys
    switch(event.key){
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
        break
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
        break
        case 'ArrowUp':
            keys.ArrowRight.pressed = false
        break
    }
    // console.log(event.key);    
})