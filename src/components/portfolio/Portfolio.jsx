import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./portfolio.scss";
import { featuredPortfolio } from "../../data";
import ShowModle from "../modle/ShowModle";

export default function Portfolio() {
  const [modalOpened, setModalOpened] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setCurrentItem(item);
    setModalOpened(true);
    navigate(item?.git);
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        {featuredPortfolio?.map((d) => (
          <div className="item" key={d?.id} onClick={() => handleItemClick(d)}>
            {console.log(d)}
            <img src={d?.img} alt="" />
            <h3>{d?.title}</h3>
          </div>
        ))}
      </div>
      {currentItem && (
        <ShowModle
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          d={currentItem}
        />
      )}
    </div>
  );
}
