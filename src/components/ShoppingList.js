import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import { useCategoryState } from '../atom'

function ShoppingList() {

const  [categorySelected, setCategorySelected] = useCategoryState()

	return (
		<div className='lmj-shopping-list'>
		<Categories></Categories>
		

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) => (
					categorySelected ==="" || categorySelected===category?
					<PlantItem
						key={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
						price={price}
					/>
					:null
				))}
			</ul>
			
		
		</div>
	)
}

export default ShoppingList
