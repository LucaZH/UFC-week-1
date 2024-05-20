import ButtonProps from "../../types/Button";

export function Btn({ active, text }: ButtonProps) {
  return (
    <button
      className={`rounded-3xl ${
        active
          ? "bg-transparent border border-white hover:bg-white hover:text-black"
          : "bg-white border"
      } text-black w-28 h-11 text-center hover:bg-transparent hover:text-white hover:scale-110 transition-all`}
    >
      {text}
    </button>
  );
}
export default Btn;
