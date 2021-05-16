export const Intro = ({ headline }) => {
  return (
    <section className="flex flex-row items-center my-5 md:my-7">
      <h1 className="text-2xl font-bold leading-tight tracking-wide md:text-4xl md:pr-8">{headline}</h1>
    </section>
  )
}