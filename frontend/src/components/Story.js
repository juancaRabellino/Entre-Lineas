const Story=(props)=>{
    return(
        <>
        <div className='storyContainer'>
            <div className='storyPic' style={{backgroundImage:`url(${props.libro.image})`}}></div>
                <div className='storyBodyContainer'>
                    <p>{props.libro.title}</p>
                    <p>de {props.libro.user.firstname}</p>
                    <div className='storyIcons'>
                        <p>{props.libro.views}</p>
                        <p>{props.libro.stars.length}</p>
                        <p>{props.libro.chapters.length}</p>
                    </div>
                    <p>{props.libro.description.substr(0,300)+"..."}</p>
                </div>
        </div>
        </>
    )
}
export default Story