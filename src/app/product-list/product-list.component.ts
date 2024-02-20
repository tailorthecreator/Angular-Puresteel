import { Component } from '@angular/core';
import { DataSharedService } from '../data-shared.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  data: any[] = []

  constructor(private dataService: DataSharedService){
    this.dataService.getJsonData().subscribe((res: any)=>{
      this.data = res;
    })
  }
}

