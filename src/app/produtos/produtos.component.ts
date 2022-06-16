import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
  produtos: IProduto[] | undefined; //pode ser uma lista ou indefinido

  constructor(
    private produtosService:ProdutosService, //faz importação do serviço de produto 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  const produtos = this.produtosService.getAll(); 
  this.route.queryParamMap.subscribe(params => {
    const descricao = params.get("descricao")?.toLocaleLowerCase();

    if (descricao) {
      this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
      return;
    }

    this.produtos = produtos;

  } )
  }

}
