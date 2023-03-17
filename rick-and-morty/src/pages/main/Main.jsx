import { useDispatch, useSelector } from 'react-redux';
import { useGetCharacterByNameQuery } from 'api/RickAndMorty';
import { signInWithGoogle } from 'api/firebase/loginWithGoogle'
import List from './components/list/List'
import Search from './components/search/Search';
import searchIcon from 'img/Leading Icon.png'
import tittleImg from 'img/RickAndMorty.png'
import './Main.scss'
import { signOut } from 'firebase/auth';
import { auth } from 'api/firebase';
import { setUser } from 'redux/slices/app';


export default function Main() {
  const { search } = useSelector(state => state.app);
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.app.user);
  useGetCharacterByNameQuery(search);
  const handleLogout = async () => {
    await signOut(auth);
    dispatch(setUser(''));
  }

  return (
    <div className='main'>
      {name ? <div className='main__login' onClick={handleLogout}>{name}</div>
        :
        <button className='main__login' onClick={() => signInWithGoogle(dispatch)}>Login</button>
      }
      <div className='main__tittle'>
        <img src={tittleImg} alt='Rick & Morty' />
      </div>

      <div className='main__search'>
        <img src={searchIcon} alt='Search' />
        <Search />
      </div>

      <List />
    </div>
  )
}
