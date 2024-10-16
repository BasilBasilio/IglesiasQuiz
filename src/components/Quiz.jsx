import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { quizQuestions } from '../quizQuestions'
import Button from './Button'

export default function Quiz() {
  const initialTime = 20;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const navigate = useNavigate();

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1)  
    }, 1000);
    if(timeRemaining <= 0) 
        navigate('/gameover')
    return () => clearInterval(timerInterval);
  }, [navigate, timeRemaining])
 
  function onSelectedAnswer(i) {
    if (i !== quizQuestions[currentQuestion].correctAnswer) {
      navigate("/gameover");
    }
    resetTimer();
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  }

  function resetTimer() {
    setTimeRemaining(initialTime)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="bg-black p-8 w-auto bg-opacity-60 text-center">
          {currentQuestion < 10 ? (
            <>
              <h1 className="text-4xl font-extrabold text-primary [text-shadow:_0_6px_0_rgb(0_0_0_/_60%)]">
                Domanda {currentQuestion + 1} di 10
              </h1>
              <div className="flex justify-center">
                <div className="w-20 py-3 px-4 bg-primary text-secondary text-3xl font-semibold rounded-md mt-6 mb-6">
                  {timeRemaining}
                </div>
              </div>
              <h2 className="text-2xl font-extrabold text-primary [text-shadow:_0_6px_0_rgb(0_0_0_/_60%)] mb-6">
                {quizQuestions[currentQuestion].question}
              </h2>
              <div className="grid grid-cols-4 gap-8">
                {quizQuestions[currentQuestion].answers.map((answer, i) => (
                  <div key={i}>
                    <button
                      className="mt-4 w-40 rounded-lg border-1 border-2 border-primary py-3 px-6 font-sans text-xs text-center 
                      font-bold uppercase text-primary transition-all hover:shadow-md hover:bg-secondary"
                      onClick={() => onSelectedAnswer(i)}
                    >
                      {answer}
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-extrabold text-primary [text-shadow:_0_6px_0_rgb(0_0_0_/_60%)]">
                Hai vinto!
              </h1>
              <h2 className="text-2xl font-extrabold text-primary [text-shadow:_0_6px_0_rgb(0_0_0_/_60%)] mb-6">
                Carlo Conty sarebbe molto fiero di te...
              </h2>
              <Button link={"/"}>Esci</Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
