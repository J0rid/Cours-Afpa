class Answer {

    checkAnswer(button, selected, correct) {
        const buttons = answersContainer.querySelectorAll('button');
        buttons.forEach(btn => btn.disabled = true); // Désactive tous les boutons
    
        if (selected === correct) {
            button.classList.add('correct');
            responseMessage.textContent = 'Bonne réponse!';
            responseMessage.style.color = 'green';
            score++;
        } else {
            button.classList.add('wrong');
            responseMessage.textContent = 'Mauvaise réponse!';
            responseMessage.style.color = 'red';
            // Marquer la bonne réponse
            buttons.forEach(btn => {
                if (btn.textContent === correct) {
                    btn.classList.add('correct');
                }
            });
        }
    
        // Ajouter au tableau des réponses
        addResponseToTable(questions[currentQuestionIndex].country, selected, selected === correct ? 'Oui' : 'Non');
    
        // Passer à la question suivante après 1 seconde
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                showQuestion();
            } else {
                endQuiz();
            }
        }, 2000);
    }

}