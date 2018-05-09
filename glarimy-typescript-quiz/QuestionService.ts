import {Question} from './Question';

export interface QuestionService {
    get(): Question;
    evaluate(id: number, answer: boolean): boolean;
}