export type Tool = {
  slug: string;
  name: string;
  description: string;
  explanation: string;
  site: string;
  category: string;
  bestFor: string;
  difficulty: string;
  pros: string[];
  cons: string[];
  useCases: string[];
};

export const tools: Tool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    description: "General AI assistant for writing, coding, and problem solving",
    explanation:
      "ChatGPT is an all-around AI assistant useful for writing, planning, coding help, summarization, and brainstorming.",
    site: "https://chatgpt.com",
    category: "Assistant",
    bestFor: "General use",
    difficulty: "Beginner",
    pros: ["Versatile", "Easy to use", "Strong for drafting"],
    cons: ["Needs fact-checking", "Quality depends on prompt"],
    useCases: ["Writing", "Coding help", "Planning", "Research support"],
  },
  {
    slug: "claude",
    name: "Claude",
    description: "AI focused on deep reasoning and long documents",
    explanation:
      "Claude is strong at long-document analysis, structured writing, and careful reasoning.",
    site: "https://claude.ai",
    category: "Assistant",
    bestFor: "Long documents and analysis",
    difficulty: "Intermediate",
    pros: ["Great with long docs", "Clear reasoning", "Professional tone"],
    cons: ["Less ecosystem depth", "Can feel slower"],
    useCases: ["Document review", "Policy analysis", "Summaries"],
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    description: "AI-powered search with real-time citations",
    explanation:
      "Perplexity blends search and AI summaries, making it useful for quick research and cited answers.",
    site: "https://perplexity.ai",
    category: "Research",
    bestFor: "Cited research",
    difficulty: "Beginner",
    pros: ["Fast", "Citations", "Good for research"],
    cons: ["Less deep reasoning", "Depends on sources"],
    useCases: ["Fact-checking", "Topic research", "Discovery"],
  },
  {
    slug: "microsoft-copilot",
    name: "Microsoft Copilot",
    description: "AI built into Microsoft 365 tools",
    explanation:
      "Microsoft Copilot is built for business productivity inside Word, Excel, Outlook, and Teams.",
    site: "https://copilot.microsoft.com",
    category: "Assistant",
    bestFor: "Enterprise productivity",
    difficulty: "Beginner",
    pros: ["Strong M365 integration", "Useful for business workflows"],
    cons: ["Best inside Microsoft ecosystem"],
    useCases: ["Documents", "Spreadsheets", "Email", "Meetings"],
  },
  {
    slug: "gemini",
    name: "Gemini",
    description: "Google AI assistant integrated with workspace",
    explanation:
      "Gemini is useful for users already working heavily in Google's ecosystem.",
    site: "https://gemini.google.com",
    category: "Assistant",
    bestFor: "Google ecosystem",
    difficulty: "Beginner",
    pros: ["Google integration", "Fast answers"],
    cons: ["Best inside Google tools"],
    useCases: ["Docs", "Email", "Search", "Workspace tasks"],
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    description: "High-quality AI image generator",
    explanation:
      "Midjourney is known for artistic, polished, and visually striking image generation.",
    site: "https://midjourney.com",
    category: "Image",
    bestFor: "Artistic visuals",
    difficulty: "Intermediate",
    pros: ["High visual quality", "Great style output"],
    cons: ["Paid", "Takes prompt practice"],
    useCases: ["Concept art", "Marketing visuals", "Creative design"],
  },
  {
    slug: "dalle",
    name: "DALL·E",
    description: "Conversational image creation and editing",
    explanation:
      "DALL·E is good for quick image generation and iterative editing through prompts.",
    site: "https://chatgpt.com",
    category: "Image",
    bestFor: "Beginner-friendly image generation",
    difficulty: "Beginner",
    pros: ["Easy to use", "Fast iteration"],
    cons: ["Less artistic control"],
    useCases: ["Concept visuals", "Marketing", "Content creation"],
  },
  {
    slug: "runway",
    name: "Runway",
    description: "AI video generation and editing",
    explanation:
      "Runway helps creators generate and edit AI video for content and storytelling.",
    site: "https://runwayml.com",
    category: "Video",
    bestFor: "Video creation",
    difficulty: "Intermediate",
    pros: ["Creative workflows", "Video-focused"],
    cons: ["Can have a learning curve"],
    useCases: ["Video generation", "Editing", "Marketing"],
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    description: "AI coding assistant",
    explanation:
      "GitHub Copilot speeds up software development through code suggestions and coding help.",
    site: "https://github.com/features/copilot",
    category: "Coding",
    bestFor: "Developers",
    difficulty: "Intermediate",
    pros: ["Fast coding support", "Great inside IDEs"],
    cons: ["Needs review", "Paid for full use"],
    useCases: ["Coding", "Debugging", "Learning"],
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    description: "AI voice generation and cloning",
    explanation:
      "ElevenLabs specializes in realistic voice generation and voice cloning.",
    site: "https://elevenlabs.io",
    category: "Audio",
    bestFor: "Voice AI",
    difficulty: "Intermediate",
    pros: ["Realistic voice output", "Strong voice tools"],
    cons: ["Ethical concerns", "Best features paid"],
    useCases: ["Voiceovers", "Narration", "Audio content"],
  },
  {
    slug: "suno",
    name: "Suno",
    description: "AI music and song generator",
    explanation:
      "Suno creates songs from prompts and is useful for fast music ideation.",
    site: "https://suno.com",
    category: "Audio",
    bestFor: "Music generation",
    difficulty: "Beginner",
    pros: ["Fast", "Creative", "Easy to use"],
    cons: ["Less control over details"],
    useCases: ["Music ideas", "Creative projects", "Content"],
  },
  {
    slug: "canva",
    name: "Canva",
    description: "AI-powered design platform",
    explanation:
      "Canva helps beginners and teams create graphics, presentations, and brand content quickly.",
    site: "https://canva.com",
    category: "Design",
    bestFor: "Quick design",
    difficulty: "Beginner",
    pros: ["Easy", "Fast", "Template-rich"],
    cons: ["Less advanced control"],
    useCases: ["Slides", "Social media", "Marketing assets"],
  },
  {
    slug: "figma-ai",
    name: "Figma AI",
    description: "AI for UI/UX design workflows",
    explanation:
      "Figma AI supports interface design, prototyping, and collaborative design work.",
    site: "https://figma.com",
    category: "Design",
    bestFor: "UI/UX design",
    difficulty: "Intermediate",
    pros: ["Great for teams", "Strong design workflow"],
    cons: ["Best in Figma ecosystem"],
    useCases: ["UI design", "Prototyping", "Product design"],
  },
  {
    slug: "grammarly",
    name: "Grammarly",
    description: "AI writing and grammar assistant",
    explanation:
      "Grammarly improves writing through grammar, clarity, and tone suggestions.",
    site: "https://grammarly.com",
    category: "Writing",
    bestFor: "Editing and clarity",
    difficulty: "Beginner",
    pros: ["Simple", "Helpful", "Widely used"],
    cons: ["Less generative than broader AI tools"],
    useCases: ["Emails", "Editing", "Professional writing"],
  },
  {
    slug: "jasper",
    name: "Jasper",
    description: "AI for marketing and content creation",
    explanation:
      "Jasper is designed for marketing teams producing content at scale.",
    site: "https://jasper.ai",
    category: "Writing",
    bestFor: "Marketing content",
    difficulty: "Intermediate",
    pros: ["Brand voice support", "Marketing-focused"],
    cons: ["Less general-purpose", "Paid"],
    useCases: ["Marketing copy", "Blogs", "Campaigns"],
  },
  {
    slug: "zapier",
    name: "Zapier",
    description: "AI automation and workflow tool",
    explanation:
      "Zapier connects apps and automates repetitive workflows across tools.",
    site: "https://zapier.com",
    category: "Productivity",
    bestFor: "Automation",
    difficulty: "Intermediate",
    pros: ["Powerful automations", "Wide app coverage"],
    cons: ["Can be complex to set up"],
    useCases: ["Automation", "Ops", "Integrations"],
  },
];
