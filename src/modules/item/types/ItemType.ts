export interface itemType {
  id: string;
  name: string;
  price: number;
  stock: number;
  discount: number;
  src?: string;
  createdAt: string;
  deletedAt?: string;
  updatedAt?: string;
}

export type CreateItemDto = {
  name: string;
  price: number;
  stock: number;
  discount: number;
  src?: string;
};
