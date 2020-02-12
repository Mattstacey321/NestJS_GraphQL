import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ListGameServices } from './listGame.service';
import {GameDto} from './type/Game.dto';
import { GameInput } from './input/Game.Input';
import { CreateGame } from './type/CreateGame.dto';
import { UseGuards, ExecutionContext } from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import { GqlAuthGuard } from '../Auth/AuthGuard';
import { CurrentUser } from '../Auth/CurrentUser';
import { AuthService } from '../Auth/Auth.Service';
import { JwtStrategy } from '../Auth/jwt.strategy';
@Resolver('ListGame')
export class ListGameResolver {
    constructor(
        private readonly listGameServices: ListGameServices,

    ) { }
    @UseGuards(GqlAuthGuard)
    @Query(()=>[GameDto])
    async getListGame(@CurrentUser() token :string ){
        console.log(token);
        return this.listGameServices.getListGame();
    }

    @Mutation(()=>CreateGame)
    async createGame(@Args('input') input:GameInput){
        return await this.listGameServices.createGame(input);
    }
}

