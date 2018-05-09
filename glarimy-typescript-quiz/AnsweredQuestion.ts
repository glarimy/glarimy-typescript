import {Question} from './Question'

export class AnsweredQuestion extends Question {
    private _answer: boolean;

    constructor(question: Question, answer: boolean) {
        super(question.id, question.description);
        this._answer = answer;
    }

    get answer() {
        return this._answer;
    }
}