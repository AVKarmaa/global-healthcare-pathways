
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Heart, Globe, Handshake, FileText, Stethoscope } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all bg-white">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-healthcare-100 text-healthcare-600">
            {icon}
          </div>
          <CardTitle className="text-lg font-semibold text-healthcare-800">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Globally Recognized",
      description: "Pearson BTEC qualifications respected worldwide, enhancing your international career prospects."
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Industry-Relevant",
      description: "Courses designed with industry experts to ensure practical skills demanded by global employers."
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Experienced Instructors",
      description: "Learn from qualified professionals dedicated to your success in the healthcare field."
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "International Support",
      description: "Specialized guidance for students aiming for global careers with international registration support."
    },
    {
      icon: <Stethoscope className="h-5 w-5" />,
      title: "Healthcare Focus",
      description: "Specialized training designed specifically for healthcare career paths and opportunities."
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Student-Centered Learning",
      description: "Personalized education approach that puts your career goals and learning journey first."
    }
  ];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-healthcare-800 mb-6">Why Choose Empowered Skills?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
