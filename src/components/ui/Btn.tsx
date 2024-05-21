import ButtonProps from "../../types/Button";

export function Btn({ active, text }: ButtonProps) {
  return (
    <button
      className={`rounded-3xl w-28 h-11 text-center border border-white text-black hover:scale-110 transition-all ${
        active
          ? "bg-transparent  hover:bg-white hover:text-black"
          : "bg-white hover:border-white hover:text-white hover:bg-transparent"
      }`}
    >
      {text}
    </button>
  );
}
export default Btn;
