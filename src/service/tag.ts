import Resource from "./Resource";
import { musicAPI } from "../axiosconfig";

const tag = new Resource({ service: musicAPI, path: "/api/tags" });

export { tag };
