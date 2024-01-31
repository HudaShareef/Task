export interface Product  {
    id?: number;
    name: string;
    data: ProductData;
  }

  
export interface ProductData {
  year: number;
  price: number;
  CPUmodel: string;
  HardDiskSize: string;
}