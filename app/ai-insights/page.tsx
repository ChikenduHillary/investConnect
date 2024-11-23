"use client";

import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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

const marketData = [
  { name: "Market Size", current: 75, benchmark: 60 },
  { name: "Growth Rate", current: 80, benchmark: 70 },
  { name: "Competition", current: 65, benchmark: 75 },
  { name: "Barriers to Entry", current: 70, benchmark: 65 },
];

export default function AIInsightsPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">AI Insights</h1>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="market">Market Analysis</TabsTrigger>
          <TabsTrigger value="financials">Financial Health</TabsTrigger>
          <TabsTrigger value="team">Team Assessment</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Credibility Score</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={75} className="mb-2" />
                <p>Your business has a strong credibility score of 75/100</p>
                <h3 className="font-semibold mt-4">Key Metrics:</h3>
                <ul className="list-disc pl-5">
                  <li>Financial Health: 80/100</li>
                  <li>Market Potential: 70/100</li>
                  <li>Team Experience: 75/100</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>
                    Improve your financial projections with more detailed
                    revenue forecasts
                  </li>
                  <li>
                    Expand your target market analysis to include emerging
                    trends
                  </li>
                  <li>
                    Highlight key team members industry-specific experience
                  </li>
                  <li>
                    Consider adding an advisory board to strengthen credibility
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="market">
          <Card>
            <CardHeader>
              <CardTitle>Market Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="current" fill="#8884d8" name="Your Score" />
                  <Bar
                    dataKey="benchmark"
                    fill="#82ca9d"
                    name="Industry Benchmark"
                  />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4">
                <p>
                  Your market analysis shows strong potential, particularly in
                  market size and growth rate.
                </p>
                <p>
                  Consider strategies to address the competitive landscape and
                  strengthen barriers to entry.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="financials">
          <Card>
            <CardHeader>
              <CardTitle>Financial Health</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Revenue Growth</h3>
              <Progress value={85} className="mb-2" />
              <p>Your revenue growth is strong at 85% year-over-year.</p>

              <h3 className="font-semibold mt-4 mb-2">Profit Margins</h3>
              <Progress value={60} className="mb-2" />
              <p>
                Your profit margins are above average at 60%, but there&apos;s
                room for improvement.
              </p>

              <h3 className="font-semibold mt-4 mb-2">Cash Flow</h3>
              <Progress value={70} className="mb-2" />
              <p>
                Your cash flow management is good at 70%, ensuring operational
                stability.
              </p>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">Recommendations:</h3>
                <ul className="list-disc pl-5">
                  <li>
                    Focus on optimizing operational costs to improve profit
                    margins
                  </li>
                  <li>
                    Consider strategies to improve accounts receivable turnover
                  </li>
                  <li>Explore opportunities for recurring revenue streams</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Team Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Overall Team Score</h3>
              <Progress value={75} className="mb-2" />
              <p>
                Your team demonstrates strong capabilities with a score of
                75/100.
              </p>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">Strengths:</h3>
                <ul className="list-disc pl-5">
                  <li>Strong technical expertise in core product areas</li>
                  <li>Diverse background bringing varied perspectives</li>
                  <li>Proven track record in previous startups</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">Areas for Improvement:</h3>
                <ul className="list-disc pl-5">
                  <li>Consider adding expertise in sales and marketing</li>
                  <li>Strengthen the advisory board with industry veterans</li>
                  <li>Develop a clear succession plan for key roles</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
