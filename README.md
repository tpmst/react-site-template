# React Website with Authentication

This is a React-based web application that demonstrates the use of routing, authentication, and protected routes. The project includes several pages, a sidebar menu, and a login system that restricts access to certain pages.

## Features

- **Home Page:** A welcome page for users after login.
- **About Page:** Information about the application or the organization.
- **Services Page:** Details about the services offered.
- **Contact Page:** A page to get in touch with the organization.
- **Login Page:** A page to authenticate users and gain access to protected routes.
- **Landing Page:** A public page shown before login.

## Technologies

- **React:** JavaScript library for building user interfaces.
- **React Router DOM:** Routing library for React.
- **Material-UI:** UI component library for React.
- **TypeScript:** Type-safe language for JavaScript.

## Installation

1. **Clone the repository:**
git clone <repository-url>

1. **Navigate to the project directory:**
cd <project-directory>

1. **Install dependencies:**
npm install

1. **Run the application:**
npm run dev


## Folder Structure

- `src/`
  - `components/` : Contains reusable components like `DrawerMenu`.
  - `pages/` : Includes page components such as `Home`, `About`, `Services`, `Contact`, `Login`, and `LandingPage`.
  - `contexts/` : Manages user authentication state and provides context for login through `AuthContext`.
  - `logic/` : Contains business logic and route protection mechanisms like `PrivateRoute`.
  - `App.tsx` : The main application component that handles routing.
  - `index.tsx` : The entry point of the application.
  - `App.css` : Application-wide styles.

## Authentication

- **Auth Context**: Manages user authentication state and provides login and logout functionality.
- **Private Routes**: Protects routes to ensure that only authenticated users can access them.

## Usage

1. **Login**: Navigate to the `/login` page and use the credentials:
   - **Email**: `test@example.com`
   - **Password**: `password`
   
2. **Access Protected Pages**: After logging in, you can access the following pages:
   - `/home`
   - `/about`
   - `/services`
   - `/contact`
   
3. **Logout**: Click the "Logout" button to return to the landing page.

## Contributing

Feel free to fork the repository and submit pull requests with improvements or bug fixes.