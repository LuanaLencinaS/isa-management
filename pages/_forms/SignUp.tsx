import { useForm, SubmitHandler } from "react-hook-form";
import * as Tabs from "@radix-ui/react-tabs";
import * as Form from "@radix-ui/react-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormRegister {
  firstName: String;
  lastName: String;
  gender: GenderEnum;
  birthdate: String;
  companyRegistry: String;
  tradeName: String;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>();

  const createUser: SubmitHandler<IFormRegister> = (data) => {
    console.log("DEU SUBMIT");
    console.log("data", data);
  };

  return (
    <Tabs.Content className="TabsContent" value="sign-up">
      <p className="Text">Registre-se como um Gestor na plataforma.</p>

      <Form.Root className="FormRoot grid grid-cols-1 gap-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Field className="FormField" name="firstName">
            <Form.Label className="FormLabel">Nome</Form.Label>

            {errors.firstName?.type === "required" && (
              <Form.Message className="FormMessage">
                Informe o primeiro nome
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

        <Form.Field className="FormField" name="companyRegistry">
          <Form.Label className="FormLabel">CNPJ</Form.Label>

          {errors.companyRegistry?.type === "required" && (
            <Form.Message className="FormMessage">Informe o CNPJ</Form.Message>
          )}
          <Form.Control asChild>
            <input
              className="Input"
              type="text"
              {...register("companyRegistry", {
                required: true,
                maxLength: 11,
                pattern:
                  /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i,
              })}
            />
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild>
          <button
            className="Button w-full rounded-[50px]"
            onClick={handleSubmit(createUser)}
          >
            Registrar
          </button>
        </Form.Submit>
      </Form.Root>
    </Tabs.Content>
  );
}
