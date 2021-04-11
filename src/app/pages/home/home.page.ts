import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  searchControl: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required)
  }

  onSearch() {
    console.log(this.searchControl.value);
    
  }

}
