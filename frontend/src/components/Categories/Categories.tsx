import "./Categories.css"
import Category from "../Category/Category.tsx";

interface Props {
    onSelectCategory :(index :number) => void
    selectedCategory :number
}

function Categories({onSelectCategory, selectedCategory} :Props) {

    const category_names :string[] = ["Оценки", "Забележки", "Похвали", "Отсъствия", "Теми", "Програма"]

    return <>
        <div className="categories">
            {category_names.map((category_name :string, index :number) => {
                return <Category text={category_name} id={index} highlighted={selectedCategory == index} onSelectCategory={onSelectCategory}></Category>
            }) }
        </div>
    </>
}

export default Categories