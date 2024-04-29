import { Component, OnInit ,Input} from '@angular/core';
import { RatingsService } from '../../../Services/ratings.service';



interface RatingData {
  id: string;
  stars: number;
  message: string;
  name:string;
  averageRating: string;
}

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.scss']
})
export class Main2Component implements OnInit {
  @Input() collapsed = false ;
  @Input() screenWidth = 0 ;

  ratings: RatingData[] = [];

  constructor(private ratingsService: RatingsService) { }

  ngOnInit(): void {
    this.loadRatings();
    this.getBodyClass();
  }
  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768) {
      styleClass = 'body-md-screen';
    }
    console.log(styleClass);
    return styleClass;
  }
  
  loadRatings() {
    this.ratingsService.getAllRatings().subscribe(
      (data: RatingData[]) => {
        this.ratings = data;
      },
      (error: any) => {
        console.error( error);
      }
    );
  }

}
