import { Alarm } from "./alarm";
import { Human } from "./test2";//bez js tez dziala
import * as test from './test.js';
import { Human2 } from "./test3";
import {PlcCommunication} from "./me-webserver-utils"
export class AlarmMgnt {
    private tomek;
    constructor(public listName: string, private alarms: Alarm[] = []) {
        // no statements required
        this.tomek = new Human(20);
        console.log(this.tomek);
        this.tomek2 = new Human2(22);
        console.log(this.tomek2);
        this.tomek2.age2();
        this.tomek.age2();
        this.tomek.updateElements();
        // console.log(test.my());
        //tomek.age();
    }

    get items(): readonly Alarm[]  { 
        return this.alarms;
    }

    addItem(alarm: string) {
        this.alarms.push(new Alarm(alarm));
    }
    updateAlarms(){

    }
}

Human.prototype.updateElements = function(data) {
  //jako taka ktora nie modyfikuje dancyh?
  //for (let i = 0; i < plcRegs.length; i++) {
    ////document.getElementById(plcRegs[i].elementId).value = data[i];
    //document.getElementById(plcRegs[i].elementId).innerHTML = data[i];
  //}
  console.log(100);
};
