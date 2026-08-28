import { useAppContext } from "../context/AppContext";
import PromptInput from "../components/PromptInput";

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
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20 mt-8 xl:mt-28">
        <div className="w-full max-w-2xl flex flex-col items-center">
          {/*promo badge */}
          <div className="flex items-center gap-2 p-1.5 pr-3 bg-white/10 backdrop-blur-md rounded-full border border-zinc-900 text-[13px] text-white/90">
            <span className="px-3 py-1 text-[10px] bg-zinc-900 rounded-full font-medium tracking-wider">PROMO</span>
            <span className="text-zinc-800">Create your first project for free.</span>
          </div>
        </div>
        {/*Title*/}
        <h1 className="text-center text-sm md:text-base max-w-xl mt-4 text-zinc-900">Let's build your app together</h1>
        <p className="text-center text-sm md:text-base max-w-xxl mt-4 text-zinc-900 loading-relaxed">
          Describe your idea and watch AI design, structure and launch your website instantly.
        </p>

        {/*prompt input with glassmorphic variant*/}
        <div className="w-full mt-6 flex items-center justify-center">
          <PromptInput
            onSubmit={() => {}}
            loading={false}
            placeholder="Create a portfolio website......"
            variant="glass"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
