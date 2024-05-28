import { useSelector, useDispatch } from "react-redux";
import lan from "../utils/languageConstants";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const languageType = useSelector((store) => store.config?.lan);
  const searchRef = useRef();
  const dispatch = useDispatch();
  const searchTMDMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // const searchText = searchRef.current.value;
    // const gptQuery =
    //   "Act as a movie recomendation and suggest some movie for the query: " +
    //   searchText +
    //   ". only give me names of 5 movies, comma seperated like the example of the result ahead. Example - Padosan, Amar Akbar Antoni etc";

    // API CALL OPENAI ------
    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    const gptResults = {
      choices: [
        {
          message: {
            content:
              "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan",
          },
        },
      ],
    };
    const gptMovies = gptResults.choices[0].message.content?.split(", ");
    const data = gptMovies.map((movie) => searchTMDMovie(movie));
    const gptMoviesListData = await Promise.all(data);
    dispatch(
      addGptMovieResult({
        tmdbResults: gptMoviesListData,
        movieResults: gptMovies,
      })
    );
  };
  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center">
      <form
        className=" w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lan[languageType].gptSearchPlaceholder}
          ref={searchRef}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lan[languageType].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
