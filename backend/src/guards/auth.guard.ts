import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { IncomingHttpHeaders } from 'http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return validateRequest( request );
    }
}


function validateRequest(req: Request): boolean {
    const headers = req.headers;
    return 'authorization' in headers && headers.authorization === 'bearer testToken';
}