import "./NewsSidebar.css";

const NewsSidebar = () => {
  return (
    <aside className="news-sidebar">
      <h2>New</h2>

      <div className="news-sidebar__article news-sidebar__article--first">
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>

      <div className="news-sidebar__article news-sidebar__article--middle">
        <h3>The Downsides of AI Artistry</h3>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>

      <div className="news-sidebar__article news-sidebar__article--last">
        <h3>Is VC Funding Dying Up?</h3>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </aside>
  );
};

export default NewsSidebar;
