"use client";

import { FormEvent, useState } from "react";
import type { NextPage } from "next";
import { CATEGORIES, DAPPS, faviconUrl } from "~~/data/dapps";

const LOGO_COLORS = ["#0000cc", "#cc0000", "#cc9900", "#0000cc", "#009933", "#cc0000", "#cc9900", "#0000cc"];
const LOGO_LETTERS = "ETHEREUM".split("");

const Home: NextPage = () => {
  const [query, setQuery] = useState("");

  const submitSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(q + " ethereum")}`;
  };

  const feelingLucky = () => {
    const q = query.trim();
    if (!q) {
      const random = DAPPS[Math.floor(Math.random() * DAPPS.length)];
      window.location.href = random.url;
      return;
    }
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(q + " ethereum")}&btnI=1`;
  };

  return (
    <div className="bg-white text-black min-h-screen w-full">
      <div className="flex flex-col items-center w-full px-4 pt-16 sm:pt-24 pb-16 font-[Verdana,Geneva,Arial,sans-serif] text-[13px]">
        <h1 className="flex select-none mb-6 leading-none font-serif">
          {LOGO_LETTERS.map((letter, i) => (
            <span
              key={i}
              className="text-6xl sm:text-7xl font-bold"
              style={{ color: LOGO_COLORS[i % LOGO_COLORS.length], textShadow: "1px 1px 0 rgba(0,0,0,0.15)" }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <form onSubmit={submitSearch} className="flex flex-col items-center">
          <input
            id="search"
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-[420px] max-w-[90vw] h-7 px-1 border border-[#7e9db9] outline-none text-[13px] bg-white text-black"
            autoComplete="off"
            autoFocus
          />

          <div className="flex justify-center gap-2 mt-4">
            <button
              type="submit"
              className="bg-[#e7e7e7] hover:border-black border border-[#aaa] text-black text-[13px] px-3 py-1 cursor-pointer font-[Verdana,Geneva,Arial,sans-serif]"
            >
              Ethereum Search
            </button>
            <button
              type="button"
              onClick={feelingLucky}
              className="bg-[#e7e7e7] hover:border-black border border-[#aaa] text-black text-[13px] px-3 py-1 cursor-pointer font-[Verdana,Geneva,Arial,sans-serif]"
            >
              I&apos;m Feeling Decentralized
            </button>
          </div>
        </form>

        <hr className="border-t border-[#cccccc] w-full max-w-5xl mt-12 mb-6" />

        <p className="text-[12px] text-[#676767] mb-6">Or jump straight into a live dapp:</p>

        <div className="w-full max-w-5xl space-y-8">
          {CATEGORIES.map(category => {
            const items = DAPPS.filter(d => d.category === category);
            if (items.length === 0) return null;
            return (
              <section key={category}>
                <h2 className="text-[13px] font-bold text-[#000080] border-b border-[#cccccc] pb-1 mb-3">{category}</h2>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-x-3 gap-y-4">
                  {items.map(dapp => (
                    <a
                      key={dapp.name}
                      href={dapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1 p-2 hover:bg-[#f5f5f5] text-[#0000cc]"
                      title={dapp.name}
                    >
                      <div className="w-12 h-12 border border-[#cccccc] bg-white flex items-center justify-center overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={faviconUrl(dapp.domain)}
                          alt={`${dapp.name} icon`}
                          width={32}
                          height={32}
                          referrerPolicy="no-referrer"
                          className="w-8 h-8"
                        />
                      </div>
                      <span className="text-[11px] text-center underline truncate w-full">{dapp.name}</span>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <hr className="border-t border-[#cccccc] w-full max-w-5xl mt-12 mb-3" />
        <div className="text-[11px] text-[#676767] text-center">
          Inspired by{" "}
          <a
            className="text-[#0000cc] underline"
            href="https://ethereum.org/apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            ethereum.org/apps
          </a>
          . Built with{" "}
          <a
            className="text-[#0000cc] underline"
            href="https://scaffoldeth.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scaffold-ETH 2
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Home;
