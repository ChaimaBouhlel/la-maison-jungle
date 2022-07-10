import CareScale from './CareScale'
import '../styles/PlantItem.css'
import { useCartState } from '../atom'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light, price }) {
	const [cart, updateCart] = useCartState()
	return (
		<li className='lmj-plant-item' onClick={() => handleClick}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
				<p>price = {price} $ </p>
				<button onClick={() => updateCart(cart +price)}>Ajouter</button>
			</div>
		</li>
	)
}

export default PlantItem
