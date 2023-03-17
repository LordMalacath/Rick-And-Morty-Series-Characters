import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function List() {
  const { characters } = useSelector(state => state.characters);
  const navigate = useNavigate();
  const handleClick = (id, name) => {
    navigate(`/${id} ${name}`);
  };

  return (
    <div className='list' >

      {characters.length &&
        characters.map(({ name, species, image, id }) => (
          <div className='list__card card' key={id} onClick={() => handleClick(id, name)}>
            <div className='card__img'>
              <img src={image} alt='imag' />
            </div>

            <div className='card__info info'>
              <p className='info__name'>{name}</p>
              <p className='info__specie'>{species}</p>
            </div>
          </div>
        ))
      }

    </div>
  )
}
