"use client"

import { motion } from "framer-motion"
import { Shield, Users, Target, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">About SafeGrid</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Protecting the backbone of modern society.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Our Purpose</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SafeGrid builds a non-intrusive defense layer that monitors industrial processes, detects cyber-physical attacks in milliseconds, and responds automatically without human intervention.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We bridge the gap between legacy operational technology (OT) and modern cybersecurity needs, ensuring that power plants, water facilities, and transport systems remain resilient against sophisticated threats.
            </p>
          </div>
          <div className="bg-card border border-border p-8 rounded-2xl shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/20 blur-3xl rounded-full"></div>
             <Shield className="h-16 w-16 text-primary mb-6" />
             <h3 className="text-2xl font-bold mb-4">Mission Critical Defense</h3>
             <ul className="space-y-3">
                <li className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Real-time threat neutralization</span>
                </li>
                <li className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Zero disruption to operations</span>
                </li>
                <li className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Autonomous decision making</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="py-12">
            <div className="bg-secondary/30 rounded-3xl p-12 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-6">The Team Vision</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    "Protecting national infrastructure that still runs on 1970s controllers."
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
                    <div className="p-4">
                        <Target className="h-8 w-8 text-primary mb-3" />
                        <h4 className="font-bold text-lg">Resilience</h4>
                        <p className="text-sm text-muted-foreground">Building systems that can withstand and recover from any attack.</p>
                    </div>
                    <div className="p-4">
                        <Target className="h-8 w-8 text-primary mb-3" />
                        <h4 className="font-bold text-lg">Autonomy</h4>
                        <p className="text-sm text-muted-foreground">Reducing reliance on slow human response times during crises.</p>
                    </div>
                    <div className="p-4">
                        <Target className="h-8 w-8 text-primary mb-3" />
                        <h4 className="font-bold text-lg">Legacy Support</h4>
                        <p className="text-sm text-muted-foreground">Securing the old without needing to replace it with the new.</p>
                    </div>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  )
}
