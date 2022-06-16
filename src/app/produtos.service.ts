import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService { //esse serviço que tem acesso a nosso lista de produtos 

  produtos: IProduto[] = produtos;//propriedade:produto do tipo: IProduto [vetor] e começa com os produtos 
// tem acesso direto ao arquivo 

  constructor() { }

  getAll(){   //retorna a lista de produtos
    return this.produtos;
  }

  getOne(produtoId:number){ //recebe o Id do produto e retona so o produto que tem aquele Id
    return this.produtos.find(produto => produto.id = produtoId);//find é para expecificar uma condição para encontrar o produto
  }
}
