import { Link } from 'react-router-dom'

const CardCategory = () => {
    return (
        <>
            <div className='containerViewCardsCategories'>
            <Link to={'/stories/Acción'}>
                <div className='cardCategory'>
                    <div className='nameCategory'>
                            Acción
                    </div>
                    <div className='containerLogoCategory'>
                        <div className='logoCategory' style={{ backgroundImage: `url(https://media.istockphoto.com/illustrations/after-the-war-in-battlefield-illustration-id1133395584?k=6&m=1133395584&s=612x612&w=0&h=7Mt6MDN_pcjZChU1mog6VW1DpOZlXPpoGQas-7nqtW8=)`, width: '8vw', height: '8vw' }}>
                        </div>
                    </div>
                </div>
                </Link>
                <Link to='/stories/Aventura'><div className='cardCategory'>
                    <div className='nameCategory'>
                        <h2>Aventura</h2>
                    </div>
                    <div className='containerLogoCategory'>
                        <div className='logoCategory' style={{ backgroundImage: `url(https://img.freepik.com/free-vector/explorer-with-backpack-background_23-2148159527.jpg?size=626&ext=jpg)`, width: '8vw', height: '8vw' }}>
                        </div>
                    </div>
                </div></Link>
                <Link to='/stories/Clásicos'><div className='cardCategory'>
                    <div className='nameCategory'>
                        <h2>Clásicos</h2>
                    </div>
                    <div className='containerLogoCategory'>
                        <div className='logoCategory' style={{ backgroundImage: `url(https://lithub.com/wp-content/uploads/2018/04/a1a64211b2e1f8dbc07546bcc2d25352.jpg)`, width: '8vw', height: '8vw' }}>
                        </div>
                    </div>
                </div></Link>
                <div className='cardCategory'>
                    <div className='nameCategory'>
                        <h2>Ciencia Ficción</h2>
                    </div>
                    <div className='containerLogoCategory'>
                        <div className='logoCategory' style={{ backgroundImage: `url(http://s2.thingpic.com/images/7z/DABz323r1rhXM5f5dK3oCiZ2.jpeg)`, width: '8vw', height: '8vw' }}>
                        </div>
                    </div>
                </div>
                <div className='cardCategory'>
                    <div className='nameCategory'>
                        <h2>Historias Cortas</h2>
                    </div>
                    <div className='containerLogoCategory'>
                        <div className='logoCategory' style={{ backgroundImage: `url(https://image.freepik.com/free-vector/fantastic-stories-illustration_23-2147534105.jpg)`, width: '8vw', height: '8vw' }}>
                        </div>
                    </div>
                </div>
                <div className='cardCategory'>
                    <div className='nameCategory'>
                        <h2>Históricas</h2>
                    </div>
                    <div className='containerLogoCategory'>
                        <div className='logoCategory' style={{ backgroundImage: `url(https://cdn1.iconfinder.com/data/icons/landscape-v-2/512/Landscape_Circle_2_512px_00025-512.png)`, width: '8vw', height: '8vw' }}>
                        </div>
                    </div>
                </div>
                <div className='cardCategory'>
                    <div className='nameCategory'>
                        <h2>Humor</h2>
                    </div>
                    <div className='containerLogoCategory'>
                        <div className='logoCategory' style={{ backgroundImage: `url(https://thumbs.dreamstime.com/b/drag%C3%B3n-rojo-divertido-en-estilo-de-la-historieta-134547157.jpg)`, width: '8vw', height: '8vw' }}>
                        </div>
                    </div>
                </div>
                <div className='cardCategory'>
                    <div className='nameCategory'>
                        <h2>Romance</h2>
                    </div>
                    <div className='containerLogoCategory'>
                        <div className='logoCategory' style={{ backgroundImage: `url(https://cdn.architecturendesign.net/wp-content/uploads/2017/09/AD-Love-Illustrations-Hyocheon-Jeong-12.jpg)`, width: '8vw', height: '8vw' }}>
                        </div>
                    </div>
                </div>
                <div className='cardCategory'>
                    <div className='nameCategory'>
                        <h2>Suspenso</h2>
                    </div>
                    <div className='containerLogoCategory'>
                        <div className='logoCategory' style={{ backgroundImage: `url(https://st2.depositphotos.com/1998651/6007/v/600/depositphotos_60075979-stock-illustration-dark-labyrinth-with-exit-to.jpg)`, width: '8vw', height: '8vw' }}>
                        </div>
                    </div>
                </div>
                <div className='cardCategory'>
                    <div className='nameCategory'>
                        <h2>Terror</h2>
                    </div>
                    <div className='containerLogoCategory'>
                        <div className='logoCategory' style={{ backgroundImage: `url(https://img.maspormas.com/2017/08/bosque.jpg)`, width: '8vw', height: '8vw' }}>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardCategory;