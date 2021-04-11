import { Component, Inject, OnInit } from '@angular/core';
import { CatRepositoryService } from '../services/cat-repository.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-catsave',
  templateUrl: './catsave.component.html',
  styleUrls: ['./catsave.component.scss']
})
export class CatsaveComponent implements OnInit {

  favs : Array<Array<string>> = [];
  URL : string ="";
  Fact : string ="";

  constructor(private catRepositoryService : CatRepositoryService, public dialog: MatDialog) {}

  ngOnInit(): void { this.favs = this.catRepositoryService.getFav(); }

  addForm() {
  	const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(CatsaveaddDialog, {data: {URL: this.URL, Fact: this.Fact}});
  }

}

export interface DialogData {
  URL : string;
  Fact : string;
}

@Component({
  selector: 'catsaveadd',
  templateUrl: './catsaveadd.html',
  styleUrls: ['./catsave.component.scss']
})
export class CatsaveaddDialog {

  constructor(public dialogRef: MatDialogRef<CatsaveaddDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private catRepositoryService : CatRepositoryService) {}

  onNoClick(): void { this.dialogRef.close(); }

  onYesClick(a : DialogData): void {
    this.catRepositoryService.addFav(a.URL,"You said :"+a.Fact,true);
    this.dialogRef.close();
  }

}