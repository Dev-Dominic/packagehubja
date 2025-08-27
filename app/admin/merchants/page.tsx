"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Download, Plus, Building2, Mail, Phone, Menu, Bell, Settings, LogOut, BarChart3, Users, Package, PieChart } from "lucide-react"
import Link from "next/link"

// Mock data for merchants
const mockMerchants = [
  {
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
  },
  {
    id: "MERCH-002",
    businessName: "Fashion Forward",
    founderName: "Sarah Johnson",
    email: "sarah@fashionforward.com",
    phone: "(555) 234-5678",
    businessType: "Fashion & Apparel",
    clientCount: "51-100",
    monthlyOrders: 850,
    totalValue: "$89,500",
    status: "active",
    joinedDate: "2024-01-10",
    totalRevenue: 89500,
    totalPackages: 10850,
    uniqueCustomers: 2150,
  },
  {
    id: "MERCH-003",
    businessName: "Home Essentials",
    founderName: "Mike Davis",
    email: "mike@homeessentials.com",
    phone: "(555) 345-6789",
    businessType: "Home & Garden",
    clientCount: "11-50",
    monthlyOrders: 450,
    totalValue: "$45,200",
    status: "pending",
    joinedDate: "2024-01-18",
    totalRevenue: 45200,
    totalPackages: 5450,
    uniqueCustomers: 890,
  },
  {
    id: "MERCH-004",
    businessName: "EcoTech Innovations",
    founderName: "Lisa Chen",
    email: "lisa@ecotech.com",
    phone: "(555) 456-7890",
    businessType: "Green Technology",
    clientCount: "51-100",
    monthlyOrders: 720,
    totalValue: "$78,300",
    status: "active",
    joinedDate: "2024-01-05",
    totalRevenue: 78300,
    totalPackages: 8920,
    uniqueCustomers: 1680,
  },
  {
    id: "MERCH-005",
    businessName: "Artisan Crafts",
    founderName: "David Wilson",
    email: "david@artisancrafts.com",
    phone: "(555) 567-8901",
    businessType: "Handmade Goods",
    clientCount: "1-10",
    monthlyOrders: 180,
    totalValue: "$22,100",
    status: "active",
    joinedDate: "2024-01-22",
    totalRevenue: 22100,
    totalPackages: 2150,
    uniqueCustomers: 420,
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800"
    case "pending":
      return "bg-yellow-100 text-yellow-800"
    case "inactive":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function MerchantsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const filteredMerchants = mockMerchants.filter((merchant) => {
    const matchesSearch =
      merchant.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      merchant.founderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      merchant.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || merchant.status === statusFilter
    return matchesSearch && matchesStatus
  })

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
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              {filteredMerchants.length} Merchants
            </Badge>
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
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
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Merchant Management</h1>
            <p className="text-gray-600">Manage all merchant accounts and fulfillment information</p>
          </div>

        {/* Filters and Actions */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search merchants by name, founder, or email..."
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
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Merchant
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Merchants Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Merchants</CardTitle>
            <CardDescription>
              Showing {filteredMerchants.length} of {mockMerchants.length} merchants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Business</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Business Type</TableHead>
                    <TableHead>Monthly Orders</TableHead>
                    <TableHead>Total Revenue</TableHead>
                    <TableHead>Total Packages</TableHead>
                    <TableHead>Unique Customers</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMerchants.map((merchant) => (
                    <TableRow key={merchant.id} className="hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Building2 className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{merchant.businessName}</div>
                            <div className="text-sm text-gray-600">{merchant.founderName}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-sm">
                            <Mail className="h-3 w-3 text-gray-400" />
                            <span>{merchant.email}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Phone className="h-3 w-3 text-gray-400" />
                            <span>{merchant.phone}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{merchant.businessType}</div>
                          <div className="text-sm text-gray-600">{merchant.clientCount} clients</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{merchant.monthlyOrders.toLocaleString()}</div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium text-green-600">{merchant.totalValue}</div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{merchant.totalPackages.toLocaleString()}</div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{merchant.uniqueCustomers.toLocaleString()}</div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(merchant.status)}>{merchant.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-600">
                          {new Date(merchant.joinedDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/admin/merchants/${merchant.id}`}>View</Link>
                          </Button>
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