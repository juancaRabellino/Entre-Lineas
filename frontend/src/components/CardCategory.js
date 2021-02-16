import { Link } from 'react-router-dom'
import {connect} from "react-redux"

const CardCategory = (props) => {
    console.log(props.cardCategory)
    return (
        <>
            <Link to={`/stories/${props.cardCategory.genre}`}>
                <div className='cardCategory'>
                    <div className='nameCategory'>
                            {props.cardCategory.genre}
                    </div>
                    <div className='containerLogoCategory'>
                        <div className='logoCategory' style={{ backgroundImage: `url(${props.cardCategory.image})`, width: '8vw', height:'8vw'}}>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
const mapStateToProps = state => {
    return {
        cardsCategories: state.cardR.cardsCategories
    }
}

export default connect(mapStateToProps)(CardCategory);