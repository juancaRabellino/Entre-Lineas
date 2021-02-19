import { Link } from 'react-router-dom'
import Settings from './Settings'


const UserProfile = () => {
    return(
        <>
            <div className='containerComponentUserProfile'>
                <div className='containerBannerUserData'>
                    <div className='bannerUserData'>
                        <div className='photoEditProfile'>
                            <div className='photoUser'>
                            </div>
                            <div className='buttonEditProfile'>
                                <button>Editar mis Datos</button>
                            </div>
                        </div>
                        <div className='informationProfileUserBlock'>
                            <div className='informationProfileUserFixed'>
                                <div className='iconInformationProfileUserFixed'><i class="fas fa-user"></i></div>
                                <div className='dataInformationProfileUserFixed'><p>Nombre de Usuario</p></div>
                            </div>
                            <div className='informationProfileUserFixed'>
                                <div className='iconInformationProfileUserFixed'><i class="fas fa-birthday-cake"></i></div>
                                <div className='dataInformationProfileUserFixed'><p>Cumpleaños</p></div>
                            </div>
                            <div className='informationProfileUserFixed'>
                                <div className='iconInformationProfileUserFixed'><i class="fas fa-bookmark"></i></div>
                                <div className='dataInformationProfileUserFixed'><p>Libros Guardados</p></div>
                            </div>
                            <button className='buttonLogout'>Cerrar mi sesión</button>
                        </div>
                    </div>
                </div>
                <div className='containerContentOptions'>
                    <h2 className='titleProfile'>Mi Perfil en Entre Líneas   </h2>
                    <div className='containerNavMenu'>
                        <Link to='/userProfile'><div className='optionMenu'>Mis datos</div></Link>
                        <Link to='/library'><div className='optionMenu'>Mi biblioteca</div></Link>
                        <Link to='savedBooks'><div className='optionMenu savedBooks'>Mis libros guardados</div></Link>
                    </div>
                    <div className='containerViewComponentOption'>
                        <Settings />
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserProfile