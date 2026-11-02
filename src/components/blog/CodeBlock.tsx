"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal, FileCode } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

// Simple fast syntax token parser for VS Code Dark+ look
function tokenizeCodeLine(line: string) {
  // Regex patterns for key tokens
  const tokens: { text: string; color: string }[] = [];

  // Check if entire line is a comment
  const trimmed = line.trim();
  if (trimmed.startsWith("//") || trimmed.startsWith("/*") || trimmed.startsWith("*")) {
    return [{ text: line, color: "text-[#6A9955]" }]; // VS Code green comment
  }

  // Tokenize words, strings, symbols
  // Match strings, keywords, numbers, or other words
  const regex = /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\/\/.*$|\b(?:import|export|from|default|const|let|var|function|return|async|await|if|else|for|while|try|catch|switch|case|break|interface|type|extends|implements|class|new|typeof|instanceof)\b|\b(?:true|false|null|undefined)\b|\b(?:string|number|boolean|any|void|never|object|Promise|Array|Record)\b|[A-Z][a-zA-Z0-9_$]*|\b\d+\b|[a-zA-Z_$][a-zA-Z0-9_$]*(?=\()|[a-zA-Z_$][a-zA-Z0-9_$]*|[^\s\w])/g;

  let lastIndex = 0;
  let match;

  while ((match = regex.exec(line)) !== null) {
    // Add spaces/gaps between matches
    if (match.index > lastIndex) {
      tokens.push({
        text: line.slice(lastIndex, match.index),
        color: "text-[#D4D4D4]",
      });
    }

    const token = match[0];

    // Determine color
    if (token.startsWith("//")) {
      tokens.push({ text: token, color: "text-[#6A9955]" }); // Comment
    } else if (
      (token.startsWith('"') && token.endsWith('"')) ||
      (token.startsWith("'") && token.endsWith("'")) ||
      (token.startsWith("`") && token.endsWith("`"))
    ) {
      tokens.push({ text: token, color: "text-[#CE9178]" }); // String
    } else if (
      [
        "import",
        "export",
        "from",
        "default",
        "const",
        "let",
        "var",
        "function",
        "return",
        "async",
        "await",
        "if",
        "else",
        "for",
        "while",
        "try",
        "catch",
        "switch",
        "case",
        "break",
        "interface",
        "type",
        "extends",
        "implements",
        "class",
        "new",
        "typeof",
        "instanceof",
      ].includes(token)
    ) {
      tokens.push({ text: token, color: "text-[#C586C0] font-medium" }); // Keyword
    } else if (["true", "false", "null", "undefined"].includes(token)) {
      tokens.push({ text: token, color: "text-[#569CD6]" }); // Boolean/literal
    } else if (
      ["string", "number", "boolean", "any", "void", "never", "object", "Promise", "Array", "Record"].includes(
        token
      )
    ) {
      tokens.push({ text: token, color: "text-[#4EC9B0]" }); // Builtin Type
    } else if (/^[A-Z][a-zA-Z0-9_$]*$/.test(token)) {
      tokens.push({ text: token, color: "text-[#4EC9B0]" }); // Component / Type Name
    } else if (line.slice(match.index + token.length).trim().startsWith("(")) {
      tokens.push({ text: token, color: "text-[#DCDCAA]" }); // Function call
    } else if (/^\d+$/.test(token)) {
      tokens.push({ text: token, color: "text-[#B5CEA8]" }); // Number
    } else {
      tokens.push({ text: token, color: "text-[#9CDCFE]" }); // Identifier
    }

    lastIndex = regex.lastIndex;
  }

  // Trailing whitespace or characters
  if (lastIndex < line.length) {
    tokens.push({
      text: line.slice(lastIndex),
      color: "text-[#D4D4D4]",
    });
  }

  return tokens.length > 0 ? tokens : [{ text: line, color: "text-[#D4D4D4]" }];
}

export function CodeBlock({
  code,
  language = "typescript",
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const lines = code.trim().split("\n");

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0c0c0c] shadow-2xl transition-all hover:border-white/[0.2] group">
      {/* VS Code Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#141414] border-b border-white/[0.08] select-none">
        {/* Left: Window Dots + Active File Tab */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          <div className="h-4 w-px bg-white/[0.08] mx-1" />

          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0c0c0c] border border-white/[0.08] text-xs text-white font-mono">
            {filename ? (
              <FileCode className="w-3.5 h-3.5 text-[#0ea5e9]" />
            ) : (
              <Terminal className="w-3.5 h-3.5 text-[#0ea5e9]" />
            )}
            <span>{filename || `${language}.ts`}</span>
          </div>
        </div>

        {/* Right: Language indicator & Copy button */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono uppercase text-[#71717a] hidden sm:inline-block">
            {language}
          </span>

          <button
            type="button"
            onClick={handleCopy}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
              copied
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                : "bg-[#141414] text-[#a1a1aa] hover:text-white hover:bg-white/[0.05] border border-white/[0.08]"
            }`}
            title="Salin Kode ke Clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px]">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-[11px] hidden sm:inline">Salin Kode</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="overflow-x-auto p-4 sm:p-5 font-mono text-[13px] leading-relaxed select-text">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, idx) => {
              const tokens = tokenizeCodeLine(line);
              return (
                <tr key={idx} className="hover:bg-white/[0.02]">
                  {showLineNumbers && (
                    <td className="w-8 pr-4 text-right text-text-muted/40 select-none text-xs align-top font-mono">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                  )}
                  <td className="align-top whitespace-pre">
                    {tokens.map((token, tIdx) => (
                      <span key={tIdx} className={token.color}>
                        {token.text}
                      </span>
                    ))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

