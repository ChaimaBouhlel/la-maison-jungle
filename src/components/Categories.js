import { plantList } from "../datas/plantList"
import { useCategoryState } from "../atom"
import "../styles/Categories.css"

function Categories() {

    const [categorySelected, setCategorySelected] = useCategoryState();



    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    return (
        <div className='lmj-categories'>
            <label for="category-select">Choose a category:</label>
            <select id="category-select"
            
            value={categorySelected}
				onChange={(e) => setCategorySelected(e.target.value)}
				className='lmj-categories-select'
            >
                <option value="">--Please choose a category--</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <button onClick={() => setCategorySelected('')}>Réinitialiser</button>
        </div>
    )

}
export default Categories