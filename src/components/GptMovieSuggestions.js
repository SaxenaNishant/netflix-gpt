import { useSelector } from "react-redux";
import MovieLists from "./MovieList";
const GptMovieSuggestions = () => {
  const { tmdbResults, movieResults } = useSelector((store) => store.gpt);
  if (!movieResults) return null;
  return (
    <div className="p-4 m-4 bg-black text-white opacity-90">
      <div>
        {movieResults.map((movieName, index) => (
          <MovieLists
            key={movieName}
            title={movieName}
            movies={tmdbResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
