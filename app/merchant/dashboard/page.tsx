"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Package, 
  DollarSign, 
  TrendingUp, 
  Settings, 
  Bell, 
  LogOut, 
  Menu, 
  BarChart3, 
  PieChart, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Truck, 
  Users,
  Building2
} from "lucide-react"
import Link from "next/link"

// Mock data for merchant metrics
const mockMetrics = {
  totalRevenue: 125000,
  totalPackages: 15420,
  activeShipments: 3420,
  deliveryRate: 98.5,
  customerSatisfaction: 4.8,
  monthlyRevenue: 12500,
  avgOrderValue: 100,
  uniqueCustomers: 3420,
}

export default function MerchantDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">TechCorp Solutions</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Merchant
            </Badge>
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => window.location.href = '/login'}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex h-screen">
        {/* Sidebar */}
        <aside
          className={`bg-white border-r border-gray-200 w-64 fixed inset-y-0 left-0 z-30 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-200 ease-in-out lg:h-screen`}
        >
          <nav className="mt-16 lg:mt-0 p-4 space-y-2 h-full">
            <Link
              href="/merchant/dashboard"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg"
            >
              <BarChart3 className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/merchant/packages"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              <Package className="h-5 w-5" />
              Packages
            </Link>
            <Link
              href="/merchant/customers"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              <Users className="h-5 w-5" />
              Customers
            </Link>
            <Link
              href="/merchant/analytics"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              <PieChart className="h-5 w-5" />
              Analytics
            </Link>
            <Link
              href="/merchant/settings"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0 p-6 overflow-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Merchant Dashboard</h1>
            <p className="text-gray-600">Monitor and manage your fulfillment operations.</p>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="packages">Packages</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${mockMetrics.totalRevenue.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">+15% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Packages</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockMetrics.totalPackages.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">+8% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Shipments</CardTitle>
                    <Truck className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockMetrics.activeShipments.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">Real-time tracking</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Unique Customers</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockMetrics.uniqueCustomers.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">+12 new this week</p>
                  </CardContent>
                </Card>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Business Health</CardTitle>
                    <CardDescription>Key performance indicators</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Delivery Success Rate</span>
                      </div>
                      <span className="font-semibold">{mockMetrics.deliveryRate}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Customer Satisfaction</span>
                      </div>
                      <span className="font-semibold">{mockMetrics.customerSatisfaction}/5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Monthly Revenue</span>
                      </div>
                      <span className="font-semibold">${mockMetrics.monthlyRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm">Avg. Order Value</span>
                      </div>
                      <span className="font-semibold">${mockMetrics.avgOrderValue}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest package updates and notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Package delivered successfully</p>
                        <p className="text-xs text-gray-600">TRK123456789 delivered to Alice Johnson</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Truck className="h-4 w-4 text-blue-600 mt-1" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">New package in transit</p>
                        <p className="text-xs text-gray-600">TRK123456790 shipped to Bob Smith</p>
                        <p className="text-xs text-gray-500">4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Package className="h-4 w-4 text-yellow-600 mt-1" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Package received for processing</p>
                        <p className="text-xs text-gray-600">New order from Carol Davis</p>
                        <p className="text-xs text-gray-500">6 hours ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Packages Tab */}
            <TabsContent value="packages" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Package Overview</CardTitle>
                  <CardDescription>Quick summary of your package operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-600">15,420</div>
                      <div className="text-sm text-gray-600">Total Packages</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-yellow-600">1,234</div>
                      <div className="text-sm text-gray-600">Processing</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Truck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-600">3,421</div>
                      <div className="text-sm text-gray-600">In Transit</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">10,765</div>
                      <div className="text-sm text-gray-600">Delivered</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button asChild>
                      <Link href="/merchant/packages">View All Packages</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Trends</CardTitle>
                    <CardDescription>Monthly revenue performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center text-gray-500">
                      <BarChart3 className="h-16 w-16 mb-4" />
                      <p>Revenue chart would be displayed here</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Customer Growth</CardTitle>
                    <CardDescription>New customer acquisition over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center text-gray-500">
                      <TrendingUp className="h-16 w-16 mb-4" />
                      <p>Growth chart would be displayed here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
} 