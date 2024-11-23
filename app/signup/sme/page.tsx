'use client'

import { Layout } from '@/components/layout'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function SMESignUpPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Sign Up as a Business</h1>
      <form className="space-y-6 max-w-2xl">
        <div>
          <Label htmlFor="business-name">Business Name</Label>
          <Input id="business-name" required />
        </div>
        <div>
          <Label htmlFor="business-type">Business Type</Label>
          <Input id="business-type" required />
        </div>
        <div>
          <Label htmlFor="industry">Industry</Label>
          <Input id="industry" required />
        </div>
        <div>
          <Label htmlFor="description">Business Description</Label>
          <Textarea id="description" required />
        </div>
        <div>
          <Label htmlFor="document">Upload Verification Document</Label>
          <Input id="document" type="file" required />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" required />
          <Label htmlFor="terms">I agree to the terms and conditions</Label>
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
    </Layout>
  )
}

