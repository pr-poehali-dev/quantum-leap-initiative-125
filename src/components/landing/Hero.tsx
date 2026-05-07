import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import AnimatedButton from "./AnimatedButton"
import CountingStats from "./CountingStats"
import { cn } from "@/lib/utils"

const screens = [
  {
    title: "ArenaLab Dashboard",
    color: "from-blue-900/80 to-blue-800/60",
    accent: "#3b82f6",
    lines: [
      { w: "70%", color: "bg-blue-400" },
      { w: "50%", color: "bg-gray-600" },
      { w: "85%", color: "bg-gray-600" },
      { w: "40%", color: "bg-purple-400" },
    ],
    bars: [40, 65, 50, 80, 55, 90],
  },
  {
    title: "Mobile App · iOS",
    color: "from-purple-900/80 to-purple-800/60",
    accent: "#a855f7",
    lines: [
      { w: "60%", color: "bg-purple-400" },
      { w: "80%", color: "bg-gray-600" },
      { w: "45%", color: "bg-gray-600" },
      { w: "70%", color: "bg-pink-400" },
    ],
    bars: [70, 45, 85, 60, 75, 50],
  },
  {
    title: "AI Assistant · Chat",
    color: "from-green-900/80 to-green-800/60",
    accent: "#22c55e",
    lines: [
      { w: "90%", color: "bg-green-400" },
      { w: "55%", color: "bg-gray-600" },
      { w: "75%", color: "bg-gray-600" },
      { w: "60%", color: "bg-cyan-400" },
    ],
    bars: [55, 80, 65, 90, 45, 70],
  },
]

function LaptopCard({ screen, index }: { screen: typeof screens[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: index === 1 ? 0 : index === 0 ? -6 : 6 }}
      animate={{ opacity: 1, y: 0, rotate: index === 1 ? 0 : index === 0 ? -6 : 6 }}
      transition={{ duration: 1, delay: 0.3 + index * 0.2, ease: "easeOut" }}
      style={{ zIndex: index === 1 ? 10 : 5 }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, index % 2 === 0 ? -12 : -8, 0] }}
        transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
        className="relative"
      >
        {/* Laptop body */}
        <div className={`relative rounded-xl overflow-hidden border border-white/10 shadow-2xl ${index === 1 ? "w-72 h-44" : "w-56 h-36"}`}
          style={{ boxShadow: `0 0 40px ${screen.accent}33, 0 20px 60px rgba(0,0,0,0.5)` }}
        >
          {/* Screen */}
          <div className={`w-full h-full bg-gradient-to-br ${screen.color} p-3`}>
            {/* Titlebar */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
              <div className="text-xs text-white/50 font-mono">{screen.title}</div>
            </div>
            {/* Code lines */}
            <div className="space-y-1 mb-2">
              {screen.lines.map((line, i) => (
                <motion.div
                  key={i}
                  className={`h-1.5 rounded-full ${line.color} opacity-70`}
                  style={{ width: line.w }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + i * 0.1 }}
                />
              ))}
            </div>
            {/* Mini bar chart */}
            <div className="flex items-end space-x-1 h-8">
              {screen.bars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-sm opacity-80"
                  style={{ backgroundColor: screen.accent }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: [0, 1, 0.8, 1] }}
                  transition={{ duration: 1, delay: 1.2 + index * 0.2 + i * 0.08, repeat: Infinity, repeatDelay: 3 }}
                  custom={h}
                  whileInView={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Laptop base */}
        <div className="w-full h-2 bg-gray-700 rounded-b-lg mx-auto" style={{ transform: "perspective(200px) rotateX(20deg)" }} />
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const stats = [
    { value: 120, suffix: "+", label: "Реализованных проектов" },
    { value: 97, suffix: "%", label: "Довольных клиентов" },
    { value: 5, suffix: "+", label: "Лет на рынке" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 bg-gray-950">
        {/* Grid */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Glow blobs */}
        <motion.div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 5, repeat: Infinity }} />
        <motion.div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a855f7, transparent)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Infinity }} />
        {/* Floating laptops scene */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center">
          <div className="relative flex items-end justify-center gap-4">
            {screens.map((screen, i) => (
              <LaptopCard key={i} screen={screen} index={i} />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/30 rounded-full text-sm text-white font-medium backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span>IT-консалтинг нового поколения</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              >
                <span className="block text-white mb-2">IT-РЕШЕНИЯ</span>
                <span className="block text-white mb-2">ДЛЯ ВАШЕГО</span>
                <span
                  className={cn(
                    "block mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-pacifico",
                  )}
                  style={{
                    textShadow: "0 0 40px rgba(147, 51, 234, 0.5)",
                  }}
                >
                  Бизнеса
                </span>
                <span className="block text-gray-300">НА НОВОМ УРОВНЕ</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              >
                В ArenaLab мы создаём веб-сервисы, мобильные приложения и AI-ассистентов, которые автоматизируют процессы
                и помогают бизнесу расти быстрее. От идеи до готового продукта — под ключ.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-6 items-center justify-center lg:justify-start lg:items-start"
            >
              <a href="#get-started">
                <AnimatedButton variant="slim" className="bg-white text-black hover:bg-gray-100">
                  <span className="flex items-center">
                    Начать
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </AnimatedButton>
              </a>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Google Partner</p>
                    <p className="text-xs text-gray-400">Сертификат</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L3.09 8.26l1.42 1.42L12 4.16l7.49 5.52 1.42-1.42L12 2z" />
                      <path d="M12 6L6.5 10.5v7h3v-5h5v5h3v-7L12 6z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Skolkovo</p>
                    <p className="text-xs text-gray-400">Резидент</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">ISO 27001</p>
                    <p className="text-xs text-gray-400">Безопасность</p>
                  </div>
                </div>
              </div>

              {/* Stats moved below badges */}
              <CountingStats stats={stats} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}