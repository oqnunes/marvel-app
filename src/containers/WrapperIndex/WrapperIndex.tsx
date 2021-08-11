import { useContext, useEffect, useRef } from 'react';

import LoadingGif from './../../images/loading.gif';

import Header from '../../components/Header/Header';
import ComicsList from '../../components/ComicsList/ComicsList';
import PaginationBox from '../../components/PaginationBox/PaginationBox';
import { PaginationComicsContext } from '../../contexts/PaginationComics';

import { ContainerApp, BodyArea, LoadingContent } from './WrapperIndex.components';

import fetch_api from './utils/fetch_api';
import ComicsListByCharacters from '../../components/ComicsListByCharacters/ComicsListByCharacters';

export const WrapperIndex = () => {

  const refEffect = useRef(null);

  const { paginationComics, setPaginationComics, dataComics } = useContext(PaginationComicsContext);

  useEffect(() => {
    if(paginationComics.data.length <= 0){
      fetch_api({ setComics: setPaginationComics });
    }
  }, [paginationComics, setPaginationComics]);

  return(
    <ContainerApp>
      <Header />
      {
        paginationComics.isLoading
         ? (
          <LoadingContent>
            <img src={LoadingGif} alt="Loading..." />
          </LoadingContent>
         ) : (
          <BodyArea>
            <div ref={refEffect} />
            {
              paginationComics.isSearching
                ? (
                  <ComicsListByCharacters data={paginationComics.comicsByCharacters} />
                ) : (
                  <>
                    <ComicsList 
                      dataItems={dataComics}
                    />
                    <PaginationBox refEffect={refEffect} />
                  </>
                )
            }
          </BodyArea>
         )
      }
    </ContainerApp>
  );
};