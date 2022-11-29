import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) { }

  //creating a user
  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  // Reading user data
  async readUser() {
    return this.userModel.find({})
      .then((user) => {
        return user;
      }).catch((err) => console.log(err));
  }

  // updating data
  async updateUser(id: String, data): Promise<User> {
    //we have to create a new class(DTO) for updation.
    return this.userModel.findByIdAndUpdate(id, data, { new: true })   //New here is used to show the updated answer as soon as it is updated
  }

  //deleting data
  async deleteUser(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }
}
