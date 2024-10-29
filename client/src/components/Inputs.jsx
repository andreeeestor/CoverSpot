import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";

export function InputBase({ type, label, name, value, onChange }) {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <input
        type={type}
        name={name} // O nome é necessário para identificar o campo
        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        value={value}
        onChange={onChange} // O evento precisa ser corretamente passado
        required
      />
    </>
  );
}


export function InputPassword({ label, name, value, onChange }) {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible((prev) => !prev);
  }

  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <div className="relative">
        <input
          type={isVisible ? "text" : "password"}
          name={name} // Adicionando name
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          value={value}
          onChange={onChange} // Corrigindo onChange
          required
        />

        <div
          onClick={toggleVisibility}
          className="absolute right-3 bottom-2 cursor-pointer"
        >
          {isVisible ? <Eye size={22} /> : <EyeSlash size={22} />}
        </div>
      </div>
    </>
  );
}
