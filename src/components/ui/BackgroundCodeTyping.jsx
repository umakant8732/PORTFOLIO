import React, { useState, useEffect } from 'react';

const SNIPPETS = [
  `// Express.js Auth Controller
const express = require('express');
const app = express();

app.post('/api/v1/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  
  if (!user || !user.matchPassword(password)) {
    return res.status(401).json({ success: false });
  }
  
  const token = user.getSignedJwtToken();
  res.status(200).json({ success: true, token });
});`,

  `// React 19 & GSAP Animations
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SmoothTimeline() {
  const boxRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(boxRef.current, 
      { opacity: 0, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2 }
    );
  }, []);
  
  return <div ref={boxRef} className="glass-card" />;
}`,

  `// BullMQ Video Transcoding Job
const { Queue, Worker } = require('bullmq');
const transcodeQueue = new Queue('video-processing');

await transcodeQueue.add('hls-transcode', {
  s3Key: 'courses/lectures/video-01.mp4',
  targetResolutions: ['1080p', '720p', '480p'],
  segmentDuration: 6
});`
];

export default function BackgroundCodeTyping() {
  const [leftCode, setLeftCode] = useState('');
  const [rightCode, setRightCode] = useState('');

  useEffect(() => {
    let active = true;
    let leftIndex = 0;
    let rightIndex = 1;

    async function typeSnippet(snippet, setCode) {
      for (let i = 0; i <= snippet.length; i++) {
        if (!active) return;
        setCode(snippet.slice(0, i));
        // Random typing speed to look natural
        await new Promise((resolve) => setTimeout(resolve, 30 + Math.random() * 20));
      }
      // Hold code for a few seconds
      await new Promise((resolve) => setTimeout(resolve, 4000));
      // Delete code
      for (let i = snippet.length; i >= 0; i--) {
        if (!active) return;
        setCode(snippet.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 10));
      }
    }

    async function runLeftLoop() {
      while (active) {
        const snippet = SNIPPETS[leftIndex];
        await typeSnippet(snippet, setLeftCode);
        leftIndex = (leftIndex + 1) % SNIPPETS.length;
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }

    async function runRightLoop() {
      while (active) {
        // Offset start to avoid typing at the exact same time
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const snippet = SNIPPETS[rightIndex];
        await typeSnippet(snippet, setRightCode);
        rightIndex = (rightIndex + 1) % SNIPPETS.length;
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }

    runLeftLoop();
    runRightLoop();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Floating Left Terminal */}
      <div 
        className="absolute top-20 -left-12 w-[340px] sm:w-[480px] p-4 rounded-xl border border-purple-200/20 bg-purple-50/5 font-mono text-[10px] sm:text-xs text-purple-950/15 leading-relaxed transform -rotate-6 origin-top-left opacity-60 md:opacity-100"
      >
        <div className="flex gap-1.5 mb-3 border-b border-purple-200/20 pb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-950/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-purple-950/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-purple-950/10" />
        </div>
        <pre className="whitespace-pre-wrap">{leftCode}<span className="animate-pulse">|</span></pre>
      </div>

      {/* Floating Right Terminal */}
      <div 
        className="absolute bottom-20 -right-12 w-[340px] sm:w-[480px] p-4 rounded-xl border border-purple-200/20 bg-purple-50/5 font-mono text-[10px] sm:text-xs text-purple-950/15 leading-relaxed transform rotate-6 origin-bottom-right opacity-60 md:opacity-100"
      >
        <div className="flex gap-1.5 mb-3 border-b border-purple-200/20 pb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-950/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-purple-950/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-purple-950/10" />
        </div>
        <pre className="whitespace-pre-wrap">{rightCode}<span className="animate-pulse">|</span></pre>
      </div>
    </div>
  );
}
