import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    // tell the world that it's  the counter component. los modulos con locales a los directorios a menos q se exporten
    CounterComponent
  ]
})

export class CounterModule {

}
