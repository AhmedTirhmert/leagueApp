import { Controller, Get, Param } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  getAll() {
    return this.itemService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.itemService.getById(id);
  }
}
