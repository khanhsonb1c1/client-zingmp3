import Resource from "./Resource";
import { musicAPI } from "../axiosconfig";

const album = new Resource({ service: musicAPI, path: "/api/albums" });

function fetchTopAlbums() {
  return musicAPI.post("/api/albums/get-top-albums");
}

export { album, fetchTopAlbums };
