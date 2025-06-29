import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, XIcon, Globe } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { Link } from "react-router";

export default function Contact() {
  return (
    <section className="flex flex-col my-8 gap-8">
      {/* Contact Information */}
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Contact Information
          </h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <p className="text-gray-600">hello@webartstudio.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Location</p>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Follo my work card  */}
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Follow My Work
          </h3>
          <div className="flex gap-4">
            <Link
              to="#"
              className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <SiInstagram className="w-6 h-6 text-white" />
            </Link>
            <Link
              to="#"
              className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <XIcon className="w-6 h-6 text-white" />
            </Link>
            <Link
              to="#"
              className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Globe className="w-6 h-6 text-white" />
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Ready to start card */}
      <Card className="shadow-xl border-0 ">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
          <p className="mb-6 opacity-90">
            Let's discuss your project and bring your creative vision to life
            through innovative web art.
          </p>
          <Button>Schedule a Call</Button>
        </CardContent>
      </Card>
    </section>
  );
}
