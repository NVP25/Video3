class Product {
 constructor(name, price, year) {
  this.name = name
  this.price = price
  this.year = year
 }
}

class UI {
 addProduct(product) {
  const productList = document.getElementById('product-list')
  const element = document.createElement('div')
  element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} -
                    <strong>Price</strong>: ${product.price} - 
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `
  productList.appendChild(element)
 }
 resetForm() {
  document.getElementById('product-form').reset()
 }
 deleteProduct(element) {
  if (element.name === 'delete') {
   element.parentElement.parentElement.parentElement.remove()
   this.showMessage('Producto eliminado satisfactoriamente', 'info')
  }
 }
 showMessage(message, cssClass) {
  const div = document.createElement('div')
  div.ClassName = 'alert alert-${cssClass} mt-5'
  div.appendChild(document.createTextNode(message))
  // mostrando en el DOM
  const container = document.querySelector('.container')
  const app = document.querySelector('#App')
  container.insertBefore(div, app)
  setTimeout(function () {
   document.querySelector('.alert').remove()
  }, 3000)
 }
}
// Evento DOM
document
 .getElementById('product-form')
 .addEventListener('submit', function (e) {
  const name = document.getElementById('name').Value
  const price = document.getElementById('price').Value
  const year = document.getElementById('year').Value

  const product = new Product(name, price, year)
  const UI = new UI()

  if (name === '' || price === '' || year === '') {
   return UI.showMessage('Completa los campos')
  }
  UI.addProduct(product)
  UI.resetForm()
  UI.showMessage('producto agregado satisfactoriamente', 'success')

  e.preventDefault()
 })

document.getElementById('product-list').addEventListener('click', function (e) {
 console.log(e.target)
})
