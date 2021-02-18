import {connect} from 'react-redux'
import {useState,useEffect}from'react'
import bookActions from "../redux/actions/bookActions"
import Story from './Story'

const Stories = (props)=>{
    const namePage = props.match.params.genre
    const [boolean,setBoolean]=useState(true)


    useEffect(async()=>{
        await props.getByGenre(namePage)
        props.booksByGenre.sort((a,b)=> b.views - a.views)
        setBoolean(!boolean)
    },[])
    console.log(props.booksByGenre)
    function sortFilter(value) {
        if(value ==="mostPopular"){
           props.booksByGenre.sort((a,b)=> b.views - a.views)
           setBoolean(!boolean)
        }else if(value === "lessPopular"){
           props.booksByGenre.sort((a,b)=> a.views - b.views)
           setBoolean(!boolean)
        }
    }

    return (
        <>
        <div className='storiesContainer'>
            <h1>Historias de <span className='capitalize'>{namePage}</span></h1>
            <div className='boxStories'>
                <div className='upContainerStories'>
                    <p className='storyNumber'>{props.booksByGenre.length} Historias</p>
                    <div className='boxInputStories'>
                        <label for="popular">Filtrar Por:</label>
                        <select onChange={e => sortFilter(e.target.value)} name="popular" id="cars">
                            <option value="mostPopular">Mas Populares</option>
                            <option value="lessPopular">Menos Populares</option>
                        </select>
                    </div>
                </div>
                <div className='downContainerStories'>
                    {
                    boolean ? props.booksByGenre.map(libro=>{
                        return(
                            <Story libro={libro}/>
                        )
                    }): props.booksByGenre.map(libro=>{
                        return(
                            <Story libro={libro}/>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        books: state.bookR.books,
        booksByGenre: state.bookR.booksByGenre
    }
  }

const mapDispatchToProps = {
    getByGenre: bookActions.getByGenre,

}
export default connect(mapStateToProps,mapDispatchToProps)(Stories);