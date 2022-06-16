import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho (){
  this.itens = JSON.parse(localStorage.getItem ("carrinho") || "[]"); // aqui diz onde estarão as informações dentro do carrinho da página, || "" essa parate é para diz para pegar uma string vazia se não encontrar carrinho localStorage.getItem ("carrinho")
  return this.itens;
 }

 adicionarAoCarrinho(produto: IProdutoCarrinho) { //add item ao carrinho
  this.itens.push(produto);
  localStorage.setItem ("carrinho", JSON.stringify(this.itens));
 }

 removerProdutoCarrinho(produtoId:number) {
  this.itens = this.itens.filter(item => item.id!==produtoId);
  localStorage.setItem ("carrinho", JSON.stringify(this.itens));
 }

limparCarrinho(){
  this.itens = [];
  localStorage.clear();
}

}
