import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import ContactForm from "@/components/ContactForm";
import CourseCard from "@/components/CourseCard";
import FAQSection from "@/components/FAQSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const courses = [
    {
      title: "Pearson BTEC International Level 5 Higher National Diploma in Healthcare Practice (Healthcare Management)",
      code: "HLYR9",
      description: "This comprehensive diploma is designed for individuals aspiring to leadership and management roles within the healthcare sector. You will gain in-depth knowledge of healthcare systems, management principles, and quality improvement strategies.",
      audience: "Aspiring healthcare managers, healthcare professionals seeking leadership roles.",
      outcomes: [
        "Healthcare management principles", 
        "Strategic planning", 
        "Resource management", 
        "Quality assurance", 
        "Ethical considerations"
      ],
      opportunities: [
        "Healthcare Manager", 
        "Administrator", 
        "Project Manager in Healthcare", 
        "Quality Improvement Officer (potential for international roles)"
      ],
      duration: "2 years full-time, flexible part-time options available",
      level: "5",
      imageSrc: "https://images.unsplash.com/photo-1516549655976-c0ce83810b7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      eligibility: "Successful completion of Level 4 qualification or equivalent, relevant work experience may be considered."
    },
    {
      title: "Pearson BTEC International Level 4 Higher National Certificate in Healthcare Practice (Healthcare Management)",
      code: "HLZH6",
      description: "This certificate provides a strong foundation in healthcare principles and management practices. It's an ideal starting point for those looking to enter the healthcare management field or enhance their existing skills.",
      audience: "Individuals interested in entry-level healthcare management roles, current healthcare professionals seeking to upskill.",
      outcomes: [
        "Introduction to healthcare systems", 
        "Basic management principles", 
        "Communication in healthcare", 
        "Service improvement"
      ],
      opportunities: [
        "Healthcare Assistant Manager", 
        "Administrative Assistant in Healthcare", 
        "Team Leader (potential for international roles)"
      ],
      duration: "1 year full-time, flexible part-time options available",
      level: "4",
      imageSrc: "https://images.unsplash.com/photo-1516549655976-c0ce83810b7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      eligibility: "Successful completion of secondary education or equivalent, basic understanding of healthcare systems preferred."
    },
    {
      title: "Pearson BTEC International Level 5 Higher National Diploma in Healthcare Practice (Nursing and Healthcare Assistant)",
      code: "HMHH7",
      description: "This diploma equips you with the essential knowledge and skills to provide high-quality care as a nursing or healthcare assistant. The curriculum emphasizes patient-centered care, safety, and professional development.",
      audience: "Individuals aspiring to work as nursing assistants or healthcare assistants.",
      outcomes: [
        "Assisting with personal care", 
        "Monitoring patient conditions", 
        "Understanding basic anatomy and physiology", 
        "Infection control", 
        "Communication skills"
      ],
      opportunities: [
        "Nursing Assistant", 
        "Healthcare Assistant in hospitals", 
        "Clinics", 
        "Residential care facilities (potential for international roles)"
      ],
      duration: "2 years full-time, flexible part-time options available",
      level: "5",
      imageSrc: "https://images.unsplash.com/photo-1516549655976-c0ce83810b7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      eligibility: "Successful completion of Level 4 qualification or equivalent, interest in direct patient care."
    },
    {
      title: "Pearson BTEC International Level 4 Higher National Certificate in Healthcare Practice (Nursing and Healthcare Support)",
      code: "HMHH8",
      description: "This certificate provides a foundational understanding of the principles and practices involved in supporting nursing and healthcare teams. It's an excellent entry point for those interested in a career providing direct patient care.",
      audience: "Individuals seeking entry-level roles in nursing and healthcare support.",
      outcomes: [
        "Basic principles of nursing care", 
        "Assisting with mobility and comfort", 
        "Understanding common health conditions", 
        "Communication and teamwork"
      ],
      opportunities: [
        "Healthcare Support Worker", 
        "Nursing Auxiliary", 
        "Clinical Support Worker (potential for international roles)"
      ],
      duration: "1 year full-time, flexible part-time options available",
      level: "4",
      imageSrc: "https://images.unsplash.com/photo-1516549655976-c0ce83810b7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      eligibility: "Successful completion of secondary education or equivalent, a caring attitude and passion for healthcare."
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

  const eligibilityItems = [
    {
      title: "Level 5 Healthcare Management Diploma",
      requirements: "Successful completion of Level 4 qualification or equivalent, relevant work experience may be considered."
    },
    {
      title: "Level 4 Healthcare Management Certificate",
      requirements: "Successful completion of secondary education or equivalent, basic understanding of healthcare systems preferred."
    },
    {
      title: "Level 5 Nursing and Healthcare Assistant Diploma",
      requirements: "Successful completion of Level 4 qualification or equivalent, interest in direct patient care."
    },
    {
      title: "Level 4 Nursing and Healthcare Support Certificate",
      requirements: "Successful completion of secondary education or equivalent, a caring attitude and passion for healthcare."
    }
  ];

  const filteredCourses = activeTab === "all" 
    ? courses 
    : courses.filter(course => course.level === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredCourses.map((course, index) => (
                  <CourseCard
                    key={index}
                    {...course}
                    onApplyClick={scrollToContact}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        <section className="mb-16">
          <WhyChooseUs />
        </section>
        
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-healthcare-800 mb-6">General Requirements for All Courses</h2>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>English Language Proficiency: IELTS 5.5 or equivalent</li>
                  <li>Valid identification documents</li>
                  <li>Completed application form</li>
                  <li>Recent passport-size photographs</li>
                  <li>Statement of purpose</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1560439515-437c3457a2df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Successful healthcare students"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-healthcare-800 mb-6">Admission Process</h2>
            
            <div className="relative">
              <div className="hidden md:block absolute left-8 top-0 bottom-0 border-l-2 border-dashed border-healthcare-300 z-0"></div>
              
              <div className="space-y-8 relative z-10">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-healthcare-100 text-healthcare-600 font-bold text-xl">
                    1
                  </div>
                  <div className="pt-2">
                    <h3 className="font-medium text-lg text-healthcare-700 mb-1">Review Course Details</h3>
                    <p className="text-gray-600">Carefully read the information about your preferred course, including the eligibility criteria and learning outcomes.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-healthcare-100 text-healthcare-600 font-bold text-xl">
                    2
                  </div>
                  <div className="pt-2">
                    <h3 className="font-medium text-lg text-healthcare-700 mb-1">Complete the Application</h3>
                    <p className="text-gray-600">Fill out our application form with accurate details. You can do this online or request a physical form.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-healthcare-100 text-healthcare-600 font-bold text-xl">
                    3
                  </div>
                  <div className="pt-2">
                    <h3 className="font-medium text-lg text-healthcare-700 mb-1">Submit Required Documents</h3>
                    <p className="text-gray-600">Provide educational certificates, identification proof, photos, and any other required documentation.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-healthcare-100 text-healthcare-600 font-bold text-xl">
                    4
                  </div>
                  <div className="pt-2">
                    <h3 className="font-medium text-lg text-healthcare-700 mb-1">Interview (if applicable)</h3>
                    <p className="text-gray-600">Some courses require an interview or assessment to ensure you're the right fit for the program.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-healthcare-100 text-healthcare-600 font-bold text-xl">
                    5
                  </div>
                  <div className="pt-2">
                    <h3 className="font-medium text-lg text-healthcare-700 mb-1">Receive Offer Letter</h3>
                    <p className="text-gray-600">Successful applicants will receive an official offer letter via email.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-healthcare-100 text-healthcare-600 font-bold text-xl">
                    6
                  </div>
                  <div className="pt-2">
                    <h3 className="font-medium text-lg text-healthcare-700 mb-1">Confirm Enrollment</h3>
                    <p className="text-gray-600">Follow the instructions in your offer letter, including paying the course fees by the specified deadline.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-lg font-medium text-healthcare-700 mb-4">Ready to take the next step in your healthcare career?</p>
              <Button 
                className="bg-healthcare-600 hover:bg-healthcare-700 text-white px-6 py-2 rounded-md"
                onClick={scrollToContact}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <FAQSection faqs={faqs} />
        </section>
        
        <section id="contact-section" className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-healthcare-800">Get In Touch</h2>
              <p className="text-lg text-gray-600">
                Take the first step toward your international healthcare career. Fill out the form and our professionals will reach out to guide you through the admission process.
              </p>
              
              <div className="bg-healthcare-50 p-6 rounded-lg border border-healthcare-100">
                <h3 className="font-medium text-xl text-healthcare-700 mb-4">Our Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-3 p-2 rounded-full bg-healthcare-100 text-healthcare-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div>
                      <p className="font-medium text-healthcare-800">Address</p>
                      <p className="text-gray-600">
                        Empowered Skills Private Limited<br />
                        2, Chandragupta Marg,<br />
                        Chanakyapuri, New Delhi – 110021,<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="mr-3 p-2 rounded-full bg-healthcare-100 text-healthcare-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                      <p className="font-medium text-healthcare-800">Phone</p>
                      <p className="text-gray-600">+91 1234567890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="mr-3 p-2 rounded-full bg-healthcare-100 text-healthcare-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div>
                      <p className="font-medium text-healthcare-800">Email</p>
                      <p className="text-gray-600">admissions@empoweredskills.org</p>
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
