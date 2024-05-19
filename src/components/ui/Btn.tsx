import ButtonProps from "../../types/Button";

export function Btn({ active, text }: ButtonProps) {
  return (
    <button
      className={`rounded-3xl ${
        active ? "bg-transparent border border-white" : "bg-white border"
      } text-black w-28 h-11 text-center`}
    >
      {text}
    </button>
  );
}
export default Btn;
