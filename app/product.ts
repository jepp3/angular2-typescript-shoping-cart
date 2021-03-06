/***
* A typescript interface describing what a product can contain.
*
* ( not to be confused by traditional oop interfaces, even if the goals are the same)
*
**/
export interface Product {
  id: number;
  description: string;
  price: number;
  stockQuantity: number;
  
}
