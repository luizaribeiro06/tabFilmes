import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor(public router: Router) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Viúva Negra',
      lancamento: '08/07/2021 (BR)',
      duracao: '2h15m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg',
      generos: ['Ação', 'Ficção Científica', 'Aventura'],
      pagina: '/viuva',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Homem-Aranha: Sem Volta Para Casa',
      lancamento: '15/12/2021 (BR)',
      duracao: '2h29m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
      generos: ['Ação', 'Ficção Científica', 'Aventura'],
      pagina: '/homemaranha',
      favorito: false
    },
    {
      nome: 'Através da Minha Janela',
      lancamento: '04/02/2022 (BR)',
      duracao: '1h53m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lQHfOaggM8xjvgGvZHpFPYXduRE.jpg',
      generos: ['Drama', 'Romance'],
      pagina: '/atravesjanela',
      favorito: false
    },
    {
      nome: 'Truque de Mestre',
      lancamento: '05/07/2013 (BR)',
      duracao: '1h56m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/sUi3a3BTTku0vyLjJQgKtiWCok7.jpg',
      generos: ['Crime','Suspense'],
      pagina: '/truque',
      favorito: false
    },
    {
      nome: 'El Camino: Um filme de Breaking Bad',
      lancamento: '11/10/2019 (BR)',
      duracao: '2h20m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5RjDlj17jz31kBIRYRk6iEB3YnJ.jpg',
      generos: ['Drama','Crime', 'Ação', 'Suspense'],
      pagina: '/elcamino',
      favorito: false
    },
    {
      nome: 'Pânico',
      lancamento: '13/01/2022 (BR)',
      duracao: '1h54m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oadFpqhJ26yxqIlYcGioZ2W3EHN.jpg',
      generos: ['Mistério', 'Suspense', 'Terror'],
      pagina: '/panico',
      favorito: false
    },
    {
      nome: '40 days & 40 nights',
      lancamento: '30/05/2002 (BR)',
      duracao: '1h36m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c0EdiB7bnGswLrHpeyLHAZkhONx.jpg',
      generos: ['Comédia', 'Romance'],
      pagina: '/40dn',
      favorito: false
    }

    

  ];

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

}
