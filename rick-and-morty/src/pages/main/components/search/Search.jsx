import { rickAndMortyApi } from 'api/RickAndMorty';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from 'redux/slices/app';


export default function Search() {
  const search = useSelector(state => state.app);
  const { register, handleSubmit } = useForm({ defaultValues: search });
  const dispatch = useDispatch();

  const onSubmit = ({ search }) => {
    dispatch(setSearch(search));
    dispatch(rickAndMortyApi.endpoints.getCharacterByName.initiate(search));
  };

  return (
    <form action={'.'} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="search"
        placeholder="Filter by name..." {...register("search", {})} />
    </form>
  )
}
