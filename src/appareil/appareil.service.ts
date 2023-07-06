import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Appareil } from './model/appareil.model';

@Injectable()
export class AppareilService {
  constructor(
    @InjectModel(Appareil)
    private appareil: typeof Appareil,
  ) {}
  async create(appareil: Appareil) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.appareil.create(appareil)
      .then((value) => {
        return value;
      })
      .catch(() => {
        return { message: "il y'a eu une erreur", statusCode: '501' };
      });
  }

  async update(appareil: Appareil, id: string) {
    const a = await this.appareil.findByPk(id);
    if (a) {
      return this.appareil.update({alume: appareil.alume, description: appareil.description}, {where:{id}}).then((value) => {
        console.log(value);
        return value;
      });
    }
    return {message: "l'appareil n'existe pas", statusCode: 404};
  }

  async getOneByPId(id: string) {
    return await this.appareil.findByPk(id).then((value) => {
      if (!value)
        return {message: 'the element you find does not exist', statusCode: 200}
      return value;
    }).catch(() => {
      return {message: 'an error acquire', statusCode: 501}
    })
  }

  async deleteByPId(id: string) {
    return await this.appareil.destroy({where: {id}}).then((value) => {
      if (!value)
        return {message: 'the element you want to delete does not exist', statusCode: 404}
      return {message: 'successfully deleted the appareil', statusCode: 404};
    }).catch(() => {
      return {message: 'an error acquire', statusCode: 501}
    })
  }

  async getAll() {
    return await this.appareil.findAll({where:{id:{}}}).then((value) => {
      if (!value)
        return {message: 'the element you want to delete does not exist', statusCode: 404}
      return value;
    }).catch(() => {
      return {message: 'an error acquire', statusCode: 501}
    })
  }
}
