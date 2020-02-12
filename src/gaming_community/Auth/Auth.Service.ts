import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService
    ) {
        
        
    }
    async validateUser(userID:string): Promise<any> {
        
        if (userID="45") {
          
          return true;
        }
        return null;
      }
 

  
}