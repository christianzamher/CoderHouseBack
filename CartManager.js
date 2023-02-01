import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require("fs");
const path = './files/carts.json'

//Carts

export default class CartManager{
    constructor(){
        this.carts = []
    }
        getCart(){
            if (fs.existsSync(path)) {
                const carts = JSON.parse(fs.readFileSync(path, "utf-8"))
                console.log("El carrito ya existe")
                return carts
            } 
            else {
                console.log("El carrito no existe")
                }
        }

        addCart(){

            const cart = {
                    id: this.#addId(),
                    product: []
                }
                const cartFile = this.getCart()
                productsFile.push(cart)
                fs.writeFileSync(path, JSON.stringify(cartFile));
                    
                }   

        addProductCart(nuevoCarrito){
        const { idProduct, quantity , idCart } = nuevoCarrito

        if( !idProduct|| !quantity || !idCart){
            console.log('Falta campo')} 
            else {
            const cart = {
                idProduct,
                quantity
            }
            const cartFile = this.getCart()
            productsFile.push(cart)
            fs.writeFileSync(path, JSON.stringify(cartFile));
                
            }   
        } 

        getCartById(id){
            const carts = this.getCart();
            return (carts.find(cart => cart.id === id)) || 'Error: Carro no encontrado'
        }

        #addId(){
            let id = 1
            const carts = this.getCart()
            if (carts.length!==0){
                id = carts[carts.length-1].id + 1
            }
            return id
        }
}
