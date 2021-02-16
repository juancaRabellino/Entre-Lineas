
const Stories = (props)=>{
    const namePage = props.match.params.genre
    if(namePage==='aventura'){
        var libros=[{
            title: 'Mi Dios Del Sol',
            bookPic:'../assets/libroPrueba1.jpg',
            user:'Makotto Kamado',
            stars:[1,2,3,4],
            views:23,
            chapters:[1,2,3,4,5,6],
            description:'Esta historia narra el momento en que Tanjiro y Shinobu se conocen en la finca mariposa. Cuento desde mi punto de vista lo que yo hubiera echo para desarrollar este ship...'
        },{
            title: 'Mia El Comienzo',
            bookPic:'../assets/libroPrueba2.jpg',
            user:'Maria Jose Morales Rodriguez',
            stars:[1,2,3,4,5,6],
            views:32,
            chapters:[1,2,3,4,5,6,7,8,9,10,11],
            description:'"Primer libro de la saga «Mía»" - ¿Porque eres así? - ¿Así como? - No lo sé, aveces tan fría y sin sentimientos y otras veces tan tierna y cariñosa - Si no te gusta..'
        },{
            title: 'Mi Jefe Ryder O´Conor',
            bookPic:'../assets/libroPrueba3.jpg',
            user:'usuario Raro xd',
            stars:[1,2,3],
            views:12,
            chapters:[1,2,3],
            description:'La historia podrá tener el mismo titulo que muchas historias pero, lo que se escribe es diferente ¡Disfruten La Historia!'
        },{
            title: 'Nuestro Tacto',
            bookPic:'../assets/libroPrueba4.jpg',
            user:'herophinefan',
            stars:[1,2,3,4,6,7,8,2,3,34,4,2],
            views:51,
            chapters:[1,2,3,4,5,6,8,5,3,2,2,4,5,6,],
            description:'No es cómo las demás historias, no, ella no es virgen, no se sonroja por todo, no se deja intimidar por nadie y no es para nada tonta ni amorosa. Ella es fuerte y lo sa...'
        }]
    }else /* if(namePage==='accion') */{
        var libros=[{
            title: 'De Niñera',
            bookPic:'../assets/libroPrueba5.jpg',
            user:'VN',
            stars:[1,2,3,4],
            views:23,
            chapters:[1,2,3,4,5,6],
            description:'¿Por qué acepte este trabajo?'
        },{
            title: 'Corazon de Hierro',
            bookPic:'../assets/libroPrueba7.jpg',
            user:'Maria Jose Morales Rodriguez',
            stars:[1,2,3,4,5,6],
            views:32,
            chapters:[1,2,3,4,5,6,7,8,9,10,11],
            description:'Natasha Petrov, la coronel del escuadrón 2 de la milicia alemana, la mejor, la mujer más dotada de toda la milicia cuenta con todo tipo de reconocimientos a tan solo sus..'
        },{
            title: 'The Umbrella Academy',
            bookPic:'../assets/libroPrueba6.jpg',
            user:'usuario Raro xd',
            stars:[1,2,3],
            views:12,
            chapters:[1,2,3],
            description:'No es la tipica historia donde todo es perfecto, donde tu amor verdadero esta a la vuelta de la esquina, donde en tu vida esta todo hecho, donde tienes una familia disfu...'
        },{
            title: 'Dulce Veneno',
            bookPic:'../assets/libroPrueba8.jpg',
            user:'herophinefan',
            stars:[1,2,3,4,6,7,8,2,3,34,4,2],
            views:51,
            chapters:[1,2,3,4,5,6,8,5,3,2,2,4,5,6,],
            description:'Gian Caccini es un hombre que tiene una gran lista detrás de él de mujeres, controlador y además compulsivo. Uno de los solteros más codiciados del mundo. Hades Athens E...'
        }]
    }
    return (
        <>
        <div className='storiesContainer'>
            <h1>Historias de <span className='capitalize'>{namePage}</span></h1>
            <div className='boxStories'>
                <div className='upContainerStories'>
                    <p>{libros.length} Historias</p>
                    <div className='boxInputStories'>
                        <label for="popular">Filtrar Por:</label>
                        <select name="popular" id="cars">
                            <option value="mostPopular">Mas Populares</option>
                            <option value="lessPopular">Menos Populares</option>
                        </select>
                    </div>
                </div>
                <div className='downContainerStories'>
                    {libros.map(libro=>{
                        return(
                            <>
                           <div className='storyContainer'>
                                <div className='storyPic' style={{backgroundImage:`url(${libro.bookPic})`}}></div>
                                <div className='storyBodyContainer'>
                                    <p>{libro.title}</p>
                                    <p>de {libro.user}</p>
                                    <div className='storyIcons'>
                                        <p>{libro.views}</p>
                                        <p>{libro.stars.length}</p>
                                        <p>{libro.chapters.length}</p>
                                    </div>
                                    <p>{libro.description}</p>
                                </div>
                           </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}
export default Stories