import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppService } from './app-service';
import { Feedback, Product } from './app.model';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'profee';
  newCategory: any;

  products: Product[] = [];
  feedbacks: Feedback[] = [];
  progressSpinner = ProgressSpinnerComponent;

  selectedProduct: any;

  constructor(private modalService: BsModalService, private appService: AppService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.appService.getAllProducts().subscribe(response => {
      this.products = response;
      if (this.isProductsPresent) {
        this.changeSelectedProduct(this.products[0]);
      }
    })
  }

  changeSelectedProduct(product: any) {
    this.selectedProduct = product;
    this.appService.getProductFeedback(this.selectedProduct.id).subscribe(response => {
      this.feedbacks = response;
    });
  }

  addProduct(product?: any) {
    const modalRef = this.modalService.show(AddProductComponent, {
      initialState: {
        product: product || {}, onClose: (isUpdated: boolean) => {
          if (isUpdated) {
            modalRef.hide();
            this.ngOnInit();
          }
        }
      }
    });
  }

  editProduct() {
    this.addProduct(this.selectedProduct);
  }

  deleteProduct() {
    this.appService.deleteProduct(this.selectedProduct.id).subscribe(response => {
      this.toastrService.success('Success', 'Product Deleted Successfully');
      this.ngOnInit();
    })
  }

  addFeedback(feedback?: any) {
    const modalRef = this.modalService.show(AddFeedbackComponent, {
      initialState: {
        product: this.selectedProduct, feedback: feedback || {}, onClose: (isUpdated: boolean) => {
          if (isUpdated) {
            modalRef.hide();
            this.changeSelectedProduct(this.selectedProduct);
          }
        }
      }
    });
  }

  editFeedback(feedback: any) {
    this.addFeedback(feedback);
  }

  deleteFeedback(feedbackId: any) {
    this.appService.deleteProductFeedback(feedbackId).subscribe(response => {
      this.toastrService.success('Success', 'Product Feedback Deleted Successfully');
      this.changeSelectedProduct(this.selectedProduct);
    })
  }

  isSelected(product: any) {
    return this.selectedProduct.id === product.id;
  }

  get isProductsPresent() {
    return this.products.length !== 0;
  }

}
