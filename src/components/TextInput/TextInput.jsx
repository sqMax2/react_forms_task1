import { useEffect, useId, useRef } from "react";
import "../../styles/TextInput.css";

/**
 * Text input component.
 *
 * @param {object} props - The props object containing:
 * label: string - The label text.
 * description: string - The description text.
 * error: string - The error text.
 * withAsterisk: boolean - Whether to display an asterisk after the label.
 * icon: string - The icon to display before the input.
 * variant: "filled" | "unstylled" | null - The variant of the input.
 * radius: "rsm" | "rmd" | "rlg" | "rxl" - The border radius of the input.
 * size: "xs" | "sm" | "md" | "lg" | "xl" - The size of the input.
 * isEmail: boolean - Whether the input is an email input.
 * ref: React.RefObject<HTMLInputElement> - The reference to the input element.
 * isPassword: boolean - Whether the input is a password input.
 * rest: any - The rest of the HTML input element props.
 * @return {JSX.Element} The rendered text input component.
 */
export function TextInput(props) {
  const id = useId();
  const blockRef = useRef(null);
  const inputRef = useRef(null);
  const {
    label,
    description,
    error,
    withAsterisk,
    icon,
    variant,
    radius,
    size,
    isEmail,
    ref,
    isPassword,
    ...rest
  } = props;

  useEffect(() => {
    if (ref) inputRef.current = ref.current;
  }, []);

  return (
    <div
      ref={blockRef}
      className={`text-input ${size ? size : ""} `}
      onClick={() => inputRef.current.focus()}
    >
      {label ? (
        <label htmlFor={id} data-withasterisk={withAsterisk}>
          {label}
        </label>
      ) : null}
      {description ? <p>{description}</p> : null}
      <div
        className={`input-wrapper ${variant ? variant : ""}`}
        style={radius ? { "--radius": `var(--${radius})` } : {}}
        {...(error ? { "error": "true" } : {})}
		
      >
        {icon?<span data-icon={icon} />:""}
        <input
          ref={inputRef}
          type={isEmail ? "email" : isPassword ? "password" : "text"}
          id={id}
          {...rest}
        />
      </div>
	  <p>{error}</p>
	  
    </div>
  );
}
