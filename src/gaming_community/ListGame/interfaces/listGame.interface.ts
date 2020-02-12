import {Document} from 'mongoose';

export interface listGame extends Document {
    readonly id:String;
    readonly game_name: string;
    readonly genres: string[];
    readonly popularity: string;
    readonly platforms: string[];
    readonly tag: string[];
    readonly logo: string;
    readonly image: string[];
    readonly cover_image: string
}