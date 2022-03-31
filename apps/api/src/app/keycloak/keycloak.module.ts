import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard, KeycloakConnectModule } from 'nest-keycloak-connect';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8080/auth',
      realm: 'Demo-Realm',
      clientId: 'nest-app',
      secret: '83790b4f-48cd-4b6c-ac60-451a918be4b9', // Secret key of the client taken from keycloak server
    }),
  ],
  providers: [
    // This adds a global level authentication guard,
    // you can also have it scoped
    // if you like.
    //
    // Will return a 401 unauthorized when it is unable to
    // verify the JWT token or Bearer header is missing.
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ]
})
export class KeycloakModule {}
