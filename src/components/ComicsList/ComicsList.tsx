import styled from 'styled-components';

import ComicThumbNailNotAvailable from './../../images/image_not_available.png';

interface ComicsListProps {
  dataItems: any;
};

const ComicsList = ({ dataItems }: ComicsListProps) => {

  return(
    <ListOfComics>
      {
        dataItems.selectData.map((comic: any, index: Number) => {

          const validateImage = comic.thumbnail.path.endsWith('image_not_available')
            ? ComicThumbNailNotAvailable
            : `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

          return(
            <ComicBook key={`ItemComic-${index}`}>
              <img src={validateImage} alt={`Comic Case ${comic.id}`} />
              <ComicBookInfoHover className="hoverName">
                {comic.title}
              </ComicBookInfoHover>
            </ComicBook>
          );
        })
      }
    </ListOfComics>
  );

};

export default ComicsList;

const ListOfComics = styled.article`
  width: 100%;
  max-width: 1440px;

  padding: 220px 20px 60px;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

`;

const ComicBook = styled.div`
  width: 18%;
  height: 100%;

  display:block;
  flex-direction: column;
  align-items: center;

  border: 7px solid transparent;

  position: relative;
  overflow: hidden;

  &:hover{
    border: 7px solid #d92324;
    cursor: pointer;

    .hoverName{
      bottom: 0px;
      z-index: 1;
      opacity: 1;
    }
  }

  img{
    width: 100%;
  }
`;

const ComicBookInfoHover = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgba(255,255, 255,0.8);

  padding: 4px 10px;

  font-size: 16px;
  line-height: 22px;

  position: absolute;
  bottom: -30px;
  opacity: 0;

  transition: all 0.2s ease-in-out;

  z-index: -1;
`;