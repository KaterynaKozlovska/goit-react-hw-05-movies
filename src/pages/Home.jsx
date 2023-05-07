import { useEffect } from 'react';
import React from 'react';

import { useState } from 'react';
import { MoviesFinderApi } from '../moviesFinderApi';
import { MoviesList } from 'components/MoviesList';

// axios.defaults.baseURL = 'https://api.themoviedb.org';
// const MoviesListFinder = ({ movies }) => (
//   <ul>
//     {movies.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// `https://api.themoviedb.org/3/movie/550?api_key=23ef7ebe7a5765558b3c745e54a99f35`;

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const pathMovies = 'trending/movie/day';
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await MoviesFinderApi(pathMovies);
        setMovies(data.results);
      } catch {
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  if (!movies) {
    return null;
  }

  return (
    <main>
      <div>
        {isLoading} <MoviesList movies={movies} />
      </div>
    </main>
  );
};

//    componentDidMount()
//     this.setState({ isLoading: true });
//     const response = await axios.get("/search?query=react");
//     this.setState({ movies: response.data.hits, isLoading: false, });
//   }

//   render()
//     const { movies, isLoading  } = this.state;

//
