import SocialMediaIcons from "./SocailMedaiIcons"

const Contact = () => {
  return (
    <>
     <section id="contactus" className="relative bg-[#0d0f10] text-white py-10 px-4 md:px-24 overflow-hidden">
      {/* Background Text */}
      <h1 className="absolute top-1 left-8 md:left-16 text-[55px] sm:text-[150px] font-extrabold text-white/5 uppercase tracking-widest select-none">
        CONTACT
      </h1>
      
      {/* Section Heading */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10 md:mb-18">
        <div>
          <p className="text-green-500 font-semibold uppercase text-sm md:text-base">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-[#bfa5ff] leading-tight">
            LET’S BUILD SOMETHING <span className="text-green-500">AMAZING</span>
          </h2>
        </div>
      
        <div className="md:w-[50%] text-[#bfa5ff] leading-relaxed border-l-4 border-green-500 pl-4">
          I’d love to hear from you! Whether you’re planning a project, looking for a
          developer to collaborate with, or just want to connect — feel free to reach
          out. Let’s turn your ideas into a fully functional, modern digital product.
        </div>
      </div>
      <div className="text-center flex justify-center pt-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-green-400">Give us a call</h1>
        <div className="text-4xl sm:text-5xl font-bold text-[#BFA5FF]">
          <a href="tel:+916376228917">+91 6376228917</a>
        </div>
        <div className="mt-6">
          <div>
          <a className="text-[#BFA5FF]">maheshkumar006376@gmail.com</a>
        </div>
        <div className="text-[#BFA5FF]">
          Noida, Sector 15, Delhi-NCR
        </div>
        </div>
        <div className="flex justify-center mt-6">
          <SocialMediaIcons/>
        </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default Contact