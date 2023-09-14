import { useContext } from "react"
import AppContext from "../../context/context"

export default function Index() {
  const states = useContext(AppContext);
  const { darkTheme } = states;
  return (
    <main className={`bg ${darkTheme ? 'bg-dark' : ''}`}>

      <section className="ps-md-5 py-3 text-center text-md-start z-5">
        <div className="head-quote text-center p-5 shadow">
          <h1 className="display-3 mb-0">सर्वस्य लोचनं शास्त्रं</h1>
          <p className="mt-1 fs-5">Science is the only eye</p>
        </div>
      </section>

    </main>
    
  )
}
