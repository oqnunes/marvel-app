import api_marvel from "../../../services/api_marvel";

const API_KEY = process.env.REACT_APP_MARVEL_API_KEY_PUBLIC;

interface FetchApiProps {
  setComics?: any;
};

const fetch_api = async ({
  setComics
}: FetchApiProps) => {

  const fetch_comics = await api_marvel.get(`/comics`, {
    params: {
      apikey: API_KEY,
      limit: 100,
      orderBy: '-focDate',
      offset: 0
    }
  });

  if(fetch_comics.status === 200){
    setComics({ 
      data: fetch_comics.data.data.results
     });
    setTimeout(() => {
      setComics({ 
        isLoading: false
       });
    }, 1000);
  }else{
    // Handle with error in the future.
  } 

}

export default fetch_api;