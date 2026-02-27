const express = require("express");
const app = express();
const PORT = 3000;

app.get("/resume", (req, res) => {
  res.json({
    name: "Abdoulie Drammeh",
    role: "Devopp engineer",
    skills: ["Azure", "Git", "Bash", "CI/CD"],
    learning: "Docker & Kubernetes"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
