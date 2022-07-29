let block_img = document.querySelector('.block_img')
let block_img1 = document.querySelector('.block_img1')
let box_icon_xmark = document.querySelector('.box_icon_xmark')

block_img.addEventListener('click' , () => {

    box_icon_xmark.style.opacity = 1

    block_img1.addEventListener('click' , () => {
        block_img1 = document.querySelector('.block_img1')
        box_icon_xmark.style.opacity = 0
    })
})
