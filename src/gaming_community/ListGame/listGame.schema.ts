import * as mongoose from 'mongoose';

export const listGameSchema= new mongoose.Schema({
    game_name:String,
    genres: [String],
    popularity: String,
    platforms:[String],
    tag:[String],
    logo:String,
    image:[String],
    cover_image:String
})