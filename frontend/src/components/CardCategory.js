import { Link } from 'react-router-dom'

const CardCategory = () => {
    return(
        <>
            <div className='containerViewCardsCategories'>
                <Link to={'/category/action'}>
                    <div className='cardCategory'>
                        <div className='nameCategory'>
                            Acción
                        </div>
                        <div className='containerLogoCategory'>
                            <div className='logoCategory' style={{backgroundImage:`url(https://media.istockphoto.com/illustrations/after-the-war-in-battlefield-illustration-id1133395584?k=6&m=1133395584&s=612x612&w=0&h=7Mt6MDN_pcjZChU1mog6VW1DpOZlXPpoGQas-7nqtW8=)`, width: '8vw', height: '8vw'}}>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default CardCategory;