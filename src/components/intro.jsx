export const Intro = ({ children }) => {
  return (
    <section className="flex-row flex items-center my-5 md:my-7">
      <h1 className="text-2xl md:text-4xl font-bold tracking-wide leading-tight md:pr-8">{children}</h1>
    </section>
  )
}
