import Resource from "./Resource";
import { musicAPI } from "../axiosconfig";

const music = new Resource({ service: musicAPI, path: "/api/musics" });

export { music };
