// Global Variables
let slider = document.querySelector('.homes-container')
let innerSlider = document.querySelector('.home-container-slides')
let containerImg = document.querySelector('.home-container-img')
let homeForSale = document.querySelector('.homeforsale')
let linkText = document.querySelector('.link-text')
let locations = document.querySelector('.locations')

let pressed = false
let startx
let x

// Mouse hover to open 'Home for sale' tab
homeForSale.addEventListener('mouseover', (e) =>{
    slider.style.display = 'grid'
    homeForSale.style.backgroundColor = 'white'
    linkText.style.color = 'black'
    locations.style.display = 'flex'
})

// Mouse away to close 'Home for sale' tab
slider.addEventListener('mouseout', (e) =>{
    slider.style.display = 'none'
    homeForSale.style.backgroundColor = 'transparent'
    linkText.style.color = 'white'    
})

// Mouse grab to slide homes left/ right 
slider.addEventListener('mousedown', (e)=> {
    pressed = true
    startx = e.offsetX - innerSlider.offsetLeft
    slider.style.cursor = 'grabbing'
})

slider.addEventListener('mouseenter', ()=>{
    slider.style.cursor = 'grab'
})

slider.addEventListener('mouseup', ()=>{
    slider.style.cursor = 'grab'
})

window.addEventListener('mouseup', ()=>{
    pressed = false
})

slider.addEventListener('mousemove', (e)=>{
    if(!pressed) return
    e.preventDefault()

    x = e.offsetX

    innerSlider.style.left = `${ x - startx }px`

    checkboundary()
})

// Function to not slide to far right/left
function checkboundary(){
    let outer = slider.getBoundingClientRect()
    let inner = innerSlider.getBoundingClientRect()

    if(parseInt(innerSlider.style.left) > 0){
        innerSlider.style.left = '0px'
    } else if(inner.right < outer.right){
        innerSlider.style.left = `-${inner.width - outer.width}px`
    }
}