class Quiz {
    private questions: { question: string, answers: string[], correctAnswer: string }[] = [
  
{
  question: "Wie heißt das HTML-Element, mit dem man einen Absatz erstellt?",
  answers: ["p", "div", "a", "span"],
  correctAnswer: "p"
  },
  {
  question: "Wie heißt die Eigenschaft, mit der man die Hintergrundfarbe eines HTML-Elements festlegt?",
  answers: ["color", "background", "background-color", "bgcolor"],
  correctAnswer: "background-color"
  },
  {
  question: "Wie heißt das HTML-Element, mit dem man einen Link erstellt?",
  answers: ["a", "link", "url", "hyperlink"],
  correctAnswer: "a"
  },
  {
  question: "Wie heißt die Eigenschaft, mit der man die Schriftart eines HTML-Elements festlegt?",
  answers: ["font-family", "font", "text-font", "typeface"],
  correctAnswer: "font-family"
  },
  {
  question: "Wie heißt das HTML-Element, mit dem man ein Bild einfügt?",
  answers: ["img", "picture", "photo", "image"],
  correctAnswer: "img"
  },

  {
  question: "Wie heißt das Schlüsselwort, mit dem man eine Variable in TypeScript deklariert?",
  answers: ["var", "let", "const", "declare"],
  correctAnswer: "let"
  },
  {
  question: "Wie heißt die Methode, mit der man die Größe eines Arrays in TypeScript herausfindet?",
  answers: ["length()", "size()", "count()", "len()"],
  correctAnswer: "length"
  },
  {
  question: "Wie heißt das Schlüsselwort, mit dem man eine Funktion in TypeScript deklariert?",
  answers: ["function", "func", "method", "procedure"],
  correctAnswer: "function"
  },
  {
  question: "Wie heißt das Schlüsselwort, mit dem man eine Klasse in TypeScript deklariert?",
  answers: ["class", "type", "constructor", "object"],
  correctAnswer: "class"
  },
  {
  question: "Wie heißt der Typ, der verwendet wird, um einen Wert darzustellen, der entweder true oder false sein kann?",
  answers: ["boolean", "bool", "logical", "true/false"],
  correctAnswer: "boolean"
  },
 
      
    ];
    private currentQuestionIndex: number = 0;
    private score: number = 0;
    private targetScore: number = 3;
  
    startQuiz() {
      this.renderQuestion();
    }
  
    private renderQuestion() {
      const question = this.questions[this.currentQuestionIndex];
  
      const questionEl = document.querySelector("#question") as HTMLHeadingElement;
      questionEl.innerText = question.question;
  
      const answersEl = document.querySelector("#answers") as HTMLDivElement;
      answersEl.innerHTML = "";
  
      for (const answer of question.answers) {
        const answerEl = document.createElement("div");
        answerEl.innerText = answer;
        answerEl.addEventListener("click", () => this.checkAnswer(answer));
        answersEl.appendChild(answerEl);
      }
    }
  
    private checkAnswer(answer: string) {
      const question = this.questions[this.currentQuestionIndex];
      if (answer === question.correctAnswer) {
        alert("BRAVOOO!");
      } else {
        alert("BRUUUH.");
      }
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex === this.questions.length) {
        alert("Quiz abgeschlossen!");
      } else {
        this.renderQuestion();
      }
      
    }
  }



  const topicSelector = document.querySelector("#topic-selector") as HTMLSelectElement;
topicSelector.addEventListener("change", (event) => {
  const selectedValue = (event.target as HTMLSelectElement).value;
  getQuestion(selectedValue);

  const topicSelector = document.getElementById("topic-selector") as HTMLSelectElement;
topicSelector.addEventListener("change", (event) => {
  const selectedValue = (event.target as HTMLSelectElement).value;
  getQuestion(selectedValue);
});
});

var currentScore = 0;

function updateScore() {
  currentScore++;
  document.getElementById("score").innerHTML = "Score: " + currentScore;
}

  const quiz = new Quiz();
  quiz.startQuiz();
  document.getElementById("next-button").addEventListener("click", () => quiz.displayNextQuestion());
  