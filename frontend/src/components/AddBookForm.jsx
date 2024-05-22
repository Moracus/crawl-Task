/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const AddBookForm = ({ postFormData, defaultFormData }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    postFormData({ data });
  };

  useEffect(() => {
    reset({ ...defaultFormData });
  }, [defaultFormData, reset]);

  const minOffset = 0;
  const maxOffset = 60; // Change as needed
  const thisYear = new Date().getFullYear();

  const years = Array.from(
    new Array(maxOffset - minOffset + 1),
    (_, index) => thisYear - index
  );

  const formFields = [
    { name: "title", type: "text", label: "Title", placeholder: "Enter title" },
    {
      name: "author",
      type: "text",
      label: "Author",
      placeholder: "Enter author name",
    },
    {
      name: "genre",
      type: "text",
      label: "Genre",
      placeholder: "Enter genre name",
    },
  ];

  return (
    <div className="w-1/2 h-full flex flex-col ">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {formFields.map(({ name, type, label, placeholder }) => (
          <div key={name} className="mb-4">
            <label
              className="block text-gray-300 font-medium mb-2"
              htmlFor={name}
            >
              {label}
            </label>
            <input
              {...register(name, { required: `${label} is required` })}
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500 transition-all duration-300"
              id={name}
              type={type}
              placeholder={placeholder}
            />
            {errors[name] && (
              <p className="text-red-500 text-xs italic">
                {errors[name]?.message}
              </p>
            )}
          </div>
        ))}
        <div className="mb-4">
          <label
            htmlFor="yearPublished"
            className="block text-gray-300 font-medium mb-2"
          >
            year Published
          </label>
          <select
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500 transition-all duration-300"
            name="yearPublished"
            {...register("yearPublished", {
              required: "year published is required",
            })}
          >
            {years.map((year, index) => (
              <option key={`year${index}`} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
