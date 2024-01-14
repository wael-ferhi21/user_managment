import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users:any;

  constructor(public _listservice:ListService) { }

  ngOnInit(): void {
    //declarer fonction dans ngOnInit
this.getAllusers()
  }

  //nom de fonction de liste 
getAllusers(){

  this._listservice.getUsers().subscribe(

    res=>{
      console.log(res);
      this.users=res;
    },
    err=>{
      console.log(err)
    }
  )
}

deleteUser(userId: number): void {
  const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur?");
  
  if (isConfirmed) {
    this._listservice.deleteUser(userId).subscribe(
      (response) => {
        this.getAllusers();
      }
    );
  }
}


}