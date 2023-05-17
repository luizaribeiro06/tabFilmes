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
      nomeA: 'Julian Hiliard',
      cartazA: 'https://images-ext-2.discordapp.net/external/vjJcrelI-EBA87aedyO_VEnuJl46r5OCJo-CrkFOs80/https/www.themoviedb.org/t/p/w300_and_h450_bestv2/umnRZFm9pQ9xB53PQwUPFOVul4j.jpg',
      filmeA: ['Invocação do Mal 3','WandaVision'],
      paginaA: '/julian',
      ocupacaoA: 'Ator'
    },
    {
      nomeA: 'Cadence Patton',
      cartazA: 'https://images-ext-1.discordapp.net/external/hmSlYjbg_fpkbPh_Jd0RO7JIejvz5OT1rMp6KJOcklg/https/www.themoviedb.org/t/p/w300_and_h450_bestv2/rc7JUIVNUaBeIKOsMFqFGk6JRPc.jpg',
      filmeA: ['Arqueiro', 'Flash'],
      paginaA: '/cadence',
      ocupacaoA: 'Atriz'
    },
    {
      nomeA: 'Paul Anderson',
      cartazA: 'https://images-ext-2.discordapp.net/external/2OSJ8wn6vbJTWI6p50hruf--oFscLuD6H21A-RlZ-tU/https/www.themoviedb.org/t/p/w300_and_h450_bestv2/nds5rTBZvJ4rEsP4N6OaoEgQDkW.jpg',
      filmeA: ['Peaky Blinders', 'Sherlock Holmes'],
      paginaA: '/pau',
      ocupacaoA: 'Ator'
    },
    {
      nomeA: 'Evangeline Lily',
      cartazA: 'https://images-ext-2.discordapp.net/external/4hQicbw_r9IaUUuPXLFZ99o_btMe7ZQgY2zllLfpsKA/https/www.themoviedb.org/t/p/w300_and_h450_bestv2/fRbXVt9fhz6ndPhF1lRA92VxUDk.jpg',
      filmeA: ['Gigantes de Aço', 'Homem-formiga'],
      paginaA: '/',
      ocupacaoA: 'Atriz'
    },
    {
      nomeA: 'Chris Pratt',
      cartazA: 'https://images-ext-2.discordapp.net/external/pc9fZ3Y9Nq0Q9po7N3RECfOnEi2gyxGixNznG6Guew0/https/www.themoviedb.org/t/p/w300_and_h450_bestv2/83o3koL82jt30EJ0rz4Bnzrt2dd.jpg',
      filmeA: ['Super Mario Bross', 'Uma Aventura Lego'],
      paginaA: '/chris',
      ocupacaoA: 'Dublador'
    }
    
  ];

  exibirAtor(ator: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

}