### At the moment, there is one bug. The correctness of the first entered character after updating the text is not being checked.


You can see the implementation of the application by following the link: 
# https://www.hardportfolio.ru/allProject/Blind/.


## Installation

To get started with this project, follow these steps:

1. Clone this repository to your local machine:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd <project-directory>
   ```

3. Install the dependencies:

   ```
   npm install
   ```

   This will download and install all the required packages and dependencies specified in the `package.json` file.

4. Start the development server:

   ```
   npm start
   ```

   This will start the app in development mode, and you can view it in your browser at [http://localhost:3000](http://localhost:3000). Any changes you make to the source code will automatically reload the app.

## Folder Structure

The project structure follows the conventions of Create React App. Here is an overview of the main folders and files:

- `public`: This folder contains the publicly accessible static files, such as HTML, images, and icons.

- `src`: This folder contains the application source code. It is where you will write most of your code.

  - `components`: This folder contains reusable React components used in the application.
   - `App.js`: This is the main component where the application is initialized and other components are rendered.

  - `styles`: This folder contains SASS files and img for styling the application.

  - `index.js`: This is the entry point of the application. It renders the `App` component into the root DOM element.

  - `index.scss`: This is the main SCSS file for the application.

  - `reducers`: This folder contains Redux reducers, which are responsible for handling state changes in the application.
  - `store`: This folder contains the Redux store configuration.
  - `hooks`: This folder contains custom React hooks that provide reusable functionality across components.
  - `servises`: This folder contains service modules that handle API requests, data fetching, or other external interactions



Thank you for your attention =)

