"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Package, 
  Users, 
  TrendingUp, 
  Menu,
  Bell,
  Settings,
  LogOut,
  BarChart3,
  PieChart,
  Truck,
  CheckCircle,
  Clock,
  AlertTriangle
} from "lucide-react"
import Link from "next/link"

// Mock data for merchant details
const mockMerchant = {
  id: "MERCH-001",
  businessName: "TechCorp Solutions",
  founderName: "John Smith",
  email: "john@techcorp.com",
  phone: "(555) 123-4567",
  businessType: "Technology",
  clientCount: "101-500",
  monthlyOrders: 1250,
  totalValue: "$125,000",
  status: "active",
  joinedDate: "2024-01-15",
  totalRevenue: 125000,
  totalPackages: 15420,
  uniqueCustomers: 3420,
  address: "123 Tech Street, Silicon Valley, CA 94025",
  website: "www.techcorp.com",
  industry: "Software & Technology",
  employeeCount: "25-50",
  monthlyRevenue: 12500,
  avgOrderValue: 100,
  deliverySuccessRate: 98.5,
  customerSatisfaction: 4.8,
}

// Mock data for packages
const mockPackages = [
  {
    id: "PKG-001",
    trackingNumber: "TRK123456789",
    recipientName: "Alice Johnson",
    recipientEmail: "alice@email.com",
    recipientPhone: "(555) 111-2222",
    recipientAddress: "456 Customer Ave, New York, NY 10001",
    packageType: "Electronics",
    weight: "2.5 lbs",
    dimensions: "12x8x4 in",
    status: "delivered",
    deliveryDate: "2024-01-20",
    orderValue: 299.99,
    shippingCost: 15.99,
    totalValue: 315.98,
    notes: "Fragile - Handle with care",
  },
  {
    id: "PKG-002",
    trackingNumber: "TRK123456790",
    recipientName: "Bob Smith",
    recipientEmail: "bob@email.com",
    recipientPhone: "(555) 222-3333",
    recipientAddress: "789 Business Blvd, Chicago, IL 60601",
    packageType: "Software License",
    weight: "0.1 lbs",
    dimensions: "8x6x1 in",
    status: "in_transit",
    deliveryDate: null,
    orderValue: 199.99,
    shippingCost: 9.99,
    totalValue: 209.98,
    notes: "Digital product - Physical backup",
  },
  {
    id: "PKG-003",
    trackingNumber: "TRK123456791",
    recipientName: "Carol Davis",
    recipientEmail: "carol@email.com",
    recipientPhone: "(555) 333-4444",
    recipientAddress: "321 Enterprise St, Austin, TX 73301",
    packageType: "Hardware",
    weight: "5.2 lbs",
    dimensions: "16x12x8 in",
    status: "processing",
    deliveryDate: null,
    orderValue: 599.99,
    shippingCost: 25.99,
    totalValue: 625.98,
    notes: "Heavy equipment - Signature required",
  },
  {
    id: "PKG-004",
    trackingNumber: "TRK123456792",
    recipientName: "David Wilson",
    recipientEmail: "david@email.com",
    recipientPhone: "(555) 444-5555",
    recipientAddress: "654 Startup Lane, Seattle, WA 98101",
    packageType: "Accessories",
    weight: "1.8 lbs",
    dimensions: "10x6x3 in",
    status: "delivered",
    deliveryDate: "2024-01-18",
    orderValue: 89.99,
    shippingCost: 12.99,
    totalValue: 102.98,
    notes: "Standard shipping",
  },
  {
    id: "PKG-005",
    trackingNumber: "TRK123456793",
    recipientName: "Eva Brown",
    recipientEmail: "eva@email.com",
    recipientPhone: "(555) 555-6666",
    recipientAddress: "987 Innovation Dr, Boston, MA 02101",
    packageType: "Electronics",
    weight: "3.1 lbs",
    dimensions: "14x10x5 in",
    status: "delivered",
    deliveryDate: "2024-01-19",
    orderValue: 449.99,
    shippingCost: 18.99,
    totalValue: 468.98,
    notes: "Premium customer - Express shipping",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "bg-green-100 text-green-800"
    case "in_transit":
      return "bg-blue-100 text-blue-800"
    case "processing":
      return "bg-yellow-100 text-yellow-800"
    case "pending":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "delivered":
      return <CheckCircle className="h-4 w-4" />
    case "in_transit":
      return <Truck className="h-4 w-4" />
    case "processing":
      return <Clock className="h-4 w-4" />
    case "pending":
      return <AlertTriangle className="h-4 w-4" />
    default:
      return <Clock className="h-4 w-4" />
  }
}

export default function MerchantDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // In a real app, you'd fetch merchant data based on params.id
  const merchant = mockMerchant

  const deliveredPackages = mockPackages.filter(pkg => pkg.status === "delivered")
  const inTransitPackages = mockPackages.filter(pkg => pkg.status === "in_transit")
  const processingPackages = mockPackages.filter(pkg => pkg.status === "processing")

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
              <span className="text-xl font-bold text-gray-900">PackageHub Admin</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge className={merchant.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
              {merchant.status}
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
              href="/admin"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              <BarChart3 className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/admin/merchants"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg"
            >
              <Users className="h-5 w-5" />
              Merchants
            </Link>
            <Link
              href="/admin/packages"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              <Package className="h-5 w-5" />
              All Packages
            </Link>
            <Link
              href="/admin/analytics"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              <PieChart className="h-5 w-5" />
              Analytics
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0 p-6 overflow-auto">
          {/* Merchant Info Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{merchant.businessName}</h1>
                <p className="text-lg text-gray-600 mb-4">{merchant.founderName} • {merchant.businessType}</p>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{merchant.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{merchant.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{merchant.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {new Date(merchant.joinedDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${merchant.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Packages</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{merchant.totalPackages.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unique Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{merchant.uniqueCustomers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${merchant.avgOrderValue}</div>
              <p className="text-xs text-muted-foreground">+5% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="packages">Packages ({mockPackages.length})</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Business Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Business Information</CardTitle>
                  <CardDescription>Company details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Industry</p>
                      <p className="font-medium">{merchant.industry}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Employee Count</p>
                      <p className="font-medium">{merchant.employeeCount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Client Range</p>
                      <p className="font-medium">{merchant.clientCount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Website</p>
                      <p className="font-medium">{merchant.website}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Key fulfillment and business metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Delivery Success Rate</span>
                      <span className="font-semibold">{merchant.deliverySuccessRate}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Customer Satisfaction</span>
                      <span className="font-semibold">{merchant.customerSatisfaction}/5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Monthly Revenue</span>
                      <span className="font-semibold">${merchant.monthlyRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Monthly Orders</span>
                      <span className="font-semibold">{merchant.monthlyOrders.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Packages Tab */}
          <TabsContent value="packages" className="space-y-6">
            {/* Package Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{deliveredPackages.length}</div>
                  <div className="text-sm text-gray-600">Delivered</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{inTransitPackages.length}</div>
                  <div className="text-sm text-gray-600">In Transit</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">{processingPackages.length}</div>
                  <div className="text-sm text-gray-600">Processing</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-gray-600">{mockPackages.length}</div>
                  <div className="text-sm text-gray-600">Total</div>
                </CardContent>
              </Card>
            </div>

            {/* Packages Table */}
            <Card>
              <CardHeader>
                <CardTitle>All Packages</CardTitle>
                <CardDescription>Complete package tracking and recipient information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Package</TableHead>
                        <TableHead>Recipient</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Details</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockPackages.map((pkg) => (
                        <TableRow key={pkg.id} className="hover:bg-gray-50">
                          <TableCell>
                            <div>
                              <div className="font-medium">{pkg.trackingNumber}</div>
                              <div className="text-sm text-gray-600">{pkg.packageType}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">{pkg.recipientName}</div>
                              <div className="text-sm text-gray-600">{pkg.recipientAddress}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="text-sm">{pkg.recipientEmail}</div>
                              <div className="text-sm">{pkg.recipientPhone}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="text-sm">Weight: {pkg.weight}</div>
                              <div className="text-sm">Size: {pkg.dimensions}</div>
                              {pkg.notes && (
                                <div className="text-xs text-gray-500">{pkg.notes}</div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(pkg.status)}>
                              <div className="flex items-center gap-1">
                                {getStatusIcon(pkg.status)}
                                {pkg.status.replace('_', ' ')}
                              </div>
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">${pkg.totalValue}</div>
                              <div className="text-sm text-gray-600">Order: ${pkg.orderValue}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">Track</Button>
                              <Button variant="outline" size="sm">Edit</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Breakdown</CardTitle>
                  <CardDescription>Monthly revenue trends and analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    <TrendingUp className="h-16 w-16 mb-4" />
                    <p>Revenue chart would be displayed here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Package Status Distribution</CardTitle>
                  <CardDescription>Current package status breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>Delivered</span>
                      </div>
                      <span className="font-semibold">{deliveredPackages.length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span>In Transit</span>
                      </div>
                      <span className="font-semibold">{inTransitPackages.length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span>Processing</span>
                      </div>
                      <span className="font-semibold">{processingPackages.length}</span>
                    </div>
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