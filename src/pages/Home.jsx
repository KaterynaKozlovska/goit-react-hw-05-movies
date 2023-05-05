import { useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';

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

  useEffect(() => {
    setIsLoading(true);

    try {
      const response = axios.get(MoviesListFinder(movies));
      setMovies(prevState => [...prevState, response]);
    } catch {
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <main>
      <div>
        {isLoading} <p>Loading...</p> <MoviesListFinder movies={movies} /> :
        null
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
