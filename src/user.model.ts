import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongodb";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    username: String;

    @Prop()
    description: String;

    @Prop({ default: Date.now })
    date_added: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);