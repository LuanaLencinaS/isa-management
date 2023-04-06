import { useForm, SubmitHandler } from "react-hook-form";
import * as Form from "@radix-ui/react-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormPatient {
  firstName: String;
  lastName: String;
  gender: GenderEnum;
  birthdate: String;
  registeNumber: String;
}

export default function Patient() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormPatient>();

  const setUser: SubmitHandler<IFormPatient> = (data) => {
    console.log("DEU SUBMIT");
    console.log("data", data);
  };

  return (
    <Form.Root className="FormRoot grid grid-cols-1 gap-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <Form.Field className="FormField" name="firstName">
          <Form.Label className="FormLabel">Nome</Form.Label>

          {errors.firstName?.type === "required" && (
            <Form.Message className="FormMessage">
              Primeiro nome é obrigatório
            </Form.Message>
          )}
          <Form.Control asChild>
            <input
              className="Input"
              type="text"
              {...register("firstName", {
                required: true,
              })}
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="lastName">
          <Form.Label className="FormLabel">Sobrenome</Form.Label>

          {errors.lastName?.type === "required" && (
            <Form.Message className="FormMessage">
              Informe seu sobrenome
            </Form.Message>
          )}
          <Form.Control asChild>
            <input
              className="Input"
              type="text"
              {...register("lastName", {
                required: true,
              })}
            />
          </Form.Control>
        </Form.Field>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <Form.Field className="FormField" name="birthdate">
          <Form.Label className="FormLabel">Data de nascimento</Form.Label>

          {errors.birthdate?.type === "required" && (
            <Form.Message className="FormMessage">
              Insira a data de nascimento
            </Form.Message>
          )}
          <Form.Control asChild>
            <input
              className="Input"
              type="date"
              {...register("birthdate", {
                required: true,
              })}
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="gender">
          <Form.Label className="FormLabel">Sexo</Form.Label>

          {errors.gender?.type === "required" && (
            <Form.Message className="FormMessage">Selecione</Form.Message>
          )}
          <Form.Control asChild>
            <select
              className="Input"
              id="gender"
              {...register("gender", {
                required: true,
              })}
            >
              <option value="">Selecione</option>
              <option value="female">Feminino</option>
              <option value="male">Masculino</option>
              <option value="other">Outro</option>
            </select>
          </Form.Control>
        </Form.Field>
      </div>

      <Form.Field className="FormField" name="registeNumber">
        <Form.Label className="FormLabel">Nº Carteirinha</Form.Label>

        {errors.registeNumber?.type === "required" && (
          <Form.Message className="FormMessage">
            Informe seu nº de carteirinha
          </Form.Message>
        )}
        <Form.Control asChild>
          <input
            className="Input"
            type="text"
            {...register("registeNumber", {
              required: true,
            })}
          />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <button
          className="Button w-full rounded-[50px]"
          onClick={handleSubmit(setUser)}
        >
          Salvar
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
