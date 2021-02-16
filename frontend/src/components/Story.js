import { Link } from 'react-router-dom'
const Story=(props)=>{
    return(
        <>
        <div className='storyContainer'>
                <div className='storyPic' style={{backgroundImage:`url(${props.libro.image})`}}></div>
                <div className='storyBodyContainer'>
                    <p>{props.libro.title}</p>
                    <p>de {props.libro.user.firstname + ' ' + props.libro.user.lastname}</p>
                    <div className='storyIcons'>
                        <p>{props.libro.views}</p>
                        <p>{props.libro.stars.length}</p>
                        <p>{props.libro.chapters.length}</p>
                    </div>
                    <p className='storyDescription'>{props.libro.description.substr(0,150)+"..."}</p>
                    <div className='storyButtons'>
                        <Link to={`/story/${props.libro._id}`}><button className='btn btn-danger verMasStory'>Ver Mas</button></Link>
                    </div>
                </div>
        </div>
        </>
    )
}
export default Story