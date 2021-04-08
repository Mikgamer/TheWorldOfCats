import { Component, OnInit } from '@angular/core';
import { CatRepositoryService, Fact, Catimg } from '../services/cat-repository.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {

	constructor(private catRepositoryService : CatRepositoryService) {}

	cats: Fact[] = [];
	imgs: Catimg[] = [];

	ngOnInit(): void {
		this.catRepositoryService
		.getCatFacts()
		.then((r) => {this.cats = r;});

		this.catRepositoryService
		.getCatimg()
		.then((re) => {this.imgs = re;});
	}

	onSave( a : string, b : string, c : boolean) {
		this.catRepositoryService.addFav(a,b,c);
	}



	onRefresh() {
		this.catRepositoryService
		.getCatFacts()
		.then((r) => {this.cats = r;});

		this.catRepositoryService
		.getCatimg()
		.then((re) => {this.imgs = re;});
	}


	
}
