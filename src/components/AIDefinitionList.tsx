import React from "react";
import { BookOpen } from "lucide-react";

export interface AIDefinition {
  term: string;
  definition: string;
}

interface AIDefinitionListProps {
  title?: string;
  definitions: AIDefinition[];
}

export default function AIDefinitionList({ title = "Key AI Concepts & Glossary", definitions }: AIDefinitionListProps) {
  return (
    <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4 my-8">
      <div className="flex items-center gap-2">
        <BookOpen className="w-4 h-4 text-emerald-400" />
        <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
          {title}
        </h4>
      </div>

      <dl className="space-y-4 m-0">
        {definitions.map((def, idx) => (
          <div key={idx} className="space-y-1">
            <dt className="text-xs font-mono font-bold text-[#00D2FF] uppercase">
              <dfn className="not-italic">{def.term}</dfn>
            </dt>
            <dd className="text-xs text-gray-400 font-sans leading-relaxed m-0 pl-4 border-l border-white/10">
              {def.definition}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
