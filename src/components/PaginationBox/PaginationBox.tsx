
import { useContext } from 'react';
import styled from 'styled-components';

import { PaginationComicsContext } from '../../contexts/PaginationComics';

import updateDataByOffSet from './utils/updateDataByOffSet';

const PaginationBox = ({refEffect}: any) => {

  const { paginationComics, setPaginationComics } = useContext(PaginationComicsContext);

  const handleUpEffect = () => {
    refEffect.current.scrollIntoView({ behavior: "smooth" });
    setPaginationComics({
      isLoading: true
    });
  }

  const _handleClickPrevius = () => {
    handleUpEffect();

    if(paginationComics.lastIndexOf === 0 && paginationComics.offSet === 0){
      setTimeout(() => {
        setPaginationComics({
          isLoading: false
        });
      }, 400);

      return null;
    }

    if(paginationComics.offSet === 0){
      updateDataByOffSet({ 
        setPaginationComics: setPaginationComics, 
        fetch_offset: paginationComics.lastIndexOf - 100,
        action_type: "previous"
      });
      setTimeout(() => {
        setPaginationComics({
          isLoading: false,
          currentPage: 5,
          comicsPerPage: 20,
        });
      }, 400);
    }else{
      setTimeout(() => {
        setPaginationComics({
          currentPage: paginationComics.currentPage - 1,
          offSet: ((paginationComics.currentPage - 1) * paginationComics.comicsPerPage),
          isLoading: false
        });
      }, 400);
    }

    setTimeout(() => {
      setPaginationComics({
        currentPage: paginationComics.currentPage - 1,
        offSet: ((paginationComics.currentPage - 1) * paginationComics.comicsPerPage),
        isLoading: false
      });
    }, 400);
  };
  
  const _handleClickNext = () => {
    handleUpEffect();

    const nextOffSet = (paginationComics.comicsPerPage * paginationComics.currentPage) + paginationComics.comicsPerPage;

    if(nextOffSet > 100){
      updateDataByOffSet({ 
        setPaginationComics: setPaginationComics, 
        fetch_offset: paginationComics.lastIndexOf + 100
      });
      setTimeout(() => {
        setPaginationComics({
          isLoading: false
        });
      }, 400);
    }else{
      setTimeout(() => {
        setPaginationComics({
          currentPage: paginationComics.currentPage + 1,
          offSet: ((paginationComics.currentPage + 1) * paginationComics.comicsPerPage),
          isLoading: false
        });
      }, 400);
    }
  };

  return (
    <BoxPagination>
      <button onClick={_handleClickPrevius}>
        previous page
      </button>
      <button onClick={_handleClickNext}>
        next page
      </button>
    </BoxPagination>
  );

};

export default PaginationBox;

const BoxPagination = styled.div`
  width: 100%;
  max-width: 1440px;

  padding: 0px 27px;
  margin-bottom: 60px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 14px 24px;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 900;
    outline: none;
    text-decoration: none;
    background-color: white;
    border: 0;
    color: #dc2727;
    cursor: pointer;
  }
`;