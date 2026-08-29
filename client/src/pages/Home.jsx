import { useAppContext } from "../context/AppContext";
import PromptInput from "../components/PromptInput";
import { homeTags } from "../assets/assets";
import { useEffect } from "react";
import { ArrowRightIcon, ClockIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Home = () => {
  const { user, projects, loadingProjects, generatingProject, loadProjects, handleGenerate, handleDelete, logout } =
    useAppContext();

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const navigate = useNavigate();
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
          <button
            onClick={logout}
            className="py-1.5 px-3 border border-zinc-500 text-zinc-900 hover:bg-white/10 text-xs rounded-md cursor-pointer bg-transparent"
          >
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

          {/*Title*/}
          <h1 className="text-center text-sm md:text-base max-w-xl mt-4 text-zinc-900">
            Let's build your app together
          </h1>
          <p className="text-center text-sm md:text-base max-w-xxl mt-4 text-zinc-900 loading-relaxed">
            Describe your idea and watch AI design, structure and launch your website instantly.
          </p>

          {/*prompt input with glassmorphic variant*/}
          <div className="w-full mt-6 flex items-center justify-center">
            <PromptInput
              onSubmit={handleGenerate}
              loading={generatingProject}
              placeholder="Create a portfolio website......"
              variant="glass"
              autoFocus
            />
          </div>
          {/*scrolling Marquee tags */}
          <div className="masked-marquee w-full mt-4 max-w-2xl overflow-hidden py-1 ">
            <div className="animate-marquee gap-3">
              {homeTags.map((tag, i) => (
                <button
                  key={i}
                  onClick={() => handleGenerate(tag)}
                  disabled={generatingProject}
                  className="px-4 py-1.4 border rounded-full text-sm text-zinc-900 bg-white/10 border-white/25 hover:bg-white/20 transition cursor-pointer shrink-0 font-medium"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/*ALL PROJECTS */}
          {!loadingProjects && projects.length > 0 && (
            <div className="mt-12 w-full">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <p className="text-xs font-medium uppercase text-zinc-900 tracking-widest">All Projects</p>
                <span className="text-xs text-zinc-900 font-normal">
                  {projects.length} {projects.length === 1 ? "project" : "projects"}
                </span>
              </div>

              <div className="space-y-2 max-h-[80vh] overflow-y-auto pr-1">
                {projects.map((p) => (
                  <div
                    key={p._id}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between group hover:border-white/20 hover:white/10 cursor-pointer backdrop-blur-md transition-all"
                    onClick={() => navigate(`/builder/${p._id}`)}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-zinc-900 truncate">{p.name}</p>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="text-xs text-zinc-700 flex items-center gap-1">
                          <ClockIcon size={10} />
                          {moment(p.updatedAt || p.createdAt).fromNow()}
                        </span>
                        <span className="text-xs text-zinc-700 font-medium">v{p.version}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(p._id);
                        }}
                        className="p-1.5 rounded-md text-zinc-700 hover:text-red-400 hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2Icon />
                      </button>
                      <ArrowRightIcon size={14} className="text-zinc-700 group-hover:text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
