"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Menu,
  X,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Globe,
  MessageSquare,
  BarChart3,
  Users,
  CreditCard,
  Smartphone,
  Layers,
  ArrowRight,
} from "lucide-react"

export default function AppmakerLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const categories = [
    {
      title: "Authors & Publishers",
      description: "Share your words with the world — and earn from your creativity.",
      image: "/digital-publishing-platform.jpg",
    },
    {
      title: "Matrimonial Platforms",
      description: "Bring people together — create connections that last a lifetime.",
      image: "/matrimonial-app-interface.jpg",
    },
    {
      title: "Education & Tutoring",
      description: "Teach anywhere, reach anyone — your classroom, now limitless.",
      image: "/online-education-platform.png",
    },
    {
      title: "Job Postings",
      description: "Empower careers — help people find their next opportunity.",
      image: "/job-portal-interface.jpg",
    },
    {
      title: "Communities & Hobbies",
      description: "Turn passions into platforms — unite people around what they love.",
      image: "/community-app-interface.jpg",
    },
    {
      title: "Chat Apps",
      description: "Spark conversations — build your own chat or community app.",
      image: "/chat-application-interface.png",
    },
    {
      title: "Tracking Apps",
      description: "Stay in control — track teams, vehicles, or resources in real time.",
      image: "/tracking-app-dashboard.jpg",
    },
  ]

  const testimonials = [
    {
      name: "Techie Cony",
      role: "YouTuber",
      image: "/professional-headshot.png",
      quote:
        "Android apps කියන්නෙ අද වෙනකොට ගොඩක් පහසුවෙන් මුදල් උපයන්න පුලුවන් ක්‍රමයක් වුනත් මේ වගේ ඇප් එකක් හදාගන්න එක programming නොදන්න කෙනෙකුට ලොකු ප්‍රශ්නයක්. ඉතින් මම හිතනව විනාඩි 10ක් වගේ කෙටි කාලයකින් ඕනම කෙනෙකුට තමන්ගෙම ඇප් එකක් බොහොම පහසුවෙන් හදාගන්න අවස්තාව දෙන APPMAKER Platform එක මේකට බොහොම සාර්ථක විසදුමක් කියල",
    },
    {
      name: "Dilina Dakshila",
      role: "Founder – CEO",
      image: "/business-executive.png",
      quote:
        "Programming ගැන දන්නැති කෙනෙනුට උනත් ඔයාගෙ තියෙන idea එක ලොකු තැනකට ගෙනියන්න ලංකාවෙ අපිට හදන්න තියෙන හොඳම platform එක තමයි APPMAKER",
    },
    {
      name: "Anuradha Dissanayake",
      role: "YouTuber",
      image: "/content-creator-workspace.png",
      quote:
        "Programming ගැන දන්නැති කෙනෙනුට උනත් ඔයාගෙ තියෙන idea එක ලොකු තැනකට ගෙනියන්න ලංකාවෙ අපිට හදන්න තියෙන හොඳම platform එක තමයි APPMAKER",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % categories.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [categories.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % categories.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length)

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <img src="/appmaker-logo.jpg" alt="Appmaker" className="h-10" />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a
                href="#why-appmaker"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Why Appmaker
              </a>
              <a href="#resources" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Resources
              </a>
              <div className="relative group">
                <button className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Language
                </button>
              </div>
              <Button
                variant="outline"
                className="gradient-border hover:bg-primary/10 transition-all duration-300 bg-transparent"
              >
                Build an App
              </Button>
              <Button className="gradient-orange btn-glow btn-shimmer font-semibold">Sign In</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border/50 bg-card"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                  Home
                </a>
                <a
                  href="#why-appmaker"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Why Appmaker
                </a>
                <a href="#resources" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Resources
                </a>
                <Button variant="outline" className="gradient-border bg-transparent">
                  Build an App
                </Button>
                <Button className="gradient-orange btn-glow btn-shimmer font-semibold">Sign In</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-mesh opacity-50" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div style={{ opacity, scale }} className="space-y-8">
              <motion.h1
                className="text-5xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block">Your Idea...</span>
                <span className="block">Your Brand...</span>
                <span className="block text-gradient">Live In Minutes</span>
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Content creators, businesses, and professionals use Appmaker to build apps and websites without coding
                and monetise through carrier billing, credit cards, Google Pay, or ads.
              </motion.p>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <Check className="text-primary" size={20} />
                  <span className="text-foreground font-medium">No-code Builder</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-primary" size={20} />
                  <span className="text-foreground font-medium">Live in minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-primary" size={20} />
                  <span className="text-foreground font-medium">10,000+ apps launched</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button size="lg" className="gradient-orange btn-glow btn-shimmer text-lg px-8 py-6 font-bold">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <img src="/modern-app-interface-mockup.jpg" alt="App Preview" className="w-full rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Carousel Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Laptop Frame with Carousel */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img src="/laptop-frame-mockup.jpg" alt="Laptop Frame" className="w-full" />
                <div className="absolute top-[8%] left-[13%] right-[13%] bottom-[32%] overflow-hidden rounded-t-lg">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide}
                      src={categories[currentSlide].image}
                      alt={categories[currentSlide].title}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-4xl font-bold text-gradient mb-4">{categories[currentSlide].title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {categories[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="gradient-border hover:bg-primary/10 transition-all duration-300 bg-transparent"
                >
                  <ChevronLeft size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="gradient-border hover:bg-primary/10 transition-all duration-300 bg-transparent"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Powering Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center space-y-8"
          >
            <h2 className="text-6xl md:text-8xl font-bold">APPMAKER.LK</h2>
            <p className="text-3xl md:text-5xl text-muted-foreground">POWERING OVER</p>
            <p className="text-5xl md:text-7xl font-bold text-gradient">10,000 APPS...</p>
          </motion.div>
        </div>
      </section>

      {/* Monetisation Methods */}
      <section className="py-20 relative" id="why-appmaker">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 text-gradient"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            MONETISATION METHODS
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Smartphone className="w-12 h-12" />,
                title: "Carrier Billing",
                description: "Let users pay directly through their mobile operator simple and familiar.",
              },
              {
                icon: <CreditCard className="w-12 h-12" />,
                title: "Credit & Debit Cards",
                description: "Accept payments easily with built-in card support.",
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Google Pay & Apple Pay",
                description: "Enable one-tap digital wallet payments for faster checkout.",
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "Ad Sponsorships",
                description: "Run ads or partner promotions to monetise your audience.",
              },
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{method.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-lg text-muted-foreground mt-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            "No matter which model suits your vision, Appmaker makes getting paid simple and seamless."
          </motion.p>
        </div>
      </section>

      {/* E-Commerce Solutions */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 mb-16"
          >
            <h2 className="text-5xl font-bold text-gradient">E-Commerce Solutions</h2>
            <h3 className="text-3xl font-semibold">
              Ready to sell online? <span className="text-primary">We've got you covered</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              For businesses focused on online sales, Appmaker offers a dedicated e-commerce platform iBuy.lk, built to
              handle everything from product catalogs to payments and delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Globe className="w-16 h-16" />,
                title: "Seamless Online Storefronts",
                description: "Showcase your products with modern, mobile-first designs.",
              },
              {
                icon: <CreditCard className="w-16 h-16" />,
                title: "Card Payments",
                description: "Accept secure Visa and Mastercard payments directly through your store.",
              },
              {
                icon: <Layers className="w-16 h-16" />,
                title: "Inventory & Logistics",
                description: "Track stock, manage orders, and streamline deliveries.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 text-center group">
                  <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Button size="lg" className="gradient-orange btn-glow btn-shimmer text-lg px-8 py-6 font-bold">
              Explore E-Commerce Solutions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Corporate Solutions */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 mb-16"
          >
            <h2 className="text-5xl font-bold">Corporate, SME & Personal Solutions</h2>
            <h3 className="text-3xl font-semibold text-foreground">
              Empowering SMEs and Professionals with Integrated Digital Tools
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Appmaker enables you to establish a professional online presence and provides dedicated applications to
              help you manage customers and improve team collaboration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-16 h-16" />,
                title: "WEBSITES",
                description:
                  "Create a polished website in minutes — no coding required. Ideal for SMEs such as retail shops, salons, and restaurants, for service providers including lawyers, accountants, and consultants, and for personal brands such as designers, developers, photographers, and coaches.",
              },
              {
                icon: <Users className="w-16 h-16" />,
                title: "BASIC CRM",
                subtitle: "(SEPARATE APP)",
                description:
                  "A streamlined CRM template that allows you to capture leads, manage contacts, and track customer interactions — designed specifically with small and medium businesses in mind.",
              },
              {
                icon: <MessageSquare className="w-16 h-16" />,
                title: "MESSAGING",
                subtitle: "Secure Workplace (Separate App)",
                description:
                  "A dedicated team communication app that enables secure inter-organisation messaging. Keep teams aligned, share updates, and coordinate work in real time.",
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{solution.title}</h4>
                  {solution.subtitle && <p className="text-sm text-muted-foreground mb-4">{solution.subtitle}</p>}
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI App Builder */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 mb-16"
          >
            <h2 className="text-5xl font-bold text-gradient">AI App Builder Appmaker Spark</h2>
            <h3 className="text-3xl font-semibold">
              Your app. Your content. <span className="text-primary">Built by AI.</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              With Appmaker Spark, you don't start from scratch. Simply describe your idea, and Spark will generate both
              the app and the content inside it - ready to customize, brand, and publish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Sparkles className="w-16 h-16" />,
                title: "AI-Powered App Creation",
                description: "Go from idea to a functional app in minutes — no coding required.",
              },
              {
                icon: <Zap className="w-16 h-16" />,
                title: "AI-Generated Content",
                description:
                  "Spark doesn't just build the app — it also creates the content, pages, and flows tailored to your idea.",
              },
              {
                icon: <Layers className="w-16 h-16" />,
                title: "Customisable & Ready to Launch",
                description: "Edit and refine the AI output with our no-code tools, then publish instantly.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 text-center group">
                  <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Button size="lg" className="gradient-orange btn-glow btn-shimmer text-lg px-8 py-6 font-bold">
              Try Spark
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Drag & Drop Builder */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/drag-and-drop-builder-interface.jpg"
                alt="Drag & Drop Builder"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-5xl font-bold">
                Flexible
                <br />
                Drag & Drop
                <br />
                Builder
              </h2>
              <h3 className="text-3xl font-semibold text-foreground">Go Beyond Templates With Webedge.</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For users who want more freedom and flexibility, Webedge.biz offers a powerful drag-and-drop builder
                that lets you design and customise without limits.
              </p>

              <div className="space-y-6 pt-4">
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Drag-and-Drop Control</h4>
                  <p className="text-muted-foreground">
                    Use pre-built blocks or create your own to match your brand and workflow.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">No Templates Required</h4>
                  <p className="text-muted-foreground">
                    Start from a blank canvas and build unique experiences without being tied to presets.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Customisable Components</h4>
                  <p className="text-muted-foreground">
                    Use pre-built blocks or create your own to match your brand and workflow.
                  </p>
                </div>
              </div>

              <Button size="lg" className="gradient-orange btn-glow btn-shimmer text-lg px-8 py-6 font-bold mt-8">
                Explore Webedge.biz
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <h2 className="text-5xl font-bold text-gradient">How It Works</h2>

              <div className="space-y-8">
                {[
                  {
                    icon: <Layers className="w-12 h-12" />,
                    title: "SELECT",
                    description:
                      "Choose from a wide range of categories and templates to best suit your brand and need.",
                  },
                  {
                    icon: <Sparkles className="w-12 h-12" />,
                    title: "CUSTOMIZE",
                    description:
                      "Change the look and feel of your app/website, add content and policies….all are without any coding!",
                  },
                  {
                    icon: <Zap className="w-12 h-12" />,
                    title: "PUBLISH & GROW",
                    description:
                      "One final click to make your app/website available 24/7 on leading app stores and start measuring your growth.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex gap-6"
                  >
                    <div className="text-primary flex-shrink-0">{step.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/app-building-process-animation.jpg"
                alt="How It Works"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Testimonials
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 glass-effect border-border/50">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold mb-1">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-primary mb-4 font-medium">{testimonials[currentTestimonial].role}</p>
                      <p className="text-muted-foreground leading-relaxed">{testimonials[currentTestimonial].quote}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="gradient-border hover:bg-primary/10 transition-all duration-300 bg-transparent"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="gradient-border hover:bg-primary/10 transition-all duration-300 bg-transparent"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Up and Running */}
      <section className="py-20 relative" id="resources">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold text-primary mb-6">Get Up And Running Fast</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              APPMAKER offers the largest collection of diverse, customizable templates and presets to build your app—no
              coding required. Whether you're launching a business, portfolio, or eCommerce app, our ready-made designs
              help you get started quickly and tailor everything to match your brand perfectly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "📚",
                title: "Discover the latest insights, tips, and success stories.",
                description:
                  "Stay updated with our blogs to learn how to build powerful apps, grow your business, and make the most of no-code tools",
                buttonText: "Read Blogs",
              },
              {
                icon: "🎥",
                title: "Watch step-by-step tutorials on Appmaker.",
                description:
                  "Learn how to create, customize, and launch your own app—no coding needed. Perfect for beginners and pros alike",
                buttonText: "Watch Tutorials",
              },
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className="text-5xl mb-6">{resource.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{resource.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{resource.description}</p>
                  <Button className="gradient-orange btn-glow btn-shimmer w-full font-semibold">
                    {resource.buttonText}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 Support */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/customer-support-team.png" alt="24/7 Support" className="w-full rounded-2xl shadow-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-5xl font-bold text-primary">24*7 SUPPORT</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Think AppMaker as your IT department. Create a mobile application and get free unlimited hosting, an
                enterprise-grade infrastructure, personalized support from our team via,
              </p>
              <div className="flex flex-col sm:flex-flex-row gap-4">
                <Button size="lg" className="gradient-orange btn-glow btn-shimmer flex-1 font-semibold">
                  Live Chat
                </Button>
                <Button size="lg" variant="outline" className="gradient-border flex-1 font-semibold bg-transparent">
                  Email Request
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border/50 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6">GETTING STARTED</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">SOCIAL MEDIA</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">CONTACT US</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <Button type="submit" className="gradient-orange btn-glow btn-shimmer w-full font-semibold">
                  Submit
                </Button>
              </form>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border/50">
            <p className="text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                All Rights Reserved | Simato VAS Solutions (PVT) Ltd.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
