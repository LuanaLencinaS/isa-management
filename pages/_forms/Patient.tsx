import { useForm, SubmitHandler } from "react-hook-form";
import * as Form from "@radix-ui/react-form";

import { GenderEnum } from "@/utils/GenderEnum";
import { IFormUserPatient } from "@/utils/IFormUserPatient";
import { useEffect } from "react";

interface IPatientFormProps {
  defaultValues: IFormUserPatient;
  onSubmit: (data: IFormUserPatient) => void;
}

export default function Patient({
  defaultValues,
  onSubmit,
}: IPatientFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormUserPatient>({ defaultValues: defaultValues });

  const setUser: SubmitHandler<IFormUserPatient> = (data) => {
    console.log("DEU SUBMIT");
    console.log("data", data);
    onSubmit(data);
  };

  useEffect(() => {
    setValue("name", defaultValues.name);
    setValue("birthdate", defaultValues.birthdate);
    setValue("gender", defaultValues.gender);
    setValue("registeNumber", defaultValues.registeNumber);
    setValue("email", defaultValues.email);
  }, [defaultValues, setValue]);

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
            onChange={(e) => setValue("name", e.target.value)}
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
              onChange={(e) => setValue("birthdate", e.target.value)}
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
              onChange={(e) => setValue("gender", e.target.value)}
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
            onChange={(e) => setValue("registeNumber", e.target.value)}
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="email">
        <Form.Label className="FormLabel">E-mail</Form.Label>

        {errors.email?.type === "required" && (
          <Form.Message className="FormMessage">Informe o e-mail</Form.Message>
        )}
        <Form.Control asChild>
          <input
            className="Input"
            type="email"
            {...register("email", {
              required: true,
            })}
            onChange={(e) => setValue("email", e.target.value)}
          />
        </Form.Control>
      </Form.Field>

      {/* <Form.Field className="FormField" name="password">
        <Form.Label className="FormLabel">Senha</Form.Label>

        {errors.password?.type === "required" && (
          <Form.Message className="FormMessage">Insira a senha</Form.Message>
        )}
        <Form.Control asChild>
          <input
            className="Input"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
        </Form.Control>
      </Form.Field> */}

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
