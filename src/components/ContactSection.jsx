import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Get In <span className="text-primary">Touch</span>
      </h2>



      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? Feel free to reach Out. I'm always open discussing new opportunities
      </p>


            {/* contact form  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* contact information  */}
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-b-full pg-primary/30">
                        <Mail className="h-5 w-6 text-primary" />  
                        </div>
                        <div>
                            <h4 className="font-medium ">Email</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors" href="mailto:dewansamriddha@gmail.com">
                                dewansamriddha@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>



            {/* form section here  */}
        </div>  
      </div>
    </section>
  );
};

export default ContactSection;
