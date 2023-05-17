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
      nomeA: 'Wilken Mazzei',
      cartazA: 'https://pbs.twimg.com/profile_images/447050311601909761/ZEi2-PCg_400x400.jpeg',
      filmeA: ["Jojo's Bizarre Adventure", 'Attack on Titan'],
      paginaA: '/jotaro',
      ocupacaoA: 'Dublador'
    },
    {
      nomeA: 'Bryan Cranston',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/aGSvZg7uITJveQtGHDcPNI6map1.jpg',
      filmeA: ['Breaking Bad', 'Argo'],
      paginaA: '/bc',
      ocupacaoA: 'Ator'
    },
    {
      nomeA: 'Seo Yea-ji',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/a9moiE8WWuygU02m4KE3M2Nrrkp.jpg',
      filmeA: ['Tudo bem não ser normal', 'Eve'],
      paginaA: '/seo',
      ocupacaoA: 'Atriz'
    },
    {
      nomeA: 'Jessica Barden',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/A4WddlGjgLxcQfrILXmfHeaBD9p.jpg',
      filmeA: ['The End of The F***ing World', 'Hanna'],
      paginaA: '/jessica',
      ocupacaoA: 'Atriz'
    },
    {
      nomeA: 'Josh Hartnett',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9JS3PeypxTmHVXOnLCMRzJzySxO.jpg',
      filmeA: ['40 days & 40 nights', 'Pearl Harbor'],
      paginaA: '/josh-hartnett',
      ocupacaoA: 'Ator'
    },
    {
      nomeA: 'Zendaya',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6TE2AlOUqcrs7CyJiWYgodmee1r.jpg',
      filmeA: ['Homem Aranha: Sem Volta Para Casa', 'Euphoria'],
      paginaA: '/zendaya',
      ocupacaoA: 'Atriz'
    },
    {
      nomeA: 'Cillian Murphy',
      cartazA: 'https://bodysize.org/wp-content/uploads/2018/02/Cillian-Murphy-300x400.jpg',
      filmeA: ['Peaky Blinders', 'A origem'],
      paginaA: '/cillian-murphy',
      ocupacaoA: 'Ator'
    }
    
  ];

  exibirAtor(ator: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

}