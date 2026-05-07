"use client";

import { FormEvent, useState } from "react";
import type { NextPage } from "next";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { CATEGORIES, DAPPS, faviconUrl } from "~~/data/dapps";

const LOGO_COLORS = ["#4285F4", "#EA4335", "#FBBC05", "#4285F4", "#34A853", "#EA4335", "#FBBC05", "#4285F4"];
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
    <div className="flex flex-col items-center grow w-full px-4 pt-16 sm:pt-24 pb-16">
      <h1 className="flex font-sans font-medium select-none mb-8 sm:mb-10 leading-none tracking-tight">
        {LOGO_LETTERS.map((letter, i) => (
          <span key={i} className="text-7xl sm:text-8xl" style={{ color: LOGO_COLORS[i % LOGO_COLORS.length] }}>
            {letter}
          </span>
        ))}
      </h1>

      <form onSubmit={submitSearch} className="w-full max-w-xl">
        <label
          htmlFor="search"
          className="flex items-center gap-3 px-5 py-3 rounded-full border border-base-300 bg-base-100 shadow-sm hover:shadow-md focus-within:shadow-md transition-shadow"
        >
          <MagnifyingGlassIcon className="h-5 w-5 opacity-50 shrink-0" />
          <input
            id="search"
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search Ethereum"
            className="grow bg-transparent outline-none text-base"
            autoComplete="off"
          />
        </label>

        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          <button
            type="submit"
            className="btn btn-sm bg-base-200 hover:bg-base-300 border-base-300 normal-case font-normal px-5"
          >
            Ethereum Search
          </button>
          <button
            type="button"
            onClick={feelingLucky}
            className="btn btn-sm bg-base-200 hover:bg-base-300 border-base-300 normal-case font-normal px-5"
          >
            I&apos;m Feeling Decentralized
          </button>
        </div>
      </form>

      <p className="mt-6 text-sm opacity-70 text-center max-w-md">Or jump straight into a live dapp 👇</p>

      <div className="w-full max-w-6xl mt-10 space-y-10">
        {CATEGORIES.map(category => {
          const items = DAPPS.filter(d => d.category === category);
          if (items.length === 0) return null;
          return (
            <section key={category}>
              <h2 className="text-sm uppercase tracking-widest opacity-60 mb-4 px-1">{category}</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
                {items.map(dapp => (
                  <a
                    key={dapp.name}
                    href={dapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 p-3 rounded-2xl bg-base-100 hover:bg-base-300 transition-colors border border-transparent hover:border-base-300"
                    title={dapp.name}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={faviconUrl(dapp.domain)}
                        alt={`${dapp.name} icon`}
                        width={40}
                        height={40}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-10 h-10"
                      />
                    </div>
                    <span className="text-xs text-center truncate w-full">{dapp.name}</span>
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <footer className="mt-16 text-xs opacity-50 text-center">
        Inspired by{" "}
        <a className="link" href="https://ethereum.org/apps" target="_blank" rel="noopener noreferrer">
          ethereum.org/apps
        </a>
        . Built with{" "}
        <a className="link" href="https://scaffoldeth.io" target="_blank" rel="noopener noreferrer">
          Scaffold-ETH 2
        </a>
        .
      </footer>
    </div>
  );
};

export default Home;
