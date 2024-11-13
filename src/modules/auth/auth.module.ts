import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: "mi codigo secreto",
      signOptions: { expiresIn: '60S' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
