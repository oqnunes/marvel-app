import api_marvel from "../../../services/api_marvel";

const API_KEY = process.env.REACT_APP_MARVEL_API_KEY_PUBLIC;

interface UpdateDateProps {
  setPaginationComics?: any;
  fetch_offset?: Number;
  action_type?: String
};

const updateDataByOffSet = async ({
  setPaginationComics,
  fetch_offset,
  action_type
}: UpdateDateProps) => {

  const fetch_comics = await api_marvel.get(`/comics`, {
    params: {
      apikey: API_KEY,
      limit: 100,
      orderBy: '-focDate',
      offset: fetch_offset
    }
  });

  if(fetch_comics.status === 200){
    setPaginationComics({ 
      data: fetch_comics.data.data.results, 
      offSet: 0,
      lastIndexOf: fetch_offset,
      currentPage: 1,
      comicsPerPage: 100,
      isLoading: false
     });
  }

  return null;

};

export default updateDataByOffSet;