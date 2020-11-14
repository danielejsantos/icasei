import axios from "axios";

export const YOUTUBE_API = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});