"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function AddReview({
  slug,
  action,
}: {
  slug: string;
  action: () => Promise<void>;
}) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = handleSubmit((data) => {
    //jesli nie mozesz wyslac graphql do hygrapha z serwera
    //to wysylasz tu

    //i potem akcje z revalidacja
    action();
    // console.log("data", { ...data, slug });
    reset();
  });
  const methods = useForm();
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input {...register("name")} id="name" name="name" type="text" />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <textarea {...register("content")} id="content" name="content" />
          </div>
          <button disabled={isSubmitting || !isValid} type="submit">
            {isSubmitting ? "Adding..." : "Add"}
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
