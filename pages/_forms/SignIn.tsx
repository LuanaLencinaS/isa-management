import { useForm, SubmitHandler } from "react-hook-form";
import * as Tabs from "@radix-ui/react-tabs";
import * as Form from "@radix-ui/react-form";
import { login } from "@/api/service/LoginService";

interface AsideProps {
  onGoToClick: (path: string) => void;
}

interface IFormLogin {
  email: string;
  password: string;
}

export default function SignIn({ onGoToClick }: AsideProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>();

  const loginUser: SubmitHandler<IFormLogin> = async (data) => {
    const response = await login(data.email, data.password);

    if (response.status == 0) return alert("Login invalido");
    localStorage.setItem("token_authorizarion", response.data.token);
    onGoToClick("dashboard");
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
