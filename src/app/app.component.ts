import {Component, OnInit} from '@angular/core';


// Class AppComponent的装饰器 组件
@Component({
  // index html的标签app-root
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
}



