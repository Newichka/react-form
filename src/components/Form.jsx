import React from "react";
import { useForm } from "react-hook-form";
import "../index.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    // defaultValues:{
    //   'email': '1@mail.ru'
    // }
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Обратная связь</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter email"
          {...register("email", {
            required: "Поле не заполнено",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Неверный адрес",
            },
          })}
        ></input>
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <textarea
          placeholder="Enter comment: "
          {...register("comment", {
            required: "Поле не заполнено",
            // pattern: {
            //   value: /^[A-Z0-9._%+-]{}$/i,
            //   message: "Неверное сообщение",
            // },
          })}
        ></textarea>
        {errors.comment && <p style={{ color: "red" }}>{errors.comment.message}</p>}
        <button onClick={() =>  reset()}>Reset</button>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
