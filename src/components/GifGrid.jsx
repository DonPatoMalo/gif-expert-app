import {GifItem} from "../GifItem";
import {useFetchGifs} from "../hooks/useFetchGifs.js";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    return(
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h1>Cargando...</h1>)
            }
            <ol className={"card-grid"}>{
                images.map( img => (
                    <GifItem
                        key={img.id}
                        {...img}
                    />
                ))
            }

            </ol>
        </>
    )
}