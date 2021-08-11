
import { useContext } from 'react';
import styled from 'styled-components';

import { PaginationComicsContext } from '../../contexts/PaginationComics';
import LogoMarvel from './../../images/marvel_logo.png';
import useSetState from './../../utils/useSetState';

import searchByCharacters from './utils/searchByCharacters';
import updateDataByOffSet from '../PaginationBox/utils/updateDataByOffSet';

var _timer = 0;

interface InputChangeProps {
  value: any
};

const Header = () => {

  const { paginationComics, setPaginationComics } = useContext(PaginationComicsContext);

  const [localState, setLocalState] : any = useSetState({
    search: ""
  });

  const _handleSubmitSearch = (value: String) => {
    searchByCharacters({
      search: value,
      setPaginationComics: setPaginationComics
    });
  }

  const _handleOnChangeSearch = ({ value }: InputChangeProps) => {

    setLocalState({
      search: value, 
    });

    if(value === ""){
      setPaginationComics({
        isSearching: false
      });
      return null;
    }

    setPaginationComics({
      isLoading: true
    });

    (() => {
      if (_timer) window.clearTimeout(_timer);
      _timer = window.setTimeout(function () {

        updateDataByOffSet({ 
          setPaginationComics: setPaginationComics, 
          fetch_offset: paginationComics.lastIndexOf + 100,
        });
        _handleSubmitSearch(value);

      }, 1000);
    })();
  };

  return(
    <NavColor>
      <NavColorContainer>
        <img src={LogoMarvel} alt="Marvel Logo" />
        <InputSearch 
          value={localState.search}
          onChange={(event) => _handleOnChangeSearch({ value: event.target.value })}
          placeholder="deadpool" />
      </NavColorContainer>
    </NavColor>
  );

};

export default Header;

const NavColor = styled.nav`
  width: 100%;

  display: flex;
  justify-content: center;

  background-color: #dc2727e6;

  position: fixed;
  z-index: 2;
`;

const NavColorContainer = styled.nav`
  width: 100%;
  max-width: 1440px;

  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-bottom: 30px;
  }
`;

const InputSearch = styled.input`
  width: 100%;
  max-width: 320px;

  padding: 10px 16px;

  font-size: 18px;
  outline: none;
  text-decoration: none;
  cursor: pointer;

  border: 0;
  border-radius: 4px;

  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  -moz-box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;