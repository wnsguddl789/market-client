export interface postType {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

export type CreateItemDto = {
  name: string;
  price: number;
  stock: number;
  discount: number;
  src?: string;
};
