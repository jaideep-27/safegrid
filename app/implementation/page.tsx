"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Database, Brain, ShieldCheck } from "lucide-react"

export default function ImplementationPage() {
  return (
    <div className="container py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Implementation Phases</h1>
        <p className="text-xl text-muted-foreground">
          A structured approach to deploying autonomous defense.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="phase-1" className="border border-border rounded-lg px-4 bg-card/30">
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-4 text-left">
                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Phase 1: Data Collection & Baseline Modelling</h3>
                  <p className="text-sm text-muted-foreground font-normal mt-1">Understanding the normal operational state.</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6 pl-[3.5rem]">
              <ul className="list-disc space-y-2 pl-4">
                <li>Deployment of passive monitoring sensors.</li>
                <li>Collection of historical operational data (logs, network traffic, sensor readings).</li>
                <li>Establishment of baseline performance metrics.</li>
                <li>Initial vulnerability assessment of legacy controllers.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="phase-2" className="border border-border rounded-lg px-4 bg-card/30">
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-4 text-left">
                <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Phase 2: AI Model Development & Simulation</h3>
                  <p className="text-sm text-muted-foreground font-normal mt-1">Training the brain and testing safely.</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6 pl-[3.5rem]">
              <ul className="list-disc space-y-2 pl-4">
                <li>Training of Process-Aware AI models on collected data.</li>
                <li>Creation of Digital Twin environment for the specific infrastructure.</li>
                <li>Simulation of various attack vectors (ransomware, spoofing, DoS).</li>
                <li>Validation of AI response strategies within the simulation.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="phase-3" className="border border-border rounded-lg px-4 bg-card/30">
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-4 text-left">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Phase 3: Edge Deployment & Compliance</h3>
                  <p className="text-sm text-muted-foreground font-normal mt-1">Going live with safety guarantees.</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6 pl-[3.5rem]">
              <ul className="list-disc space-y-2 pl-4">
                <li>Deployment of Edge AI nodes to the physical infrastructure.</li>
                <li>Integration with existing safety instrumented systems (SIS).</li>
                <li>Compliance testing against IEC 62443 and NIST 800-82 standards.</li>
                <li>Final acceptance testing and handover.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  )
}
