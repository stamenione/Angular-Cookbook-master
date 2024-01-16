import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, merge } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscription: Subscription = null;
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  cartoonStreamData = ['thunder cats', 'Dragon Ball Z', 'Ninja Turtles']
  outputStreamData = [];

  ngOnInit() {
  }

  startStream() {
    const streamSource = interval(1500);
    const cartoonStreamSource = interval(1000).pipe(
      map(output => output % this.cartoonStreamData.length),
      map(index => this.cartoonStreamData[index])
    )
    this.subscription = streamSource.pipe(
      map(output => output % this.inputStreamData.length),
      map(index => this.inputStreamData[index]),
      merge(cartoonStreamSource)
    ).subscribe(input => {
      this.outputStreamData.push(input);
    });
  }

  stopStream() {
    this.subscription.unsubscribe();
    this.subscription = null;
  }


}
