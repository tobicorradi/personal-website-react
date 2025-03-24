import { Experience, Hero } from "@/sections";
import { Navbar } from "@components";

export const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
      </main>
    </>
  );
};
