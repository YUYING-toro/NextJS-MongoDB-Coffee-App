"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";
import Button from "@/components/common/Button";

const Content = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setValues({ email: "", password: "", confirmPassword: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! " + JSON.stringify(values));
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <img
        src="/images/banner-coffeeBean.png"
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm -z-10"
      />
      <form
        onSubmit={handleSubmit}
        className="bg-white/70 backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-md"
      >
        <Fieldset className="space-y-8">
          <Legend className="text-2xl text-neutral-900">Sign up</Legend>
          <Field>
            <Label className="text-neutral-900">Email</Label>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full"
              required
            />
          </Field>
          <Field>
            <Label className="text-neutral-900">Password</Label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full"
              required
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$"
              title="Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
            />
          </Field>
          <Field>
            <Label className="text-neutral-900"> Confirm Password</Label>
            <input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full"
              required
            />
          </Field>
          <Field>
            <Label className="text-neutral-900">Country</Label>
            <Select
              className="mt-1 block outline rounded-md border border-neutral-300 p-1"
              name="country"
            >
              <option className="text-neutral-300">Canada</option>
              <option className="text-neutral-300">Mexico</option>
              <option className="text-neutral-300">United States</option>
            </Select>
          </Field>
        </Fieldset>
        <div className="flex gap-4 mt-6">
          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-neutral-700"
          >
            Clear
          </button>
          <button
            type="submit"
            className="bg-zinc-600 text-white px-4 py-2 rounded hover:bg-neutral-700"
          >
            Send
          </button>
        </div>
      </form>
      <Button onClick={() => router.back()} className="mt-2">
        {"← Back"}
      </Button>
    </div>
  );
};
export default Content;
