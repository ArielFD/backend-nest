import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente } from './cliente.schema';

@Injectable()
export class ClientesService {
  constructor(
    @InjectModel(Cliente.name) private clienteModel: Model<Cliente>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    return this.clienteModel.find().exec();
  }

  async findOne(id: string): Promise<Cliente> {
    return this.clienteModel.findById(id).exec();
  }

  async create(cliente: Cliente): Promise<Cliente> {
    const createdCliente = new this.clienteModel(cliente);
    return createdCliente.save();
  }

  async update(id: string, cliente: Cliente): Promise<Cliente> {
    await this.clienteModel.findByIdAndUpdate(id, cliente).exec();
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.clienteModel.findByIdAndDelete(id).exec();
  }
}
