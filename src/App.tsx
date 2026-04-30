import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import NewsSidebar from "./components/NewsSidebar";
import retroPCs from "./assets/images/image-retro-pcs.jpg";
import laptops from "./assets/images/image-top-laptops.jpg";
import gaming from "./assets/images/image-gaming-growth.jpg";
import ArticleCard from "./components/ArticleCard";

const articles = [
  {
    number: "01",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    image: retroPCs,
  },
  {
    number: "02",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    image: laptops,
  },
  {
    number: "03",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    image: gaming,
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <section className="main__grid container">
          <Hero />
          <NewsSidebar />
        </section>

        <section className="articles container">
          {articles.map((article) => (
            <ArticleCard key={article.number} {...article} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
