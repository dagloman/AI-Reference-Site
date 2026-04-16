import Link from "next/link";
import { useRouter } from "next/router";
import { tools } from "../data/tools";

export default function ToolPage() {
  const router = useRouter();
  const { slug } = router.query;

  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
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
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Link href="/" style={{ color: "#9aa0ff", textDecoration: "none" }}>
            ← Back to all tools
          </Link>
          <h1 style={{ marginTop: 24 }}>Tool not found</h1>
        </div>
      </div>
    );
  }

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
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Link href="/" style={{ color: "#9aa0ff", textDecoration: "none" }}>
          ← Back to all tools
        </Link>

        <div
          style={{
            marginTop: 20,
            background: "#151520",
            border: "1px solid #2d2d3f",
            borderRadius: 16,
            padding: 24,
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#23233a",
              color: "#bbb",
              borderRadius: 999,
              padding: "6px 12px",
              fontSize: 12,
              marginBottom: 16,
            }}
          >
            {tool.category}
          </div>

          <h1 style={{ fontSize: 36, margin: "0 0 12px 0" }}>{tool.name}</h1>
          <p style={{ color: "#b0b0c0", fontSize: 16, lineHeight: 1.6 }}>
            {tool.explanation}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 12,
              marginTop: 24,
            }}
          >
            <InfoCard label="Best For" value={tool.bestFor} />
            <InfoCard label="Difficulty" value={tool.difficulty} />
            <InfoCard
              label="Official Site"
              value={
                <a
                  href={tool.site}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#9aa0ff" }}
                >
                  Visit website
                </a>
              }
            />
          </div>
        </div>

        <Section title="Pros">
          <BulletList items={tool.pros} />
        </Section>

        <Section title="Cons">
          <BulletList items={tool.cons} />
        </Section>

        <Section title="Use Cases">
          <BulletList items={tool.useCases} />
        </Section>
      </div>
    </div>
  );
}

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#151520",
        border: "1px solid #2d2d3f",
        borderRadius: 12,
        padding: 16,
      }}
    >
      <div style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>{label}</div>
      <div>{value}</div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        marginTop: 20,
        background: "#151520",
        border: "1px solid #2d2d3f",
        borderRadius: 16,
        padding: 24,
      }}
    >
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 20, color: "#c8c8d8", lineHeight: 1.8 }}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
