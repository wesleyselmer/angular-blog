import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from "../../data/dataFake"

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  @Input()
  photoCover:string = ""
  @Input()
  contentTitle:string = ""
  @Input()
  contentDescription:string = ""
  private id:string | null= ""

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToContent(this.id);
  }

  setValuesToContent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.photoCover = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;


  }
}
