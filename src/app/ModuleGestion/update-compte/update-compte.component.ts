import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit {

  FormCompte=new FormGroup({})
  constructor() { }

  ngOnInit(): void {
  }

  Update()
  {

  }
}
