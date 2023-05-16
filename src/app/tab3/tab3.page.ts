import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { IAtores } from '../model/IAtores';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  constructor(public router: Router) {}

  listaAtores: IAtores[] = [
    {
      nomeA: 'Scarlett Johansson',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uRxO44O5KjGBlP5xq3a6U0azp1H.jpg',
      filmeA: ['Viúva Negra', 'Vingadores: Ultimato (2019)'],
      paginaA: '/scarlett-johansson',
      ocupacaoA: 'Atriz'
    },
    {
      nomeA: 'Robert Downey Jr.',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg',
      filmeA: ['Sherlock Holmes', 'Vingadores: Ultimato (2019)'],
      paginaA: '/robert-downey-jr.',
      ocupacaoA: 'Ator'
    },
    {
      nomeA: 'Kiera Allen',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/e3wOaDBdTEZccu38hUgHVFQBS7D.jpg',
      filmeA: ['Run!', 'The Good Doctor'],
      paginaA: '/kiera-allen',
      ocupacaoA: 'Atriz'
    },
    {
      nomeA: 'Alexandre Moreno',
      cartazA: 'https://static.wikia.nocookie.net/dublagem/images/b/ba/Alexandre_Moreno.jpg/revision/latest?cb=20210417185949&path-prefix=pt-br',
      filmeA: ['Madagascar 3', 'Greys Anatomy'],
      paginaA: '/',
      ocupacaoA: 'Dublador'
    },
    {
      nomeA: 'Ricardo Juarez',
      cartazA: 'data:image/jpeg;base64,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',
      filmeA: ['Madagascar 3', 'Smurfs'],
      paginaA: '/',
      ocupacaoA: 'Dublador'
    },
    {
      nomeA: 'Jessie T. Usher',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/iiu9dkYEkHJPMf7TzbrhhgwRvlt.jpg',
      filmeA: ['Smile', 'The Boys'],
      paginaA: '/jessie-t-usher',
      ocupacaoA: ''
    },
    {
      nomeA: 'Josh Hartnett',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9JS3PeypxTmHVXOnLCMRzJzySxO.jpg',
      filmeA: ['40 days & 40 nights'],
      paginaA: '/josh-hartnett',
      ocupacaoA: 'Ator'
    },
    {
      nomeA: 'Natasha Romanoff',
      cartazA: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8FoIWVHC-jor5Oefb-KWenxnjRXXrHSgfQ&usqp=CAU',
      filmeA: [''],
      paginaA: '/natasha-romanoff',
      ocupacaoA: ''
    },
    {
      nomeA: 'Cillian Murphy',
      cartazA: 'https://bodysize.org/wp-content/uploads/2018/02/Cillian-Murphy-300x400.jpg',
      filmeA: ['Peaky Blinders'],
      paginaA: '/cillian-murphy',
      ocupacaoA: 'Ator'
    }
    
  ];

  exibirAtor(ator: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

}