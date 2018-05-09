export class Question {
    protected _id: number;
    protected _description: string;

    constructor(id: number, description: string) {
        this._id = id;
        this._description = description;
    }

    get id() {
        return this._id;
    }

    get description() {
        return this._description;
    }
}