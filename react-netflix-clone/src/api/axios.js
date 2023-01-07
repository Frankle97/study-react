import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "6119607661ec7eeff4875532bd595b37",
        language: "ko-KR"
    }
});

export default instance;