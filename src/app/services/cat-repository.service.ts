import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Fact {
	text : string;
	_id : string;
  status: { verified : boolean; };
}

export interface Catimg {
	url : string;
	id : string;
}

@Injectable({
  providedIn: 'root'
})

export class CatRepositoryService {
  constructor(private httpClient : HttpClient) {}

  sendfact : Array<Array<string>> = [];

  addFav( a : string, b : string, c : boolean) {
    let d : string = ""+c;
    if (d=="null") {d='no'}
    this.sendfact.push([a,b,d]);
  }

  getFav() { return this.sendfact; }

  async getCatFacts() {
    const response = await this.httpClient
      .get<Fact[]>('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=12')
      .toPromise();
    return response;
  }

  async getCatimg() {
    const response = await this.httpClient
      .get<Catimg[]>('https://api.thecatapi.com/v1/images/search?limit=12')
      .toPromise();
    return response;
  }
  
}
