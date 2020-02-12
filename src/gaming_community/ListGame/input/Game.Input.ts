import {InputType, Field, ID} from 'type-graphql';
@InputType()
export class GameInput{
    //?: + nullable:true set field la co the null hoac khong <==> field!
    @Field({nullable:true})
    id?:string;
    @Field()
    readonly game_name: string;
    @Field(()=>[String])
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
