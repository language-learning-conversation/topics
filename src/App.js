import './App.css';
import topics from './topics.json';
import React, {useState} from "react"

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const randomNumberInRange = (max) => { 
    return Math.floor(Math.random() * (max)); 
  }; 

  const handleClick = () => { 
      var count = Object.keys(topics).length;
      var nextIndex = randomNumberInRange(count);
      while (nextIndex == questionIndex) {
        nextIndex = randomNumberInRange(count);
      }
      setQuestionIndex(nextIndex); 
      document.getElementById("question").innerHTML = topics[questionIndex]["Question"]
      document.getElementById("vocab").innerHTML = topics[questionIndex]["Vocabulary"]
  }; 

  return (
    <div>
      <header>
        Use this site to generate conversation topics for language learning!
      </header>
      <br></br>
      <button onClick={(handleClick)}>
        Generate Topic
      </button>
      <p id="question"></p>
      <p id="vocab"></p>
    </div>
  );
}

export default App;

