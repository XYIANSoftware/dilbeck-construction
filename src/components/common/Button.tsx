import { Button as PrimeButton, ButtonProps } from "primereact/button";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

/**
 * Reusable Button component using PrimeReact and Tailwind
 * @param props - PrimeReact ButtonProps
 */
export function Button(props: ButtonProps) {
  return (
    <PrimeButton
      {...props}
      className={`px-4 py-2 font-semibold rounded shadow-md transition-all duration-200 hover:scale-105 ${
        props.className || ""
      }`}
    />
  );
}
