import Singer from "./Singer";

export default interface Music{
    id: string;
    _id: string;
    name: string;
    play_url: string;
    image_url: string;
    ranker: number | string;
    singers: Array<Singer>;
    singers_name: string;
    updated_at: number;
    
}