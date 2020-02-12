import { Module } from '@nestjs/common';
import { ListGameResolver } from './listGame.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { listGameSchema } from './listGame.schema';
import { ListGameServices } from './listGame.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../Auth/jwt.strategy';

@Module({
    imports: [
        
        MongooseModule.forFeature(
        [{ name: 'ListGame', schema: listGameSchema }
    ])],
    providers: [ListGameServices,ListGameResolver],
    
})

export class ListGameModule {


}