import React from "react";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { user } = useAppContext();
  return (
    <div className="h-screen overflow-y-scroll text-white font-sans bg-[url('/bg-img.png')] bg-cover bg-center bg-no-repeat">
      {/*Nav */}
      <nav className="sticky top-0 z-10 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="size-6" />
          <span className="text-xl font-semibold tracking-tight text-zinc-900">BulderAi</span>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium text-zinc-900">
          <span>{user?.name}</span>
          <button className="py-1.5 px-3 border border-zinc-500 text-zinc-900 hover:bg-white/10 text-xs rounded-md cursor-pointer bg-transparent">
            Sign out
          </button>
        </div>
      </nav>

      {/*Hero*/}
      <div></div>
    </div>
  );
};

export default Home;
