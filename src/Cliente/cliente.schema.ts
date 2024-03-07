import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cliente extends Document {
  @Prop({ maxlength: 50 })
  nombre: string;

  @Prop({ maxlength: 100 })
  apellidos: string;

  @Prop({ maxlength: 20 })
  identificacion: string;

  @Prop({ maxlength: 20 })
  telefonoCelular: string;

  @Prop({ maxlength: 20 })
  otroTelefono: string;

  @Prop({ maxlength: 200 })
  direccion: string;

  @Prop({})
  fNacimiento: Date;

  @Prop({})
  fAfiliacion: Date;

  @Prop({ maxlength: 1, enum: ['F', 'M'] })
  sexo: string;

  @Prop({ maxlength: 200 })
  resenaPersonal: string;

  @Prop({})
  imagen: string;

  @Prop()
  interesFK: string;

  @Prop()
  usuarioId: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
