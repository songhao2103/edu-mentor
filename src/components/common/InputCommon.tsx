import { useMemo, useState } from "react";
import { FormikProps } from "formik";
import IFormRegister from "../../utils/interface/formRegister";

//interface props
interface InputCommonProps {
  type: string;
  iconSrc?: string;
  label?: string;
  placeholder: string;
  formik: FormikProps<IFormRegister>;
  name: string;
  id: string;
}

//Conponent
const InputCommon: React.FC<InputCommonProps> = ({
  label,
  iconSrc,
  placeholder,
  formik,
  name,
  id,
  type,
}) => {
  //state
  const [showPassword, setShowPassword] = useState(false);

  const inputType = useMemo(() => {
    return type === "password" ? (showPassword ? "text" : "password") : type;
  }, [showPassword]);

  return (
    <div>
      {label && <label>{label}</label>}
      <div className="relative">
        {iconSrc && (
          <img
            src={iconSrc}
            className="absolute left-4 top-[50%] translate-y-[-50%]"
          ></img>
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          name={name}
          id={id}
          value={formik?.values[name]}
          onChange={formik?.handleChange} // <-- handleChange
          onBlur={formik?.handleBlur} // <-- handleBlur
          className="w-full py-2 border-[1px] border-strokeM rounded-[12px] outline-none pr-4"
          style={iconSrc ? { paddingLeft: "44px" } : { paddingLeft: "16px" }}
        />

        {type === "password" && (
          <div
            className="absolute right-4 top-[50%] translate-y-[-50%]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <i className="fa-regular fa-eye"></i>
            ) : (
              <i className="fa-regular fa-eye-slash"></i>
            )}
          </div>
        )}
      </div>
      {formik?.errors[name] && formik?.touched[name] && (
        <p className="mt-1 text-sm text-red-500">
          {formik?.errors[name] as string}
        </p>
      )}
    </div>
  );
};

export default InputCommon;
