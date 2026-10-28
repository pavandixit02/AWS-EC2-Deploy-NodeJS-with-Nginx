
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3030;

// Middleware
app.use(express.json());

// Home page
app.get("/", (req, res) => {
  res.status(200).send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="A modern Node.js application." />
  <title>Node.js Pro | Home</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background: #0b1120;
      color: #f8fafc;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    nav {
      padding: 22px 8%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #253047;
    }

    .logo {
      font-size: 22px;
      font-weight: bold;
      color: #34d399;
    }

    nav span {
      color: #94a3b8;
      font-size: 14px;
    }

    main {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 60px 20px;
    }

    .card {
      max-width: 720px;
      width: 100%;
      padding: 48px 30px;
      border: 1px solid #253047;
      border-radius: 24px;
      background: linear-gradient(145deg, #151f33, #101827);
      box-shadow: 0 20px 60px #00000030;
    }

    .badge {
      display: inline-block;
      padding: 9px 15px;
      border-radius: 30px;
      background: #064e3b;
      color: #6ee7b7;
      font-size: 13px;
      margin-bottom: 25px;
    }

    h1 {
      font-size: clamp(32px, 6vw, 54px);
      line-height: 1.15;
      margin-bottom: 20px;
    }

    h1 span {
      color: #34d399;
    }

    .description {
      color: #a5b4c9;
      line-height: 1.8;
      margin-bottom: 30px;
    }

    .button {
      display: inline-block;
      padding: 13px 22px;
      background: #34d399;
      color: #052e24;
      font-weight: bold;
      text-decoration: none;
      border-radius: 10px;
      transition: 0.2s;
    }

    .button:hover {
      background: #6ee7b7;
      transform: translateY(-2px);
    }

    .features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 40px;
    }

    .feature {
      padding: 18px 10px;
      border-radius: 12px;
      background: #1e293b;
    }

    .feature strong {
      display: block;
      color: #6ee7b7;
      margin-bottom: 8px;
    }

    .feature small {
      color: #94a3b8;
    }

    footer {
      text-align: center;
      padding: 22px;
      color: #64748b;
      font-size: 13px;
      border-top: 1px solid #253047;
    }

    @media (max-width: 520px) {
      nav {
        padding: 18px 5%;
      }

      .card {
        padding: 35px 18px;
      }

      .features {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>

<body>
  <nav>
    <div class="logo">Node.js Pro</div>
    <span>My First Backend Project</span>
  </nav>

  <main>
    <section class="card">
      <div class="badge">● Application is running</div>

      <h1>Build. Learn. <span>Deploy.</span></h1>

      <p class="description">
        Welcome to my Node.js application!
        This project demonstrates a backend server built with
        Express.js and is ready for further DevOps practice.
      </p>

      <a class="button" href="/api/info">Explore API →</a>

      <div class="features">
        <div class="feature">
          <strong>Node.js</strong>
          <small>JavaScript runtime</small>
        </div>

        <div class="feature">
          <strong>Express</strong>
          <small>Web framework</small>
        </div>

        <div class="feature">
          <strong>DevOps</strong>
          <small>Ready to learn</small>
        </div>
      </div>
    </section>
  </main>

  <footer>
    Built with Node.js and Express.js | Learning by building
  </footer>
</body>
</html>
  `);
});

// Health-check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// API information endpoint
app.get("/api/info", (req, res) => {
  res.status(200).json({
    message: "Welcome to my Node.js API",
    application: "Node.js Pro",
    version: "1.0.0",
    endpoints: {
      home: "/",
      health: "/health",
      info: "/api/info"
    }
  });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl
  });
});

// Start server
const server = app.listen(PORT, "0.0.0.0", () => {
  console.log("==================================");
  console.log("  Node.js Pro is running!");
  console.log(`  Local:  http://localhost:${PORT}`);
  console.log(`  Health: http://localhost:${PORT}/health`);
  console.log("==================================");
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("Shutting down server...");

  server.close(() => {
    console.log("Server stopped.");
    process.exit(0);
  });
});
