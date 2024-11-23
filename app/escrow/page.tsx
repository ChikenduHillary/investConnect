'use client'

import { Layout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function EscrowPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Escrow and Contracts</h1>
      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active Escrows</TabsTrigger>
          <TabsTrigger value="completed">Completed Escrows</TabsTrigger>
          <TabsTrigger value="contracts">Contracts</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Active Escrow: Project A</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Total Funding: $100,000</p>
                <p>Released: $50,000</p>
                <Progress value={50} className="mt-2" />
                <h3 className="font-semibold mt-4">Milestones:</h3>
                <ul className="list-disc pl-5">
                  <li>MVP Development: Completed</li>
                  <li>Beta Launch: In Progress (Due: 30 days)</li>
                  <li>1000 Users: Pending</li>
                </ul>
                <Button className="mt-4">Request Next Milestone Release</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active Escrow: Project B</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Total Funding: $250,000</p>
                <p>Released: $100,000</p>
                <Progress value={40} className="mt-2" />
                <h3 className="font-semibold mt-4">Milestones:</h3>
                <ul className="list-disc pl-5">
                  <li>Product Design: Completed</li>
                  <li>Initial Production Run: In Progress (Due: 60 days)</li>
                  <li>First Sales: Pending</li>
                </ul>
                <Button className="mt-4">Request Next Milestone Release</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Completed Escrow: Project X</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Total Funding: $75,000</p>
                <p>All milestones completed on: 15 May 2023</p>
                <h3 className="font-semibold mt-4">Final Outcomes:</h3>
                <ul className="list-disc pl-5">
                  <li>Successfully launched product</li>
                  <li>Achieved 5,000 user milestone</li>
                  <li>Generated $100,000 in revenue</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="contracts">
          <Card>
            <CardHeader>
              <CardTitle>Contract Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p>View and manage the terms and conditions of your active contracts.</p>
              <h3 className="font-semibold mt-4">Key Contract Points:</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Equity Distribution: 10% to Investor A, 5% to Investor B</li>
                <li>Milestone Requirements: Detailed in Schedule A of contract</li>
                <li>Reporting Obligations: Monthly financial reports, quarterly board meetings</li>
                <li>Exit Clauses: As outlined in Section 7 of the agreement</li>
              </ul>
              <div className="mt-4 space-x-4">
                <Button>View Full Contract</Button>
                <Button variant="outline">Request Amendment</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  )
}
