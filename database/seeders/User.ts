import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Roles from "App/Enums/Roles";
import Hash from "@ioc:Adonis/Core/Hash";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        roleId: Roles.ADMIN,
        email: 'admin@mail.com',
        password: 'Password123!',
      },
      {
        roleId: Roles.USER,
        email: 'user@mail.com',
        password: 'Password123!',
      },
    ])
  }
}
