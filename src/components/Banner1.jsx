import "./Banner1.css";
import Foto from "../assets/Foto.png";
const Banner1 = () => {
  return (
    <div>
      <ul className="banner1">
        <li className="w-1/2">
          <img className="p-2" src={Foto} />
        </li>
        <li className="w-1/2 p-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum deserunt, quidem consequatur corporis debitis asperiores fugiat. Cupiditate esse quo reiciendis incidunt expedita debitis veritatis voluptatibus ex quaerat dicta
            vitae distinctio cum ratione sunt maxime soluta, nulla accusamus fugiat impedit dolore doloribus facilis? Dolore laborum suscipit rerum dolorum assumenda!\
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Banner1;
