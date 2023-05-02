import Resource from "./Resource";
import { musicAPI } from "../axiosconfig";

const singer = new Resource({ service: musicAPI, path: "/api/singers" });

export { singer };
