export interface ProductType {
  id: string;
  name: string;
  gendre: string;
  imageUrl: string;
  price: number;
  stock: number;
  description: string;
  categoryId: number;
}
export interface CreateProductType {
  name: string;
  gendre: string;
  price: number;
  stock: number;
  description: string;
  categoryId: number;
}
export interface ProductWithCategoryType {
  id: string;
  name: string;
  gendre: string;
  imageUrl: string;
  price: number;
  stock: number;
  description: string;
  categoryId: number;
  category: {
    id: number;
    name: string;
  };
}

export interface CategoryType {
  id: number;
  name: string;
}

export interface ActionButtonType {
  id: string | number;
  destroy: (id: string | number) => Promise<void>;
  isLoading: boolean;
  pathUrl: string;
}
export interface DeleteButtonType {
  id: string | number;
  destroy: (id: string | number) => Promise<void>;
  isLoading: boolean;
}

export interface QueryProductsParamsType {
  gendre: string;
  mainCategory: string;
  search: string;
  page: number;
}

export interface RegisterUserType {
  username: string;
  email: string;
  password: string;
}

export interface AddToCartType {
  userId: number;
  productId: string;
  price: number;
}

export interface CartType {
  id: number;
  userId: number;
  productId: string;
  total: number;
  quantity: number;
  product: ProductType;
}

export interface orderItemsType {
  orderId: string;
  productId: string;
  quantity: number;
  total: number;
  product: ProductType;
}
