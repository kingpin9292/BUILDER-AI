import React from "react";
import Loading from "../components/Loading";
import BuilderHeader from "../components/BuilderHeader";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";

const Builder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [leftTab, setLeftTab] = useState("chat");
  const [publishing, setPublishing] = useState(false);
  const [publishUrl, setPublishUrl] = useState(null);

  const { activeProject, loadingActiveProject, activeFile, setActiveFile, showCode, setShowCode, loadProject, logout } =
    useAppContext();

  useEffect(() => {
    if (!id) return;
    loadProject(id);
  }, [id]);

  useEffect(() => {
    if (!id || !activeProject) return;
    if (activeProject.status === "pending" || activeProject.status === "generating") {
      const interval = setInterval(() => {
        loadProject(id, true);
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [id, loadProject, activeProject]);

  if (loadingActiveProject || !activeProject) {
    return <Loading />;
  }
  const handleOpenPreview = () => {
    if (!activeProject) return;
    return window.open(`/preview/${id}`, "_blank");
  };

  const handlePublish = async () => {};

  const handleDownload = () => {};

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden text-zinc-900 relative">
      {/*Top Bar Header */}
      <BuilderHeader
        projectName={activeProject.name}
        version={activeProject.version}
        showCode={showCode}
        publishing={publishing}
        onToggleShowCode={() => setShowCode(!showCode)}
        onOpenPreview={handleOpenPreview}
        onPublish={handlePublish}
        onDownload={handleDownload}
        onBack={() => navigate("/")}
        onLogout={logout}
      />
    </div>
  );
};
export default Builder;
