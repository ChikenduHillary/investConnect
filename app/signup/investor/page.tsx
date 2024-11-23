'use client'

import { Layout } from '@/components/layout'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function InvestorSignUpPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Sign Up as an Investor</h1>
      <form className="space-y-6 max-w-2xl">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="investment-preferences">Investment Preferences</Label>
          <Textarea id="investment-preferences" required />
        </div>
        <div>
          <Label htmlFor="funding-conditions">Funding Conditions</Label>
          <Textarea id="funding-conditions" required />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="accredited" />
          <Label htmlFor="accredited">I am an accredited investor</Label>
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
    </Layout>
  )
}

