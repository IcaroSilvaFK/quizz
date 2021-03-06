import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { Form } from "@unform/web";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible, AiOutlineUser } from "react-icons/ai";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().min(5).required(),
  password: yup.string().min(5).required(),
});

import styles from "../styles/Home.module.scss";
import "react-toastify/dist/ReactToastify.css";
import { api } from "./api/hello";
import { Input } from "../components/InputComponent";
import { useLogin } from "../contexts/useLoginRegister";
export default function Home() {
  const { handleSetCookies } = useLogin();
  const router = useRouter();
  const formRef = useRef();
  const [inputType, setInputType] = useState("password");
  function handleTypeInputText() {
    setInputType("text");
  }
  function handleTypeInputPassword() {
    setInputType("password");
  }

  async function handleSubmit(user, { reset }) {
    schema.isValid(user).then((isValid) => {
      async function validateUser() {
        const response = await api.post("users/authenticate", user);
        handleSetCookies(response.data.token);
        if (response.status >= 400) {
          toast.error("Tivemos um erro verifque seu usuario ou senha");
        }
        if (response.data?.token) router.push("/home");
        reset();
      }
      if (isValid) validateUser();
      else toast.error("Por favor preencha os campos corretamente");
    });
  }

  return (
    <div className={styles.ContainerContent}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.ContainertForm}>
        <div className={styles.classNameTopSvgUSer}>
          <AiOutlineUser />
        </div>
        <h2>Login</h2>
        <main>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" type="text" placeholder="email" required />
            <div>
              <Input
                name="password"
                type={inputType}
                placeholder="password"
                required
                minLength="4"
              />
              {inputType === "password" ? (
                <AiFillEye onClick={handleTypeInputText} />
              ) : (
                <AiFillEyeInvisible onClick={handleTypeInputPassword} />
              )}
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </Form>
        </main>
      </div>
    </div>
  );
}
