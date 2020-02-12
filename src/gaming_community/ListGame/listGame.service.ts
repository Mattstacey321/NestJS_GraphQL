import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { listGame } from './interfaces/listGame.interface';
import { GameDto } from "./type/Game.dto";
import { Model } from "mongoose";

@Injectable()
export class ListGameServices {
    constructor(
        @InjectModel('ListGame')
        private readonly listGameModel: Model<listGame>
        

    ) { }

    async createGame(createGameDto: GameDto): Promise<listGame> {
        const createGame = new this.listGameModel(createGameDto);
        return await createGame.save();
    }
    async getListGame(): Promise<listGame[]> {
        return await this.listGameModel.find();
    }
}