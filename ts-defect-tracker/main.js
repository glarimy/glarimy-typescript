var Defect = /** @class */ (function () {
    function Defect(desc, priority) {
        this._description = desc;
        this._priority = priority;
        this._status = 'open';
    }
    Object.defineProperty(Defect.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Defect.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Defect.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._status = status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Defect.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (priority) {
            this._priority = priority;
        },
        enumerable: true,
        configurable: true
    });
    return Defect;
}());
var FidelityDefectTracker = /** @class */ (function () {
    function FidelityDefectTracker() {
        this._defects = [];
    }
    FidelityDefectTracker.prototype.report = function (defect) {
        defect.id = FidelityDefectTracker.nextId++;
        this._defects.push(defect);
        return defect.id;
    };
    FidelityDefectTracker.prototype.find = function (id) {
        return this._defects.filter(function (d) { return d.id === id; })[0];
    };
    FidelityDefectTracker.prototype.update = function (id, status) {
        this.find(id).status = status;
    };
    FidelityDefectTracker.nextId = 0;
    return FidelityDefectTracker;
}());
var fdt = new FidelityDefectTracker();
fdt.report(new Defect('not restarting', 1));
fdt.report(new Defect('not responding', 1));
var defectId = fdt.report(new Defect('crashing', 1));
fdt.update(defectId, 'closed');
var defect = fdt.find(defectId);
console.log("\n    Defect ID: " + defect.id + "\n    Description: " + defect.description + "\n    Priority: " + defect.priority + "\n    Status: " + defect.status + "\n");
