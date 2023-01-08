import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "../../api/axios";
import "./SearchPage.css";
import {useDebounce} from "../../hooks/useDebounce";

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const searchTerm = useDebounce(query.get("q"), 500);

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm).then();
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    console.log(searchTerm);
    try {
      const request = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setSearchResult(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  }

    const renderSearchResults = () => {
      return searchResult.length > 0 ? (
        <section className="search-container">
          {searchResult.map((movie) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
              return(
                <div className="movie" key={movie.id}>
                  <div onClick={() => navigate(`/${movie.id}`)} className="movie__column-poster">
                    <img
                      src={movieImageUrl} alt="movie"
                    className="movie__poster"/>
                  </div>
                </div>
              )
          }
          })}
        </section>
      ) : (
        <section className="no-results">
          <div className="no-results__text">
            <p>
              찾고자하는 검색어"{searchTerm}"에 맞는 영화가 없습니다.
            </p>
          </div>
        </section>
      )
    };

  return renderSearchResults();
}

