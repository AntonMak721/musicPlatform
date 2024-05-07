import { Module } from '@nestjs/common';
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';

@Module({
  imports: [
      ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
      TrackModule,
      FileModule,
    MongooseModule.forRoot('mongodb+srv://anton140496:LizjBBi8ZFf61QBi@musiccluster.deby5c0.mongodb.net/?retryWrites=true&w=majority&appName=MusicCluster'),],
  controllers: [],
  providers: [],
})
export class AppModule {}
