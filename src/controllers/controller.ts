import { AppDataSource } from "../../dataSource";
import Message from "../entities/message";

interface CreateMessageOption {
  name: string;
  message: string;
}

export default class MessageController {
  public static async createMessage(option: CreateMessageOption) {
    const { name, message } = option;

    return await AppDataSource.createQueryBuilder()
      .insert()
      .into(Message)
      .values({ name, message })
      .execute();
  }

  public static async getMessages() {
    return await AppDataSource.getRepository(Message)
      .createQueryBuilder('message')
      .orderBy({'id': 'ASC'})
      .getMany();
  }

  public static async deleteMessage(id: number) {
    return await AppDataSource.getRepository(Message)
      .createQueryBuilder('message')
      .delete()
      .where('message.id=:id', { id: id })
      .execute();
  }
}