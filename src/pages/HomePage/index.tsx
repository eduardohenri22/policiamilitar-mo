import { useContext } from "react";
import { IUser, UserContext } from "../../context";

// const { nome }: IUser | any = useContext(UserContext);

// console.log(nome);
// if (!nome) {
//   console.log(nome);
// }
const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      {/* <p>aqui {nome}</p> */}
    </div>
  );
};

export default HomePage;
