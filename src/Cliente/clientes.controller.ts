import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente.schema';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  async findAll(): Promise<Cliente[]> {
    return this.clientesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cliente> {
    return this.clientesService.findOne(id);
  }

  @Post()
  async create(@Body() cliente: Cliente): Promise<Cliente> {
    return this.clientesService.create(cliente);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() cliente: Cliente,
  ): Promise<Cliente> {
    return this.clientesService.update(id, cliente);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.clientesService.remove(id);
  }
}
