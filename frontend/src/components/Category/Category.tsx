import "./Category.css"

interface Props {
    text :string
    id :number
    highlighted :boolean
    onSelectCategory :(index :number) => void
}

function Category({text, id, highlighted, onSelectCategory}: Props) {

    return <>
        <div onClick={() => onSelectCategory(id)} className="category" style={{backgroundColor: highlighted ? "#bc90fd" : "unset"}}>{text}</div>
    </>
}

export default Category