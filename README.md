This project was developed as part of the Practical Work No. 2, of the Programming III course of the University Degree in Programming of the UTN-FRT.



📚 Description
In this project, a React application was created from scratch with the goal of managing a dynamic list of members. Various key React concepts and tools were used, including the creation of reusable components, route handling with react-router-dom, state management with useState, and form validation.

🛠️ Technologies Used
React: JavaScript library for building user interfaces.

react-router-dom: For route management within the application.

useState: For managing the state of components.

CSS: For styling (flexbox, cards, hover effects).

GitHub: For project management with branches and merges.

🚀 How to Run the Project
Clone the repository:

bash
Copiar
Editar
git clone https://github.com/yourUsername/yourRepository.git
Install the dependencies: After cloning the repository, navigate to the project directory and run the following command to install the necessary dependencies:

bash
Copiar
Editar
cd yourRepository
npm install
Run the application: Once the dependencies are installed, you can start the development server with:

bash
Copiar
Editar
npm start
This will open the application in your default browser, typically at http://localhost:3000.

📄 Main Features
Main Components:

Header: Header component including the navigation menu.

Footer: Footer component with additional information.

Main: Contains the main logic of the application and displays the list of members.

Route Handling: The application uses react-router-dom to manage routes and navigation between different views within the app.

Member Form: A form is implemented to add new members to the list. This form includes:

Validations: Ensures that the data entered is valid before being submitted.

The fields in the form include:

Name: Requires a valid name for each member.

Age: Requires a positive integer.

State Management with useState: The application state is managed using useState to store the list of members. The state is dynamically updated every time a new member is added.

🖼️ Styling
The styles were implemented using CSS, focusing on the following features:

Flexbox: To organize the layout of the sections flexibly.

Cards: Visual style for each listed member.

Hover Effects: Visual effects when the user hovers over elements in the interface.

📦 Project Structure
bash
Copiar
Editar
/src
  /components
    Header.js       # Header component.
    Footer.js       # Footer component.
    Main.js         # Main logic and member list.
  /styles
    App.css         # Main styles.
    Header.css      # Styles for the header.
    Main.css        # Styles for the list and form.
  App.js            # Main component managing the application.
  index.js          # Entry point of the application.
🤝 Contributing
If you would like to contribute to this project, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/new-feature).

Make your changes and commit them (git commit -am 'Added new feature').

Submit a pull request for review.

📝 License
This project is licensed under the MIT License. See the LICENSE file for details.