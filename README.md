# Natours API

## Project Description

This is a Node.js, Express, and MongoDB-based API for managing tours. It provides functionalities for user authentication, tour management, and advanced API features like filtering, sorting, and pagination.

## Current Features

- User Authentication:
  - User signup and login
  - Password management (forgot password, reset password, update password)
  - User account management (update profile, deactivate account)
- Tour Management:
  - CRUD operations for tours (Create, Read, Update, Delete)
  - Advanced API features (filtering, sorting, field limiting, pagination)

## Security Features

- **HTTP Security Headers:** Utilizes `helmet` to set various security-related HTTP headers to protect against common web vulnerabilities.
- **Rate Limiting:** Implements `express-rate-limit` to prevent brute-force and denial-of-service attacks by limiting the number of requests from a single IP address.
- **Data Sanitization:**
  - Protects against NoSQL query injection attacks using `express-mongo-sanitize`.
  - Prevents Cross-Site Scripting (XSS) attacks by sanitizing user input with `xss-clean`.
- **Parameter Pollution Prevention:** Uses `hpp` to prevent HTTP Parameter Pollution attacks.
- **Request Body Size Limiting:** Limits the size of incoming request bodies to 10kb to prevent large payloads from impacting server performance.

## Additional Features

- **Error Handling:** Centralized error handling for consistent and predictable error responses.
- **Email Utilities:** Provides utilities for sending emails.

## Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT for authentication
- Bcrypt for password hashing
- Validator for data validation

## Development Status

**This project is currently under development.** New features are being added and existing ones are being refined.
