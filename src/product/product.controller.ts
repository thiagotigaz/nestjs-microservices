import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productSvc: ProductService) {}

  @Get()
  async all() {
    return this.productSvc.all();
  }

  @Post()
  async create(@Body('title') title: string, @Body('image') image: string) {
    return this.productSvc.create({ title, image });
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    return this.productSvc.get(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('image') image: string,
  ) {
    return this.productSvc.update(id, { title, image });
  }
}
