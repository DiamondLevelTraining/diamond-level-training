
import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black p-6 space-y-12">
      {/* Header Section */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Diamond Level Training</h1>
        <p className="text-xl">Unlock Your Full Potential – Baseball, Softball & Fitness Coaching</p>
        <Button className="text-lg px-6 py-3">Book a Free Consult</Button>
      </header>

      {/* Services Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Remote Coaching</h3>
              <p>Customized training plans, video breakdowns, and weekly check-ins from anywhere.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Hybrid Coaching</h3>
              <p>In-person sessions + remote guidance. Get the best of both worlds with hybrid packages.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Fitness Training</h3>
              <p>Strength, speed, and conditioning tailored for athletes in baseball and softball.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">Meet Your Coach</h2>
        <p className="text-center max-w-3xl mx-auto">
          Coach John Sechen brings years of experience as a former professional baseball player and elite-level coach. He's trained under and alongside some of the best minds in the sport, and now dedicates his passion to helping players of all levels reach their full potential.
        </p>
        <p className="text-center max-w-3xl mx-auto">
          After playing at the professional level, John saw the gaps in traditional training and created Diamond Level Training to provide a more personalized, modern approach. Whether you're a young athlete just starting or a high-level player chasing a scholarship or pro career, this program is built to meet you where you are and push you beyond your limits.
        </p>
      </section>

      {/* Booking Section */}
      <section className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">Book a Session</h2>
        <p>Use our booking system to schedule a free consult or training session. We'll follow up with everything you need to get started.</p>
        <Button className="px-6 py-3 text-lg">Schedule Now</Button>
      </section>

      {/* Contact Section */}
      <section className="space-y-6 text-center">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>Email: johnsechen12@gmail.com | Call/Text: (715) 292-8565</p>
        <form className="max-w-md mx-auto space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <Input type="text" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <Input type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <Textarea rows={4} placeholder="Tell us how we can help you..." />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </section>
    </div>
  );
}
