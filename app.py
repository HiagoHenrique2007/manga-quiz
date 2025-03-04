from flask import Flask, url_for, render_template
from utils import quizs_id, quizs

app = Flask(__name__)

@app.route('/')
def listOfQuizs():
  return render_template('index.html', quizs_id=quizs_id)

@app.route('/quiz/id-<int:id>')
def quiz(id):
  quiz_selected = 0
  
  for quiz in quizs:
    if quiz['id'] == id:
      quiz_selected = quiz
      break
  
  return render_template('quiz.html', quiz=quiz_selected)
  

app.run(debug=True)