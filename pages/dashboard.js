import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("authenticated");
    if (auth !== "true") {
      router.push("/");
    }

    const disableContextMenu = (e) => e.preventDefault();
    const disablePrintScreen = (e) => {
      if (e.key === "PrintScreen") {
        alert("Screenshots are disabled.");
        navigator.clipboard.writeText("Screenshot not allowed.");
      }
    };

    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("keydown", disablePrintScreen);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disablePrintScreen);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <header className="mb-6">
        <h1 className="text-xl font-bold text-center">📘 SHJ ACADEMY Course Viewer</h1>
      </header>
      <div className="space-y-6">
        <img src="/secure/page1.jpg" alt="Page 1" className="rounded shadow-lg mx-auto w-full max-w-3xl" />
        <img src="/secure/page2.jpg" alt="Page 2" className="rounded shadow-lg mx-auto w-full max-w-3xl" />
      </div>
    </div>
  );
}
