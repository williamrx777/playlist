import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Music } from '../models/music.models';
@Injectable({
  providedIn: 'root'
})
export class MusicService {

private url = `${environment.api}/musics`;

constructor(private httpclient: HttpClient) {

}

  obterMusics() {
    return this.httpclient.get<Music[]>(this.url);
  }

  cadastrarMusica(musica: Music) {
    return this.httpclient.post<Music>(this.url, musica);
  }

  editarMusica(musica: Music) {
    return this.httpclient.put<Music>(`${this.url}/${musica.id}`, musica);
  }

  remover(id: number){
    return this.httpclient.delete<void>(`${this.url}/${id}`);
  }

}

