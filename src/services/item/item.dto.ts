import { RMGData } from '@prisma/client';

export class ItemDto {
  id: number;
  updatedAt: Date;
  createdAt: Date;

  constructor({ id, updatedAt, createdAt }: RMGData) {
    this.id = id;
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
  }
}
