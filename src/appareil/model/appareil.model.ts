import { Column, Model, Table } from 'sequelize-typescript';
@Table
export class Appareil extends Model {
  @Column
  nom: string;
  @Column
  description: string;
  // @Column
  // max: number;
  @Column
  alume: number;

}
