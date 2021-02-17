import { Link } from 'react-router-dom'
const Story=(props)=>{
    return(
        <>
        <div className='storyContainer'>
                <div className='storyPic' style={{backgroundImage:`url(${props.libro.image})`}}></div>
                <div className='storyBodyContainer'>
                    <p className='storyTitle'>{props.libro.title}</p>
                    <p className='storyUser'>de {props.libro.user.firstname + ' ' + props.libro.user.lastname}</p>
                    <div className='storyIcons'>
                        <p classNameName='storyViews'><i className="far fa-eye"></i> {props.libro.views}</p>
                        <p className='storyStars'><i class="far fa-star"></i> {props.libro.stars.length}</p>
                        <p className='storyChapters'><i class="fas fa-list-ul"></i> {props.libro.chapters.length}</p>
                    </div>
                    <p className='storyDescription'>{props.libro.description.substr(0,120)+"..."}</p>
                    <div className='storyButtons'>
                        <Link to={`/story/${props.libro._id}`}><button className='btn btn-danger verMasStory'>Ver Mas</button></Link>
                    </div>
                </div>
        </div>
        </>
    )
}
export default Story