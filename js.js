let allNumbers = ['😊','😊','😂','😂','🤣','🤣','😍','😍','😒','😒','😘','😘','😁','😁','😉','😉','😎','😎','😜','😜']
let number = document.getElementsByClassName('number');
let postWrap = document.getElementsByClassName('post-wrap');
let post = document.getElementsByClassName('post');
let postFront = document.getElementsByClassName('post-front');
let tr = document.getElementsByTagName('tr');
let allNumbersclicked = [];

let see = 1000
let hidde = see
let topp = 0
let leftt = 0
let tre = 0
let tree = 0
let imgPosionCard = 0
let imgPosionCardleft = 0
let chang2Cards = true
let bigleft = true
let bigtop = true
flipe5 = false
cuont5 = 0
const selectors = {
    boardContainer: document.querySelector('.board-container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    win: document.querySelector('.win')
}

const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
}
const startGame = () => {
    state.gameStarted = true
    selectors.start.classList.add('disabled')

    state.loop = setInterval(() => {
        state.totalTime++

        selectors.moves.innerText = `${state.totalFlips} moves`
        selectors.timer.innerText = `time: ${state.totalTime} sec`
    }, 1000)
}
let shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
  debugger
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
let InsertToTabel = (array) => {
for (let i = 0; i < number.length; i++) { 
    number[i].innerHTML = array[i]
}
}
const flipBackCards = () => {
    document.querySelectorAll('.post:not(.matched)').forEach(card => {
        card.classList.remove('flipped')
    })

    state.flippedCards = 0
}
const flipCard = card => {
    state.flippedCards++
    state.totalFlips++

    if (!state.gameStarted) {
        startGame()
    }

    if (state.flippedCards <= 2 && flipe5 === false) {
        card.classList.add('flipped')
    }
    if (state.flippedCards === 2 && flipe5 === false) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)')

        if (flippedCards[0].innerText === flippedCards[1].innerText) {
            flippedCards[0].classList.add('matched')
            flippedCards[1].classList.add('matched')
            setTimeout(() => {
                ShowModal('Well done!')
            }, 700)

        }
        setTimeout(() => {
            flipBackCards()
        }, 1000)
    }
    if (flipe5) {
        cuont5++
        card.classList.add('flipped', 'cardd')
        const flippe5dCards = document.querySelectorAll('.flipped:not(.matched, .cardd)')

        for (let i = 0; i < flippe5dCards.length; i++) {
            if (card.innerHTML === flippe5dCards[i].innerHTML) {
            card.classList.add('matched')
            flippe5dCards[i].classList.add('matched')
            }
        }
        setTimeout(() => {
            document.querySelectorAll('.post:not(.matched, .five)').forEach(card => {
                card.classList.remove('flipped')
            })  
              }, 1000)
              if (cuont5 === 4) {
                setTimeout(() => {
                flipBackCards()
                flipe5 = false
            }, 1000)

              }
    }
    
    // If there are no more cards that we can flip, we won the game
if (!document.querySelectorAll('.post:not(.flipped)').length) {
    setTimeout(() => {
        selectors.win.classList.remove('hidden')
        document.querySelectorAll('.post-wrap').forEach(card => {
            card.classList.add('hidden')
        })
        selectors.win.innerHTML = `
            <span class="win-text">
                You won!<br />
                with <span class="highlight">${state.totalFlips}</span> moves<br />
                under <span class="highlight">${state.totalTime}</span> seconds
            </span>
        `

        clearInterval(state.loop)
    }, 1000)
}
}
const attachEventListeners = () => {

    document.addEventListener('click', event => {
        const eventTarget = event.target
        const eventParent = eventTarget.parentElement.parentElement
        const eventParentParent = eventTarget.parentElement.parentElement.parentElement.parentElement
        allNumbersclicked.push({'number':eventParent.getElementsByClassName('number')[0].innerText,'left':eventParent.getBoundingClientRect().left,'top':eventParent.getBoundingClientRect().tpo})

        if (eventTarget.className.includes('img') && !eventParent.className.includes('flipped')) {
            flipCard(eventParent)
        } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
            startGame()
        }
        if (state.totalFlips === 9) {
            if (chang2Cards) {
                Relocation(eventParentParent)
            }
        }
    })
}
const SeeCard = (card) =>{
    setTimeout(() => {
    card.classList.add('flipped')
}, see)
}
const hiddenCard = (card) =>{
    setTimeout(() => {
    card.classList.remove('flipped')
}, hidde)
}
const SeeAll = () => {
    const flippAlledCards = document.querySelectorAll('.post:not(.matched, .flipped)')

    for (let i = 0; i < flippAlledCards.length; i++) {
            SeeCard(flippAlledCards[i])
            see += 40
            hidde = see + 800
            hiddenCard(flippAlledCards[i])

    }
}
const hiddenAll = () => {
    for (let i = 0; i < post.length; i++) {
        hiddenCard(post[i])
            see += 40
    }
}
    allNumbers = shuffle(allNumbers)
    InsertToTabel(allNumbers)
    attachEventListeners()
     setTimeout(() => {
        SeeAll()
    }, 10000)
    const Left = (card, ddd) => {
        setTimeout(() => {
        imgPosionCardleft += 0.5
        tre -= 0.5
        card.style.left = '' + imgPosionCardleft + 'px'
        ddd.style.left = '' + tre + 'px'

        a += 20   
  }, a)

    }
    const Leftt = (card, ddd) => {
        setTimeout(() => {
            imgPosionCardleft -= 0.5
        tre += 0.5
        card.style.left = '' + imgPosionCardleft + 'px'
        ddd.style.left = '' + tre + 'px'

  }, a)

    }
    const Top = (card, ddd) => {
        setTimeout(() => {
        tree += 0.5
        imgPosionCard -= 0.5

        card.style.top = '' + tree + 'px'
        ddd.style.top = '' + imgPosionCard + 'px'

  }, a)
    }
    const Topp = (card, ddd) => {
        setTimeout(() => {
        tree -= 0.5
        imgPosionCard += 0.5

        card.style.top = '' + tree + 'px'
        ddd.style.top = '' + imgPosionCard + 'px'

  }, a)

    }
    const Relocation = (card) =>{

        randomCard = Math.floor(Math.random() * 20);

        const posionCard1 = card.getBoundingClientRect();
        const posionCard2 = postWrap[3].getBoundingClientRect();
        let imgf = postWrap[3]
        let left = posionCard1.left
        leftt = left
        let top = posionCard1.top

        let = a = 700
        while (left !== posionCard2.left && bigleft === true) {

            if (left < posionCard2.left) {
                    Left(card, imgf)
                    a += 2
                    left += 0.5
                   if (left > posionCard2.left) {
                    bigleft = false
                   }
            } 
            if(left > posionCard2.left && bigleft === true){
               
                    Leftt(card, imgf)
                    a += 2  
                    left -= 0.5

            }
           
        }
        tre = 0
        while (top !== posionCard2.top && bigtop === true) {

            if (top < posionCard2.top) {
                Top(card, imgf)
                    top += 0.5
                    a += 2 
                    if (top > posionCard2.top) {
                        bigtop = false
                       }

            } 
            if(top > posionCard2.top && bigtop === true){
                Topp(card, imgf)  
                    top -= 0.5
                    a += 2


            } 
        }
        chang2Cards = false
    }
    const Find5Cards = () =>{
     let post5 = tr[2].getElementsByClassName("post")
     flipe5 = true
        for (let i = 0; i < post5.length; i++) {
            post5[i].classList.add('flipped','five')
        }
    }
   const ShowModal = (meesegText) => {
       debugger
       const Modal = document.getElementsByClassName("md-effect-1")[0]
       let meeseg = Modal.getElementsByTagName('h3')[0].innerText = meesegText
       Modal.classList.add('md-show');
       setTimeout(() => {
        Modal.classList.remove('md-show');
}, 1100)

    
   }
  