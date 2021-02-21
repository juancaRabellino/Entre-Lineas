import { Link } from 'react-router-dom'
import Settings from './Settings'
import { connect } from 'react-redux'


const UserProfile = (props) => {

    console.log(props)

    return(
        <>
            <div className='containerComponentUserProfile'>
                <div className='containerBannerUserData'>
                    <div className='bannerUserData'>
                        <div className='photoEditProfile'>
                            <div className='photoUser'style={{ backgroundImage: `url(${props.loggedUser.image})`}}>
                            </div>
                            <div className='buttonEditProfile'>
                                <Link to='/settings'><button><i className="fas fa-cog"></i> Editar mis Datos</button></Link>
                            </div>
                        </div>
                        <div className='informationProfileUserBlock'>
                            <div className='informationProfileUserFixed'>
                                <div className='iconInformationProfileUserFixed'><i className="fas fa-user"></i></div>
                                <div className='dataInformationProfileUserFixed'><p>{props.loggedUser.firstname} {props.loggedUser.lastname}</p></div>
                            </div>
                            <div className='informationProfileUserFixed'>
                                
                                {props.loggedUser.birthday
                                ?
                                <>
                                    <div className='iconInformationProfileUserFixed'><i className="fas fa-birthday-cake"></i></div>
                                    <div className='dataInformationProfileUserFixed'>
                                        <p>{props.loggedUser.birthday.substr(0, 10)}</p>   
                                    </div>
                                </>
                                :
                                <>
                                    <div className='iconInformationProfileUserFixed'><i className="fas fa-envelope"></i></div>
                                    <div className='dataInformationProfileUserFixed'>
                                        <p>{props.loggedUser.email.substr(0, 10)}</p>   
                                    </div>
                                </>

                                }
                            </div>
                            <div className='informationProfileUserFixed'>
                                <div className='iconInformationProfileUserFixed'><i className="fas fa-bookmark"></i></div>
                                <div className='dataInformationProfileUserFixed'><p>Libros Guardados</p></div>
                            </div>
                            <div className='buttonLogout'>
                            <Link to='/' onClick={props.logout}><button className='buttonLogout'>Cerrar mi sesión</button></Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='containerContentOptions'>
                    <h2 className='titleProfile'>Mi Perfil en Entre Líneas   </h2>
                    <div className='containerNavMenu'>
                        <Link to='/library'><div className='optionMenu'>Mi biblioteca</div></Link>
                        <Link to='savedBooks'><div className='optionMenu savedBooks'>Mis libros guardados</div></Link>
                    </div>
                    <div className='containerViewComponentOption'>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
      loggedUser: state.auth.loggedUser
    }
}
export default connect(mapStateToProps)(UserProfile)

/*<Settings />*/