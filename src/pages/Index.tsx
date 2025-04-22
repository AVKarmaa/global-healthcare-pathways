import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseTable from "@/components/CourseCard";
import FAQSection from "@/components/FAQSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Globe from "@/components/icons/Globe";
import Phone from "@/components/icons/Phone";
import Mail from "@/components/icons/Mail";

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const courses = [
    {
      title: "Pearson BTEC International Level 5 Higher National Diploma in Healthcare Practice (Healthcare Management)",
      code: "HLYR9"
    },
    {
      title: "Pearson BTEC International Level 4 Higher National Certificate in Healthcare Practice (Healthcare Management)",
      code: "HLZH6"
    },
    {
      title: "Pearson BTEC International Level 5 Higher National Diploma in Healthcare Practice (Nursing and Healthcare Assistant)",
      code: "HMHH7"
    },
    {
      title: "Pearson BTEC International Level 4 Higher National Certificate in Healthcare Practice (Nursing and Healthcare Support)",
      code: "HMHH8"
    }
  ];

  const faqs = [
    {
      question: "What are the class timings?",
      answer: "Our classes are scheduled to accommodate various needs. For full-time students, classes typically run Monday to Friday, 9:00 AM to 3:00 PM. Part-time and evening options are also available, with sessions on weekends or weekday evenings from 6:00 PM to 9:00 PM."
    },
    {
      question: "Is accommodation available for students?",
      answer: "While we don't provide on-campus accommodation, our student services team can assist with finding suitable housing options nearby. We maintain partnerships with several housing providers and can offer guidance on affordable and convenient accommodation choices."
    },
    {
      question: "What is your refund policy?",
      answer: "Course fees are refundable up to 30 days before the course start date, minus an administrative fee. Cancellations within 30 days of the start date are eligible for a 50% refund. No refunds are provided once the course has commenced. Special circumstances may be considered on a case-by-case basis."
    },
    {
      question: "How will the international recognition of the BTEC qualification benefit me?",
      answer: "Pearson BTEC qualifications are widely recognized by employers and universities globally, providing you with a strong foundation for international career opportunities and further academic pursuits. Many healthcare institutions worldwide value BTEC qualifications, opening doors to positions in diverse healthcare settings internationally."
    },
    {
      question: "Are there any English language requirements?",
      answer: "Yes, as courses are taught in English, applicants must demonstrate English language proficiency. We accept IELTS scores of 5.5 or above, TOEFL iBT scores of 70 or above, or equivalent qualifications. We also offer pre-course English language support for those who need it."
    },
    {
      question: "Do you offer job placement assistance after completion?",
      answer: "We provide comprehensive career services including resume building, interview preparation, and connections with our healthcare industry partners. While we don't guarantee placement, our strong industry relationships and career guidance have helped many graduates secure positions in reputable healthcare organizations both in India and internationally."
    }
  ];

  const filteredCourses = activeTab === "all" 
    ? courses 
    : courses.filter(course => course.code.includes(activeTab === "5" ? "5" : "4"));

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <h2 className="text-3xl font-bold text-healthcare-800 mb-4">Our Pearson BTEC Healthcare Practice Courses</h2>
            <p className="text-gray-600 max-w-3xl">
              Take the first step towards international opportunities in healthcare with our globally recognized Pearson BTEC qualifications.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-6">
              <TabsList className="bg-healthcare-50">
                <TabsTrigger value="all" className="data-[state=active]:bg-healthcare-600 data-[state=active]:text-white">All Courses</TabsTrigger>
                <TabsTrigger value="5" className="data-[state=active]:bg-healthcare-600 data-[state=active]:text-white">Level 5</TabsTrigger>
                <TabsTrigger value="4" className="data-[state=active]:bg-healthcare-600 data-[state=active]:text-white">Level 4</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={activeTab} className="mt-0">
              <CourseTable
                courses={filteredCourses}
                onApplyClick={scrollToContact}
              />
            </TabsContent>
          </Tabs>
        </section>
        
        <section className="mb-16">
          <WhyChooseUs />
        </section>
        
        <section className="mb-16">
          <FAQSection faqs={faqs} />
        </section>
        
        <section id="contact-section" className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-healthcare-800">Get In Touch</h2>
              <p className="text-lg text-gray-600">
                Take the first step toward your international healthcare career. Fill out the form and our professionals will reach out to guide you through the admission process.
              </p>
              
              <div className="bg-healthcare-50 p-6 rounded-lg border border-healthcare-100">
                <h3 className="font-medium text-xl text-healthcare-700 mb-4">Our Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 mr-3 text-healthcare-700 mt-1" />
                    <div>
                      <p className="font-medium text-healthcare-800">Centre Address</p>
                      <p className="text-gray-600">
                        Empowered Skills Private Limited,<br />
                        SCO 15, 5th Floor, 97 Acre Scheme,<br />
                        Ranjit Avenue, D Block,<br />
                        Amritsar - 143001
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Phone className="h-5 w-5 mr-3 text-healthcare-700" />
                      <p className="font-medium text-healthcare-800">Phone Numbers</p>
                    </div>
                    <div className="ml-8 space-y-1">
                      <p className="text-gray-600">+91 183 4004836</p>
                      <p className="text-gray-600">+91 9876711110</p>
                      <p className="text-gray-600">+91 9888886888</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-healthcare-700" />
                    <div>
                      <p className="font-medium text-healthcare-800">Email</p>
                      <p className="text-gray-600">neelu.gauri@empoweredskills.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
