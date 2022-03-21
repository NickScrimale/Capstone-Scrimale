import React from 'react';
import "./Question.css";
import { Link } from "react-router-dom";

export const QuestionCard = ({ question }) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Question: <span className="card-question">
            {question.question}
          </span></h3>
        </div>
      </div>
    );
}
  