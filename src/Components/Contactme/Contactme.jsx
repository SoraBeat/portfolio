import React from "react";
import AnimatedDiv from "../AnimatedDiv/AnimatedDiv";
import ReactQuill from "react-quill";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import "react-quill/dist/quill.snow.css";
import fotoPose from "../../Assets/Images/fotoPose2.png";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Contactme = () => {
  const validation = Yup.object().shape({
    firstName: Yup.string()
      .min(4, "Minimo 4 caracteres")
      .required("Campo requerido"),
    email: Yup.string().email("Email invalido").required("Campo requerido"),
    message: Yup.string(),
  });

  return (
    <AnimatedDiv>
      <div className="flex flex-col max-w-[1400px] lg:flex-row justify-center items-center w-11/12 md:w-8/12 lg:w-9/12 mx-auto overflow-hidden gap-5 xl:gap-20 -mt-5 lg:mt-5">
        <div className="w-full lg:w-7/12 mt-10 animate-in slide-in-from-left-full duration-300 overflow-hidden">
          <Formik
            initialValues={{
              firstName: "",
              email: "",
              message: "",
            }}
            onSubmit={(values, { resetForm }) => {
              const valuesToSend = {
                from_name: values.firstName,
                email: values.email,
                message: values.message,
              };
              emailjs
                .send(
                  "service_047wt3n",
                  "template_h4huprs",
                  valuesToSend,
                  "B3-SFPUyljhE-PD64"
                )
                .then((res) => {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Email enviado!",
                    text: "En breve me pondre en contacto! Muchas gracias!",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  resetForm();
                })
                .catch(() => {
                  Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Algo salio mal!",
                    text: "Error al enviar email, disculpe las molestias! :c",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                });
              console.log(values);
            }}
            validationSchema={validation}
          >
            {({ errors, touched }) => (
              <Form>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
                  Contactame
                </h1>
                <h2 className="text-white text-2xl font-bold mb-2">Nombre</h2>
                <Field
                  name="firstName"
                  type="text"
                  className="h-9 w-full rounded-md bg-backgroundDarkest p-2 text-white text-xl"
                />
                {errors.firstName && touched.firstName && (
                  <span className="text-darkGold font-bold mb-2">
                    {errors.firstName}
                  </span>
                )}
                <h2 className="text-white text-2xl font-bold mb-2">Email</h2>
                <Field
                  name="email"
                  type="text"
                  className="h-9 w-full rounded-md mb-3  bg-backgroundDarkest p-2 text-white text-xl"
                />
                {errors.email && touched.email && (
                  <span className="text-darkGold font-bold mb-2">
                    {errors.email}
                  </span>
                )}
                <h2 className="text-white text-2xl font-bold mb-2">Mensaje</h2>
                <Field name="message">
                  {({ field }) => (
                    <ReactQuill
                      theme="snow"
                      className="h-72 w-full rounded-md mb-5  bg-backgroundDarkest p-2 text-white text-xl"
                      value={field.value}
                      onChange={field.onChange(field.name)}
                    />
                  )}
                </Field>
                <button
                  type="submit"
                  className={`${
                    errors.firstName || errors.email
                      ? "bg-gray"
                      : "bg-gold hover:bg-darkGold"
                  } text-white font-bold text-3xl rounded-lg w-full xs:w-44 h-12`}
                >
                  Enviar
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="lg:w-1/2 lg:flex-col justify-center items-center">
          <img
            src={fotoPose}
            alt="foto lautaro"
            className="w-96 mx-auto hidden lg:block animate-in slide-in-from-bottom-full duration-300"
          />
          <div className="text-white flex flex-col justify-start items-start">
            <div className="flex mx-auto lg:mx-0">
              <a
                href="https://www.facebook.com/E.Lautaro.Roa/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook
                  size={40}
                  className="hover:scale-125 transition-all duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/lautaro-elian-roa-mazzola-b30247209/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin
                  size={40}
                  className="hover:scale-125 transition-all duration-300"
                />
              </a>
              <a href="mailto:lautaroa.lr@gmail.com">
                <SiGmail
                  size={40}
                  className="hover:scale-125 transition-all duration-300"
                />
              </a>
            </div>
            <p className="mt-2 text-lg text-center lg:text-left">
              +54 911-3280-7020
            </p>
            <p className="text-lg text-center lg:text-left">
              LautaRoa.lr@gmail.com
            </p>
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Contactme;
