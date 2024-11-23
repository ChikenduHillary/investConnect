import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Assuming these components exist

export default function LandingPage() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Connect Businesses with Investors
        </h1>
        <p className="text-xl mb-8">
          Validate ideas, secure funding, and grow your business with AI-powered
          insights
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/signup/sme">I&apos;m a Business</Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/signup/investor">I&apos;m an Investor</Link>
          </Button>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Sign Up</h3>
              <p>Create your profile as a business or investor</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">2. Connect</h3>
              <p>Match with potential partners based on AI insights</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">3. Grow</h3>
              <p>Secure funding and achieve milestones together</p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Featured Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>Innovative Startup {i}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Industry: Tech</p>
                  <p>Funding Goal: $500,000</p>
                  <p>AI Score: 85/100</p>
                  <Button className="mt-4">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose InvestConnect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-2">AI-Powered Insights</h3>
              <p>
                Our advanced AI algorithms provide deep analysis and validation
                of business proposals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Secure Escrow</h3>
              <p>
                Our escrow system ensures safe and milestone-based fund
                releases.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Expert Network</h3>
              <p>
                Connect with industry experts and mentors to guide your business
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
