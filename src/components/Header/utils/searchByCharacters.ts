import api_marvel from "../../../services/api_marvel";

const API_KEY = process.env.REACT_APP_MARVEL_API_KEY_PUBLIC;


interface searchByCharactersProps {
  search: String;
  setPaginationComics?: any;
} 

const searchByCharacters = async ({
  search,
  setPaginationComics
}: searchByCharactersProps) => {

  const fetch_comics = await api_marvel.get(`/characters`, {
    params: {
      apikey: API_KEY,
      limit: 100,
      orderBy: '-modified',
      nameStartsWith: search
    }
  });
  if(fetch_comics.status === 200){
    setPaginationComics({
      isLoading: false,
      isSearching: true,
      comicsByCharacters: fetch_comics.data.data.results
    })
  }else{
    // Handle with error in the future.
  } 

}

export default searchByCharacters;