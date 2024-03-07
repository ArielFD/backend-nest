import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cliente extends Document {
  @Prop()
  nombre: string;

  @Prop()
  email: string;

  @Prop()
  telefono: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
