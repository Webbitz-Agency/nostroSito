import logo from '../assets/logos/background.webp'

export default function PageHeading({ title, accent, description }: { title: string; accent: string; description: string }) {
  return <section className="relative flex items-center justify-center px-4 pt-36 pb-12 md:pt-44 md:pb-16 text-center overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none" aria-hidden="true"><img src={logo} alt="" className="w-[90%] max-w-5xl blur-2xl" /></div>
    <div className="relative z-10 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight"><span className="bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">{title}</span>{' '}<span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 bg-clip-text text-transparent">{accent}</span></h1>
      <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">{description}</p>
    </div>
  </section>
}
