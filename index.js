const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
]

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]')
}





class BackgroundColorBody{

    constructor() {
      this.intervalId = null,
      this.isActive = false
    }
    

    onStart() {
       if (this.isActive) {
         return
        }

       this.isActive = true
        
       this.intervalId = setInterval(() => {
       let randomColorBody = this.randomIntegerFromInterval(0, colors.length)  
       document.body.style.backgroundColor = colors[randomColorBody]
       }, 1000)
     }
    
  
    
    onStop(){
        clearInterval(this.intervalId)
        this.isActive = false
    }
    
     randomIntegerFromInterval (min, max) {
	    return Math.floor(Math.random() * (max - min + 1) + min)
    }
}
  
   
const backgroundColorBodyNew = new BackgroundColorBody()


refs.start.addEventListener('click', backgroundColorBodyNew.onStart.bind(backgroundColorBodyNew))
refs.stop.addEventListener('click', backgroundColorBodyNew.onStop.bind(backgroundColorBodyNew))



