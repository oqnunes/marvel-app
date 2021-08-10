import { useEffect, useState } from 'react';

import LoadingGif from './../../images/loading.gif';

import Header from '../../components/Header/Header';
import ComicsList from '../../components/ComicsList/ComicsList';

import fetch_api from './utils/fetch_api';

import { ContainerApp, BodyArea, LoadingContent } from './WrapperIndex.components';

export const WrapperIndex = () => {

  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(comics.length <= 0){
      fetch_api({ setComics: setComics, setIsLoading: setIsLoading });
    }
  }, [comics]);

  return(
    <ContainerApp>
      <Header />
      {
        isLoading
         ? (
          <LoadingContent>
            <img src={LoadingGif} alt="Loading..." />
          </LoadingContent>
         ) : (
          <BodyArea>
            <ComicsList dataItems={comics} />
          </BodyArea>
         )
      }
    </ContainerApp>
  );
};