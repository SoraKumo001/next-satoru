/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import { ReactNode } from "react";

const Base = ({ children }: { children: ReactNode }) => (
  <html className="m-0 p-0 w-300 h-180 overflow-hidden">
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"
        rel="stylesheet"
      />
    </head>
    <body className="m-0 p-0 w-full h-full overflow-hidden">{children}</body>
  </html>
);

export const Type01 = ({
  title,
  name,
  image,
}: {
  title: string;
  name: string;
  image: string;
}) => (
  <Base>
    <div className="w-full h-full bg-[linear-gradient(135deg,#1a1a2e_0%,#16213e_100%)] text-white flex flex-col p-15 box-border relative">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute -right-25 -top-25 w-150 h-150 opacity-20 rounded-full"
        />
      )}
      <div className="text-[24px] text-[#4ecca3] mb-5 font-bold">
        CASE STUDY
      </div>
      <div className="text-[84px] font-black leading-[1.1] mb-auto max-w-200">
        {title}
      </div>
      <div className="flex items-center gap-5">
        <div className="w-15 h-1 bg-[#4ecca3]" />
        <div className="text-[32px] font-medium">{name}</div>
      </div>
    </div>
  </Base>
);

export const Type02 = ({
  title,
  name,
  image,
}: {
  title: string;
  name: string;
  image: string;
}) => (
  <Base>
    <div className="w-full h-full bg-[#f4f4f2] text-[#333] flex box-border">
      <div className="w-100 h-full relative overflow-hidden">
        <img
          src={image || "https://via.placeholder.com/400x720"}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="flex-1 p-[80px_60px] flex flex-col justify-center">
        <div className="text-[20px] tracking-[0.2em] text-[#888] mb-5">
          INSIGHTS
        </div>
        <div className="text-[72px] font-bold text-[#111] leading-[1.2] mb-10">
          {title}
        </div>
        <div className="mt-auto text-[28px] italic text-[#555]">— {name}</div>
      </div>
    </div>
  </Base>
);

export const Type03 = ({
  title,
  name,
  image,
}: {
  title: string;
  name: string;
  image: string;
}) => (
  <Base>
    <div className="w-full h-full bg-[#050505] text-white flex flex-col items-center justify-center relative p-10 box-border">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[linear-gradient(to_right,#ff00ff,#00ffff)]" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[linear-gradient(to_right,#00ffff,#ff00ff)]" />

      <div className="text-[120px] font-black text-center uppercase tracking-[-0.05em] text-transparent [-webkit-text-stroke:2px_#fff] -mb-10 opacity-30">
        {name}
      </div>
      <div className="text-[96px] font-bold text-center text-white [text-shadow:0_0_20px_#ff00ff,0_0_40px_#00ffff] z-1">
        {title}
      </div>
      <div className="mt-15 p-[10px_30px] border-2 border-[#00ffff] rounded-[100px] text-[#00ffff] text-[24px] font-bold uppercase">
        Verified by {name}
      </div>
    </div>
  </Base>
);

export const Type04 = ({
  title,
  name,
  image,
}: {
  title: string;
  name: string;
  image: string;
}) => (
  <Base>
    <div className="w-full h-full bg-[linear-gradient(225deg,#FF3CAC_0%,#784BA0_50%,#2B86C5_100%)] flex items-center justify-center p-15 box-border">
      <div className="w-full h-full bg-white/15 rounded-[40px] border border-white/30 flex flex-col p-20 box-border relative overflow-hidden">
        <div className="absolute -top-25 -left-25 w-75 h-75 bg-white/20 blur-[60px] rounded-full" />

        <div className="flex items-center gap-6 mb-10">
          <img
            src={image}
            alt=""
            className="w-20 h-20 rounded-[20px] border-2 border-white/50"
          />
          <div className="text-[32px] font-bold text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.2)]">
            {name}
          </div>
        </div>

        <div className="text-[80px] font-black text-white leading-[1.1] [text-shadow:0_4px_20px_rgba(0,0,0,0.3)] tracking-[-0.02em]">
          {title}
        </div>

        <div className="mt-auto flex gap-3">
          {["Next.js", "Design", "Satoru"].map((tag) => (
            <div
              key={tag}
              className="bg-white/20 p-[8px_20px] rounded-[100px] text-white text-[32px] border border-white/20"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  </Base>
);

export const Type05 = ({
  title,
  name,
  image,
}: {
  title: string;
  name: string;
  image: string;
}) => (
  <Base>
    <div className="w-full h-full bg-[#FFDE00] flex flex-col p-10 box-border">
      <div className="border-8 border-black bg-white flex-1 flex flex-col relative shadow-[20px_20px_0px_#000]">
        <div className="h-20 border-b-8 border-black bg-black flex items-center p-[0_30px] gap-2.5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full border-4 border-white"
            />
          ))}
          <div className="ml-auto text-white font-bold text-[20px]">
            README.md
          </div>
        </div>
        <div className="p-15 flex flex-col flex-1">
          <div className="bg-black text-white inline-block p-[10px_20px] text-[24px] font-bold w-fit mb-7.5 -rotate-2">
            # {name}
          </div>
          <div className="text-[84px] font-black text-black leading-none mb-10 uppercase">
            {title}
          </div>
          <div className="mt-auto flex justify-between items-end">
            <div className="text-[32px] font-bold underline">View Project</div>
            <img
              src={image}
              alt=""
              className="w-50 h-50 border-8 border-black object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </Base>
);
