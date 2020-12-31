import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getViewName(): string {
   return 'index';
  }

  getHello() {
    return {
      message: 'Hello, world from Nest app!',
    };
  }

  getSecureResource() {
    return {
      message:
        'Access to protected resources granted! This protected resource is displayed when the token is successfully provided.',
    };
  }

}
