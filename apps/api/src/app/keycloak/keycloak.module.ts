import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard, RoleGuard, ResourceGuard, KeycloakConnectModule,  AuthenticatedUser } from 'nest-keycloak-connect';

@Module({
  imports: [
    KeycloakConnectModule.register({
      // serverUrl
      // authServerUrl: 'https://lemur-10.cloud-iam.com/auth/realms/fanout/protocol/openid-connect/auth',
      authServerUrl: 'https://lemur-10.cloud-iam.com/auth/',
      realm: 'fanout',
      clientId: 'nestjs-microservice',
      secret: 'MIICtTCCAZ0CBgF/0WKD0zANBgkqhkiG9w0BAQsFADAeMRwwGgYDVQQDDBNuZXN0anMtbWljcm9zZXJ2aWNlMB4XDTIyMDMyODE2MzQyOFoXDTMyMDMyODE2MzYwOFowHjEcMBoGA1UEAwwTbmVzdGpzLW1pY3Jvc2VydmljZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAIwHguxVFagVkKvMrhCTqLLfxflN8ac29IJnfRVbOtsUFp5FlPleXUN4aDqotUsMsXAqtjq4i3gEpm6S4R8hoxpwv2JtH+xYgaRmLeC9N2mbOJTKaX6Q1iVS0oGTWSB3wjgHxya6GCjphmp+wJC3qNbDV8yQkQtHzdpsQ+OHz9K18Epwu9gCM8HUdor7bB1ekMXw3r5aeCjvdTGBHXhS5GUdy1UF7BAq0bjwaHx5kQySgfZINZGHc4oAeGAgRwuOzBAx0dhjAjCsRhjPrfefXnFaMrpGFHz6BqVHqL6Xn0kjcxb9yY9UkxMzYPp372givHroNEtzbPBo6N7p9Dp9Is8CAwEAATANBgkqhkiG9w0BAQsFAAOCAQEALNMZijC7bLEYhTdw0BjyO+vD85U9w3Mm3aBWalIzse0rLKD67rGudpGTmhkiFrNiMDWPihUhQ6w0PmwlJhhMZpRSxh/UaYs7qghzQPPmmHx2x5+n/xtPUVum+PwDZxIQlLitC/yeVNXiCOxrVTJZfmTQmk7j/PKSjVlyeMNlgmspsOi6ZG7TXD52A+qCZoqhPz7iVPfEJXEb9H5JBTI/PLHt/RTBplBOwt+MJr/D5JIEOEh4I49SeEAA04wEvojig0XiQUjWC+tKB6qEZlIVHUJ+23/4OiWUMZfVhBpRnUfqWIn6ak2CCk3AeC0+5dcsROETARTtiuXBGOzZk92WsA==', // Secret key of the client taken from keycloak server
    }),
  ],
  providers: [
    // This adds a global level authentication guard,
    // you can also have it scoped
    // if you like.
    //
    // Will return a 401 unauthorized when it is unable to
    // verify the JWT token or Bearer header is missing.
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    // This adds a global level resource guard, which is permissive.
    // Only controllers annotated with @Resource and methods with @Scopes
    // are handled by this guard.
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    // New in 1.1.0
    // This adds a global level role guard, which is permissive.
    // Used by `@Roles` decorator with the optional `@AllowAnyRole` decorator for allowing any
    // specified role passed.
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ]
})
export class KeycloakModule {}
