import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../app-service';
import { Feedback } from '../app.model';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html'
})
export class AddFeedbackComponent implements OnInit {

  product: any;
  feedback = new Feedback({});
  onClose: any;

  feedbackForm = new FormGroup({});

  constructor(
    private modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private appService: AppService,
    private toastrSevice: ToastrService
  ) { }

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      id: new FormControl(this.feedback.id),
      productId: new FormControl(this.product.id),
      title: new FormControl(this.feedback.title, Validators.required),
      content: new FormControl(this.feedback.content, Validators.required),
      rating: [this.feedback.rating, Validators.compose([Validators.required, Validators.min(0), Validators.max(5)])],
      givenBy: new FormControl(this.feedback.givenBy, Validators.required),
      givenOn: new FormControl(this.feedback.givenOn)
    })
  }

  saveFeedback() {
    this.feedbackForm.markAllAsTouched();
    if (this.feedbackForm.valid) {
      const feedbackModel = new Feedback(this.feedbackForm.value);
      if (this.isUpdateOperation) {
        this.appService.updateProductFeedback(feedbackModel).subscribe(response => {
          if (response) {
            this.toastrSevice.success('Success!', `Product Feedback Updated Successfully`);
            this.onClose(true);
          }
        });
      }
      else {
        this.appService.addProductFeedback(feedbackModel).subscribe(response => {
          if (response) {
            this.toastrSevice.success('Success!', `Product Feedback Added Successfully`);
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
    return this.feedback.id;
  }

}
