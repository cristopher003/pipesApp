import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {

  public nameLower:string="cristopher";
  public nameUpper:string="CRISTOPHER";
  public fullNmae:string="CrIsTOphEr";
  public customDate:Date = new Date();

}
