import Music from "./Music";

export default interface _Album{
    _id:string;
    id:string;
    name:string;
    image_url: string;
    musics: Array<Music>;
    created_at: number;
    ranker: number;
    singers_name: string;
    updated_at: number;
    description: string;
    likes: number;
}