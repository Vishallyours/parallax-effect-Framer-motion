import ParallaxText from "./components/ParallaxText";

export default function Page() {
  return (
    <section className="flex flex-col ">
      <ParallaxText baseVelocity={-2}>Beyond Homes Beyond Homes</ParallaxText>
      <ParallaxText baseVelocity={2}>Vchat App Vchat App</ParallaxText>
      <ParallaxText baseVelocity={-2}>Autosub Autosub</ParallaxText>
      <ParallaxText baseVelocity={2}>E-buy E-buy</ParallaxText>
    </section>
  );
}
