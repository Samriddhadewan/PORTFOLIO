import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Send,
  Twitch,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "@/hooks/use-toast.js";
import { useState } from "react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const payload = {
      access_key: import.meta.env.VITE_CONTACT_API,
      name: name,
      email: email,
      message: message,
    };

    setIsSubmitting(true);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
    if(res.success){
      form.reset();
      setIsSubmitting(false)
      toast({
        title: "Message Sent",
        description: `${res.message}`,
      });
    }else{
      setIsSubmitting(false)
      toast({
        title:"Message Sent Failed",
        description:`${res.message}`
      })
    }

      
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach Out.
          I'm always open discussing new opportunities
        </p>

        {/* contact form  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* contact information  */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              {/* email  */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-b-full pg-primary/30">
                  <Mail className="h-5 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium ">Email</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="mailto:dewansamriddha@gmail.com"
                  >
                    dewansamriddha@gmail.com
                  </a>
                </div>
              </div>

              {/* phone  */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-b-full pg-primary/30">
                  <PhoneCall className="h-5 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium ">Phone</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="mailto:dewansamriddha@gmail.com"
                  >
                    +880151861****
                  </a>
                </div>
              </div>

              {/*  */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-b-full pg-primary/30">
                  <MapPin className="h-5 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="mailto:dewansamriddha@gmail.com"
                  >
                    Rangamati,Bangladesh
                  </a>
                </div>
              </div>
            </div>

            {/* socials  */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/samriddhadewan/"
                >
                  {" "}
                  <Linkedin />{" "}
                </a>
                <a target="_blank" href="">
                  {" "}
                  <Twitch />{" "}
                </a>
                <a target="_blank" href="">
                  {" "}
                  <Instagram />{" "}
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/samriddha.256945/"
                >
                  {" "}
                  <Facebook />{" "}
                </a>
              </div>
            </div>
          </div>

          {/* form section here  */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send A message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Write me your message"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
