import { plantList } from '../datas/plantList'

function ShoppingList() {
	return (
        <ul>
            {plantList.map((plant => (
                <li key={plant.id}>{plant.name}</li>
            )))}
        </ul>
    )
}

export default ShoppingList