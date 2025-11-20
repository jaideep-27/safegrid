"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Shield, Zap, AlertTriangle } from "lucide-react"
import { useEffect, useState } from "react"

export default function DashboardDemo() {
  const [threats, setThreats] = useState(0)
  const [uptime, setUptime] = useState(99.9)
  const [responseTime, setResponseTime] = useState(8)
  const [protectedAssets, setProtectedAssets] = useState(0)

  useEffect(() => {
    // Animate counters
    const interval = setInterval(() => {
      setThreats(prev => (prev < 142 ? prev + 3 : 142))
      setProtectedAssets(prev => (prev < 24 ? prev + 1 : 24))
    }, 50)

    const uptimeInterval = setInterval(() => {
      setUptime(prev => {
        const change = (Math.random() - 0.5) * 0.02
        const newValue = prev + change
        return Math.max(99.7, Math.min(100, newValue))
      })
    }, 2000)

    const responseInterval = setInterval(() => {
      setResponseTime(prev => {
        const change = (Math.random() - 0.5) * 2
        const newValue = prev + change
        return Math.max(5, Math.min(15, newValue))
      })
    }, 1500)

    return () => {
      clearInterval(interval)
      clearInterval(uptimeInterval)
      clearInterval(responseInterval)
    }
  }, [])

  return (
    <div className="container py-24 px-4 md:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Live Dashboard Demo</h1>
        <p className="text-xl text-muted-foreground">
          Real-time monitoring and threat detection.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-primary/20 bg-black/60 backdrop-blur-sm hover:border-primary/50 transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Threats Blocked</CardTitle>
              <Shield className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{threats}</div>
              <p className="text-xs text-muted-foreground mt-1">Last 24 hours</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-primary/20 bg-black/60 backdrop-blur-sm hover:border-primary/50 transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">System Uptime</CardTitle>
              <Activity className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500">{uptime.toFixed(2)}%</div>
              <p className="text-xs text-muted-foreground mt-1">Zero downtime defense</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-primary/20 bg-black/60 backdrop-blur-sm hover:border-primary/50 transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Response Time</CardTitle>
              <Zap className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-500">{responseTime.toFixed(1)}ms</div>
              <p className="text-xs text-muted-foreground mt-1">Autonomous response</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-primary/20 bg-black/60 backdrop-blur-sm hover:border-primary/50 transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Protected Assets</CardTitle>
              <AlertTriangle className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-500">{protectedAssets}</div>
              <p className="text-xs text-muted-foreground mt-1">Critical nodes secured</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Recent Activity Log</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 font-mono text-sm">
              <ActivityLog />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

function ActivityLog() {
  const [logs, setLogs] = useState<string[]>([
    "[12:45:32] ✓ Anomaly detected on PLC-04 - Signal deviation 15%",
    "[12:45:33] ⚡ Digital twin validation started",
    "[12:45:34] ✓ Response validated - Isolating node",
    "[12:45:35] ✓ Threat neutralized - System restored",
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      const newLogs = [
        `[${new Date().toLocaleTimeString()}] ✓ Health check passed - All systems nominal`,
        `[${new Date().toLocaleTimeString()}] 🔍 Scanning network traffic...`,
        `[${new Date().toLocaleTimeString()}] ⚡ AI model updated - Baseline refreshed`,
      ]
      const randomLog = newLogs[Math.floor(Math.random() * newLogs.length)]
      
      setLogs(prev => [randomLog, ...prev.slice(0, 9)])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {logs.map((log, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-primary/80 hover:text-primary transition-colors"
        >
          {log}
        </motion.div>
      ))}
    </>
  )
}
