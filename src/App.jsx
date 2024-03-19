import Sedans from "./components/Sedans"
import SUVs from "./components/SUVs"
import Luxury from "./components/Luxury"

export default function app() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 lg:flex justify-center items-center">
      <div className="lg:flex max-w-[920px]">
        <Sedans/>
        <SUVs/>
        <Luxury/>
      </div>
    </main>
  )
}