"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, Eye, Box, Lock, ShieldCheck } from "lucide-react"

const technologies = [
  {
    title: "Process-Aware AI Engine",
    description: "Learns normal industrial behaviour and flags deviations.",
    icon: BrainCircuit,
    color: "text-pink-500"
  },
  {
    title: "Edge AI Anomaly Detection",
    description: "Runs locally to catch threats instantly.",
    icon: Eye,
    color: "text-blue-500"
  },
  {
    title: "Digital Twin Simulation",
    description: "Tests responses safely before applying them.",
    icon: Box,
    color: "text-purple-500"
  },
  {
    title: "Tamper-Proof Architecture",
    description: "Secure boot + blockchain logs.",
    icon: Lock,
    color: "text-yellow-500"
  },
  {
    title: "Zero Trust Layer",
    description: "Ensures SafeGrid itself cannot be compromised.",
    icon: ShieldCheck,
    color: "text-primary"
  }
]

export default function TechnologyPage() {
  return (
    <div className="container py-24 px-4 md:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Core Technologies</h1>
        <p className="text-xl text-muted-foreground">
          The advanced stack powering autonomous defense.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-colors">
              <CardHeader>
                <tech.icon className={`h-10 w-10 mb-4 ${tech.color}`} />
                <CardTitle>{tech.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {tech.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
