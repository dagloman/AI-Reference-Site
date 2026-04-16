import Link from "next/link";
import { tools } from "../data/tools";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b12",
        color: "white",
        padding: 24,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: 34, marginBottom: 12 }}>AI Reference Hub</h1>
        <p style={{ color: "#aaa", marginBottom: 24 }}>
          Click any tool to open its full reference page.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/${tool.slug}`}
              style={{
                background: "#1b1b28",
                border: "1px solid #2d2d3f",
                borderRadius: 12,
                padding: 16,
                textDecoration: "none",
                color: "white",
              }}
            >
              <h2 style={{ margin: "0 0 8px 0", fontSize: 20 }}>{tool.name}</h2>
              <p style={{ margin: 0, color: "#b0b0c0", fontSize: 14 }}>
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
