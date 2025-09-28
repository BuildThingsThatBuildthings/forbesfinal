import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function SimpleHomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Forbes Integrative Medicine
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Medical Acupuncture in Phoenix, AZ
            </p>
            <div className="space-y-4">
              <p>Testing navigation links:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <a href="/medical-acupuncture" className="p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                  Medical Acupuncture
                </a>
                <a href="/conditions" className="p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                  Conditions
                </a>
                <a href="/about" className="p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                  About Dr. Forbes
                </a>
                <a href="/new-patients" className="p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                  New Patients
                </a>
                <a href="/faq" className="p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                  FAQ
                </a>
                <a href="/contact" className="p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}