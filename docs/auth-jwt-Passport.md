# Instalacion
```
npm i --save @nestjs/jwt passport-jwt bcrypt
npm i --save-dev @types/passport-jwt
```
# Arrancamos el proyecto
```
npm run start:dev
```
# Modules & Resource
```
Crea un módulo de autenticación (`auth`):
 nest g mo modules/auth

Genera un recurso de `users`, con controlador y servicio:
 nest g res modules/users
```
# Controllers & Services
```
nest g co modules/auth
nest g s modules/auth
```