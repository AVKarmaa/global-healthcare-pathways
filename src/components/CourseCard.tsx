
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  description: string;
  code: string;
  audience: string;
  outcomes: string[];
  opportunities: string[];
  duration: string;
  onApplyClick: () => void;
}

const CourseCard = ({
  title,
  description,
  code,
  audience,
  outcomes,
  opportunities,
  duration,
  onApplyClick
}: CourseCardProps) => {
  return (
    <Card className="w-full border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-healthcare-500 to-medical-500"></div>
      <CardHeader>
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-xl font-bold text-healthcare-800">{title}</CardTitle>
          <Badge variant="outline" className="bg-healthcare-50 text-healthcare-700 border-healthcare-200">
            {code}
          </Badge>
        </div>
        <CardDescription className="mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-healthcare-700 mb-1">Target Audience</h4>
          <p className="text-gray-600 text-sm">{audience}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-healthcare-700 mb-1">Key Learning Outcomes</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-healthcare-700 mb-1">Career Opportunities</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            {opportunities.map((opportunity, index) => (
              <li key={index}>{opportunity}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-healthcare-700 mb-1">Duration</h4>
          <p className="text-gray-600 text-sm">{duration}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onApplyClick}
          size="lg"
          className="w-full bg-healthcare-600 hover:bg-healthcare-700 transition-all"
        >
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
