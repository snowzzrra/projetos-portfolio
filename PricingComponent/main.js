const pageviews = document.getElementById('pageviews-quantity')
const price = document.getElementById('monthly-price')
const rangeInput = document.getElementById('range-input')
const billing = document.getElementById('togglepricing')

billing.addEventListener('click', () => {
    if (billing.checked){
        price.innerText = parseInt(price.innerText) * 0.75
    } else{
        updateValues(rangeInput.value)
    }
})

rangeInput.addEventListener('input', () => {
    updateValues(rangeInput.value)
})

function updateValues(value){
    switch (value){
        case '0':
            pageviews.innerText = '10K'
            price.innerText = 8.00
        break
        case '25':
            pageviews.innerText = '50K'
            price.innerText = 12.00
        break
        case '50':
            pageviews.innerText = '100K'
            price.innerText = 16.00
        break
        case '75':
            pageviews.innerText = '500K'
            price.innerText = 24.00
        break
        case '100':
            pageviews.innerText = '1M'
            price.innerText = 36.00
        break
    }
    if (billing.checked){
        price.innerText = parseInt(price.innerText) * 0.75
    }
}