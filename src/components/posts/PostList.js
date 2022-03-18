


export const contentForm = () => {
    let html = `<br> 
    <br>
    <br>
 
    <div class="miniMode"> Have a gif to post?</div>
    <div class="field">
            <label class="newPost__input" for="description"></label>
            <input type="text" name="title" class="input" placeholder="Title"/>
        </div>
    <div class="field">
        <label class="newPost__upload" for="imageURL"></label><br>
        <input type="url" name="imageURL" class="input" placeholder="URL of gif"/>
    </div>
        <div class="field">
            <label class="newPost__description" for="message"></label><br>
            <input type="text" name="message" class="input" placeholder="Story behind your gif..." /><br>
        </div><br> 

        <button class="button" id="savePost">Save</button>
        <button class="button" id="newPost__drop">Cancel</button>
      
    `
    return html
}

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "miniMode" || clickEvent.target.id === "newPost__drop") {
        return document.querySelector(".miniMode").innerHTML = " "
        }

    else if (clickEvent.target.id === "savePost") {
        // Defining the logged in user
        const userId = parseInt(localStorage.getItem("trivia_user")) 

        // Get what the user entered into the form fields
        const userTitle = document.querySelector("input[name='title']").value  
        const userDescription = document.querySelector("input[name='message']").value  
        const userPost = document.querySelector("input[name='imageURL']").value  
        const postDate = now.valueOf() 


        // Make an object out of the user input
        const dataToSendToAPI = {
            userId: userId,
            title: userTitle,
            message: userDescription,
            
            postDate: postDate
        }

        // Send the data to the API for permanent storage
        sendPost(dataToSendToAPI)
    }
}
)