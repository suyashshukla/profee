import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../app-service';
import { Product } from '../app.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent implements OnInit {

  product = new Product({});
  productForm = new FormGroup({});
  onClose: any;

  constructor(
    public modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private appService: AppService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name, Validators.required),
      price: new FormControl(this.product.price, Validators.required)
    });
  }

  saveProduct() {
    this.productForm.markAllAsTouched();

    if (this.productForm.valid) {
      const productModel = new Product(this.productForm.value);
      if (this.isUpdateOperation) {
        this.appService.updateProduct(productModel).subscribe(response => {
          if (response) {
            this.toastrService.success('Success!', 'Product Updated Successfully');
            this.onClose(true);
          }
        });
      }
      else {
        this.appService.addProduct(productModel).subscribe(response => {
          if (response) {
            this.toastrService.success('Success!', 'Product Added Successfully');
            this.onClose(true);
          }
        });
      }
    }
  }

  closeModal() {
    this.modalRef.hide();
  }

  hasErrors(control: any) {
    return control.touched && (control.hasError('required') || control.hasError('min') || control.hasError('max'));
  }

  get isUpdateOperation() {
    return this.product && this.product.id;
  }

}
