import React from "react";

export default function Title({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <div className="w-12 h-1 bg-primary mb-4"></div>
      <h1 className="text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight uppercase">
        {title}
      </h1>
      <p className="text-slate-400 mt-2 max-w-md">
        {subtitle}
      </p>
    </div>
  );
}
