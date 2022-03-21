import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { addQuestion } from '../../modules/QuestionManager';
import './QuestionForm.css'
import { addQuestion } from "../Modules/QuestionManager"

export const QuestionForm = () => {
	// State will contain both animal data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [question, setQuestion] = useState({
		question: "",
		answer: "",
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
	

	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newQuestion = { ...question }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newQuestion[event.target.id] = selectedVal
		// update state
		setQuestion(newQuestion)
	}

    useEffect(() => {
		//load location data and setState
	}, []);

     useEffect(() => {
		//load customer data and setState
	}, []);


	

	return (
		<form className="questionForm">
			<h2 className="questionForm__title">New Question</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Question:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Question" value={question.name} />
				</div>
			</fieldset>
			
			
			
			<button className="btn btn-primary"
				onClick={addQuestion}>
				Create Question
          </button>
		</form>
	)
};
