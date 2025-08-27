import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, Clock, Shield, Users, BarChart3, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Package className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">PackageHub</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 right-10 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          >
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center transform rotate-12">
              <Package className="h-8 w-8 text-white/70" />
            </div>
          </div>
          <div
            className="absolute top-40 left-20 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          >
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center transform -rotate-12">
              <Package className="h-6 w-6 text-white/60" />
            </div>
          </div>
          <div
            className="absolute bottom-32 right-32 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "3.5s" }}
          >
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center transform rotate-45">
              <Package className="h-7 w-7 text-white/50" />
            </div>
          </div>
          <div
            className="absolute top-60 left-1/4 animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
          >
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center transform -rotate-6">
              <Package className="h-5 w-5 text-white/40" />
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-blue-100 text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Trusted by 500+ businesses nationwide
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance leading-tight">
              Scale Your Business with
              <span className="text-blue-200 block">Seamless Fulfillment</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-4xl mx-auto text-pretty leading-relaxed">
            Package Hub offers a convenient, reliable and central pickup location for small businesses. Drop off your
            packages & your customers are able to pickup at their convenience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto">
              <Link href="/signup" className="flex items-center gap-2">
                Start Free Trial
                <Package className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent text-lg px-8 py-4 h-auto"
            >
              <Link href="#services" className="flex items-center gap-2">
                See How It Works
                <Clock className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-200 text-sm uppercase tracking-wide">Order Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24hrs</div>
              <div className="text-blue-200 text-sm uppercase tracking-wide">Average Fulfillment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10M+</div>
              <div className="text-blue-200 text-sm uppercase tracking-wide">Packages Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Fulfillment Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to deliver exceptional customer experiences, from storage to doorstep.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Warehousing & Storage</CardTitle>
                <CardDescription>
                  Secure, climate-controlled facilities with real-time inventory management
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Order Fulfillment</CardTitle>
                <CardDescription>
                  Fast, accurate picking, packing, and shipping with same-day processing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Express Delivery</CardTitle>
                <CardDescription>Next-day and 2-day delivery options with real-time tracking</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Analytics & Reporting</CardTitle>
                <CardDescription>Comprehensive insights into your fulfillment performance and costs</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Returns Management</CardTitle>
                <CardDescription>Streamlined returns processing with quality inspection and restocking</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Customer Support</CardTitle>
                <CardDescription>Dedicated account management and 24/7 customer service support</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Simple, streamlined process to get your packages delivered efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">DROPOFF</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Drop off your packages at our location anytime during our opening hours.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">PICKUP</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Your customer is able to pickup at a convenient time that works best for them.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">GET PAID</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Your funds are transferred directly to your account on the next business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose PackageHub?</h2>
              <p className="text-lg text-gray-600 mb-8">
                With over a decade of experience in logistics and fulfillment, PackageHub has helped hundreds of
                businesses scale their operations efficiently and cost-effectively.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">99.9% Accuracy Rate</h3>
                    <p className="text-gray-600">
                      Industry-leading precision in order fulfillment and inventory management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Same-Day Processing</h3>
                    <p className="text-gray-600">Orders received by 2 PM are processed and shipped the same day.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dedicated Support</h3>
                    <p className="text-gray-600">
                      Personal account managers and 24/7 customer support for peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">60+</div>
                  <div className="text-gray-600">Active Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
                  <div className="text-gray-600">Packages Shipped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contact our team to discuss your fulfillment needs and get a custom quote.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Call Us</CardTitle>
                <CardDescription>Speak with our fulfillment experts</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold text-lg">1-800-PACKAGE</p>
                <p className="text-gray-600">Mon-Fri 8AM-8PM EST</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Email Us</CardTitle>
                <CardDescription>Get detailed information via email</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold text-lg">sales@packagehub.com</p>
                <p className="text-gray-600">Response within 2 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Visit Us</CardTitle>
                <CardDescription>Tour our fulfillment centers</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold text-lg">Multiple Locations</p>
                <p className="text-gray-600">Schedule a facility tour</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/signup">Start Your Free Trial Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">PackageHub</span>
            </div>
            <p className="text-gray-400">© 2024 PackageHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
