import CardCategory from "./CardCategory"
const dataCards =[
    {
        "categoryName": "Acción",
        "categoryPic": "https://media.istockphoto.com/illustrations/after-the-war-in-battlefield-illustration-id1133395584?k=6&m=1133395584&s=612x612&w=0&h=7Mt6MDN_pcjZChU1mog6VW1DpOZlXPpoGQas-7nqtW8="
    },
    {
        "categoryName": "Aventura",
        "categoryPic": "https://img.freepik.com/free-vector/explorer-with-backpack-background_23-2148159527.jpg?size=626&ext=jpg"
    },
    {
        "categoryName": "Clásicos",
        "categoryPic": "https://lithub.com/wp-content/uploads/2018/04/a1a64211b2e1f8dbc07546bcc2d25352.jpg"
    },
    {
        "categoryName": "Ciencia Ficción",
        "categoryPic": "http://s2.thingpic.com/images/7z/DABz323r1rhXM5f5dK3oCiZ2.jpeg"
    },
    {
        "categoryName": "Historias Cortas",
        "categoryPic": "https://image.freepik.com/free-vector/fantastic-stories-illustration_23-2147534105.jpg"
    },
    {
        "categoryName": "Históricas",
        "categoryPic": "https://cdn1.iconfinder.com/data/icons/landscape-v-2/512/Landscape_Circle_2_512px_00025-512.png"
    },
    {
        "categoryName": "Humor",
        "categoryPic": "https://thumbs.dreamstime.com/b/drag%C3%B3n-rojo-divertido-en-estilo-de-la-historieta-134547157.jpg"
    },
    {
        "categoryName": "Romance",
        "categoryPic": "https://cdn.architecturendesign.net/wp-content/uploads/2017/09/AD-Love-Illustrations-Hyocheon-Jeong-12.jpg"
    },
    {
        "categoryName": "Suspenso",
        "categoryPic": "https://st2.depositphotos.com/1998651/6007/v/600/depositphotos_60075979-stock-illustration-dark-labyrinth-with-exit-to.jpg"
    },
    {
        "categoryName": "Terror",
        "categoryPic": "https://img.maspormas.com/2017/08/bosque.jpg"
    }
]
const Search = () => {
    return(
        <div className='containerComponentSearchStories'>
            <div className='containerSearchBar'>
                <input type='text' className='inputSearchStories' placeholder='¿Qué vas a leer hoy?'></input>
                <div className='iconSearchStories'><i class="fas fa-search"></i></div>
            </div>
            <div className='containerTitleSearch'>
                <h1>Explorá las categorías</h1>
            </div>
            <div className='containerViewCardsCategories'>
                <CardCategory />
            </div>
        </div>
    )
}

export default Search;