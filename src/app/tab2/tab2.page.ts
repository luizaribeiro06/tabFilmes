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
      nomeS: 'Flash',
      lancamentoS: '05/08/2014 (BR)',
      temporadaS: '9 temporadas',
      classificacaoS: 7.8,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg',
      generosS: ['Drama', 'Sci-0fi & Fantasy'],
      paginaS: '/flash',
      favoritoS: false
    },
    {
      nomeS: 'Peaky Blinders',
      lancamentoS: '12/09/2013 (BR)',
      temporadaS: '6 temporadas',
      classificacaoS: 10,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg',
      generosS: ['Drama', 'Crime'],
      paginaS: '/peakyblinders',
      favoritoS: false
    },
    {
      nomeS: 'Wandinha',
      lancamentoS: '11/09/2022 (BR)',
      temporadaS: '1 temporada',
      classificacaoS: 8.6,
      cartazS: 'https://images-ext-1.discordapp.net/external/Adwwd8_au8_ANFGp8lg2sGiUzzsHDSpUlFJwD0vdsPo/https/www.themoviedb.org/t/p/w600_and_h900_bestv2/ooBR3qulC40ws0QkYBUAYFKmLRE.jpg?width=395&height=593',
      generosS: ['Mistério', 'Comédia'],
      paginaS: '/wan',
      favoritoS: false
    },
    {
      nomeS: 'Dark',
      lancamentoS: '08/07/2017 (BR)',
      temporadaS: '3 temporadas',
      classificacaoS: 8.4,
      cartazS: 'https://media.discordapp.net/attachments/991354329103605820/1108053811764932648/apbrbWs8M9lyOpJYU5WXrpFbk1Z.png?width=395&height=593',
      generosS: ['Drama', 'Mistério'],
      paginaS: '/dark',
      favoritoS: false
    },
    {
      nomeS: 'One Punch Man',
      lancamentoS: '14/02/2015 (BR)',
      temporadaS: '2 temporadas',
      classificacaoS: 8.4,
      cartazS: 'https://images-ext-2.discordapp.net/external/vi6egfKINuPFtiNTVZb3ouG8QCSnWpVT7_2040bwpgs/https/www.themoviedb.org/t/p/w600_and_h900_bestv2/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg?width=395&height=593',
      generosS: ['Ação', 'Aventura'],
      paginaS: '/man',
      favoritoS: false
    }
  ];


  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

}
