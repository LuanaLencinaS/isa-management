import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: String;
  gender: GenderEnum;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  console.log("register", register);
  console.log("handleSubmit", handleSubmit);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("DEU SUBMIT");
    console.log("data", data);
  };

  return (
    <div>
      <h1>Registro Page</h1>
      <p>Learn more Register us!</p>

      <form>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <label>First Name</label>
        <input
          {...register("firstName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        {errors.firstName?.type === "required" && (
          <p role="alert">First name is required</p>
        )}

        <label>Gender Selection</label>
        <select {...register("gender")}>
          <option value="female">Feminino</option>
          <option value="male">Masculino</option>
          <option value="other">Outro</option>
        </select>

        {/* <input type="submit" /> */}
        <button onClick={handleSubmit(onSubmit)}>Enviar</button>
      </form>
    </div>
  );
}
