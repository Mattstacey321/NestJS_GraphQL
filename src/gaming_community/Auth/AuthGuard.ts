import { Injectable, ExecutionContext, CanActivate, UnauthorizedException } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthService } from "./Auth.Service";
import { UnauthorizedError } from "type-graphql";


@Injectable()
export class GqlAuthGuard implements CanActivate {
  

  canActivate(context:ExecutionContext):boolean{
  
    const ctx = GqlExecutionContext.create(context);
    const token =ctx.getContext().req.headers.token;
    if(token == null){
      throw new UnauthorizedException();
    }

    else return true;
  
  }
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}