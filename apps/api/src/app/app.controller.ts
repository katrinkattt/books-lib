import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  @Post()
  createBook(@Body() {title, description}: {title: string, description: string}) {
    return this.appService.addBook(title, description);
  }
  @Post('editBook')
  editBook(@Body() {id, title, description}: {id: string, title: string, description: string}) {
    return this.appService.editBook(id, title, description);
  }
  @Post('isRead')
  readBook(@Body() {id, read}: {id: string, read: boolean}) {
    return this.appService.bookRead(id, read);
  }
}
