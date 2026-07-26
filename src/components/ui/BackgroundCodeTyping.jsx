import React, { useEffect, useRef } from 'react';

const SNIPPET_1 = [
  { text: "// Express.js Auth Controller\n", cls: "text-slate-400 italic" },
  { text: "const ", cls: "text-pink-600 font-semibold" },
  { text: "express = ", cls: "text-slate-700" },
  { text: "require", cls: "text-blue-600" },
  { text: "(", cls: "text-slate-700" },
  { text: "'express'", cls: "text-emerald-600" },
  { text: ");\n", cls: "text-slate-700" },
  { text: "const ", cls: "text-pink-600 font-semibold" },
  { text: "app = ", cls: "text-slate-700" },
  { text: "express();\n\n", cls: "text-slate-700" },
  { text: "app.", cls: "text-slate-700" },
  { text: "post", cls: "text-blue-600" },
  { text: "(", cls: "text-slate-700" },
  { text: "'/api/v1/auth/login'", cls: "text-emerald-600" },
  { text: ", ", cls: "text-slate-700" },
  { text: "async ", cls: "text-pink-600 font-semibold" },
  { text: "(req, res) => {\n", cls: "text-slate-700" },
  { text: "  const ", cls: "text-pink-600 font-semibold" },
  { text: "{ email, password } = req.body;\n", cls: "text-slate-700" },
  { text: "  const ", cls: "text-pink-600 font-semibold" },
  { text: "user = ", cls: "text-slate-700" },
  { text: "await ", cls: "text-pink-600 font-semibold" },
  { text: "User.", cls: "text-slate-700" },
  { text: "findOne", cls: "text-blue-600" },
  { text: "({ email });\n\n", cls: "text-slate-700" },
  { text: "  if ", cls: "text-pink-600 font-semibold" },
  { text: "(!user || !user.", cls: "text-slate-700" },
  { text: "matchPassword", cls: "text-blue-600" },
  { text: "(password)) {\n", cls: "text-slate-700" },
  { text: "    return ", cls: "text-pink-600 font-semibold" },
  { text: "res.", cls: "text-slate-700" },
  { text: "status", cls: "text-blue-600" },
  { text: "(401).", cls: "text-slate-700" },
  { text: "json", cls: "text-blue-600" },
  { text: "({ success: false });\n", cls: "text-slate-700" },
  { text: "  }\n\n", cls: "text-slate-700" },
  { text: "  const ", cls: "text-pink-600 font-semibold" },
  { text: "token = user.", cls: "text-slate-700" },
  { text: "getSignedJwtToken", cls: "text-blue-600" },
  { text: "();\n", cls: "text-slate-700" },
  { text: "  res.", cls: "text-slate-700" },
  { text: "status", cls: "text-blue-600" },
  { text: "(200).", cls: "text-slate-700" },
  { text: "json", cls: "text-blue-600" },
  { text: "({ success: true, token });\n", cls: "text-slate-700" },
  { text: "});", cls: "text-slate-700" }
];

const SNIPPET_2 = [
  { text: "// React 19 & GSAP Animations\n", cls: "text-slate-400 italic" },
  { text: "import ", cls: "text-pink-600 font-semibold" },
  { text: "React, { useEffect, useRef } ", cls: "text-slate-700" },
  { text: "from ", cls: "text-pink-600 font-semibold" },
  { text: "'react'", cls: "text-emerald-600" },
  { text: ";\n", cls: "text-slate-700" },
  { text: "import ", cls: "text-pink-600 font-semibold" },
  { text: "gsap ", cls: "text-slate-700" },
  { text: "from ", cls: "text-pink-600 font-semibold" },
  { text: "'gsap'", cls: "text-emerald-600" },
  { text: ";\n\n", cls: "text-slate-700" },
  { text: "export default function ", cls: "text-pink-600 font-semibold" },
  { text: "SmoothTimeline() {\n", cls: "text-slate-700" },
  { text: "  const ", cls: "text-pink-600 font-semibold" },
  { text: "boxRef = ", cls: "text-slate-700" },
  { text: "useRef", cls: "text-blue-600" },
  { text: "(null);\n\n", cls: "text-slate-700" },
  { text: "  ", cls: "text-slate-700" },
  { text: "useEffect", cls: "text-blue-600" },
  { text: "(() => {\n", cls: "text-slate-700" },
  { text: "    gsap.", cls: "text-slate-700" },
  { text: "fromTo", cls: "text-blue-600" },
  { text: "(boxRef.current, \n", cls: "text-slate-700" },
  { text: "      { opacity: 0, scale: 0.9, y: 20 },\n", cls: "text-slate-700" },
  { text: "      { opacity: 1, scale: 1, y: 0, duration: 1.2 }\n", cls: "text-slate-700" },
  { text: "    );\n", cls: "text-slate-700" },
  { text: "  }, []);\n\n", cls: "text-slate-700" },
  { text: "  return ", cls: "text-pink-600 font-semibold" },
  { text: "<div ref={boxRef} className=", cls: "text-slate-700" },
  { text: "\"glass-card\"", cls: "text-emerald-600" },
  { text: " />;\n", cls: "text-slate-700" },
  { text: "}", cls: "text-slate-700" }
];

const SNIPPET_3 = [
  { text: "// BullMQ Video Transcoding Job\n", cls: "text-slate-400 italic" },
  { text: "const ", cls: "text-pink-600 font-semibold" },
  { text: "{ Queue, Worker } = ", cls: "text-slate-700" },
  { text: "require", cls: "text-blue-600" },
  { text: "(", cls: "text-slate-700" },
  { text: "'bullmq'", cls: "text-emerald-600" },
  { text: ");\n", cls: "text-slate-700" },
  { text: "const ", cls: "text-pink-600 font-semibold" },
  { text: "transcodeQueue = ", cls: "text-slate-700" },
  { text: "new ", cls: "text-pink-600 font-semibold" },
  { text: "Queue(", cls: "text-slate-700" },
  { text: "'video-processing'", cls: "text-emerald-600" },
  { text: ");\n\n", cls: "text-slate-700" },
  { text: "await ", cls: "text-pink-600 font-semibold" },
  { text: "transcodeQueue.", cls: "text-slate-700" },
  { text: "add", cls: "text-blue-600" },
  { text: "(", cls: "text-slate-700" },
  { text: "'hls-transcode'", cls: "text-emerald-600" },
  { text: ", {\n", cls: "text-slate-700" },
  { text: "  s3Key: ", cls: "text-slate-700" },
  { text: "'courses/lectures/video-01.mp4'", cls: "text-emerald-600" },
  { text: ",\n  targetResolutions: [", cls: "text-slate-700" },
  { text: "'1080p'", cls: "text-emerald-600" },
  { text: ", ", cls: "text-slate-700" },
  { text: "'720p'", cls: "text-emerald-600" },
  { text: ", ", cls: "text-slate-700" },
  { text: "'480p'", cls: "text-emerald-600" },
  { text: "],\n  segmentDuration: 6\n});", cls: "text-slate-700" }
];

const ALL_SNIPPETS = [SNIPPET_1, SNIPPET_2, SNIPPET_3];

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderTokens(tokens, charLimit) {
  let html = '';
  let count = 0;
  for (const token of tokens) {
    if (count >= charLimit) break;
    const remaining = charLimit - count;
    const textToShow = token.text.slice(0, remaining);
    html += `<span class="${token.cls}">${escapeHtml(textToShow)}</span>`;
    count += token.text.length;
  }
  return html;
}

export default function BackgroundCodeTyping() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    let active = true;
    let leftIndex = 0;
    let rightIndex = 1;

    async function typeSnippet(snippet, elementRef) {
      // Calculate total characters in snippet
      const totalLen = snippet.reduce((acc, t) => acc + t.text.length, 0);

      // Type out character by character
      for (let i = 0; i <= totalLen; i++) {
        if (!active) return;
        if (elementRef.current) {
          elementRef.current.innerHTML = renderTokens(snippet, i);
        }
        await new Promise((resolve) => setTimeout(resolve, 15 + Math.random() * 10));
      }
      
      // Wait before erasing
      await new Promise((resolve) => setTimeout(resolve, 5000));
      
      // Erase
      for (let i = totalLen; i >= 0; i--) {
        if (!active) return;
        if (elementRef.current) {
          elementRef.current.innerHTML = renderTokens(snippet, i);
        }
        await new Promise((resolve) => setTimeout(resolve, 5));
      }
    }

    async function runLeftLoop() {
      while (active) {
        const snippet = ALL_SNIPPETS[leftIndex];
        await typeSnippet(snippet, leftRef);
        leftIndex = (leftIndex + 1) % ALL_SNIPPETS.length;
        await new Promise((resolve) => setTimeout(resolve, 2500));
      }
    }

    async function runRightLoop() {
      while (active) {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        const snippet = ALL_SNIPPETS[rightIndex];
        await typeSnippet(snippet, rightRef);
        rightIndex = (rightIndex + 1) % ALL_SNIPPETS.length;
        await new Promise((resolve) => setTimeout(resolve, 2500));
      }
    }

    runLeftLoop();
    runRightLoop();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-40">
      {/* Floating Left Terminal */}
      <div 
        className="absolute top-24 -left-8 w-[340px] sm:w-[480px] p-4 rounded-xl border border-slate-200/60 bg-white/75 backdrop-blur-md font-mono text-[10px] sm:text-xs leading-relaxed origin-top-left animate-float-slow shadow-[0_15px_40px_rgba(148,163,184,0.12)]"
      >
        <div className="flex gap-1.5 mb-3 border-b border-slate-200/40 pb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <pre className="whitespace-pre-wrap flex items-start">
          <code ref={leftRef} className="font-mono text-slate-800"></code>
          <span className="animate-pulse text-purple-600 font-semibold select-none font-mono">|</span>
        </pre>
      </div>

      {/* Floating Right Terminal */}
      <div 
        className="absolute bottom-24 -right-8 w-[340px] sm:w-[480px] p-4 rounded-xl border border-slate-200/60 bg-white/75 backdrop-blur-md font-mono text-[10px] sm:text-xs leading-relaxed origin-bottom-right animate-float-slow-reverse shadow-[0_15px_40px_rgba(148,163,184,0.12)]"
      >
        <div className="flex gap-1.5 mb-3 border-b border-slate-200/40 pb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <pre className="whitespace-pre-wrap flex items-start">
          <code ref={rightRef} className="font-mono text-slate-800"></code>
          <span className="animate-pulse text-purple-600 font-semibold select-none font-mono">|</span>
        </pre>
      </div>
    </div>
  );
}
