import { Component, ɵsetCurrentInjector } from '@angular/core';

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
  public currentStr = 16;
  public currentStrMod = Math.floor((this.currentStr - 10)/2); 

  public currentDex = 17;
  public currentDexMod = Math.floor((this.currentDex - 10)/2); 

  public currentCon = 17;
  public currentConMod = Math.floor((this.currentCon - 10)/2);

  public currentInt = 15;
  public currentIntMod = Math.floor((this.currentInt - 10)/2);

  public currentWis = 12;
  public currentWisMod = Math.floor((this.currentWis - 10)/2);

  public currentCha = 9;
  public currentChaMod = Math.floor((this.currentCha - 10)/2);

  /** Class - Automation needed for Class selections */

  public currentClass = "Fighter";

  /** Profiency Bonus - Levels with Class level*/
  public currentProf = 2;
  

  /** Saves 
   * Based on class for profencty bonus and which radios are checked
  */
  public currentStrSave = this.currentStrMod + this.currentProf;
  public currentDexSave = this.currentDexMod;
  public currentConSave = this.currentConMod + this.currentProf;
  public currentIntSave = this.currentIntMod;
  public currentWisSave = this.currentWisMod;
  public currentChaSave = this.currentChaMod;

  /** Skills - Automated to Ratio button at later use for Profiency bonus
  * And make radio available for class specifications
  * class automation required later.
  */

  public currentAcro = this.currentDexMod;
  public currentAnim = this.currentWisMod;
  public currentArca = this.currentIntMod;
  public currentAthl = this.currentStrMod;
  public currentDece = this.currentChaMod;
  public currentHist = this.currentIntMod;
  public currentInsi = this.currentWisMod;
  public currentInti = this.currentChaMod;
  public currentInve = this.currentIntMod;
  public currentMedi = this.currentWisMod;
  public currentNatu = this.currentIntMod;
  public currentPerc = this.currentWisMod;
  public currentPref = this.currentChaMod;
  public currentPers = this.currentChaMod;
  public currentReli = this.currentDexMod;
  public currentSlei = this.currentDexMod;
  public currentStea = this.currentDexMod;
  public currentSurv = this.currentWisMod;


  /** AC, Intiative, speed, HP max
  * Automation for AC for Equipment (later date) 
  * Speed tied to Race/equipment
  * intitive affected by dex + feats - Feats (later date)
  * HP affected by Class, Level, and Con
  */

  public currentAC = this.currentDexMod + 10;

  public currentInit = this.currentDexMod;

  public currentHP = this.currentConMod;

  public currentSpeed = 30;



}
