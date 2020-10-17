const cardArray=[
  {
    name:'batman',
    img:'images/batman.png'
  },
  {
    name:'batman',
    img:'images/batman.png'
  },
  {
    name:'cheetah',
    img:'images/cheetah.png'
  },
  {
    name:'cheetah',
    img:'images/cheetah.png'
  },
  {
    name:'flash',
    img:'images/flash.png'
  },
  {
    name:'flash',
    img:'images/flash.png'
  },
  {
    name:'joker',
    img:'images/joker.png'
  },
  {
    name:'joker',
    img:'images/joker.png'
  },
  {
    name:'lexluthor',
    img:'images/lexluthor.png'
  },
  {
    name:'lexluthor',
    img:'images/lexluthor.png'
  },
  {
    name:'reverseflash',
    img:'images/reverseflash.png'
  },
  {
    name:'reverseflash',
    img:'images/reverseflash.png'
  },
  {
    name:'superman',
    img:'images/superman.png'
  },
  {
    name:'superman',
    img:'images/superman.png'
  },
  {
    name:'Wonderwoman',
    img:'images/Wonderwoman.png'
  },
  {
    name:'Wonderwoman',
    img:'images/Wonderwoman.png'
  }
]

cardArray.sort(() => 0.5 - Math.random())

const grid=document.querySelector(".grid")

var cardsChosen=[]
var cardsChosenId=[]
var cardsWon=[]

  for(let i=0; i<cardArray.length;i++){
    var card=document.createElement("img")
    card.setAttribute('src','images/dc.png')
    card.setAttribute('data-id',i)
    card.addEventListener('click', flipcard)
    grid.appendChild(card)
   
  }


function checkForMatch(cardsChosen,cardsChosenId){
  var cards=document.querySelectorAll("img")
 
  if(cardsChosen[0]===cardsChosen[1]){
    
    cardsWon.push(cardsChosen)
    document.getElementById("result").innerHTML = cardsWon.length;
  }else{
  
    cards[cardsChosenId[0]].setAttribute("src",'images/dc.png')
    cards[cardsChosenId[1]].setAttribute("src",'images/dc.png')
   
  }
  cardsChosen.pop()
  cardsChosenId.pop()
  cardsChosen.pop()
  cardsChosenId.pop()

 if(cardsWon.length===cardArray.length/2){
  alert("Congratulation! you found them all!!")
 }

}

function flipcard(){
  var cardId=this.getAttribute('data-id')
 
  if(cardId!=cardsChosenId[0]){
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    console.log(cardsChosen)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length==2)
      {
      setTimeout(function(){ checkForMatch(cardsChosen,cardsChosenId)},250)
      }
}
 
}


