var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Question = /** @class */ (function () {
    function Question(id, description) {
        this._id = id;
        this._description = description;
    }
    Object.defineProperty(Question.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());
var AnsweredQuestion = /** @class */ (function (_super) {
    __extends(AnsweredQuestion, _super);
    function AnsweredQuestion(question, answer) {
        var _this = _super.call(this, question.id, question.description) || this;
        _this._answer = answer;
        return _this;
    }
    Object.defineProperty(AnsweredQuestion.prototype, "answer", {
        get: function () {
            return this._answer;
        },
        enumerable: true,
        configurable: true
    });
    return AnsweredQuestion;
}(Question));
var SimpleQuestionService = /** @class */ (function () {
    function SimpleQuestionService() {
        var first = new AnsweredQuestion(new Question(0, "is RCB an IPL champion?"), false);
        var second = new AnsweredQuestion(new Question(1, "is banana shares 50% DNA with humans?"), true);
        var third = new AnsweredQuestion(new Question(2, "is inventor of USB an Indian?"), true);
        var fourth = new AnsweredQuestion(new Question(3, "is inventor of Optical Fiber an Indian?"), true);
        var fifth = new AnsweredQuestion(new Question(4, "is Edison the inventor of Alternate Current ?"), false);
        var sixth = new AnsweredQuestion(new Question(5, "is Ramakrishnan the current president of Royal Society of England?"), true);
        var seventh = new AnsweredQuestion(new Question(6, "is Ramanujan the first every Royal Fellow from India?"), false);
        var eighth = new AnsweredQuestion(new Question(7, "number of IT MNCs in Bengaluru is more than 250?"), true);
        var ninth = new AnsweredQuestion(new Question(8, "Can Typescript be compiled to generate ES5 compatible code?"), true);
        var tenth = new AnsweredQuestion(new Question(9, "AngularJS and Angular are same. Is it?"), false);
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
    SimpleQuestionService.prototype.get = function () {
        return this.questionbank[Math.floor(Math.random() * 10)];
    };
    SimpleQuestionService.prototype.evaluate = function (id, answer) {
        var q = this.questionbank[id];
        if (q.answer == answer)
            return true;
        return false;
    };
    return SimpleQuestionService;
}());
var qs = new SimpleQuestionService();
var q = qs.get();
console.log("Question: " + q.description);
var a = true;
console.log("Answering as: " + a);
console.log("Answer is correct?: " + qs.evaluate(q.id, a));
