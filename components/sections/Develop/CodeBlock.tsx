import React from "react";

type CodeBlockProps = {
  code?: string;
  className?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code = "", className = "" }) => {
  if (code.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <div className="px-4 py-8 overflow-x-scroll text-xs leading-[20px] text-gray-100 bg-gray-900">
        <pre
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        />
      </div>
      <span className="hidden w-3 h-0 italic text-right text-gray-400 select-none"></span>
      <span className="inline-block w-0 h-0 mr-4 text-gray-500"></span>
      <span className="hidden w-0 h-0 text-blue-600"></span>
    </div>
  );
};

export default CodeBlock;
