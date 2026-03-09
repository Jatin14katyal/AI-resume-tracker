import type { Route } from "./+types/home";
import Navbar from "~/Components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for oyur dream Job!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track your Applications & Resume Ratings!</h1>
          <h2>Review Your Submissions and check AI-powered feedback.</h2>
        </div>
      </section>
    </main>
  );
}
