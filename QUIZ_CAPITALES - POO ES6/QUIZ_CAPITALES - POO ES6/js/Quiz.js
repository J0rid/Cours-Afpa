

import Dom from "./Dom.js";
import Question from "./Question.js";

class Quiz {

    constructor(responseMessage, responseTable, scoreContainer, answersContainer, questionText, finalScore, questions, restartBtn) {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.responseMessage = responseMessage;
        this.responseTable = responseTable;
        this.scoreContainer = scoreContainer;
        this.answersContainer = answersContainer;
        this.questionText = questionText;
        this.finalScore = finalScore;
        this.questions = questions;
        this.restartBtn = restartBtn;

        Dom.triggerEvent(this.restartBtn, 'click', this.startQuiz)
    }

    startQuiz() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        Dom.modifyText(this.responseMessage, '');
        Dom.modifyHtml(this.responseTable, '');
        Dom.toggleClass(this.scoreContainer, 'hidden', 'add');
        this.showQuestion();
    }



    endQuiz() {

        Dom.modifyText(this.questionText, '');
        Dom.modifyHtml(this.answersContainer, '');
        Dom.toggleClass(this.scoreContainer, 'hidden', 'remove');
        Dom.modifyText(this.finalScore, `Votre score final est : ${this.score}/${this.questions.length}`);

    }

    showQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        Dom.modifyText(this.questionText, `Quelle est la capitale de ${Question.country}?`);

        const answers = mixQuestionAnswer();

        Dom.modifyHtml(this.answersContainer, '');
        Dom.modifyText(this.responseMessage, '');

        answers.forEach(answer => {
            const button = document.createElement('button');
            Dom.modifyText(button, answer);
            Dom.triggerEvent(button, 'click', this.checkAnswer);
            Dom.appendChild(this.answersContainer, button);
        });
    }

    checkAnswer(button, selected, correct) {
        const buttons = answersContainer.querySelectorAll('button');
        buttons.forEach(btn => btn.disabled = true); // Désactive tous les boutons

        if (selected === correct) {

            Dom.toggleClass(button, 'correct', 'add');
            Dom.modifyText(this.responseMessage, 'Bonne réponse!');
            Dom.modifyStyle(this.responseMessage, 'color', 'green');

            this.score++;

        } else {

            Dom.toggleClass(button, 'wrong', 'add');
            Dom.modifyText(this.responseMessage, 'Mauvaise réponse!');
            Dom.modifyStyle(this.responseMessage, 'color', 'red')

            // Marquer la bonne réponse
            buttons.forEach(btn => {
                if (btn.textContent === correct) {
                    Dom.toggleClass(btn, 'correct', 'add');
                }
            });
        }
        this.addResponseToTable(this.questions[this.currentQuestionIndex].country, selected, selected === correct ? 'Oui' : 'Non');
    }

    // Ajouter au tableau des réponses
    addResponseToTable(country, answer, isCorrect) {

        // questions[this.currentQuestionIndex].country, selected, selected === correct ? 'Oui' : 'Non'

        const row = Dom.createElement('tr');
        Dom.modifyHtml(row, `
            <td>${country}</td>
            <td>${answer}</td>
            <td>${isCorrect}</td>
        `);
        Dom.appendChild(this.responseTable, row);


        // Passer à la question suivante après 1 seconde
        setTimeout(() => {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.currentQuestionIndex++;
                this.showQuestion();
            } else {
                this.endQuiz();
            }
        }, 2000);
    }

}
export default Quiz