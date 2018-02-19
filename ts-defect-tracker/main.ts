class Defect {
    private _id:number;
    private _description: string;
    private _status: string;
    private _priority: number;

    constructor(desc:string, priority:number){
        this._description = desc;
        this._priority = priority;
        this._status = 'open';
    }

    get id(){
       return this._id; 
    }

    set id(id:number){
        this._id = id;
    }

    get description() {
        return this._description;
    }

    set description(description:string) {
        this._description = description;
    }

    get status() {
        return this._status;
    }

    set status(status:string) {
        this._status = status;
    }

    get priority() {
        return this._priority;
    }

    set priority(priority: number) {
        this._priority = priority;
    }
}
interface DefectTracker {
    report(defect:Defect):number;
    find(id:number): Defect;
    update(id:number, status:string):void;
}

class FidelityDefectTracker implements DefectTracker {
    static nextId: number = 0;
    private _defects: Defect[];

    constructor(){
        this._defects = [];
    }

    report(defect: Defect): number{
        defect.id = FidelityDefectTracker.nextId++;
        this._defects.push(defect);
        return defect.id;
    }

    find(id:number): Defect {
        return this._defects.filter(d => d.id === id)[0];
    }

    update(id:number, status:string):void{
        this.find(id).status = status;
    }
}

let fdt:DefectTracker = new FidelityDefectTracker();
fdt.report(new Defect('not restarting', 1));
fdt.report(new Defect('not responding', 1));
let defectId = fdt.report(new Defect('crashing', 1));
fdt.update(defectId, 'closed');
let defect = fdt.find(defectId);

console.log(`
    Defect ID: ${defect.id}
    Description: ${defect.description}
    Priority: ${defect.priority}
    Status: ${defect.status}
`);