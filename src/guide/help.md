Implementing the add note functionality.
In this step we will add a user interactivity, where the user will be able to add notes. User can enter Note Title and Note Content and use the Add button to add the Note.

Create an object with "title" and "content" as key. We will use this object to store our data, let's call it note.
This is the perfect time to make use of useState Hook, create a useState for individual note to be added.
For simplicity, all user interactivity is handled in our App.jsx component. To support this, we need to pass data and functions as props.
Create an array of the note object, we can use this array to render all the note objects in App.jsx. Implement this array using useState Hook.
When user clicks add, use the passed prop functions from App.jsx to handle adding the note in createArea.jsx to notes array in App.jsx.
Try to implement the form fields in form a contolled component. Since, we are using form for CreateArea.jsx, make sure to prevent default reloading when user clicks on submit.

Now that we have added the add functionality with our components, let's move on to the next step and add delete functionality.

README.md
index.js
Edit File
Codedamn Projects - Google Keep Notes Clone
This is one of the many projects available on codedamn to reinforce your learning by building. If you want to become a full stack developer and learn by practicing, feel free to attempt this challenge. Feel free to check out the codedamn Full Stack Web Development Learning Path to learn more about how to become an awesome full stack developer.

Instructions
Your challenge is to build out this project and get it looking as close to the design as possible.

You can use any tools or technologies you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

You can get the complete idea of the project from checking out the /designs folder.

You can try and replicate by directly visiting the website.

Demo:
demo-full

Where to find everything
Your task is to build out the project as per the provided screenshots.

The designs are in image formats can be found in /designs.

Send feedback!
We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please visit codedamn feedback page

Terminal


LET'S GO!

https://regular-pilot.codedamn.app:1337



Submit Step