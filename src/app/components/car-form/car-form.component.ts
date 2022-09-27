import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {CarService} from '../../services/car.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  data = {
    _id: '',
    model: '',
    type: '',
    image: '',
    fuelType: NaN,
    transmission: '',
    seats: NaN,
    location: '',
  }

  action: 'add' | 'edit' = 'add';


  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];


    if (id) {
      this.carService.getCarById(id).subscribe(res => {
        if (res.status === 'success') {
          this.data._id = id;
          this.data.model = res.data!['car'].model!;
          this.data.type = res.data!['car'].type!;
          this.data.image = res.data!['car'].image!;
          this.data.fuelType = res.data!['car'].fuelType!;
          this.data.transmission = res.data!['car'].transmission!;
          this.data.seats = res.data!['car'].seats!;
          this.data.location = res.data!['car'].location!;

          this.action = 'edit'
        }
      })
    }

  }

  onSubmit(){
    if (this.action === 'add') {
    this.carService.createCar(this.data).subscribe((res) => {
      if(res.status === 'success') {
        this.router.navigate(['/cars-list'])
      }
    })
    } else if (this.action === 'edit') {
      this.carService.updateCar(this.data).subscribe((res) => {
        if(res.status === 'success') {
          this.router.navigate(['/cars-list'])
        }
      })
    }

  }

}


