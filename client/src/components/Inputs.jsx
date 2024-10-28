import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";

export function InputBase({ type, label, value, onChange }) {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <input
        type={type}
        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
}

export function InputPassword({label, value, onChange}) {

    const [eye, setEye] = useState(false)

    function handleEye() {
        if(eye) {
            setEye(false)
        } else {
            setEye(true)
        }
    }

  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <input
        type={eye ? "text" : "password"}
        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        value={value}
        onChange={onChange}
        required
      />
      
    <div onClick={handleEye} className="absolute right-3 bottom-2 cursor-pointer">
        {eye ? <Eye size={22} /> : <EyeSlash size={22} />}
    </div>

    </>
  );
}
