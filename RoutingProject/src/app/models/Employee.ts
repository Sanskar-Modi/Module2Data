export class Employee {
    eid:number;
    ename:string;
    edesignation:string;
    eadd:string;
    econtact:number;
    egender:string;
    constructor(eid:number,
        ename:string,
        edesignation:string,
        eadd:string,
        econtact:number,
        egender:string){
            this.eid = eid;
            this.ename = ename;
            this.edesignation = edesignation;
            this.eadd = eadd;
            this.econtact = econtact;
            this.egender = egender;
        }
}