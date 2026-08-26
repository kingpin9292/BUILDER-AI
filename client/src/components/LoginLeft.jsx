import React from "react";

const LoginLeft = () => {
  return (
    <div className=" lg:flex lg:w-2/5 bg-[url('/bg-img.png')] bg-cover bg-center bg-no-repeat flex-col justify-between p-12 shrink-0 select-none">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="Logo" className="size-9.5" />
        <span className="text-4xl font-medium text-#2E2E2E">BuilderAI</span>
      </div>
      <div>
        <h2 className="text-3xl text-#E5E5E5 font-medium leading-snug mb-3 tracking-tight">
          Build your presence on web
        </h2>
        <p className="text-#3B2F2F">
          Describe what you need, preview instantly, and customize your site in real-time. React with clean JSX,
          verified layouts, and instant code exports
        </p>
        <p className="text-#E5E5E5 text-sm mt-12">Copyright {new Date().getFullYear()} BuilderAI</p>
      </div>
    </div>
  );
};

export default LoginLeft;
