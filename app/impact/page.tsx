"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Lock, Eye, Globe } from "lucide-react"

const outcomes = [
  {
    title: "Zero-Downtime Defense",
    value: "100%",
    description: "Continuous operation even during active threat mitigation.",
    icon: Zap,
    color: "text-yellow-500"
  },
  {
    title: "Legacy Protection",
    value: "Full",
    description: "Complete coverage for infrastructure running on 1970s+ controllers.",
    icon: Shield,
    color: "text-primary"
  },
  {
    title: "Automated Response",
    value: "<10ms",
    description: "Safety-compliant reactions faster than humanly possible.",
    icon: Lock,
    color: "text-blue-500"
  },
  {
    title: "System Visibility",
    value: "Deep",
    description: "Granular insight into OT network traffic and process states.",
    icon: Eye,
    color: "text-purple-500"
  },
  {
    title: "Cyber Resilience",
    value: "High",
    description: "Stronger national security posture against state-level actors.",
    icon: Globe,
    color: "text-green-500"
  }
]

export default function ImpactPage() {
  return (
    <div className="container py-24 px-4 md:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Expected Outcomes</h1>
        <p className="text-xl text-muted-foreground">
          Measurable improvements in safety and security.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {outcomes.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-border p-8 rounded-2xl flex flex-col items-center text-center hover:border-primary/50 transition-all hover:shadow-[0_0_30px_-10px_rgba(0,255,65,0.2)]"
          >
            <div className={`p-4 rounded-full bg-background border border-border mb-6 ${item.color}`}>
              <item.icon className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold mb-2">{item.value}</h3>
            <h4 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h4>
            <p className="text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
