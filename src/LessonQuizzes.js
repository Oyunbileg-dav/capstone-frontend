import React from "react";
import { useEffect, useState,  } from "react";
import { useParams } from "react-router-dom"
import NavbarAuth from "./NavbarAuth";
import MultipleChoiceQuestion from "./LessonQuiz";


export default function LessonQuizzes() {
  const { lessonCode } = useParams()
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nodejs-auth-app-oyu.herokuapp.com/lessons/${lessonCode}/quizzes`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`https://nodejs-auth-app-oyu.herokuapp.com/lessons/${lessonCode}/quizzes`);
      })
      .catch((error) => console.log(error));
  }, [lessonCode]);

  return (
    <>
    <NavbarAuth/>
      {!isLoading && (
        <>
        <div className="content">
          <h1 className="word">Practice question</h1>
          <div>
          {!isLoading && 
            data.map((quiz) => {
              return (
                <div>
                <MultipleChoiceQuestion quizPrompt={quiz.quizPrompt} options={quiz.options} answer={quiz.answer}/>
                </div>
              )
            })}
        </div>
        </div>
        </>
      )}
    </>
  );


  };
