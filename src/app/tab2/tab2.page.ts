import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { ISerie } from '../model/ISerie';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router) {}

  listaSeries: ISerie[] = [
    {
      nomeS: 'Breaking Bad',
      lancamentoS: '20/01/2008 (BR)',
      temporadaS: '5 temporadas',
      classificacaoS: 9,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg',
      generosS: ['Drama', 'Crime'],
      paginaS: '/mortal-kombat',
      favoritoS: false
    },
    {
      nomeS: 'Peaky Blinders',
      lancamentoS: '12/09/2013 (BR)',
      temporadaS: '6 temporadas',
      classificacaoS: 9,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg',
      generosS: ['Drama', 'Crime'],
      paginaS: '/mortal-kombat',
      favoritoS: false
    },
    {
      nomeS: 'Greys Anatomy',
      lancamentoS: '27/05/2005 (BR)',
      temporadaS: '19 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/diS4zWXohKIp9VuN9sJDRrqe5en.jpg',
      generosS: ['Drama Médico', 'Comédia', 'Romance'],
      paginaS: '/greys',
      favoritoS: false
    },
    {
      nomeS: 'Game of Thrones',
      lancamentoS: '17/04/2011 (BR)',
      temporadaS: '8 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generosS: ['Sci-Fi & Fantasy','Drama','Ação', 'Aventura'],
      paginaS: '/got',
      favoritoS: false
    },
    {
      nomeS: 'The Walking Dead',
      lancamentoS: '31/10/2010 (BR)',
      temporadaS: '11 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generosS: ['Ação','Drama','Sci-Fi & Fantasy','Aventura'],
      paginaS: '/the-walking-dead',
      favoritoS: false
    },
    {
      nomeS: 'Flash',
      lancamentoS: '07/10/2014 (BR)',
      temporadaS: '9 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lFxIoMKqkgTuxpghTPHBjoVstMV.jpg',
      generosS: ['Drama', 'Sci-Fi & Fantasy'],
      paginaS: '/flash',
      favoritoS: false
    },
    {
      nomeS: 'The Good Doctor',
      lancamentoS: '25/09/2017 (BR)',
      temporadaS: '6 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v9WYk0nigzR9NAEjeSmfI6s4XA2.jpg',
      generosS: ['Drama'],
      paginaS: '/the-good-doctor',
      favoritoS: false
    },
    {
      nomeS: 'The Boys',
      lancamentoS: '25/07/2019 (BR)',
      temporadaS: '3 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ut4PhX7OP2l2oJhrIUYWnt9pnQU.jpg',
      generosS: ['Sci-Fi & Fantasy', 'Ação', 'Aventura'],
      paginaS: '/the-boys',
      favoritoS: false
    }
  ];


  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

}
