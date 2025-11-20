"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ShieldAlert, Cpu, Activity, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden text-center px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 max-w-4xl space-y-6 relative"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Autonomous Cyber Defense for <br />
            <span className="text-primary neon-text glitch-effect">Critical Infrastructure.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            SafeGrid protects legacy industrial systems using real-time AI, anomaly detection, and autonomous response.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/technology">
              <Button size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                Explore Technology
              </Button>
            </Link>
            <Link href="/solution">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-12 px-8 border-primary/50 hover:bg-primary/10">
                View Solution
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Key Threats Section */}
      <section className="py-24 border-y border-primary/10">
        <div className="container px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl border border-primary/20 bg-black/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] group"
            >
              <ShieldAlert className="h-12 w-12 text-destructive mb-4 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-all" />
              <h3 className="text-xl font-bold mb-2 text-white">Legacy Vulnerabilities</h3>
              <p className="text-muted-foreground group-hover:text-gray-300 transition-colors">
                Outdated controllers (PLCs/SCADA) lack built-in security, making them easy targets for modern cyber attacks.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl border border-primary/20 bg-black/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] group"
            >
              <Activity className="h-12 w-12 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.5)] transition-all" />
              <h3 className="text-xl font-bold mb-2 text-white">Zero-Day Exploits</h3>
              <p className="text-muted-foreground group-hover:text-gray-300 transition-colors">
                Traditional firewalls cannot detect novel attack vectors or sophisticated state-sponsored malware.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl border border-primary/20 bg-black/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] group"
            >
              <Cpu className="h-12 w-12 text-blue-500 mb-4 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all" />
              <h3 className="text-xl font-bold mb-2 text-white">Operational Downtime</h3>
              <p className="text-muted-foreground group-hover:text-gray-300 transition-colors">
                Cyber attacks on infrastructure cause physical damage, power outages, and massive economic loss.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How SafeGrid Works Preview */}
      <section className="py-24">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How SafeGrid Works</h2>
            <p className="text-muted-foreground text-lg">Autonomous protection in three steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0" />

            {[
              { step: "01", title: "Monitor", desc: "Continuous ingestion of industrial signals." },
              { step: "02", title: "Detect", desc: "AI identifies anomalies in milliseconds." },
              { step: "03", title: "Respond", desc: "Autonomous isolation of compromised nodes." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center bg-black/80 p-6 border border-primary/20 rounded-xl hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.15)]"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mb-4 border border-primary/50 shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link href="/solution">
                <Button variant="link" className="text-primary text-lg group">
                    Learn more about our solution <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
