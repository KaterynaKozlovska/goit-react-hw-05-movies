const API_KEY = '23ef7ebe7a5765558b3c745e54a99f35';
const BASE_URL = 'api.themoviedb.org';

export default async function imageFinderApi(name, page) {
  const response = await fetch(
    `${BASE_URL}/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.ok;
}
// https://api.themoviedb.org/3/movie/550?api_key=23ef7ebe7a5765558b3c745e54a99f35
