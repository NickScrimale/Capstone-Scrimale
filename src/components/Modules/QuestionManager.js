const remoteURL = "http://localhost:8088"

export const getQuestionById = (questionId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/animals/${questionId}?_expand=userId`)
  .then(res => res.json())
}

export const getAllQuestions = () => {
  return fetch(`${remoteURL}/questions`)
  .then(res => res.json())
}

export const deleteQuestion = (id) => {
    return fetch(`${remoteURL}/questions/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}

export const addQuestion = (newQuestion) => {
  return fetch(`${remoteURL}/questions`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newQuestion)
  }).then(response => response.json())
}