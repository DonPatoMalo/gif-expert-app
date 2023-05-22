import {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Ducks']);
    const [isLoading, setIsLoading] = useState(true);

    const onAddCategory = ( newElement) => {
        if (categories.includes(newElement)){
          categories.splice(categories.indexOf(newElement), 1);
        }
        setCategories([ newElement, ...categories]);

    }
    return(
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory = { (value) => onAddCategory(value)}
            />
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                ))
                }
        </>
    )
}