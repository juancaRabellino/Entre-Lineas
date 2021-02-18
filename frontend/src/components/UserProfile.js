import Link from 'react-router-dom'


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
                        </div>
                    </div>
                </div>
                <div className='containerContentOptions'>
                </div>
            </div>
        </>
    )
}
export default UserProfile