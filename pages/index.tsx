import { useState } from "react";

export default function Home() {
  const [selectedTool, setSelectedTool] = useState<any>(null);

  const tools = [
    {
      name: "ChatGPT",
      description: "General AI assistant for writing, coding, and problem solving",
    },
    {
      name: "Claude",
      description: "AI focused on deep reasoning and long documents",
    },
    {
      name: "Perplexity",
      description: "AI-powered search with real-time citations",
    },
    {
      name: "Microsoft Copilot",
      description: "AI built into Microsoft 365 tools",
    },
    {
      name: "Gemini",
      description: "Google AI assistant integrated with workspace",
    },
    {
      name: "Midjourney",
      description: "High-quality AI image generator",
    },
    {
      name: "DALL·E",
      description: "Conversational image creation and editing",
    },
    {
      name: "Runway",
      description: "AI video generation and editing",
    },
    {
      name: "GitHub Copilot",
      description: "AI coding assistant",
    },
    {
      name: "ElevenLabs",
      description: "AI voice generation and cloning",
    },
    {
      name: "Suno",
      description: "AI music and song generator",
    },
    {
      name: "Canva",
      description: "AI-powered design platform",
    },
    {
      name: "Figma AI",
      description: "AI for UI/UX design workflows",
    },
    {
      name: "Grammarly",
      description: "AI writing and grammar assistant",
    },
    {
      name: "Jasper",
      description: "AI for marketing and content creation",
    },
    {
      name: "Zapier",
      description: "AI automation and workflow tool",
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontSize: 28, marginBottom: 20 }}>
        AI Reference Hub
      </h1>

      {!selectedTool && (
        <div style={{ display: "grid", gap: 12 }}>
          {tools.map((tool) => (
            <div
              key={tool.name}
              onClick={() => setSelectedTool(tool)}
              style={{
                padding: 16,
                background: "#1e1e2f",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <h2>{tool.name}</h2>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      )}

      {selectedTool && (
        <div>
          <button onClick={() => setSelectedTool(null)}>
            ← Back
          </button>

          <h2 style={{ fontSize: 24, marginTop: 10 }}>
            {selectedTool.name}
          </h2>

          <p style={{ marginTop: 10 }}>
            {selectedTool.description}
          </p>
        </div>
      )}
    </div>
  );
}
