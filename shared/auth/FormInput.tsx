interface FormInput {
  htmlFor: string;
  label: string;
  id: string;
  inputName: string;
  inputType: string;
  autoComplete: string;
  placeholder: string;
}

const FormInput = ({
  htmlFor = "email",
  label = "email",
  id = "email",
  inputName = "email",
  inputType = "email",
  autoComplete = "email",
  placeholder = "you@example.com",
}: FormInput) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-zinc-700">
        {label}
      </label>
      <input
        id={id}
        name={inputName}
        type={inputType}
        required
        autoComplete={autoComplete}
        className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-zinc-300 focus:ring-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
