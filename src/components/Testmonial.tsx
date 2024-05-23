import HText from "./ui/HText";
import TestmonialCad from "./ui/TestmonialCard";

function Testmonial() {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col text-center">
        <HText text="Testmonial" />
        <p>What people say</p>
      </div>
      <TestmonialCad />
    </section>
  );
}
export default Testmonial;
