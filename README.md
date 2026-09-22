# BUILDER-AI

AI-powered website builder that turns natural-language prompts into structured web projects.

## Features

- Generate websites from AI prompts
- Automatically plan and create project files
- Edit and preview generated projects
- Save and manage projects
- Publish projects publicly
- User authentication

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, React Router
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** JWT, HTTP-only cookies, bcrypt
- **AI:** OpenRouter and the Vercel AI SDK

## Project Structure

```text
BUILDER-AI/
├── client/   # React frontend
└── server/   # Express API and AI services
```

## Requirements

- Node.js 18+
- MongoDB
- OpenRouter API key

## Installation

```bash
git clone https://github.com/kingpin9292/BUILDER-AI.git
cd BUILDER-AI

cd client
npm install

cd ../server
npm install
```

## Environment Variables

Create `server/.env`:

```env
MONGODB_URI=mongodb://localhost:27017/builder-ai
JWT_SECRET=your_secret_key
OPENROUTER_API_KEY=your_api_key
OPENROUTER_MODEL=openrouter/free
ORIGINS=http://localhost:5173
```

## Running Locally

Start the backend:

```bash
cd server
npm run dev
```

Start the frontend in a separate terminal:

```bash
cd client
npm run dev
```

The frontend runs at `http://localhost:5173` by default.

## API Routes

### Authentication

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`

### Projects

- `POST /api/projects`
- `GET /api/projects`
- `GET /api/projects/:id`
- `PUT /api/projects/:id/files`
- `DELETE /api/projects/:id`
- `POST /api/projects/:id/publish`
- `GET /api/projects/public/:id`

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

## License

See the `LICENSE` file for license information.
