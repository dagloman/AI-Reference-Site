import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tools = [
  {
    rank: '01', name: 'ChatGPT', maker: 'by OpenAI', category: 'assistant', label: 'AI Assistant',
    pricing: 'Free / Paid', pricingClass: 'free-paid', site: 'chatgpt.com', bestFor: 'general use', difficulty: 'Beginner',
    summary: 'A flexible AI assistant for writing, coding, research, planning, brainstorming, summaries, and image workflows.',
    explanation: 'ChatGPT is an all-around AI workspace built to help individuals, teams, and organizations think faster, write better, solve problems, and create content. It can shift from quick conversational help to more structured reasoning depending on the task. That makes it useful for everything from simple drafting to complex planning, analysis, and creative workflows.',
    capabilities: [
      { name: 'Writing Assistance', detail: 'Drafts emails, reports, proposals, resumes, outlines, and long-form content while adapting tone and structure.' },
      { name: 'Coding Help', detail: 'Explains code, writes sample functions, helps debug issues, and supports software planning.' },
      { name: 'Research Support', detail: 'Organizes ideas, summarizes material, compares options, and helps structure research workflows.' },
      { name: 'Brainstorming', detail: 'Generates ideas for projects, naming, campaigns, presentations, and creative content.' },
      { name: 'Task Planning', detail: 'Builds checklists, execution plans, schedules, and step-by-step approaches for goals.' },
      { name: 'Content Transformation', detail: 'Rewrites, shortens, expands, simplifies, or restructures content for different audiences.' },
    ],
    coreCapabilities: [
      { name: 'Natural Language Interaction', detail: 'Lets users communicate with the system in everyday language rather than rigid commands.', features: ['Conversational prompting', 'Follow-up questions', 'Context-aware replies', 'Flexible tone handling'] },
      { name: 'Reasoning and Problem Solving', detail: 'Supports breaking down tasks, analyzing tradeoffs, and producing structured recommendations.', features: ['Step-by-step thinking support', 'Comparison analysis', 'Decision framing', 'Scenario planning'] },
      { name: 'Content Generation', detail: 'Produces written, structured, and creative outputs across many professional and personal use cases.', features: ['Drafting', 'Rewriting', 'Summarizing', 'Formatting assistance'] },
      { name: 'Multimodal Workflows', detail: 'Can participate in workflows that involve text, images, files, and other inputs depending on the environment.', features: ['Image-related tasks', 'File understanding', 'Mixed-input workflows', 'Visual discussion support'] }
    ],
    technicalCapabilities: [
      { name: 'Conversational Interface', detail: 'Built around a chat-style interaction model that supports iterative refinement and back-and-forth work.' },
      { name: 'File and Document Workflows', detail: 'Can assist with reading, summarizing, organizing, and transforming uploaded material in supported environments.' },
      { name: 'Structured Output Support', detail: 'Can return answers as outlines, tables, checklists, plans, or reusable formats.' },
      { name: 'Workflow Integration Potential', detail: 'Can fit into broader productivity and automation workflows depending on the platform and tools used.' }
    ],
    pros: ['Versatile across tasks', 'Beginner friendly', 'Large ecosystem', 'Strong for drafting and ideation'],
    cons: ['Quality varies by prompt', 'May require verification for facts', 'Needs human review in high-stakes use'],
    useCases: ['Daily productivity', 'Content creation', 'Coding support', 'Research assistance', 'Planning and organization'],
    audience: 'Beginner · Business · Enterprise'
  },
  {
    rank: '02', name: 'Claude', maker: 'by Anthropic', category: 'assistant', label: 'AI Assistant',
    pricing: 'Free / Paid', pricingClass: 'free-paid', site: 'claude.ai', bestFor: 'analysis and long documents', difficulty: 'Intermediate',
    summary: 'A powerful AI assistant optimized for deep thinking, long-document analysis, and structured reasoning.',
    explanation: 'Claude is designed for users who need more thoughtful, structured, and context-aware AI support. It excels at analyzing long documents, producing well-reasoned responses, and maintaining clarity across complex topics.',
    capabilities: [
      { name: 'Long Document Analysis', detail: 'Reads, interprets, and extracts insights from large documents such as reports, policies, and research papers.' },
      { name: 'Structured Writing', detail: 'Produces clear, organized, and professional writing across essays, reports, and formal content.' },
      { name: 'Summarization', detail: 'Condenses large amounts of text into concise, usable summaries with key takeaways.' },
      { name: 'Comparative Analysis', detail: 'Compares ideas, tools, strategies, or documents and presents differences in structured formats.' },
      { name: 'Reasoning Support', detail: 'Breaks down complex problems into logical steps and explains reasoning clearly.' },
      { name: 'Document Review Support', detail: 'Helps review dense text, identify gaps, and improve clarity across long-form material.' }
    ],
    coreCapabilities: [
      { name: 'Context Handling', detail: 'Designed to work effectively with large inputs and maintain coherence across long conversations.', features: ['Long input processing', 'Maintains topic consistency', 'Handles multi-part documents', 'Reduces context loss'] },
      { name: 'Deliberate Reasoning', detail: 'Focuses on careful, step-by-step thinking rather than fast but shallow responses.', features: ['Step-by-step breakdowns', 'Logical structuring', 'Explained conclusions', 'Reduced hallucination tendency'] },
      { name: 'Controlled Tone and Output', detail: 'Produces more measured, neutral, and professional responses compared to many AI systems.', features: ['Professional tone', 'Less aggressive assumptions', 'Balanced viewpoints', 'Safer language patterns'] },
      { name: 'Document-Centric Interaction', detail: 'Optimized for workflows centered around reading, reviewing, and editing text-heavy material.', features: ['Inline document feedback', 'Section-by-section analysis', 'Policy support', 'Editing suggestions'] }
    ],
    technicalCapabilities: [
      { name: 'Large Context Processing', detail: 'Handles long-form inputs better than many AI tools, making it ideal for document-heavy workflows.' },
      { name: 'Structured Output Generation', detail: 'Can return organized outputs such as outlines, frameworks, bullet structures, and reports.' },
      { name: 'Iterative Refinement', detail: 'Supports back-and-forth refinement of outputs without losing clarity or structure.' },
      { name: 'Text-Focused Optimization', detail: 'Highly optimized for language-based tasks rather than multimodal-heavy workflows.' }
    ],
    pros: ['Excellent with long documents', 'Strong reasoning and structure', 'Professional tone output', 'Lower tendency for rushed answers'],
    cons: ['Less strong for fast creative output', 'Limited multimodal capabilities compared to competitors', 'May feel slower due to structured responses'],
    useCases: ['Research analysis', 'Policy review', 'Technical writing', 'Document summarization', 'Compliance and reporting'],
    audience: 'Intermediate · Business · Enterprise'
  },
  {
    rank: '03', name: 'Gemini', maker: 'by Google', category: 'assistant', label: 'AI Assistant',
    pricing: 'Free / Paid', pricingClass: 'free-paid', site: 'gemini.google.com', bestFor: 'Google ecosystem', difficulty: 'Beginner',
    summary: 'A multimodal AI assistant integrated with Google services and search capabilities.',
    explanation: 'Gemini is built to enhance productivity within the Google ecosystem, combining AI assistance with tools like Docs, Gmail, and Search.',
    capabilities: [
      { name: 'Document Assistance', detail: 'Helps create, edit, and summarize documents in Google Docs.' },
      { name: 'Email Support', detail: 'Drafts and organizes emails in Gmail.' },
      { name: 'Search Integration', detail: 'Provides fast, AI-enhanced search results.' },
      { name: 'Multimodal Interaction', detail: 'Works with text, images, and other inputs.' },
      { name: 'Productivity Support', detail: 'Assists across Google Workspace tools.' }
    ],
    coreCapabilities: [
      { name: 'Search + AI Integration', detail: 'Combines Google search with AI responses.', features: ['Search-backed answers', 'Real-time info', 'Query enhancement', 'Fast retrieval'] },
      { name: 'Multimodal Processing', detail: 'Handles multiple input types.', features: ['Text input', 'Image understanding', 'Mixed media tasks', 'Flexible outputs'] },
      { name: 'Workspace Integration', detail: 'Embedded into Google productivity tools.', features: ['Docs', 'Gmail', 'Sheets', 'Drive integration'] }
    ],
    technicalCapabilities: [
      { name: 'Google Ecosystem Integration', detail: 'Works across Google apps and services.' },
      { name: 'Real-Time Data Access', detail: 'Leverages up-to-date web information.' },
      { name: 'Multimodal AI Engine', detail: 'Processes different input formats.' }
    ],
    pros: ['Strong Google integration', 'Easy to use', 'Fast responses'],
    cons: ['Best within Google ecosystem', 'Less deep reasoning'],
    useCases: ['Productivity', 'Email', 'Docs', 'Search'],
    audience: 'Beginner · Business'
  },
  {
    rank: '04', name: 'Microsoft Copilot', maker: 'by Microsoft', category: 'assistant', label: 'AI Assistant',
    pricing: 'Free / Paid', pricingClass: 'free-paid', site: 'copilot.microsoft.com', bestFor: 'enterprise productivity', difficulty: 'Beginner',
    summary: 'An AI assistant deeply integrated into Microsoft 365 for business productivity and workflow automation.',
    explanation: 'Microsoft Copilot is designed to enhance workplace productivity by embedding AI directly into tools like Word, Excel, Outlook, and Teams.',
    capabilities: [
      { name: 'Document Assistance', detail: 'Drafts, summarizes, and edits documents in Word.' },
      { name: 'Spreadsheet Analysis', detail: 'Analyzes data, generates formulas, and explains trends in Excel.' },
      { name: 'Email Productivity', detail: 'Summarizes threads and drafts responses in Outlook.' },
      { name: 'Meeting Support', detail: 'Captures notes, summaries, and action items in Teams.' },
      { name: 'Workflow Automation', detail: 'Helps automate repetitive business tasks across tools.' }
    ],
    coreCapabilities: [
      { name: 'Embedded AI Workflows', detail: 'AI built directly into productivity tools.', features: ['In-app assistance', 'Seamless workflow integration', 'Context-aware suggestions', 'Minimal switching'] },
      { name: 'Business Task Automation', detail: 'Reduces manual work in daily operations.', features: ['Auto summarization', 'Draft generation', 'Data insights', 'Task acceleration'] },
      { name: 'Enterprise Context Awareness', detail: 'Works within organizational data and workflows.', features: ['Document context', 'Email context', 'Meeting context', 'Team collaboration'] }
    ],
    technicalCapabilities: [
      { name: 'Microsoft 365 Integration', detail: 'Deep integration with Word, Excel, Outlook, and Teams.' },
      { name: 'Contextual Awareness', detail: 'Understands user activity within applications.' },
      { name: 'Data Interaction Layer', detail: 'Interacts with structured and unstructured business data.' }
    ],
    pros: ['Strong enterprise integration', 'Boosts productivity', 'Easy to use'],
    cons: ['Best within Microsoft ecosystem', 'Full features require paid plans'],
    useCases: ['Business productivity', 'Data analysis', 'Meetings', 'Communication'],
    audience: 'Beginner · Business · Enterprise'
  },
  {
    rank: '05', name: 'Perplexity', maker: 'by Perplexity', category: 'research', label: 'Research',
    pricing: 'Free / Paid', pricingClass: 'free-paid', site: 'perplexity.ai', bestFor: 'cited research', difficulty: 'Beginner',
    summary: 'An AI-powered search and research assistant that provides real-time, source-backed answers.',
    explanation: 'Perplexity is designed to bridge the gap between traditional search engines and AI assistants by providing responses backed by citations and real sources.',
    capabilities: [
      { name: 'Cited Answers', detail: 'Provides responses with linked sources so users can verify and explore original content.' },
      { name: 'Real-Time Search', detail: 'Pulls in up-to-date information from the web rather than relying only on static training data.' },
      { name: 'Topic Exploration', detail: 'Helps users quickly understand unfamiliar topics through summarized insights.' },
      { name: 'Follow-Up Research', detail: 'Supports iterative questioning to refine and deepen understanding.' },
      { name: 'Answer Synthesis', detail: 'Combines multiple sources into a single, readable response.' }
    ],
    coreCapabilities: [
      { name: 'Search + AI Fusion', detail: 'Combines traditional search retrieval with AI-generated summaries.', features: ['Search indexing', 'Answer synthesis', 'Source linking', 'Query refinement'] },
      { name: 'Citation Grounding', detail: 'Anchors responses in real sources rather than purely generated text.', features: ['Inline citations', 'Source verification', 'Reference transparency', 'Fact traceability'] },
      { name: 'Iterative Query Refinement', detail: 'Allows users to refine searches naturally through conversation.', features: ['Follow-up prompts', 'Clarification queries', 'Expanded exploration', 'Topic drilling'] },
      { name: 'Fast Information Retrieval', detail: 'Optimized for speed in gathering and summarizing information.', features: ['Quick answers', 'Minimal friction', 'Efficient summaries', 'Rapid exploration'] }
    ],
    technicalCapabilities: [
      { name: 'Web Retrieval Integration', detail: 'Connects to live web data sources to deliver current information.' },
      { name: 'Source Aggregation', detail: 'Pulls from multiple sources and consolidates them into unified answers.' },
      { name: 'Lightweight Interaction Model', detail: 'Focused on fast responses rather than deep multi-step reasoning.' },
      { name: 'Search Optimization Layer', detail: 'Optimized to behave more like an intelligent search engine than a general chatbot.' }
    ],
    pros: ['Provides cited answers', 'Fast and efficient research', 'Easy to use', 'Strong for fact-finding'],
    cons: ['Less deep reasoning than full AI assistants', 'Dependent on available web sources', 'Can oversimplify complex topics'],
    useCases: ['Research and discovery', 'Fact-checking', 'Learning new topics', 'Quick information retrieval'],
    audience: 'Beginner · Business'
  },
  { rank: '06', name: 'NotebookLM', maker: 'by Google', category: 'research', label: 'Research', pricing: 'Free / Paid', pricingClass: 'free-paid', site: 'notebooklm.google.com', bestFor: 'document study', difficulty: 'Intermediate', summary: 'Source-grounded Q&A.', explanation: 'Answers based on your docs.', capabilities: [{ name: 'Source Q&A', detail: 'Uses your uploads.' }], coreCapabilities: [], technicalCapabilities: [], pros: ['Accurate to sources'], cons: ['Needs uploads'], useCases: ['Study'], audience: 'Intermediate' },
  {
    rank: '07', name: 'GitHub Copilot', maker: 'by GitHub', category: 'coding', label: 'Coding', pricing: 'Paid', pricingClass: 'paid', site: 'github.com/features/copilot', bestFor: 'developers', difficulty: 'Intermediate',
    summary: 'An AI coding assistant that helps developers write, understand, and debug code faster.',
    explanation: 'GitHub Copilot is built to accelerate software development by providing real-time code suggestions inside development environments.',
    capabilities: [
      { name: 'Code Autocomplete', detail: 'Suggests code as developers type.' },
      { name: 'Function Generation', detail: 'Creates functions based on comments or prompts.' },
      { name: 'Debug Assistance', detail: 'Helps identify and fix coding issues.' },
      { name: 'Code Explanation', detail: 'Explains what code does in plain language.' },
      { name: 'Boilerplate Reduction', detail: 'Reduces repetitive coding patterns.' }
    ],
    coreCapabilities: [
      { name: 'Real-Time Code Suggestions', detail: 'Provides inline suggestions while coding.', features: ['Autocomplete', 'Context-aware suggestions', 'Language support', 'Speed optimization'] },
      { name: 'Natural Language to Code', detail: 'Converts plain English into working code.', features: ['Prompt-based coding', 'Function generation', 'Logic translation', 'Rapid prototyping'] },
      { name: 'Code Understanding', detail: 'Helps interpret and explain existing code.', features: ['Code explanation', 'Documentation support', 'Debug insights', 'Learning assistance'] }
    ],
    technicalCapabilities: [
      { name: 'IDE Integration', detail: 'Works inside popular development environments.' },
      { name: 'Language Support', detail: 'Supports multiple programming languages.' },
      { name: 'Context Awareness', detail: 'Understands surrounding code for better suggestions.' }
    ],
    pros: ['Speeds development', 'Reduces repetitive tasks', 'Supports many languages'],
    cons: ['Requires review for accuracy', 'Paid subscription', 'Not perfect for complex logic'],
    useCases: ['Software development', 'Debugging', 'Learning code', 'Rapid prototyping'],
    audience: 'Intermediate · Developer'
  },
  { rank: '08', name: 'Cursor', maker: 'by Anysphere', category: 'coding', label: 'Coding', pricing: 'Free / Paid', pricingClass: 'free-paid', site: 'cursor.com', bestFor: 'AI-first dev', difficulty: 'Intermediate', summary: 'AI-native editor.', explanation: 'Works across whole codebases.', capabilities: [{ name: 'Codebase AI', detail: 'Understands project.' }], coreCapabilities: [], technicalCapabilities: [], pros: ['Powerful'], cons: ['Learning curve'], useCases: ['Dev'], audience: 'Intermediate · Pro' },
  {
    rank: '09', name: 'Midjourney', maker: 'by Midjourney', category: 'image', label: 'Image Gen', pricing: 'Paid', pricingClass: 'paid', site: 'midjourney.com', bestFor: 'artistic visuals', difficulty: 'Intermediate',
    summary: 'A leading AI image generator known for high-quality, artistic, and stylized visuals.',
    explanation: 'Midjourney is designed for users who prioritize visual quality and creativity.',
    capabilities: [
      { name: 'Image Generation', detail: 'Creates high-quality images from text prompts.' },
      { name: 'Style Control', detail: 'Allows users to influence artistic style, mood, and composition.' },
      { name: 'Concept Visualization', detail: 'Transforms abstract ideas into visual concepts.' },
      { name: 'Iteration & Variations', detail: 'Generates multiple versions of an image for refinement.' },
      { name: 'Creative Exploration', detail: 'Supports experimentation with different visual directions.' }
    ],
    coreCapabilities: [
      { name: 'Artistic Rendering Engine', detail: 'Focused on producing visually rich and stylized outputs.', features: ['High aesthetic quality', 'Stylized outputs', 'Creative interpretation', 'Visual depth'] },
      { name: 'Prompt Interpretation', detail: 'Transforms natural language prompts into visual outputs.', features: ['Prompt parsing', 'Style inference', 'Creative enhancement', 'Visual translation'] },
      { name: 'Iterative Image Refinement', detail: 'Supports continuous improvement of generated images.', features: ['Variations', 'Upscaling', 'Prompt tweaking', 'Refinement cycles'] }
    ],
    technicalCapabilities: [
      { name: 'Text-to-Image Engine', detail: 'Generates images from natural language descriptions.' },
      { name: 'Style Modeling', detail: 'Applies learned artistic styles to outputs.' },
      { name: 'Batch Generation', detail: 'Produces multiple variations for comparison.' }
    ],
    pros: ['High-quality visuals', 'Strong artistic output', 'Great for creative work'],
    cons: ['Paid access', 'Less control over precision', 'Requires prompt experimentation'],
    useCases: ['Concept art', 'Marketing visuals', 'Creative design', 'Storyboarding'],
    audience: 'Intermediate · Creative'
  },
  {
    rank: '10', name: 'DALL·E / GPT Image', maker: 'by OpenAI', category: 'image', label: 'Image Gen', pricing: 'Free / Paid', pricingClass: 'free-paid', site: 'chatgpt.com', bestFor: 'realistic images', difficulty: 'Beginner',
    summary: 'An AI image generation tool that creates and edits images through conversational prompts.',
    explanation: 'DALL·E focuses on ease of use and iterative design.',
    capabilities: [
      { name: 'Image Generation', detail: 'Creates images from text prompts.' },
      { name: 'Image Editing', detail: 'Modifies images through conversational instructions.' },
      { name: 'Text Rendering', detail: 'Handles text within images better than many alternatives.' },
      { name: 'Iterative Design', detail: 'Supports multiple rounds of refinement.' },
      { name: 'Concept Visualization', detail: 'Turns ideas into visual outputs quickly.' }
    ],
    coreCapabilities: [
      { name: 'Conversational Image Editing', detail: 'Allows iterative updates through natural language.', features: ['Prompt refinement', 'Step-by-step edits', 'Interactive workflow', 'User-guided design'] },
      { name: 'Text-to-Image Generation', detail: 'Transforms descriptions into visuals.', features: ['Prompt-based creation', 'Flexible outputs', 'Realistic rendering', 'Creative interpretation'] },
      { name: 'Rapid Iteration', detail: 'Supports fast cycles of creation and refinement.', features: ['Multiple versions', 'Quick adjustments', 'Design exploration', 'Idea testing'] }
    ],
    technicalCapabilities: [
      { name: 'Image Generation Model', detail: 'Generates visuals based on natural language prompts.' },
      { name: 'Editing Engine', detail: 'Allows targeted changes to generated images.' },
      { name: 'Prompt Understanding', detail: 'Interprets user instructions for visual output.' }
    ],
    pros: ['Easy to use', 'Fast iteration', 'Good text rendering'],
    cons: ['Less artistic control than Midjourney', 'Quality varies by prompt'],
    useCases: ['Marketing visuals', 'Concept art', 'Content creation', 'Design'],
    audience: 'Beginner · Creative'
  },
  { rank: '11', name: 'Adobe Firefly', maker: 'by Adobe', category: 'image', label: 'Image Gen', pricing: 'Free / Paid', pricingClass: 'free-paid', site: 'firefly.adobe.com', bestFor: 'commercial design', difficulty: 'Intermediate', summary: 'Design-safe images.', explanation: 'Works in Adobe.', capabilities: [{ name: 'Design Gen', detail: 'Brand visuals.' }], coreCapabilities: [], technicalCapabilities: [], pros: ['Commercial safe'], cons: ['Ecosystem'], useCases: ['Marketing'], audience: 'Intermediate · Business' },
  {
    rank: '12', name: 'Runway', maker: 'by Runway', category: 'video', label: 'Video Gen', pricing: 'Free / Paid', pricingClass: 'free-paid', site: 'runwayml.com', bestFor: 'video creation', difficulty: 'Intermediate',
    summary: 'An AI-powered video creation and editing platform for generating and modifying video content.',
    explanation: 'Runway is built for creators who want to generate and edit video using AI.',
    capabilities: [
      { name: 'Video Generation', detail: 'Creates video clips from prompts and inputs.' },
      { name: 'Video Editing', detail: 'Enhances and modifies existing video footage.' },
      { name: 'Background Removal', detail: 'Removes backgrounds from video automatically.' },
      { name: 'Motion Effects', detail: 'Applies AI-generated motion and visual effects.' },
      { name: 'Creative Video Workflows', detail: 'Supports end-to-end video creation pipelines.' }
    ],
    coreCapabilities: [
      { name: 'Text-to-Video Generation', detail: 'Transforms prompts into moving visual sequences.', features: ['Prompt-based video', 'Scene generation', 'Visual storytelling', 'Rapid prototyping'] },
      { name: 'AI Video Editing', detail: 'Enhances video with AI-driven tools.', features: ['Background removal', 'Object editing', 'Scene transitions', 'Automated effects'] },
      { name: 'Creative Iteration', detail: 'Allows users to refine and experiment with outputs.', features: ['Multiple versions', 'Quick adjustments', 'Visual experimentation', 'Style variation'] }
    ],
    technicalCapabilities: [
      { name: 'Video Processing Engine', detail: 'Handles rendering and editing of AI-generated video.' },
      { name: 'Model-Based Editing', detail: 'Applies AI models to transform video content.' },
      { name: 'Cloud-Based Workflow', detail: 'Runs processing in the cloud for accessibility.' }
    ],
    pros: ['Strong video tools', 'Creative flexibility', 'Modern workflows'],
    cons: ['Learning curve', 'Credit-based usage', 'Performance varies by task'],
    useCases: ['Content creation', 'Video editing', 'Marketing', 'Storytelling'],
    audience: 'Intermediate · Creative'
  },
  { rank: '13', name: 'Sora', maker: 'by OpenAI', category: 'video', label: 'Video Gen', pricing: 'Paid', pricingClass: 'paid', site: 'openai.com/sora', bestFor: 'text-to-video', difficulty: 'Intermediate', summary: 'Text to video.', explanation: 'Cinematic outputs.', capabilities: [{ name: 'T2V', detail: 'Prompt to video.' }], coreCapabilities: [], technicalCapabilities: [], pros: ['Cutting-edge'], cons: ['Access'], useCases: ['Story'], audience: 'Intermediate' },
  {
    rank: '14', name: 'Canva Magic Studio', maker: 'by Canva', category: 'design', label: 'Design', pricing: 'Free / Paid', pricingClass: 'free-paid', site: 'canva.com', bestFor: 'quick design', difficulty: 'Beginner',
    summary: 'An AI-powered design platform for creating visuals, presentations, and marketing content quickly.',
    explanation: 'Canva Magic Studio is built for ease of use, allowing users to create polished visuals without advanced design skills.',
    capabilities: [
      { name: 'Graphic Creation', detail: 'Designs social media posts, graphics, and visuals.' },
      { name: 'Presentation Building', detail: 'Creates slide decks and presentations.' },
      { name: 'Template-Based Design', detail: 'Uses pre-built templates for rapid design.' },
      { name: 'AI Editing Tools', detail: 'Enhances visuals with AI-powered features.' },
      { name: 'Content Generation', detail: 'Assists with text and visual content creation.' }
    ],
    coreCapabilities: [
      { name: 'Template-Driven Design', detail: 'Simplifies creation through pre-built layouts.', features: ['Templates', 'Drag-and-drop', 'Fast creation', 'Consistency'] },
      { name: 'AI-Assisted Creativity', detail: 'Uses AI to enhance design workflows.', features: ['Auto suggestions', 'Content generation', 'Visual enhancements', 'Design assistance'] },
      { name: 'User-Friendly Interface', detail: 'Designed for non-designers.', features: ['Simple UI', 'Low learning curve', 'Accessible tools', 'Quick onboarding'] }
    ],
    technicalCapabilities: [
      { name: 'Cloud-Based Platform', detail: 'Accessible from any device.' },
      { name: 'Design Automation Tools', detail: 'Automates layout and formatting.' },
      { name: 'Asset Library Integration', detail: 'Provides access to images, icons, and templates.' }
    ],
    pros: ['Very easy to use', 'Fast content creation', 'Great templates'],
    cons: ['Limited advanced design control', 'Less powerful than pro tools'],
    useCases: ['Social media', 'Presentations', 'Marketing', 'Brand content'],
    audience: 'Beginner · Business'
  },
  {
    rank: '15', name: 'Figma AI', maker: 'by Figma', category: 'design', label: 'Design', pricing: 'Free / Paid', pricingClass: 'free-paid', site: 'figma.com', bestFor: 'UI/UX design', difficulty: 'Intermediate',
    summary: 'AI-assisted UI/UX design and prototyping within collaborative Figma workflows.',
    explanation: 'Figma AI accelerates product design by helping teams ideate layouts, generate components, and iterate on interfaces collaboratively.',
    capabilities: [
      { name: 'UI Generation', detail: 'Creates layouts and components from prompts.' },
      { name: 'Prototyping Support', detail: 'Helps build interactive flows quickly.' },
      { name: 'Design Iteration', detail: 'Refines layouts, spacing, and hierarchy.' },
      { name: 'Content Assistance', detail: 'Generates placeholder and real content.' },
      { name: 'Collaboration', detail: 'Works seamlessly in team design environments.' }
    ],
    coreCapabilities: [
      { name: 'AI-Assisted Layouts', detail: 'Speeds up initial design creation.', features: ['Auto layouts', 'Component suggestions', 'Hierarchy generation', 'Rapid wireframes'] },
      { name: 'Design Iteration Engine', detail: 'Improves and refines existing designs.', features: ['Spacing fixes', 'Alignment', 'Consistency', 'Visual polish'] },
      { name: 'Collaborative Design AI', detail: 'Enhances team workflows.', features: ['Shared editing', 'Commenting', 'Versioning', 'Team feedback'] }
    ],
    technicalCapabilities: [
      { name: 'Design System Integration', detail: 'Works with components and tokens.' },
      { name: 'Plugin Ecosystem', detail: 'Extends capabilities via plugins.' },
      { name: 'Real-Time Collaboration', detail: 'Multiple users edit simultaneously.' }
    ],
    pros: ['Great for teams', 'Fast prototyping', 'Integrated workflow'],
    cons: ['Learning curve', 'Best within Figma ecosystem'],
    useCases: ['UI design', 'Product design', 'Prototyping', 'Design systems'],
    audience: 'Intermediate · Design'
  },
  {
    rank: '16', name: 'Grammarly', maker: 'by Grammarly', category: 'writing', label: 'Writing', pricing: 'Free / Paid', pricingClass: 'free-paid', site: 'grammarly.com', bestFor: 'editing and clarity', difficulty: 'Beginner',
    summary: 'An AI writing assistant focused on grammar, clarity, tone, and correctness.',
    explanation: 'Grammarly improves everyday writing by catching grammar errors, enhancing clarity, and adjusting tone.',
    capabilities: [
      { name: 'Grammar Checking', detail: 'Identifies and corrects grammar issues.' },
      { name: 'Clarity Suggestions', detail: 'Improves readability and structure.' },
      { name: 'Tone Detection', detail: 'Analyzes and adjusts tone.' },
      { name: 'Spell Checking', detail: 'Fixes spelling errors automatically.' },
      { name: 'Writing Feedback', detail: 'Provides overall writing improvements.' }
    ],
    coreCapabilities: [
      { name: 'Language Correction Engine', detail: 'Ensures grammatical accuracy.', features: ['Grammar fixes', 'Spelling', 'Punctuation', 'Syntax'] },
      { name: 'Clarity Optimization', detail: 'Improves readability.', features: ['Sentence simplification', 'Word choice', 'Flow improvement', 'Conciseness'] },
      { name: 'Tone Adjustment', detail: 'Adapts writing for audience.', features: ['Formal tone', 'Casual tone', 'Professional voice', 'Audience targeting'] }
    ],
    technicalCapabilities: [
      { name: 'Browser Integration', detail: 'Works across web apps.' },
      { name: 'Real-Time Feedback', detail: 'Provides instant corrections.' },
      { name: 'Cross-Platform Support', detail: 'Available on multiple devices.' }
    ],
    pros: ['Easy to use', 'Improves writing quickly', 'Widely supported'],
    cons: ['Limited content generation', 'Premium needed for full features'],
    useCases: ['Emails', 'Documents', 'Professional writing', 'Editing'],
    audience: 'Beginner · Business'
  },
  {
    rank: '17', name: 'Jasper', maker: 'by Jasper', category: 'writing', label: 'Writing', pricing: 'Paid', pricingClass: 'paid', site: 'jasper.ai', bestFor: 'marketing content', difficulty: 'Intermediate',
    summary: 'An AI platform focused on generating marketing and branded content at scale.',
    explanation: 'Jasper is built for businesses and marketing teams that need consistent, brand-aligned content.',
    capabilities: [
      { name: 'Marketing Copy', detail: 'Creates ads, emails, and campaigns.' },
      { name: 'Content Generation', detail: 'Produces blogs and articles.' },
      { name: 'Brand Voice Control', detail: 'Maintains consistent tone.' },
      { name: 'Campaign Support', detail: 'Helps structure marketing strategies.' },
      { name: 'Template Usage', detail: 'Provides pre-built writing formats.' }
    ],
    coreCapabilities: [
      { name: 'Brand Voice Modeling', detail: 'Keeps messaging consistent.', features: ['Tone control', 'Voice alignment', 'Consistency', 'Brand identity'] },
      { name: 'Content Scaling Engine', detail: 'Produces large volumes of content.', features: ['Bulk creation', 'Templates', 'Automation', 'Efficiency'] },
      { name: 'Marketing Optimization', detail: 'Tailors content for performance.', features: ['SEO focus', 'Conversion writing', 'Engagement', 'Audience targeting'] }
    ],
    technicalCapabilities: [
      { name: 'Content Templates', detail: 'Pre-built formats for writing.' },
      { name: 'Workflow Integration', detail: 'Fits into marketing pipelines.' },
      { name: 'AI Content Engine', detail: 'Generates structured outputs.' }
    ],
    pros: ['Strong for marketing', 'Scales content', 'Brand consistency'],
    cons: ['Paid only', 'Less general-purpose'],
    useCases: ['Marketing', 'Blogs', 'Ads', 'Campaigns'],
    audience: 'Business · Marketing'
  },
  {
  rank: '18',
  name: 'ElevenLabs',
  maker: 'by ElevenLabs',
  category: 'audio',
  label: 'Audio',
  pricing: 'Free / Paid',
  pricingClass: 'free-paid',
  site: 'elevenlabs.io',
  bestFor: 'voice AI',
  difficulty: 'Intermediate',
  summary: 'A leading AI voice platform for realistic text-to-speech and voice cloning.',
  explanation: 'ElevenLabs specializes in high-quality AI-generated voice for narration and content creation.',
  capabilities: [
    { name: 'Text-to-Speech', detail: 'Converts text into realistic spoken audio.' },
    { name: 'Voice Cloning', detail: 'Creates custom voices from samples.' },
    { name: 'Voice Customization', detail: 'Adjusts tone and delivery.' }
  ],
  coreCapabilities: [
    { name: 'Speech Synthesis', detail: 'Produces human-like voices.', features: ['Natural tone','Clear speech'] },
    { name: 'Voice Cloning', detail: 'Replicates voices.', features: ['Custom voices','Voice matching'] }
  ],
  technicalCapabilities: [
    { name: 'Audio Engine', detail: 'Generates voice output.' }
  ],
  pros: ['Realistic voices','Easy to use'],
  cons: ['Paid features','Ethical concerns'],
  useCases: ['Voiceovers','Content'],
  audience: 'Intermediate · Creative'
},
{
  rank: '19',
  name: 'Suno',
  maker: 'by Suno',
  category: 'audio',
  label: 'Audio',
  pricing: 'Free / Paid',
  pricingClass: 'free-paid',
  site: 'suno.com',
  bestFor: 'music generation',
  difficulty: 'Beginner',
  summary: 'An AI tool that generates full songs from text prompts.',
  explanation: 'Suno enables users to create music quickly by describing a style or theme. It is ideal for experimentation, content creation, and rapid music prototyping.',
  capabilities: [
    { name: 'Song Generation', detail: 'Creates full songs from prompts.' },
    { name: 'Genre Control', detail: 'Supports multiple music styles.' },
    { name: 'Lyric Creation', detail: 'Generates lyrics automatically.' },
    { name: 'Audio Playback', detail: 'Produces listenable tracks instantly.' },
    { name: 'Creative Exploration', detail: 'Allows experimentation with sound.' }
  ],
  coreCapabilities: [
    { name: 'Text-to-Music Engine', detail: 'Transforms prompts into songs.', features: ['Prompt-based creation', 'Music synthesis', 'Genre variation', 'Creative output'] },
    { name: 'Rapid Music Creation', detail: 'Generates songs quickly.', features: ['Instant playback', 'Fast iteration', 'Idea testing', 'Prototyping'] },
    { name: 'Creative AI Audio', detail: 'Focuses on musical creativity.', features: ['Style diversity', 'Mood control', 'Experimentation', 'Innovation'] }
  ],
  technicalCapabilities: [
    { name: 'Audio Generation Model', detail: 'Creates full music tracks.' },
    { name: 'Playback System', detail: 'Delivers generated audio.' },
    { name: 'Prompt Interpretation', detail: 'Understands musical intent.' }
  ],
  pros: ['Fun and creative', 'Fast results', 'Easy to use'],
  cons: ['Limited control', 'Output variability'],
  useCases: ['Music creation', 'Content', 'Experimentation'],
  audience: 'Beginner · Creative'
},
{
  rank: '20',
  name: 'Zapier AI',
  maker: 'by Zapier',
  category: 'productivity',
  label: 'Productivity',
  pricing: 'Free / Paid',
  pricingClass: 'free-paid',
  site: 'zapier.com',
  bestFor: 'automation',
  difficulty: 'Intermediate',
  summary: 'An AI-powered automation platform that connects apps and streamlines workflows.',
  explanation: 'Zapier AI helps users automate repetitive tasks by connecting different applications. It is widely used in business environments to improve efficiency and reduce manual work.',
  capabilities: [
    { name: 'Workflow Automation', detail: 'Automates tasks across apps.' },
    { name: 'App Integration', detail: 'Connects different software tools.' },
    { name: 'Trigger-Based Actions', detail: 'Executes actions based on events.' },
    { name: 'Process Optimization', detail: 'Improves efficiency of workflows.' },
    { name: 'Task Scheduling', detail: 'Runs automated processes on schedule.' }
  ],
  coreCapabilities: [
    { name: 'Automation Engine', detail: 'Executes workflows automatically.', features: ['Triggers', 'Actions', 'Multi-step flows', 'Task chaining'] },
    { name: 'Cross-App Integration', detail: 'Connects multiple platforms.', features: ['API connections', 'Data transfer', 'App linking', 'Integration support'] },
    { name: 'Productivity Scaling', detail: 'Reduces manual effort.', features: ['Automation', 'Efficiency', 'Scalability', 'Time savings'] }
  ],
  technicalCapabilities: [
    { name: 'API Integration Layer', detail: 'Connects apps via APIs.' },
    { name: 'Workflow Builder', detail: 'Creates automation sequences.' },
    { name: 'Cloud Execution', detail: 'Runs automations online.' }
  ],
  pros: ['Powerful automation', 'Saves time', 'Wide integrations'],
  cons: ['Setup complexity', 'Paid tiers for advanced use'],
  useCases: ['Automation', 'Business ops', 'Integration', 'Efficiency'],
  audience: 'Business · Operations'
}
];

const filters = [
  { key: 'all', label: 'All' },
  { key: 'assistant', label: '🤖 AI Assistants' },
  { key: 'coding', label: '💻 Coding' },
  { key: 'image', label: '🖼️ Image Gen' },
  { key: 'video', label: '🎬 Video Gen' },
  { key: 'research', label: '🔍 Research' },
  { key: 'writing', label: '✍️ Writing' },
  { key: 'design', label: '🎨 Design' },
  { key: 'audio', label: '🎵 Audio' },
  { key: 'productivity', label: '⚡ Productivity' },
];

function getTagClasses(category) {
  const map = {
    assistant: 'bg-violet-500/15 text-violet-300',
    image: 'bg-pink-500/15 text-pink-300',
    video: 'bg-orange-500/15 text-orange-300',
    coding: 'bg-sky-500/15 text-sky-300',
    research: 'bg-emerald-500/15 text-emerald-300',
    writing: 'bg-amber-500/15 text-amber-300',
    design: 'bg-fuchsia-500/15 text-fuchsia-300',
    audio: 'bg-rose-500/15 text-rose-300',
    productivity: 'bg-green-400/15 text-green-300',
  };
  return map[category] || 'bg-slate-500/15 text-slate-300';
}

function getBorderGlow(category) {
  const map = {
    assistant: 'hover:border-violet-400/30',
    image: 'hover:border-pink-400/30',
    video: 'hover:border-orange-400/30',
    coding: 'hover:border-sky-400/30',
    research: 'hover:border-emerald-400/30',
    writing: 'hover:border-amber-400/30',
    design: 'hover:border-fuchsia-400/30',
    audio: 'hover:border-rose-400/30',
    productivity: 'hover:border-green-400/30',
  };
  return map[category] || 'hover:border-slate-400/30';
}

function getTopBar(category) {
  const map = {
    assistant: 'from-violet-400 to-violet-500',
    image: 'from-pink-400 to-pink-500',
    video: 'from-orange-400 to-orange-500',
    coding: 'from-sky-400 to-sky-500',
    research: 'from-emerald-400 to-emerald-500',
    writing: 'from-amber-400 to-amber-500',
    design: 'from-fuchsia-400 to-fuchsia-500',
    audio: 'from-rose-400 to-rose-500',
    productivity: 'from-green-400 to-green-500',
  };
  return map[category] || 'from-slate-400 to-slate-500';
}

function getPricingClass(pricingClass) {
  if (pricingClass === 'paid') return 'border-orange-400/20 text-orange-300';
  if (pricingClass === 'free') return 'border-emerald-400/20 text-emerald-300';
  return 'border-amber-400/20 text-amber-300';
}

function ToolCard({ tool, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`group relative overflow-hidden rounded-2xl border border-[#1e1e2e] bg-[#13131a] p-5 transition-all hover:-translate-y-1 ${getBorderGlow(tool.category)}`}
    >
      <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${getTopBar(tool.category)} opacity-0 transition-opacity group-hover:opacity-100`} />
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 rounded-md border border-[#1e1e2e] bg-[#1a1a26] px-2 py-1 font-mono text-[11px] text-[#6b6b8a]">#{tool.rank}</span>
          <div>
            <div className="font-['Syne'] text-lg font-bold text-white">{tool.name}</div>
            <div className="mt-0.5 text-xs text-[#6b6b8a]">{tool.maker}</div>
          </div>
        </div>
        <span className={`rounded-md px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] ${getTagClasses(tool.category)}`}>{tool.label}</span>
      </div>
      <p className="mb-4 text-sm leading-6 text-[#8b8ba7]">{tool.summary}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-md border border-[#1e1e2e] bg-[#1a1a26] px-2.5 py-1 font-mono text-[11px] text-cyan-300">Difficulty: {tool.difficulty}</span>
        {(tool.capabilities || []).slice(0, 3).map((cap) => (
          <span key={cap.name} className="rounded-md border border-[#1e1e2e] bg-[#1a1a26] px-2.5 py-1 font-mono text-[11px] text-[#9ea0bb]">{cap.name}</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 border-t border-[#1e1e2e] pt-4">
        <span className={`rounded-md border bg-[#1a1a26] px-2.5 py-1 font-mono text-[11px] ${getPricingClass(tool.pricingClass)}`}>{tool.pricing}</span>
        <span className="rounded-md border border-[#1e1e2e] bg-[#1a1a26] px-2.5 py-1 font-mono text-[11px] text-[#8888a0]">{tool.site}</span>
        <span className="rounded-md border border-[#1e1e2e] bg-[#1a1a26] px-2.5 py-1 font-mono text-[11px] text-[#8888a0]">Best for: {tool.bestFor}</span>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={() => onOpen(tool)} className="flex-1 rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500/20">Open full reference page</button>
        <a href={`https://${tool.site}`} target="_blank" rel="noreferrer" className="rounded-xl border border-[#2a2a3e] bg-[#1a1a26] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5">Site</a>
      </div>
    </motion.div>
  );
}

function ToolReferencePage({ tool, onBack }) {
  const hasCoreCapabilities = Array.isArray(tool.coreCapabilities) && tool.coreCapabilities.length > 0;
  const hasTechnicalCapabilities = Array.isArray(tool.technicalCapabilities) && tool.technicalCapabilities.length > 0;

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="mx-auto max-w-6xl">
      <button onClick={onBack} className="mb-6 rounded-full border border-[#2a2a3e] bg-[#13131a] px-4 py-2 text-sm text-white transition hover:bg-white/5">← Back to all tools</button>

      <section className="rounded-[28px] border border-[#1e1e2e] bg-[#101018] p-6 md:p-8">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-violet-400">Complete AI Reference Page</div>
            <h1 className="font-['Syne'] text-4xl font-extrabold text-white md:text-6xl">{tool.name}</h1>
            <p className="mt-2 text-sm text-[#7f819b]">{tool.maker}</p>
          </div>
          <span className={`rounded-md px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] ${getTagClasses(tool.category)}`}>{tool.label}</span>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          <span className={`rounded-md border bg-[#1a1a26] px-3 py-1.5 font-mono text-[11px] ${getPricingClass(tool.pricingClass)}`}>{tool.pricing}</span>
          <span className="rounded-md border border-[#1e1e2e] bg-[#1a1a26] px-3 py-1.5 font-mono text-[11px] text-cyan-300">Difficulty: {tool.difficulty}</span>
          <span className="rounded-md border border-[#1e1e2e] bg-[#1a1a26] px-3 py-1.5 font-mono text-[11px] text-[#b4b6c9]">{tool.site}</span>
          <span className="rounded-md border border-[#1e1e2e] bg-[#1a1a26] px-3 py-1.5 font-mono text-[11px] text-[#b4b6c9]">Best for: {tool.bestFor}</span>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-[#1e1e2e] bg-[#14141d] p-4"><div className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[#7f819b]">Pricing</div><div className="text-sm text-white">{tool.pricing}</div></div>
          <div className="rounded-2xl border border-[#1e1e2e] bg-[#14141d] p-4"><div className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[#7f819b]">Difficulty</div><div className="text-sm text-white">{tool.difficulty}</div></div>
          <div className="rounded-2xl border border-[#1e1e2e] bg-[#14141d] p-4"><div className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[#7f819b]">Best For</div><div className="text-sm text-white">{tool.bestFor}</div></div>
          <div className="rounded-2xl border border-[#1e1e2e] bg-[#14141d] p-4"><div className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[#7f819b]">Official Site</div><div className="text-sm break-all text-white">{tool.site}</div><a href={`https://${tool.site}`} target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-xl border border-violet-400/30 bg-violet-500/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-violet-500/20">Visit official website</a></div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-[#1e1e2e] bg-[#13131a] p-6"><div className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#7f819b]">Tool Explanation</div><p className="text-base leading-8 text-[#c8cad8]">{tool.explanation}</p></div>
          <div className="rounded-3xl border border-[#1e1e2e] bg-[#13131a] p-6"><div className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#7f819b]">Quick Summary</div><p className="text-sm leading-7 text-[#a9acc2]">{tool.summary}</p></div>
        </div>
      </section>

      <section className="mt-6 rounded-[28px] border border-[#1e1e2e] bg-[#101018] p-6 md:p-8">
        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl border border-[#1e1e2e] bg-[#13131a] p-4"><div className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[#7f819b]">Pros</div><ul className="ml-5 list-disc space-y-1 text-sm text-[#c8cad8]">{(tool.pros || []).map((p) => <li key={p}>{p}</li>)}</ul></div>
          <div className="rounded-2xl border border-[#1e1e2e] bg-[#13131a] p-4"><div className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[#7f819b]">Cons</div><ul className="ml-5 list-disc space-y-1 text-sm text-[#c8cad8]">{(tool.cons || []).map((c) => <li key={c}>{c}</li>)}</ul></div>
          <div className="rounded-2xl border border-[#1e1e2e] bg-[#13131a] p-4"><div className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[#7f819b]">Best Use Cases</div><ul className="ml-5 list-disc space-y-1 text-sm text-[#c8cad8]">{(tool.useCases || []).map((u) => <li key={u}>{u}</li>)}</ul></div>
          <div className="rounded-2xl border border-[#1e1e2e] bg-[#13131a] p-4 md:col-span-2 xl:col-span-3"><div className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[#7f819b]">Who Should Use This</div><div className="text-sm text-white">{tool.audience}</div></div>
        </div>

        <div className="mb-5"><h2 className="font-['Syne'] text-2xl font-bold text-white md:text-3xl">All Capabilities</h2><p className="mt-1 text-sm text-[#7f819b]">A complete breakdown of what this AI tool can help users do.</p></div>
        <div className="grid gap-4 md:grid-cols-2">
          {(tool.capabilities || []).map((capability, index) => (
            <motion.div key={capability.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: index * 0.03 }} className="rounded-3xl border border-[#1e1e2e] bg-[#13131a] p-5">
              <div className="mb-3 flex items-center gap-3"><span className="rounded-md border border-[#2a2a3e] bg-[#1a1a26] px-2 py-1 font-mono text-[11px] text-violet-300">{String(index + 1).padStart(2, '0')}</span><h3 className="font-['Syne'] text-xl font-bold text-white">{capability.name}</h3></div>
              <p className="text-sm leading-7 text-[#a9acc2]">{capability.detail}</p>
            </motion.div>
          ))}
        </div>

        {hasCoreCapabilities && (
          <div className="mt-8">
            <div className="mb-5"><h2 className="font-['Syne'] text-2xl font-bold text-white md:text-3xl">Core Capabilities</h2><p className="mt-1 text-sm text-[#7f819b]">These define the main strengths and operating model of the tool.</p></div>
            <div className="grid gap-4 md:grid-cols-2">
              {(tool.coreCapabilities || []).map((core, index) => (
                <div key={core.name} className="rounded-3xl border border-[#1e1e2e] bg-[#13131a] p-5">
                  <div className="mb-3 flex items-center gap-3"><span className="rounded-md border border-[#2a2a3e] bg-[#1a1a26] px-2 py-1 font-mono text-[11px] text-violet-300">C{String(index + 1).padStart(2, '0')}</span><h3 className="font-['Syne'] text-xl font-bold text-white">{core.name}</h3></div>
                  <p className="mb-4 text-sm leading-7 text-[#a9acc2]">{core.detail}</p>
                  <div className="flex flex-wrap gap-2">{(core.features || []).map((feature) => <span key={feature} className="rounded-md border border-[#1e1e2e] bg-[#1a1a26] px-2.5 py-1 font-mono text-[11px] text-[#c8cad8]">{feature}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {hasTechnicalCapabilities && (
          <div className="mt-8">
            <div className="mb-5"><h2 className="font-['Syne'] text-2xl font-bold text-white md:text-3xl">Technical Capabilities</h2><p className="mt-1 text-sm text-[#7f819b]">Operational and platform-oriented strengths that matter in real workflows.</p></div>
            <div className="grid gap-4 md:grid-cols-2">
              {(tool.technicalCapabilities || []).map((item, index) => (
                <div key={item.name} className="rounded-3xl border border-[#1e1e2e] bg-[#13131a] p-5">
                  <div className="mb-3 flex items-center gap-3"><span className="rounded-md border border-[#2a2a3e] bg-[#1a1a26] px-2 py-1 font-mono text-[11px] text-sky-300">T{String(index + 1).padStart(2, '0')}</span><h3 className="font-['Syne'] text-xl font-bold text-white">{item.name}</h3></div>
                  <p className="text-sm leading-7 text-[#a9acc2]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </motion.div>
  );
}

export default function Top10AIToolsReferenceSite() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTool, setSelectedTool] = useState(null);

  const filteredTools = useMemo(() => {
    if (activeFilter === 'all') return tools;
    return tools.filter((tool) => tool.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] px-4 py-8 text-[#e2e2f0] md:px-6 lg:px-8">
      <AnimatePresence mode="wait">
        {selectedTool ? (
          <motion.div key={`detail-${selectedTool.rank}`} exit={{ opacity: 0, y: 12 }}>
            <ToolReferencePage tool={selectedTool} onBack={() => setSelectedTool(null)} />
          </motion.div>
        ) : (
          <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-auto max-w-6xl">
            <header className="mb-10 text-center">
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-violet-400">2026 Reference Guide</div>
              <h1 className="mx-auto mb-4 max-w-4xl bg-gradient-to-br from-white via-white to-violet-500 bg-clip-text font-['Syne'] text-4xl font-extrabold leading-tight text-transparent md:text-6xl">Top 20 AI Tools</h1>
              <p className="mx-auto max-w-2xl text-sm leading-7 text-[#6b6b8a] md:text-base">A clean AI reference page that shows what each tool does, who makes it, where it fits best, how difficult it is to use, and what capabilities it brings.</p>
            </header>
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {filters.map((filter) => {
                const active = activeFilter === filter.key;
                return (
                  <button key={filter.key} onClick={() => setActiveFilter(filter.key)} className={`rounded-full border px-4 py-2 text-sm transition-all ${active ? 'border-violet-400 bg-violet-500/15 text-white' : 'border-[#1e1e2e] bg-[#13131a] text-[#6b6b8a] hover:border-violet-400/40 hover:text-white'}`}>
                    {filter.label}
                  </button>
                );
              })}
            </div>
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredTools.map((tool) => <ToolCard key={tool.rank} tool={tool} onOpen={setSelectedTool} />)}
            </section>
            <footer className="mt-14 text-center font-mono text-xs tracking-[0.05em] text-[#6b6b8a]">Top 20 AI Tools · Reference Layout Preview</footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
