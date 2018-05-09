import {QuestionService} from './QuestionService';
import {Question} from './Question';
import {AnsweredQuestion} from './AnsweredQuestion';

export class SimpleQuestionService implements QuestionService {
    private questionbank: Question[];
    constructor() {
        let first = new AnsweredQuestion(new Question(0, "is RCB an IPL champion?"), false);
        let second = new AnsweredQuestion(new Question(1, "is banana shares 50% DNA with humans?"), true);
        let third = new AnsweredQuestion(new Question(2, "is inventor of USB an Indian?"), true);
        let fourth = new AnsweredQuestion(new Question(3, "is inventor of Optical Fiber an Indian?"), true);
        let fifth = new AnsweredQuestion(new Question(4, "is Edison the inventor of Alternate Current ?"), false);
        let sixth = new AnsweredQuestion(new Question(5, "is Ramakrishnan the current president of Royal Society of England?"), true);
        let seventh = new AnsweredQuestion(new Question(6, "is Ramanujan the first every Royal Fellow from India?"), false);
        let eighth = new AnsweredQuestion(new Question(7, "number of IT MNCs in Bengaluru is more than 250?"), true);
        let ninth = new AnsweredQuestion(new Question(8, "Can Typescript be compiled to generate ES5 compatible code?"), true);
        let tenth = new AnsweredQuestion(new Question(9, "AngularJS and Angular are same. Is it?"), false);
        this.questionbank = [];
        this.questionbank.push(first);
        this.questionbank.push(second);
        this.questionbank.push(third);
        this.questionbank.push(fourth);
        this.questionbank.push(fifth);
        this.questionbank.push(sixth);
        this.questionbank.push(seventh);
        this.questionbank.push(eighth);
        this.questionbank.push(ninth);
        this.questionbank.push(tenth);
    }
    get(): Question {
        return this.questionbank[Math.floor(Math.random() * 10)];
    }

    evaluate(id: number, answer: boolean): boolean {
        let q: AnsweredQuestion = <AnsweredQuestion>this.questionbank[id];
        if (q.answer == answer)
            return true;
        return false;
    }
}