function choosePayment(method) {
    if (method === 'Cash on Delivery') {
        document.getElementById('result').innerText = 'Order complete. Thank you!';
    } else {
        document.getElementById('result').innerText = 'Sorry, this payment method is not available.';
    }
}
