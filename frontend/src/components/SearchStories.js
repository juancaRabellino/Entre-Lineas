import CardCategory from "./CardCategory"

const SearchStories = () => {
    return(
        <div className='containerComponentSearchStories'>
            <div className='containerSearchBar'>
                <input type='text' className='inputSearchStories' placeholder='¿Qué vas a leer hoy?'></input>
                <div className='iconSearchStories'><i class="fas fa-search"></i></div>
            </div>
            <div className='containerViewCardsCategories'>
                <CardCategory />
            </div>
        </div>
    )
}

export default SearchStories;