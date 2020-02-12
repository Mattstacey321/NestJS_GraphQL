import { Module, Injectable } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListGameModule } from './gaming_community/ListGame/listGame.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { GqlAuthGuard } from './gaming_community/Auth/AuthGuard';
import { AuthService } from './gaming_community/Auth/Auth.Service';
import { AuthModule } from './gaming_community/Auth/Auth.Module';

@Module({
  imports: [
    ListGameModule,
    AuthModule,
    JwtModule.register({
      secretOrPrivateKey: process.env.secret_key,
      signOptions: { expiresIn: '60s' },
    }),
    MongooseModule.forRootAsync(
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService:ConfigService) => ({
          uri: configService.get('mongodb_uri'),useUnifiedTopology: true,useNewUrlParser: true
        }),
        
      }
    ),
    
    ConfigModule.forRoot({isGlobal:true}),
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
      typePaths: ['./**/*.graphql'],
      debug: true,
      playground: true,
      context: ({ req }) => ({ req }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
