// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  let varSubtotal = (+price.innerText * +quantity.value);
  subtotal.innerText = varSubtotal;
  
  return varSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const multiProduct = document.getElementsByClassName('product');
  let totalCart = 0;

  for (let i of multiProduct) {
    totalCart += updateSubtotal(i);
  }

  
  // ITERATION 3 
  const total = document.querySelector('#total-value span');
  total.innerText = totalCart;  

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);

  const nodePai = target.parentNode.parentNode;
  nodePai.parentNode.removeChild(nodePai);

  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName('btn btn-remove')
  for (let i of removeBtns) {
    i.addEventListener('click', removeProduct);
  }

  //... your code goes here
});
