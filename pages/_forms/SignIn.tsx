import { useForm, SubmitHandler } from "react-hook-form";
import * as Tabs from "@radix-ui/react-tabs";
import * as Form from "@radix-ui/react-form";
import styledSign from "@/styles/Sign.module.css";

interface IFormLogin {
  email: String;
  password: String;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>();

  const loginUser: SubmitHandler<IFormLogin> = (data) => {
    console.log("DEU  LOGIN");
    console.log("data", data);
  };

  return (
    <Tabs.Content className="TabsContent" value="sign-in">
      <p className="Text">
        Faça login e comece a gerenciar seus pacientes, planos e colaboradores!
      </p>

      <Form.Root className="FormRoot grid grid-cols-1 gap-4">
        <Form.Field className="FormField" name="email">
          <Form.Label className="FormLabel">E-mail</Form.Label>

          {errors.email?.type === "required" && (
            <Form.Message className="FormMessage">
              Informe o e-mail
            </Form.Message>
          )}
          <Form.Control asChild>
            <input
              className="Input"
              type="email"
              {...register("email", {
                required: true,
              })}
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="password">
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
        </Form.Field>

        <Form.Submit asChild>
          <button
            className="Button w-full rounded-[50px]"
            onClick={handleSubmit(loginUser)}
          >
            Entrar
          </button>
        </Form.Submit>
      </Form.Root>
    </Tabs.Content>
  );
}
