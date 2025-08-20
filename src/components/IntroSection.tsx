export default function IntroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className='container'>
        <h1>
          <span> Hi, I'm</span>
          <span>
            {" "}
            Kaung Myat
          </span>
          <span>
            {" "}
            Kyaw
          </span>
        </h1>
        <p>
          I create stellar web experiences with modern technologies.
          Specializing in front-end development, I build interfaces that are
          both beautiful and functional.
        </p>
        <div className="pt-4 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}
