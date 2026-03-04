"use client";
import Image from "next/image";
import { useDeferredValue, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("Exploring Modern Layouts");
  const [name, setName] = useState("Design Team");
  const [type, setType] = useState("1");
  const [image, setImage] = useState(
    "https://raw.githubusercontent.com/SoraKumo001/cloudflare-ogp/refs/heads/master/sample/image.jpg",
  );

  const u = new URL("", "http://localhost");
  u.searchParams.set("title", title);
  u.searchParams.set("name", name);
  u.searchParams.set("image", image);
  u.searchParams.set("type", type);
  const url = useDeferredValue(u);

  return (
    <div className="flex min-h-screen flex-col items-center  gap-6 bg-zinc-50 p-8 font-sans">
      <div className="flex flex-wrap gap-4 bg-white p-6 shadow-lg rounded-xl border border-zinc-200">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
            Layout Type
          </label>
          <select
            className="border p-2 rounded bg-zinc-50 cursor-pointer hover:bg-white transition-colors"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="1">Type 01: Deep Space</option>
            <option value="2">Type 02: Modern Minimal</option>
            <option value="3">Type 03: Neon Cyber</option>
            <option value="4">Type 04: Glassmorphism</option>
            <option value="5">Type 05: Neo-Brutalism</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
            Title
          </label>
          <input
            className="border p-2 rounded w-64 focus:ring-2 focus:ring-blue-500 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
            Name
          </label>
          <input
            className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
            Image URL
          </label>
          <input
            className="border p-2 rounded w-80 focus:ring-2 focus:ring-blue-500 outline-none"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
      </div>

      <div className="relative h-[432px] w-[720px] border-8 border-white bg-white shadow-2xl rounded-sm overflow-hidden transition-all duration-300">
        <Image
          src={"/image" + url.search}
          fill
          unoptimized
          className="object-contain"
          alt="Preview"
        />
      </div>
      <p className="text-zinc-400 text-sm italic">
        Rendering 1200x720 (Preview at 60% scale)
      </p>
    </div>
  );
}
