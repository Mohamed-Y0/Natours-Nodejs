# Natours API

## Project Description

This is a Node.js, Express, and MongoDB-based application for managing tours. It provides a full-featured API and a server-side rendered website for user authentication, tour management, and advanced booking functionalities.

## Current Features

- **User Authentication & Authorization:**
  - User signup and login
  - Secure JWT-based authentication
  - Password management (forgot password, reset password, update password)
  - Role-based access control (user, guide, lead-guide, admin)
  - User account management (update profile, deactivate account)
- **Tour Management:**
  - CRUD operations for tours (Create, Read, Update, Delete)
  - Advanced API features (filtering, sorting, field limiting, pagination)
  - Alias routes for common queries (e.g., Top 5 Cheap Tours)
  - Complex aggregation pipelines for tour statistics and monthly plans
- **Review Management:**
  - CRUD operations for reviews (Create, Read, Update, Delete)
  - Automated average rating calculation for tours
- **Booking & Payments:**
  - Full Stripe integration for secure credit card payments
  - Automated booking creation upon successful checkout
  - User dashboard for managing personal bookings

## Server-Side Rendering (SSR)

The application includes a fully functional frontend built with the **Pug** template engine:

- Dynamic overview page showing all tours
- Detailed tour pages with interactive maps and review sections
- User authentication forms (Login & Signup) with cookie-based session management
- Personalized account settings and "My Bookings" pages
- Custom error templates for a seamless user experience

## Image Uploads & Processing

- **User Profiles:** Upload and automatic resizing of profile photos to square WebP format for optimized performance.
- **Tour Images:** Multi-image upload for tours, with automatic resizing and conversion to WebP format.

## Security Features

- **HTTP Security Headers:** Utilizes `helmet` to set various security-related HTTP headers.
- **Rate Limiting:** Implements `express-rate-limit` to prevent brute-force and denial-of-service attacks.
- **Data Sanitization:**
  - Protects against NoSQL query injection attacks using `express-mongo-sanitize`.
  - Prevents Cross-Site Scripting (XSS) attacks by sanitizing user input with `xss-clean`.
- **Parameter Pollution Prevention:** Uses `hpp` to prevent HTTP Parameter Pollution attacks.
- **Request Body Size Limiting:** Limits incoming request bodies to 10kb to prevent performance degradation.

## Additional Features

- **Error Handling:** Global centralized error handling with different responses for development vs. production.
- **Email Utilities:** Sends automated emails for welcome messages and password resets (using Mailtrap/SendGrid).

## Technologies Used

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB & Mongoose
- **Templating:** Pug (Server-Side Rendering)
- **Payments:** Stripe API
- **Authentication:** JSON Web Tokens (JWT) & Cookie-parser
- **Image Processing:** Sharp (resizing & conversion) & Multer (uploads)
- **Security:** Helmet, HPP, XSS-Clean, Express-Rate-Limit, BcryptJS
- **Email:** Nodemailer & HTML-to-Text
- **Utilities:** Slugify, Validator, Axios

## Core Development Features

- **Environment Variables:** Managed via `dotenv` for secure configuration.
- **Production Ready:** Configured for both development and production environments (using `cross-env`).
- **Data Seeding:** Custom scripts for importing/deleting development data.
- **Modern JS:** Built using ES Modules (`import/export` syntax).

## Development Status

More features may be added later - But for now the project is complete
