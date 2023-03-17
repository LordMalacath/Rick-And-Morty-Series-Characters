import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import _ from 'lodash';
import arrow from 'img/arrow_back_24px.png'
import './Character.scss'
import { useGetCharacterByIdQuery } from 'api/RickAndMorty/';


export default function Character() {
  const {
    gender,
    status,
    species,
    origin,
    type,
    image,
    name } = useSelector(state => state.characters.character);
  const navigate = useNavigate();
  const location = useLocation();
  const characterId = _.split(location.pathname.slice(1), "%20", 1)[0];
  useGetCharacterByIdQuery(characterId);

  return (
    <div className='character'>
      <button onClick={() => navigate(-1)}><img src={arrow} alt='<-' />GO BACK</button>

      <div className='character__img'>
        <img src={image} alt='character_image' />
      </div>

      <div className='character__name'>{name}</div>

      <div className='character__tittle'>Informations</div>

      <div className='character__informations informations'>
        <div className='informations__subTittle'>Gender</div>
        <div className='informations__text'>{gender || "unknown"}</div>
        <div className='informations__divider'></div>

        <div className='informations__subTittle'>Status</div>
        <div className='informations__text'>{status || "unknown"}</div>
        <div className='informations__divider'></div>

        <div className='informations__subTittle'>Specie</div>
        <div className='informations__text'>{species || "unknown"}</div>
        <div className='informations__divider'></div>

        <div className='informations__subTittle'>Origin</div>
        <div className='informations__text'>{origin?.name || "unknown"}</div>
        <div className='informations__divider'></div>

        <div className='informations__subTittle'>Type</div>
        <div className='informations__text'>{type || "unknown"}</div>
        <div className='informations__divider'></div>
      </div>
    </div>
  )
}
