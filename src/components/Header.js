import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { HEADER_LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { LANG_OPTIONS } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={HEADER_LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="py-2 px-8 mx-4 my-2 bg-purple-600 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {LANG_OPTIONS.map((lan) => (
                <option key={lan.identifier} value={lan.identifier}>
                  {lan.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="px-8 my-2 mx-4 bg-blue-700 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button className="font-bold text-white" onClick={handleSignout}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
