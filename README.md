# ReactJS ToDo App

The project is built using **Vite** (https://vitejs.dev/).

**To run project** you need to run launch these commands:  
**npm ci** 
followed by 
**npm start dev**
Next, you could open the application in the browser.

The following npm **packages** were used in this project:
-- @reduxjs/toolkit and react-redux (to use storage in the project)

**config.js**
We use this file to export some constants; in particular, the value of the maximum allowable length of the input todo is stored here (here it is 13).

**Application** The application consists of the following components: TodoForm(input and button to add todos), DropDownMenu(for filtering), TodoCounter(to display number of completed and uncompleted tasks) and TodoList(to display todos). Component TodoItem is responsible for displaying a task and changing its status by clicking on the title. If a task is completed, its name is crossed out and the checkbox sets in the checked state. All these components are in the "components" folder. In the "store" folder there is a code responsible for managing the state of the application.