import { Form, Input, IconSearch } from './NoticesSearch.styled';


export const NoticesSearch = () => {
  // const search = useSelector(selectSearch);
  // const dispatch = useDispatch();



  // const handleChangeSearch = e => {
  //   const { value } = e.target;
  //   dispatch(setSearch(value));
  //};
  return (
    <Form>
      <Input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        // id={searchPetId}
        // onChange={handleChangeSearch}
        // value={search}
      />
      <IconSearch size={20} />
    </Form>
  );
};

export default NoticesSearch;
