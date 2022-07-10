import { useState, useEffect } from 'react'
import '../styles/Cart.css'
import { useCartState } from '../atom'

function Cart() {
	const [isOpen, setIsOpen] = useState(true)
	const [cart, updateCart] = useCartState()

	useEffect(() => {
		document.title = `LMJ: ${cart}€ d'achats`
	},[cart])
	return isOpen ? (

		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			<h3>Total : {cart}€</h3>
			{
				cart === 0?
				<p>votre panier est vide</p>
				:
				<button
				className='lmj-cart-toggle-button'
				onClick={() => {
					updateCart(0)
				}}
			>
				Vider panier
			</button>
			}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
