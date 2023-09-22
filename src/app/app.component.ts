import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MusicService } from './service/music.service';
import { Music } from './models/music.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playlist';

  //musicas: Music[] = []
  musicas$ = new Observable<Music[]>();

  // form
  id = '';
  description = '';
  image = '';
  url = '';

  constructor(private musicService: MusicService){
    this.obterMusicasCadastradas();
  }

  obterMusicasCadastradas(){
   // this.musicService.obterMusics()
   // .subscribe(musicas => this.musicas = musicas)
  this.musicas$ = this.musicService.obterMusics();
  }

  buttonClick() {
    if(!this.title || !this.description || !this.image || !this.url)
    return;

    if(this.id){
      this.atualizar();
      return;
    }

    this.musicService.cadastrarMusica({title: this.title, description:this.description, image:this.image, url:this.url})
    .subscribe(_ => this.obterMusicasCadastradas())
  }

  atualizar() {
    this.musicService.editarMusica( {id: parseInt(this.id) , title:this.title, description:this.description, image:this.image, url:this.url} )
    .subscribe(_ => this.obterMusicasCadastradas());
  }

  preencherCampos(musica: Music){
    this.id = musica.id!.toString();
    this.title = musica.title;
    this.description = musica.description;
    this.image = musica.image;
    this.url = musica.url;
  }

  remover(id: number){
    this.musicService.remover(id)
    .subscribe(_ => this.obterMusicasCadastradas());
  }

}
