import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../backend/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent {
  public formGroup: any;
  public id: string = '0';
  public constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activadeRoute: ActivatedRoute,
    private router: Router
  ){
    this.formGroup = this.formBuilder.group({
      name: ['',Validators.required],
      price: ['',Validators.required],
      buyers: ['',Validators.required],
      description: ['',Validators.required],
      type:['',Validators.required],
      category_id: ['1',Validators.required],
      store_id: ['1',Validators.required],
      rating: ['1',Validators.required]

    })
  
  }
  public submit() {
    if (!this.formGroup.valid) {
      alert('Invalido');
      return;
    }
console.log(this.formGroup.value);

    this.userService.post(this.formGroup.value).subscribe((result: any) => {
      this.router.navigate([``]);
    });
    
  }
}
