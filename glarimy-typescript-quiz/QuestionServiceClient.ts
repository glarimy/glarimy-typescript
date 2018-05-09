import {QuestionService} from './QuestionService'
import { SimpleQuestionService } from './SimpleQuestionService'

let qs: QuestionService = new SimpleQuestionService();

let q = qs.get();
console.log(`Question: ${q.description}`);

let a = true;
console.log(`Answering as: ${a}`);
console.log(`Answer is correct?: ${qs.evaluate(q.id, a)}`);