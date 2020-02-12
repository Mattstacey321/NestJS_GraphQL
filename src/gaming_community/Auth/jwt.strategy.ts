import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { AuthService } from "./Auth.Service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly authService: AuthService) {
        super({

            jwtFromRequest: ExtractJwt.fromHeader("token"),
            ignoreExpiration: true,
            secretOrKey: process.env.SECRET_KEY,
            algorithms: "HS512"
        });

    }
    async validate(payload: any) {

        const userID = await this.authService.validateUser(payload.userID);
        if (!userID) {
            throw new UnauthorizedException();
        }
        return userID;
    }

}