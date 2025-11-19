"use client"

import { motion } from "framer-motion"
import { Activity, AlertTriangle, CheckCircle, Server, ArrowDown } from "lucide-react"

const steps = [
  {
    title: "Continuous Monitoring",
    description: "Continuous monitoring of industrial signals from PLCs, sensors, and SCADA systems.",
    icon: Activity,
    color: "text-blue-500"
  },
  {
    title: "Anomaly Detection",
    description: "AI-based anomaly detection identifies deviations from normal operational baselines in real-time.",
    icon: AlertTriangle,
    color: "text-yellow-500"
  },
  {
    title: "Digital Twin Validation",
    description: "Proposed countermeasures are tested in a Digital Twin simulation to ensure safety before execution.",
    icon: Server,
    color: "text-purple-500"
  },
  {
    title: "Autonomous Response",
    description: "Safe response execution isolates threats and restores system integrity automatically.",
    icon: CheckCircle,
    color: "text-primary"
  }
]

export default function SolutionPage() {
  return (
    <div className="container py-24 px-4 md:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">How SafeGrid Works</h1>
        <p className="text-xl text-muted-foreground">
          From detection to response in milliseconds.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse md:text-left"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full -translate-x-1/2 mt-6 z-10" />

              <div className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors">
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center relative z-10 bg-background py-4">
            <div className="inline-flex items-center justify-center p-4 rounded-lg border border-primary/20 bg-primary/5">
                <span className="font-bold text-primary">Real-time alerts + Dashboard visualization</span>
            </div>
        </div>
      </div>
    </div>
  )
}
