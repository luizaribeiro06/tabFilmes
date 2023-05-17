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
      nome: 'Shrek',
      lancamento: '15/06/2007 (BR)',
      duracao: '1h32m',
      classificacao: 7,
      cartaz: 'https://images-ext-2.discordapp.net/external/AUO7bNqxF8RBFhd9JIGm6T1qldXcyRha1g3JRKw8PTY/https/www.themoviedb.org/t/p/w600_and_h900_bestv2/abw1mIJIjG9X3xSEffE9siLcOkN.jpg?width=395&height=593',
      generos: ['Fantasia','Animação'],
      pagina: '/shrek',
      favorito: false
    },
    {
      nome: 'Super Mario Bross: O filme',
      lancamento: '05/04/2023 (BR)',
      duracao: '1h33m',
      classificacao: 7.4,
      cartaz: 'https://images-ext-2.discordapp.net/external/pfzpqyLURHmnX8n5NccRGLDIYmwnM45dBWCT6dR8nZI/https/www.themoviedb.org/t/p/w600_and_h900_bestv2/kzYbNJ4JaQiRny0cDi8a6bNX5w3.jpg?width=395&height=593',
      generos: ['Animação', 'Família'],
      pagina: '/mario',
      favorito: false
    },
    {
      nome: 'Invocação do Mal 3: A Ordem do Demônio',
      lancamento: '04/06/2021 (BR)',
      duracao: '1h51m',
      classificacao: 7.5,
      cartaz: 'https://images-ext-2.discordapp.net/external/YRaQ7ojcl6Anz0iDEaMA07_pLXPjLO5O_ECxfsf9YWU/https/www.themoviedb.org/t/p/w600_and_h900_bestv2/tLmaOXT9rMb17ISQDURKQIu3Okk.jpg?width=395&height=593',
      generos: ['Terror', 'Mistério'],
      pagina: '/mal',
      favorito: false
    },
    {
      nome: 'Gigantes de Aço',
      lancamento: '21/10/2011 (BR)',
      duracao: '2h07m',
      classificacao: 7,
      cartaz: 'https://images-ext-1.discordapp.net/external/t9jMImfZocOamvIR5WcmqVcLScNgNmnKoCLxG10orzM/https/www.themoviedb.org/t/p/w600_and_h900_bestv2/pp74uUjwQTknGPqNrerj4FvU0ce.jpg?width=395&height=593',
      generos: ['Ação', 'Drama'],
      pagina: '/aço',
      favorito: false
    },
    {
      nome: 'Truque de Mestre',
      lancamento: '05/07/2013 (BR)',
      duracao: '1h56m',
      classificacao: 7.3,
      cartaz: 'https://images-ext-2.discordapp.net/external/TJM35xn1XRK4JWtSPcAhjeyumiZOBO1xX-8M3-4HLYM/https/www.themoviedb.org/t/p/w600_and_h900_bestv2/sUi3a3BTTku0vyLjJQgKtiWCok7.jpg?width=395&height=593',
      generos: ['Crime', 'Thriller'],
      pagina: '/mestre',
      favorito: false
    }
  ];

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

}
