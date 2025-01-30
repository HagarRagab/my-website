import { useForm } from "react-hook-form";
import { Filter } from "bad-words";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import styles from "./Contact.module.css";
import Email from "../assets/icons/email.svg?react";
import Button from "../components/Button";
import Section from "../components/Section";
import ImageComponent from "../components/ImageComponent";
import { hashImgs } from "../hashImgs";

function Contact({ isDarkMood }) {
    const { src, mobSrc, alt, hash } =
        hashImgs.contact[isDarkMood ? "dark" : "light"];
    const {
        register,
        handleSubmit,
        formState: { errors, isLoading },
        setError,
        reset,
    } = useForm();

    const filter = new Filter();

    async function onSubmit(data) {
        const { name, email, message } = data;

        const urlPattern =
            /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/g;

        if (urlPattern.test(message) || filter.isProfane(message))
            setError("message", {
                type: "manual",
                message: "Your message contains forbidden content.",
            });
        else {
            toast.promise(
                async () => {
                    try {
                        const res = await emailjs.send(
                            import.meta.env.VITE_EMAILJS_SERVICE_ID,
                            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                            {
                                user_name: name,
                                user_email: email,
                                message: message,
                            },
                            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                        );

                        if (res.status !== 200)
                            throw new Error("Failed to send email");
                        reset();
                    } catch (error) {
                        console.log(error);
                        throw new Error(error.message);
                    }
                },
                {
                    loading: "Waiting...",
                    success: "Sent email successfully",
                    error: "Failed to send email",
                }
            );
        }
    }

    return (
        <Section id="contact" className={styles.contact}>
            <header>
                <h2>
                    Get In <span>Touch</span>
                </h2>
                <p>We are here for you. How can we help?</p>
            </header>
            <main>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div data-msg={errors?.name?.message}>
                            <input
                                type="text"
                                placeholder="Your name"
                                aria-label="Enter your name"
                                autoComplete="off"
                                disabled={isLoading}
                                {...register("name", {
                                    required: "This field is required",
                                    validate: (value) =>
                                        value.trim().length >= 3 ||
                                        "Please add a valid name",
                                })}
                            />
                        </div>
                        <div data-msg={errors?.email?.message}>
                            <input
                                type="text"
                                placeholder="Your email"
                                aria-label="Enter your email"
                                autoComplete="off"
                                disabled={isLoading}
                                {...register("email", {
                                    required: "This field is required",
                                    pattern:
                                        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                                })}
                            />
                        </div>
                        <div data-msg={errors?.message?.message}>
                            <textarea
                                placeholder="Go ahead we are listening..."
                                aria-label="Go ahead we are listening add your message"
                                autoComplete="off"
                                disabled={isLoading}
                                {...register("message", {
                                    required: "This field is required",
                                    validate: (value) =>
                                        value.trim().length >= 20 ||
                                        "At least 20 characters",
                                })}
                            />
                        </div>
                        <Button style="filled" disabled={isLoading}>
                            Submit
                        </Button>
                    </form>
                    <div className={styles.email}>
                        <Email />
                        <p>hagar.ragab.saad@outlook.com</p>
                    </div>
                </div>
                <figure>
                    <ImageComponent
                        src={src}
                        mobSrc={mobSrc}
                        alt={alt}
                        hash={hash}
                    />
                </figure>
            </main>
        </Section>
    );
}

export default Contact;
