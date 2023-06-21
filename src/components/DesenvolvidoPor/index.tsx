import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { StyleDesenvolvidoPor } from "./style";

const DesenvolvidoPor = () => {
  return (
    <StyleDesenvolvidoPor>
      <div className="divContainer">
        <p>Desenvolvido por</p>
        <div className="linkedin">
          <Link
            className="link"
            to="https://www.linkedin.com/in/eduardo-henrique22/"
            target="blank"
          >
            <BsLinkedin />
          </Link>
          <p>Eduardo Henrique</p>
        </div>
        <div className="linkedin">
          <Link
            className="link"
            to="https://www.linkedin.com/in/lucas-henrique-830777182/"
            target="blank"
          >
            <BsLinkedin />
          </Link>
          <p>Lucas Henrique</p>
        </div>
      </div>
    </StyleDesenvolvidoPor>
  );
};

export default DesenvolvidoPor;
