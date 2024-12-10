"use client";

import { Layout } from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SupportPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Support and Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How does the escrow system work?
              </AccordionTrigger>
              <AccordionContent>
                Our escrow system holds funds securely and releases them based
                on agreed-upon milestones. This ensures both parties are
                protected throughout the investment process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What types of businesses can use this platform?
              </AccordionTrigger>
              <AccordionContent>
                Our platform is designed for a wide range of businesses, from
                tech startups to traditional SMEs. As long as you have a solid
                business plan and are seeking investment, you&apos;re welcome to
                join.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How is the AI validation performed?
              </AccordionTrigger>
              <AccordionContent>
                Our AI system analyzes various aspects of your business,
                including financial projections, market potential, and team
                experience. It provides a credibility score and recommendations
                for improvement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
