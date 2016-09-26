import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-caca',
  templateUrl: './caca.component.html',
  styleUrls: ['./caca.component.css']
})
export class CacaComponent implements OnInit {
  @Input() hero: String;
  constructor() { }

  ngOnInit() {
  }

}
