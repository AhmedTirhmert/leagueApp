import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import * as dotenv from 'dotenv';
import { patchVersion } from './riotApi';

dotenv.config();
let FirebaseAdmin, latestPatchVersion;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);

  const adminConfig: ServiceAccount = {
    projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
    privateKey: configService
      .get<string>('FIREBASE_PRIVATE_KEY')
      .replace(/\\n/g, '\n'),
    clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
  };

  //INTIATING FIREBASE ADMIN
  FirebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    databaseURL: 'leaguequizes.appspot.com',
  });

  //GETTING LATEST PATCH VERSION
  const { data: patchesHistory } = await patchVersion();
  latestPatchVersion = patchesHistory[0];

  app.enableCors();

  await app.listen(configService.get<string>('APP_PORT') || 4000);
}

bootstrap();

export { FirebaseAdmin, latestPatchVersion };
