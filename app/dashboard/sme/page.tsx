"use client";

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Input } from "@/components/ui/input";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 278 },
  { name: "May", value: 189 },
];

export default function SMEDashboardPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">SME Dashboard</h1>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="financials">Financials</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="investors">Investors</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Profile Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Credibility Score: 85/100</p>
                <p>Funding Goal: $500,000</p>
                <Progress value={50} className="mt-2" />
                <p className="mt-2">Raised: $250,000</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>New investor interest from TechVentures</li>
                  <li>Funding milestone reached: MVP Development</li>
                  <li>Document review completed by AI</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="financials">
          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Revenue (Last 12 months): $1,200,000</p>
              <p>Expenses (Last 12 months): $980,000</p>
              <p>Net Profit: $220,000</p>
              <p>Burn Rate: $50,000/month</p>
              <Button className="mt-4">Upload Financial Documents</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="documents">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Document Upload</h2>
            <Input type="file" />
            <Button>Upload</Button>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Uploaded Documents</h3>
              <ul className="list-disc pl-5">
                <li>Business Plan.pdf</li>
                <li>Financial Projections.xlsx</li>
                <li>Team Resumes.zip</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="investors">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Interested Investors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <strong>TechVentures</strong>
                    <p>Interest Level: High</p>
                    <p>Potential Investment: $200,000</p>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </li>
                  <li>
                    <strong>GreenFund</strong>
                    <p>Interest Level: Medium</p>
                    <p>Potential Investment: $100,000</p>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
