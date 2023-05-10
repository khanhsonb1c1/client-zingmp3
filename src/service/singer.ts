import Resource from "./Resource";
import { musicAPI } from "../axiosconfig";

const singer = new Resource({ service: musicAPI, path: "/api/singers" });

function get_top_singers(){
    return musicAPI.get("/api/singers/top-singers-vn")
}

export { singer, get_top_singers };
