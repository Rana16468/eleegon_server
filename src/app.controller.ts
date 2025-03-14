
import { Controller, Get } from '@nestjs/common';
import { AppService, FaceData } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/myfacedata')
  getFaceData(): FaceData{
    return this.appService.getFaceData();
  }
  
}
