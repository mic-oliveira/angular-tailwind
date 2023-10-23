import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Paginate {
  last_page: number = 1;
  total: number = 0;
  current_page: number = 1;
  offset: number = 5;
  from: number = 0;
  offsetIndex: number = 0;
  offsetMin: number = 0;
  offsetMax: number = 5;
  
  next() {
    const maxOffset = Math.floor(this.last_page / this.offset)
    
    if (this.offsetIndex <= maxOffset) {
      this.offsetIndex++;
      this.offsetLimits();
    }
    console.log(this.offsetIndex, this.offsetMin, this.offsetMax)
  }
  
  previous() {
    if (this.offsetIndex >= 1) {
      this.offsetIndex--;
      this.offsetLimits();
    }
  }
  
  offsetLimits() {
    this.offsetMax = (this.offset * this.offsetIndex) + this.offset;
    this.offsetMax--;
    this.offsetMin = this.offset * this.offsetIndex;
    if (this.offsetMin < this.offsetMax) {
    
    }
    
    if (this.offsetMax > this.last_page) {
      this.offsetMax = this.last_page--;
    }
  }
}
