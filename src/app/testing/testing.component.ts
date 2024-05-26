import { Component } from '@angular/core';
import { FetchJsonService } from '../services/fetch-json.service';
import b2b from '../models/b2b';
import * as B2B from "../../assets/domains/b2b/b2b-pay.json";

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss'
})
export class TestingComponent {
  b2b: b2b = new b2b("");
  constructor(private json: FetchJsonService) {
  }

ngOnInit() {
    this.json.loadInfo().subscribe( (info:any) => {
      this.b2b.title = B2B.title
    })
  }
}
