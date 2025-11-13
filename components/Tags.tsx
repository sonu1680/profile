import { cn } from '@/lib/utils';
import React from 'react'

const Tags = ({ tags, className }: { tags: string[],className?:string }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "bg-[#1e1e1e] text-gray-300 text-xs px-3 py-1 rounded-md border border-transparent hover:border-gray-500 transition-all duration-300",
            className
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags