import { Controller, HttpCode, HttpStatus, Post, Body, Request } from '@nestjs/common';
import { AppService } from './app.service';
import * as requestIp from 'request-ip';
import * as ip2c from 'ip2c';

@Controller()
export class AppController {
  @Post('/country')
  @HttpCode(HttpStatus.OK)
  async getCountry(@Body() request: any, @Request() req: any): Promise<any> {
    const clientIp = requestIp.getClientIp(req);
    const countryCode = await ip2c.lookup(clientIp);

    return {
      result: countryCode,
      status: HttpStatus.OK,
    };
  }
}
