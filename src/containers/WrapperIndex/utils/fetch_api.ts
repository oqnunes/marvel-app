import api_marvel from "../../../services/api_marvel";

const API_KEY = process.env.REACT_APP_MARVEL_API_KEY_PUBLIC;

interface FetchApiProps {
  setComics?: any;
  setIsLoading?: any
};

const fetch_api = async ({
  setComics,
  setIsLoading,
}: FetchApiProps) => {

  const fetch_comics = await api_marvel.get(`/comics`, {
    params: {
      apikey: API_KEY,
      limit: 99,
      orderBy: '-focDate',
      offset: 2
    }
  });

  if(fetch_comics.status === 200){
    setComics(fetch_comics.data.data.results);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

}

export default fetch_api;