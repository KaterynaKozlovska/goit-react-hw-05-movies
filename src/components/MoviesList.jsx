import { List, Item, StyledLink, Name } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, poster_path, title }) => (
        <Item key={id}>
          <StyledLink to={`/movies/&{id}`}>
            {/* <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj'
              }
              alt={title}
              width="100"
              height="160"
              loading="lazy"
            /> */}
            <Name>{title}</Name>
          </StyledLink>
        </Item>
      ))}
    </List>
  );
};
