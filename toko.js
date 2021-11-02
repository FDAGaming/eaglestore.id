

var removeCartItemButtons = document.getElementsByClassName('btn-danger')
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal() 
    }) 
}

   
function updateCartTotal() {
    var cartItemCon = document.getElementsByClassName('row')[0]
    var cartRous = cartItemCon.getElementsByClassName('col-4')
    var total = 0
    for (var i = 0; i < cartRous.length; i++) {
        var cartrow = cartRous[i]
        var priceElement = cartrow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartrow.getElementsByClassName('cart-jumlah')[0]
        var price = parseFloat(priceElement.innerText.replace('Rp ',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('total-jumlah')[0].innerText =  'Rp ' + total
}