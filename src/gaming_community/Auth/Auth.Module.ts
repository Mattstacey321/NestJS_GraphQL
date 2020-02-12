import {Module} from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './Auth.Service';

@Module({
    imports:[
        PassportModule,
        JwtModule.register({
            secret: process.env.SECRET_KEY,
            signOptions: { expiresIn: '60s' },
          }),
        
    ],
    providers:[
        JwtStrategy,AuthService
    ]    
})
export class AuthModule{}