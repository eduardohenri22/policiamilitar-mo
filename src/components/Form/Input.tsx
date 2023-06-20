import { useForm, SubmitHandler } from "react-hook-form";
import { StyledForm } from "./styled";
import { useContext } from "react";
import { IUser, IUserProviders, UserContext } from "../../context";

export interface IForm {
  nome: string;
  patente: string;
}

const Input = () => {
  const { register, handleSubmit } = useForm();
  // const onSubmit = (data: any) => console.log(data);

  const { setNome }: IUser | any = useContext(UserContext);
  const submit: any = (FormData: any) => {
    console.log(FormData);
    setNome(FormData);
  };
  return (
    <StyledForm>
      <form onSubmit={handleSubmit(submit)}>
        <input placeholder="Nome..." {...register("nome")} />

        <select {...register("patente")}>
          <option value="subtenente">Sub Tenente</option>{" "}
          <option value="comandante">Comandante</option>{" "}
        </select>

        <button type="submit">Iniciar </button>
      </form>
    </StyledForm>
  );
};

export default Input;
