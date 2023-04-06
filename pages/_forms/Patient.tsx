import { useForm, SubmitHandler } from "react-hook-form";
import * as Form from "@radix-ui/react-form";

import { IFormUserPatient } from "@/utils/IFormUserPatient";

export default function Patient() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormUserPatient>();

  const setUser: SubmitHandler<IFormUserPatient> = (data) => {
    console.log("DEU SUBMIT");
    console.log("data", data);
  };

  return (
    <Form.Root className="FormRoot grid grid-cols-1 gap-4">
      <Form.Field className="FormField" name="name">
        <Form.Label className="FormLabel">Nome</Form.Label>

        {errors.name?.type === "required" && (
          <Form.Message className="FormMessage">
            Nome é obrigatório
          </Form.Message>
        )}
        <Form.Control asChild>
          <input
            className="Input"
            type="text"
            {...register("name", {
              required: true,
            })}
          />
        </Form.Control>
      </Form.Field>

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
              <option value="F">Feminino</option>
              <option value="M">Masculino</option>
              <option value="O">Outro</option>
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
