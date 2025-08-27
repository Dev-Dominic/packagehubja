"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Package, Building2, User, Users, ArrowRight, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

const businessTypes = [
  "E-commerce",
  "Retail",
  "Manufacturing",
  "Wholesale/Distribution",
  "Healthcare",
  "Technology",
  "Fashion & Apparel",
  "Food & Beverage",
  "Beauty & Cosmetics",
  "Home & Garden",
  "Sports & Recreation",
  "Automotive",
  "Books & Media",
  "Other",
]

const clientRanges = ["1-10", "11-50", "51-100", "101-500", "501-1,000", "1,000-5,000", "5,000+"]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: "",
    founderName: "",
    businessType: "",
    customBusinessType: "",
    clientCount: "",
    monthlyOrders: "",
    averageOrderValue: "",
    currentFulfillment: "",
    businessDescription: "",
    website: "",
    phoneNumber: "",
  })

  const totalSteps = 3
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Onboarding data:", formData)
    // Redirect to dashboard
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Package className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">PackageHub</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to PackageHub!</h1>
          <p className="text-gray-600">Let's get your business set up for success</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              Step {currentStep} of {totalSteps}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="border-0 shadow-xl">
          {/* Step 1: Business Information */}
          {currentStep === 1 && (
            <>
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold">Business Information</CardTitle>
                <CardDescription>Tell us about your business</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange("businessName", e.target.value)}
                      placeholder="Enter your business name"
                      className="h-11"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="founderName">Founder/Owner Name *</Label>
                    <Input
                      id="founderName"
                      value={formData.founderName}
                      onChange={(e) => handleInputChange("founderName", e.target.value)}
                      placeholder="Enter founder's name"
                      className="h-11"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessType">Type of Business *</Label>
                  <Select
                    value={formData.businessType}
                    onValueChange={(value) => handleInputChange("businessType", value)}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {formData.businessType === "Other" && (
                  <div className="space-y-2">
                    <Label htmlFor="customBusinessType">Please specify your business type *</Label>
                    <Input
                      id="customBusinessType"
                      value={formData.customBusinessType}
                      onChange={(e) => handleInputChange("customBusinessType", e.target.value)}
                      placeholder="Describe your business type"
                      className="h-11"
                      required
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="website">Website (Optional)</Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number *</Label>
                  <Input
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    placeholder="(555) 123-4567"
                    className="h-11"
                    required
                  />
                </div>
              </CardContent>
            </>
          )}

          {/* Step 2: Business Scale */}
          {currentStep === 2 && (
            <>
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold">Business Scale</CardTitle>
                <CardDescription>Help us understand your fulfillment needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="clientCount">How many clients do you serve? *</Label>
                  <Select
                    value={formData.clientCount}
                    onValueChange={(value) => handleInputChange("clientCount", value)}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select client range" />
                    </SelectTrigger>
                    <SelectContent>
                      {clientRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range} clients
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthlyOrders">Monthly Order Volume *</Label>
                  <Input
                    id="monthlyOrders"
                    value={formData.monthlyOrders}
                    onChange={(e) => handleInputChange("monthlyOrders", e.target.value)}
                    placeholder="e.g., 500 orders per month"
                    className="h-11"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="averageOrderValue">Average Order Value *</Label>
                  <Input
                    id="averageOrderValue"
                    value={formData.averageOrderValue}
                    onChange={(e) => handleInputChange("averageOrderValue", e.target.value)}
                    placeholder="e.g., $75"
                    className="h-11"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentFulfillment">Current Fulfillment Method *</Label>
                  <Select
                    value={formData.currentFulfillment}
                    onValueChange={(value) => handleInputChange("currentFulfillment", value)}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="How do you currently fulfill orders?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="self-fulfillment">Self-fulfillment</SelectItem>
                      <SelectItem value="third-party">Third-party logistics</SelectItem>
                      <SelectItem value="dropshipping">Dropshipping</SelectItem>
                      <SelectItem value="hybrid">Hybrid approach</SelectItem>
                      <SelectItem value="none">Just starting out</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </>
          )}

          {/* Step 3: Additional Details */}
          {currentStep === 3 && (
            <>
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold">Final Details</CardTitle>
                <CardDescription>Tell us more about your business goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="businessDescription">Business Description</Label>
                  <Textarea
                    id="businessDescription"
                    value={formData.businessDescription}
                    onChange={(e) => handleInputChange("businessDescription", e.target.value)}
                    placeholder="Briefly describe what your business does and what products you sell..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      Access your personalized dashboard
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      Connect with your dedicated account manager
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      Start tracking your packages and orders
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      Get a custom fulfillment quote
                    </li>
                  </ul>
                </div>
              </CardContent>
            </>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center p-6 border-t">
            <div>
              {currentStep > 1 && (
                <Button variant="outline" onClick={prevStep} className="flex items-center gap-2 bg-transparent">
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Button>
              )}
            </div>
            <div>
              {currentStep < totalSteps ? (
                <Button onClick={nextStep} className="flex items-center gap-2">
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="flex items-center gap-2">
                  Complete Setup
                  <Check className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <Link href="/contact" className="text-blue-600 hover:text-blue-500">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
