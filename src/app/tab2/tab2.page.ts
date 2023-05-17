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
      paginaS: '/bb',
      favoritoS: false
    },
    {
      nomeS: 'Peaky Blinders',
      lancamentoS: '12/09/2013 (BR)',
      temporadaS: '6 temporadas',
      classificacaoS: 9,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg',
      generosS: ['Drama', 'Crime'],
      paginaS: '/pb',
      favoritoS: false
    },
    {
      nomeS: "Jojo's Bizarre Adventure",
      lancamentoS: '06/10/2012 (BR)',
      temporadaS: '6 temporadas',
      classificacaoS: 9,
      cartazS: 'https://jovemnerd.com.br/wp-content/uploads/2022/03/jogos-bizarre-adventure-stone-ocean.jpg',
      generosS: ['Animação', 'Aventura', 'Ação'],
      paginaS: '/jojos',
      favoritoS: false
    },
    {
      nomeS: 'The End of the F***ing World',
      lancamentoS: '24/10/2017 (BR)',
      temporadaS: '2 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/zQ5fG5NAQ5K8cMm58bxQNwUEbMj.jpg',
      generosS: ['Comédia', 'Drama', 'Crime'],
      paginaS: '/end',
      favoritoS: false
    },
    {
      nomeS: 'Gotham',
      lancamentoS: '22/09/2014 (BR)',
      temporadaS: '5 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4XddcRDtnNjYmLRMYpbrhFxsbuq.jpg',
      generosS: ['Sci-fi & Fantasy', 'Drama', 'Crime'],
      paginaS: '/gotham',
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
      nomeS: 'Brooklyn Nine-Nine: Lei e Desordem',
      lancamentoS: '17/09/2013 (BR)',
      temporadaS: ' 8 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hgRMSOt7a1b8qyQR68vUixJPang.jpg',
      generosS: ['Comédia','Crime'],
      paginaS: '/b99',
      favoritoS: false
    },
    {
      nomeS: 'Tudo bem não ser normal',
      lancamentoS: '20/07/2020 (BR)',
      temporadaS: '3 temporadas',
      classificacaoS: 9,
      cartazS: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8yLqWlFSLMucnotlXFC8SHkfNTj.jpg',
      generosS: ['Drama', 'Comédia'],
      paginaS: '/tudobemnaosernormal',
      favoritoS: false
    }
  ];


  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

}
