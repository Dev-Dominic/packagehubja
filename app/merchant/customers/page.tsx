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
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign
} from "lucide-react"
import Link from "next/link"

// Mock data for merchant customers
const mockCustomers = [
  {
    id: "CUST-001",
    name: "Alice Johnson",
    email: "alice@email.com",
    phone: "(555) 111-2222",
    address: "456 Customer Ave, New York, NY 10001",
    totalPackages: 45,
    totalSpent: 13500.50,
    lastOrder: "2024-01-20",
    status: "active",
    customerSince: "2023-03-15",
    avgOrderValue: 300.01,
    packageHistory: [
      { id: "PKG-001", status: "delivered", value: 315.98, date: "2024-01-20" },
      { id: "PKG-007", status: "delivered", value: 245.99, date: "2024-01-15" },
      { id: "PKG-012", status: "delivered", value: 189.50, date: "2024-01-10" }
    ]
  },
  {
    id: "CUST-002",
    name: "Bob Smith",
    email: "bob@email.com",
    phone: "(555) 222-3333",
    address: "789 Business Blvd, Chicago, IL 60601",
    totalPackages: 32,
    totalSpent: 8900.75,
    lastOrder: "2024-01-18",
    status: "active",
    customerSince: "2023-05-22",
    avgOrderValue: 278.15,
    packageHistory: [
      { id: "PKG-002", status: "in_transit", value: 209.98, date: "2024-01-18" },
      { id: "PKG-008", status: "delivered", value: 156.99, date: "2024-01-12" },
      { id: "PKG-015", status: "delivered", value: 445.00, date: "2024-01-05" }
    ]
  },
  {
    id: "CUST-003",
    name: "Carol Davis",
    email: "carol@email.com",
    phone: "(555) 333-4444",
    address: "321 Enterprise St, Austin, TX 73301",
    totalPackages: 28,
    totalSpent: 7200.25,
    lastOrder: "2024-01-19",
    status: "active",
    customerSince: "2023-07-10",
    avgOrderValue: 257.15,
    packageHistory: [
      { id: "PKG-003", status: "processing", value: 625.98, date: "2024-01-19" },
      { id: "PKG-009", status: "delivered", value: 189.99, date: "2024-01-14" },
      { id: "PKG-016", status: "delivered", value: 299.50, date: "2024-01-08" }
    ]
  },
  {
    id: "CUST-004",
    name: "David Wilson",
    email: "david@email.com",
    phone: "(555) 444-5555",
    address: "654 Startup Lane, Seattle, WA 98101",
    totalPackages: 19,
    totalSpent: 4800.00,
    lastOrder: "2024-01-18",
    status: "active",
    customerSince: "2023-09-18",
    avgOrderValue: 252.63,
    packageHistory: [
      { id: "PKG-004", status: "delivered", value: 102.98, date: "2024-01-18" },
      { id: "PKG-010", status: "delivered", value: 345.99, date: "2024-01-13" },
      { id: "PKG-017", status: "delivered", value: 156.50, date: "2024-01-07" }
    ]
  },
  {
    id: "CUST-005",
    name: "Eva Brown",
    email: "eva@email.com",
    phone: "(555) 555-6666",
    address: "987 Innovation Dr, Boston, MA 02101",
    totalPackages: 41,
    totalSpent: 11200.80,
    lastOrder: "2024-01-19",
    status: "active",
    customerSince: "2023-02-28",
    avgOrderValue: 273.19,
    packageHistory: [
      { id: "PKG-005", status: "delivered", value: 468.98, date: "2024-01-19" },
      { id: "PKG-011", status: "delivered", value: 234.99, date: "2024-01-16" },
      { id: "PKG-018", status: "delivered", value: 189.50, date: "2024-01-11" }
    ]
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800"
    case "inactive":
      return "bg-gray-100 text-gray-800"
    case "pending":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function MerchantCustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const filteredCustomers = mockCustomers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalCustomers = mockCustomers.length
  const totalRevenue = mockCustomers.reduce((sum, customer) => sum + customer.totalSpent, 0)
  const totalPackages = mockCustomers.reduce((sum, customer) => sum + customer.totalPackages, 0)
  const avgOrderValue = totalRevenue / totalPackages

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
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              <Package className="h-5 w-5" />
              Packages
            </Link>
            <Link
              href="/merchant/customers"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg"
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Management</h1>
            <p className="text-gray-600">Manage and track your customer relationships and order history</p>
          </div>

          {/* Customer Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{totalCustomers}</div>
                <div className="text-sm text-gray-600">Total Customers</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">${totalRevenue.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Revenue</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">{totalPackages}</div>
                <div className="text-sm text-gray-600">Total Packages</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">${avgOrderValue.toFixed(2)}</div>
                <div className="text-sm text-gray-600">Avg Order Value</div>
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
                    placeholder="Search customers by name, email, or phone..."
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
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Customer
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Customers Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Customers</CardTitle>
              <CardDescription>
                Showing {filteredCustomers.length} of {mockCustomers.length} customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Order History</TableHead>
                      <TableHead>Financial</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Customer Since</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCustomers.map((customer) => (
                      <TableRow key={customer.id} className="hover:bg-gray-50">
                        <TableCell>
                          <div>
                            <div className="font-medium">{customer.name}</div>
                            <div className="text-sm text-gray-600">ID: {customer.id}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-sm">
                              <Mail className="h-3 w-3" />
                              <span>{customer.email}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <Phone className="h-3 w-3" />
                              <span>{customer.phone}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <MapPin className="h-3 w-3" />
                              <span className="text-xs">{customer.address}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{customer.totalPackages} packages</div>
                            <div className="text-sm text-gray-600">Last: {new Date(customer.lastOrder).toLocaleDateString()}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium text-green-600">${customer.totalSpent.toLocaleString()}</div>
                            <div className="text-sm text-gray-600">Avg: ${customer.avgOrderValue.toFixed(2)}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(customer.status)}>{customer.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-gray-600">
                            {new Date(customer.customerSince).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">View Details</Button>
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