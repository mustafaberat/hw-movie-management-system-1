# Movie Management System

The Movie Management System is a comprehensive API for managing movies, user authentication, session scheduling and watch history tracking. Built with NestJS and TypeScript, this project provides features for user registration, login, session management, and viewing watch history.

### Features

- User registration and authentication
- Movie management
- Session scheduling for movies
- Watch history tracking for users

## Explanation of Approach, Decisions, and Challenges

#### Approach

In developing this movie management system, the primary goal was to create a robust and scalable RESTful API using NestJS, a popular framework built on top of Node.js. The system encompasses various features such as user registration, login, movie management, session scheduling, and watch history tracking. The approach involved several key steps:

1. **Architecture and Design**:

   - **Modular Design**: The application was designed using NestJS modules to ensure a clean separation of concerns. Each module is responsible for a specific aspect of the system (e.g., authentication, user management, movie management).
   - **DTOs and Validation**: Data Transfer Objects (DTOs) were used to define the structure of the data exchanged between the client and server. Class-validator was employed for input validation to ensure data integrity.
   - **Service Layer**: Business logic was encapsulated within services to keep controllers lean and focused on handling HTTP requests.

2. **Authentication and Authorization**:

   - **JWT Authentication**: Implemented JSON Web Token (JWT) for secure user authentication and session management. This includes login and registration endpoints protected by guards to ensure only authenticated users can access certain resources.
   - **Local Strategy**: Used Passport's Local Strategy for handling username and password authentication with salting of password.

3. **CRUD Operations**:

   - Created endpoints for managment movies, including creating, updating, retrieving, and deleting movies. Sessions for each movie were managed through a dedicated service. Implemented session management with specific time slots and room numbers.

4. **Testing**:
   - **Unit Testing**: Used Jest for unit testing to ensure that each component of the application functions correctly. Tests were written for services, controllers, and guards.
   - **Result**:
     Test Suites: 4 passed, 4 total
     Tests: 17 passed, 17 total
     Snapshots: 0 total
     Time: 3.415 s, estimated 4 s

#### Decisions

- **In-Memory Storage**: For simplicity and demonstration purposes, in-memory storage was used. In a production environment, this would be replaced with a database like PostgreSQL or MongoDB.
- **Swagger Integration**: Integrated Swagger for API documentation to provide clear and interactive API documentation for developers.

#### Challenges

1. **Authentication Issues**:

   - Faced challenges with correctly configuring and integrating Passport strategies. Ensuring that JWT authentication was correctly set up and that guards were properly applied required careful debugging and testing.

2. **In-Memory Data Management**:

   - Managing in-memory data without looking at with a table due to lack of ui.