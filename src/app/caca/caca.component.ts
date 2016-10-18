import { Component, OnInit,Input } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-caca',
  templateUrl: './caca.component.html',
  styleUrls: ['./caca.component.css'],
  providers: [TestService]
})
export class CacaComponent implements OnInit {
  @Input() hero: String;
  lol: any;
  errorMessage: string;
  constructor(private service: TestService) { }

  ngOnInit() {
    this.service.getTest().subscribe(
        (lol) => {
          console.log(lol)
          this.lol = lol
        },
        error =>  this.errorMessage = <any>error
    );
  }

}
