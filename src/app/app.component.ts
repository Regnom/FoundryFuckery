import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foundryfuckery';

  /** Swapping User Information */
  public user1 = "Chazland";

  /** Current Charater Selected information - Set for chaz till automation */
  public currentName ="Chazland";
  public currentRace = "Human";
  public currentAlign = "Neutral";
  public currentBG = "Noble";

  /** Attributes */
  public currentStr = 15;
  public currentStrMod = (this.currentStr - 10)/2; 

  public currentDex = 15;
  public currentDexMod = (this.currentDex - 10)/2; 

}
