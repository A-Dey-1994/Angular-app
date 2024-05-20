import { Component, Input } from '@angular/core'; 
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule, ProductDetailsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() pId: string = '';
  @Input() pName: string = '';
  @Input() pOffer: string = ''; 
  @Input() pImg: string = '';
}
