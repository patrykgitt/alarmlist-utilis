import { Alarm } from "./alarm";
import * as test2 from "./test2.js";
import * as test from './test.js';
export class AlarmMgnt {
    private tomek;
    constructor(public listName: string, private alarms: Alarm[] = []) {
        // no statements required
        this.tomek = new test2.Human(20);
        console.log(this.tomek);
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