import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_LOGO } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_LOGO} alt="bg-logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
