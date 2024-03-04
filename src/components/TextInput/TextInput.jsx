import { useEffect, useId, useRef } from "react";
import "../../styles/TextInput.css";


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
          type={isEmail ? "email" : "text"}
          id={id}
          {...rest}
        />
      </div>
	  <p>{error}</p>
	  
    </div>
  );
}
