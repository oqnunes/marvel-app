import { createContext, useEffect } from "react";
import useSetState from "../utils/useSetState";

export const PaginationComicsContext = createContext();

const PaginationComicsProvider = (props) => {

  const [state, setState] = useSetState({
    data: [],
    currentPage: 1,
    comicsPerPage: 20,
    offSet: 0,
    lastIndexOf: 0,
    isLoading: true,
  });

  const [dataComics, setDataComics] = useSetState({
    selectData: []
  });

  useEffect(() => {
    if(state.data.length > 0){
      const indexOfLastComic = state.currentPage * state.comicsPerPage;
      const indefOfFirstComic = indexOfLastComic - state.comicsPerPage;

      const selectedData = state.data.slice(indefOfFirstComic, indexOfLastComic);

      setDataComics({
        selectData: selectedData
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state,]);

  return (
    <PaginationComicsContext.Provider
      value={{ 
        paginationComics: state, 
        setPaginationComics: setState,
        dataComics: dataComics,
        setDataComics: setDataComics
      }}
    >
      {props.children}
    </PaginationComicsContext.Provider>
  );
};

export default PaginationComicsProvider;
