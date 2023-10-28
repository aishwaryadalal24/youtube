

const CategoryButton = ({categoryName}) => {
    return <div className="p-3 m-2 rounded-lg bg-gray-100 text-md font-bold text-black hover:bg-gray-300 hover:cursor-pointer">
        {categoryName}
    </div>
}

export default CategoryButton;
