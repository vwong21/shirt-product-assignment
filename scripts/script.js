const form = $(`form`)
const mainImages = $(`.main-images`)
const blackActiveImageLink = $(`#black-shirt-container .active`)
const imageLinks = $(`.img-container a`)
const radios = $(`#color-container input`)
const blackShirtContainer = $(`#black-shirt-container`)
const redShirtContainer = $(`#red-shirt-container`)
const redActiveImageLink = $(`#red-shirt-container .active`)
const greyShirtContainer = $(`#grey-shirt-container`)
const greyActiveImageLink = $(`#grey-shirt-container .active`)
const blackOption = $(`#black`)
const redOption = $(`#red`)
const greyOption = $(`#grey`)
const sizeChosen = $(`#choose-size`)
const smallSize = $(`#small-s`)
const mediumSize = $(`#medium-m`)
const largeSize = $(`#large-l`)
const sizes = $(`.sizes`)
const submitBtn = $(`#submit-btn`)


displayActiveImage(blackActiveImageLink)

imageLinks.click(function(e){
    e.preventDefault()
    imageLinks.removeClass('active')
    $(this).addClass('active')
    displayActiveImage($(this))
})


const quantity = $(`#quantity`)
const totalCost = $(`#total-cost`)

quantity.on('input', function(){
    let total = (quantity.val() * 20.00).toFixed(2)
    totalCost.html(`$${total}`)
})



redShirtContainer.hide()
greyShirtContainer.hide()

blackOption.click(function(){
    redShirtContainer.hide()
    greyShirtContainer.hide()
    blackShirtContainer.show()
    displayActiveImage(blackActiveImageLink)
})

redOption.click(function(){
    blackShirtContainer.hide()
    greyShirtContainer.hide()
    redShirtContainer.show()
    displayActiveImage(redActiveImageLink)
})

greyOption.click(function(){
    blackShirtContainer.hide()
    redShirtContainer.hide()
    greyShirtContainer.show()
    displayActiveImage(greyActiveImageLink)
})


function displayActiveImage(activeImageLink){
    mainImages.hide()
    const activeId = activeImageLink.attr("href")
    $(activeId).show()
}

sizes.click(function(){
    sizeChosen.html($("label[for='" + $(this).attr('id') + "']").text())
})

submitBtn.prop('disabled', true)

form.on('input', function(){

    total = parseFloat(totalCost.text().slice(1))
    if(total >= 20){
        if(sizeChosen.text() != 'Choose...'){
            submitBtn.prop('disabled', false)
            submitBtn.html('Add to Cart')
        }
    }
})


