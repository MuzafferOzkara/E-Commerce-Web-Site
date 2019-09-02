import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  informas;
  ngOnInit() {
  this.informas=JSON.parse(localStorage.getItem('currentUser'));
  console.log(this.informas);
  }
  logout(){
    this.informas=localStorage.removeItem('currentUser');
    
  }
  
}
