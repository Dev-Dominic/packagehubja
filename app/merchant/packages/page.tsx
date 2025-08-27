"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
  Search, 
  Download, 
  Plus, 
  Package, 
  Menu, 
  Bell, 
  Settings, 
  LogOut, 
  Building2,
  BarChart3,
  Users,
  PieChart,
  Truck,
  CheckCircle,
  Clock,
  AlertTriangle,
  Mail,
  Phone,
  MapPin
} from "lucide-react"
import Link from "next/link"

// Mock data for merchant packages
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
  {
    id: "PKG-006",
    trackingNumber: "TRK123456794",
    recipientName: "Frank Miller",
    recipientEmail: "frank@email.com",
    recipientPhone: "(555) 666-7777",
    recipientAddress: "123 Tech Street, San Francisco, CA 94102",
    packageType: "Software",
    weight: "0.5 lbs",
    dimensions: "6x4x2 in",
    status: "in_transit",
    deliveryDate: null,
    orderValue: 149.99,
    shippingCost: 8.99,
    totalValue: 158.98,
    notes: "Express delivery requested",
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

export default function MerchantPackagesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const filteredPackages = mockPackages.filter((pkg) => {
    const matchesSearch =
      pkg.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.recipientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.recipientEmail.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || pkg.status === statusFilter
    return matchesSearch && matchesStatus
  })

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
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              <BarChart3 className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/merchant/packages"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg"
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
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Package Management</h1>
            <p className="text-gray-600">Track and manage all your packages and deliveries</p>
          </div>

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

          {/* Filters and Actions */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search packages by tracking number, recipient name, or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="in_transit">In Transit</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Package
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Packages Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Packages</CardTitle>
              <CardDescription>
                Showing {filteredPackages.length} of {mockPackages.length} packages
              </CardDescription>
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
                    {filteredPackages.map((pkg) => (
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
        </main>
      </div>
    </div>
  )
} 