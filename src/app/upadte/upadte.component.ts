import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-upadte',
  templateUrl: './upadte.component.html',
  styleUrls: ['./upadte.component.css']
})
export class UpadteComponent implements OnInit {
  id:any;
  user:any;

  constructor(private act:ActivatedRoute,private listService:ListService ) { }
  update(){
    this.listService.updateUser(this.id,this.user).subscribe(
      err=>{
        console.log(err);

      }
    )
  }

  ngOnInit(): void {
    this.id=this.act.snapshot.paramMap.get('id');
    this.listService.getUserById(this.id).subscribe(
            res=>{
              this.user=res;
            },
            err=>{
              console.log(err);
            }


    )
  }

}
