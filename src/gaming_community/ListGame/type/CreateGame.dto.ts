import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class CreateGame {
    @Field({nullable:true})
    id?: string;
    @Field()
    readonly game_name: string;
    @Field(type=>[String])
    readonly genres: string;
    @Field()
    readonly popularity: string;
    @Field(()=>[String])
    readonly platforms: string[];
    @Field(()=>[String])
    readonly tag: string[];
    @Field()
    readonly logo: string;
    @Field(()=>[String])
    readonly image: string[];
    @Field()
    readonly cover_image: string
}