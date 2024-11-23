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
      <div className="flex justify-between mb-8">
        {['Business Info', 'Team Details', 'Financials', 'Documents'].map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
              {index + 1}
            </div>
            <span className="text-sm mt-1">{step}</span>
          </div>
        ))}
      </div>
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
        <div>
          <Label htmlFor="founding-date">Founding Date</Label>
          <Input id="founding-date" type="date" required />
        </div>
        <div>
          <Label htmlFor="team-size">Team Size</Label>
          <Input id="team-size" type="number" required />
        </div>
        <div>
          <Label htmlFor="funding-goal">Funding Goal ($)</Label>
          <Input id="funding-goal" type="number" required />
        </div>
        <div>
          <Label htmlFor="pitch">Elevator Pitch</Label>
          <Textarea id="pitch" required />
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
