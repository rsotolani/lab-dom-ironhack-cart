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
  console.log("criando produto");
  
  //capturar objetos do dom de novo produto
  const newProduct = document.querySelector('.create-product');
  console.log("produtos: ", newProduct);

  const productName = newProduct.querySelector('#product-name').value;
  const productPrice = newProduct.querySelector('#product-price').value;  

  //capturar tabela dos produtos existentes
  const product = document.querySelector('#tbody');

  const tr = document.createElement('tr');
  tr.classList.add("product");
  product.appendChild(tr);
  const row = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
    `
    tr.innerHTML = row;

    const btnArr = document.querySelectorAll('.btn-remove');
    console.log(btnArr);
    btnArr.forEach( (el) => {
      el.addEventListener('click',removeProduct);
    });

    // const fragment = document.createDocumentFragment();
  // const tr = fragment
  //   .appendChild(document.createElement('td'))
  //   .appendChild(document.createElement('span'))
  // tr.textContent = productName.value;

  // product.appendChild(fragment);
  
  // const tdName = product.createElement('td');
  // tdName.textContent = productName.value;
  // const tdPrice = product.createElement('td');
  // tdPrice.textContent = productPrice.value;

  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName('btn btn-remove')
   for (let i of removeBtns) {
     i.addEventListener('click', removeProduct);
   }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  

});

