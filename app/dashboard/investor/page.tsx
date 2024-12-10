"use client";

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Progress } from "@/components/ui/progress";

const data = [
  { name: "Tech", value: 400 },
  { name: "Healthcare", value: 300 },
  { name: "Finance", value: 200 },
  { name: "Renewable Energy", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function InvestorDashboardPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Investor Dashboard</h1>
      <Tabs defaultValue="investments">
        <TabsList>
          <TabsTrigger value="investments">Investments</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="investments">
          <div className="mb-8">
            <Input placeholder="Search investments..." className="max-w-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Tech Startup A</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Industry: Software</p>
                <p>Invested: $250,000</p>
                <p>Current Valuation: $500,000</p>
                <Progress value={75} className="mt-2" />
                <p className="mt-2">Milestone Progress: 75%</p>
                <Button className="mt-4">View Details</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Green Energy B</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Industry: Renewable Energy</p>
                <p>Invested: $500,000</p>
                <p>Current Valuation: $750,000</p>
                <Progress value={50} className="mt-2" />
                <p className="mt-2">Milestone Progress: 50%</p>
                <Button className="mt-4">View Details</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>E-commerce C</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Industry: Retail</p>
                <p>Invested: $100,000</p>
                <p>Current Valuation: $150,000</p>
                <Progress value={25} className="mt-2" />
                <p className="mt-2">Milestone Progress: 25%</p>
                <Button className="mt-4">View Details</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="opportunities">
          <div className="space-y-8">
            <Input placeholder="Search opportunities..." className="max-w-sm" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "HealthTech Innovator",
                "AI Solutions Provider",
                "Sustainable Fashion Brand",
              ].map((company) => (
                <Card key={company}>
                  <CardHeader>
                    <CardTitle>{company}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Funding Goal: $1,000,000</p>
                    <p>AI Score: 92/100</p>
                    <p>Match Score: 85%</p>
                    <Button className="mt-4">Review Proposal</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="portfolio">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4">
                <p>Total Invested: $2,500,000</p>
                <p>Current Portfolio Value: $3,750,000</p>
                <p>ROI: 50%</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Investment Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Average ROI: 35%</p>
              <p>Best Performing Sector: Tech (50% ROI)</p>
              <p>
                Highest Growth Investment: AI Solutions Provider (100% growth)
              </p>
              <Button className="mt-4">Generate Detailed Report</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
