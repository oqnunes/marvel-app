
import styled from 'styled-components';

const ComicsListByCharacters = ({ data } : any) => {

  return(
    <BoxComicsByChar>
      {
        data && data.length > 0
        ? data.map((comic: any, index: Number) => {
          console.log({
            comic: comic
          })
          return(
            <h1 key={`ComicByChar-${index}`}>
              {comic.name}
            </h1>
          )
        }) : (
          <h1>No results.</h1>
        )
      }
    </BoxComicsByChar>
  )

}

export default ComicsListByCharacters;

const BoxComicsByChar = styled.section`
  padding: 220px 0px 30px;

  h1{
    color: white;
    margin-bottom: 20px;
    letter-spacing: 0.6px;
  }
`;