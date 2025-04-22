
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PearsonSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="rounded-lg overflow-hidden shadow-xl border-4 border-healthcare-100">
              <img 
                src="/lovable-uploads/48bfe078-53c0-4037-a184-ace578b045d0.png" 
                alt="Pearson Logo" 
                className="w-full h-auto object-contain p-8 bg-white"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-healthcare-800">About Pearson</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Pearson, the world's leading learning company, was founded in 1844 by Samuel Pearson in Yorkshire, England. 
                  Now, with 24,000 employee in over 70 countries around the world. Pearson has been at the forefront of education, 
                  offering a range of products and services to learners at every stage, from school to higher education and professional.
                </p>
                <p>
                  Pearson India is invested in providing the vast and versatile Indian learner base, with the curriculum they need 
                  to develop comprehensive skills so that they are well prepared and confident at every stage of their career and self-developement.
                </p>
              </div>
            </div>

            <div className="bg-healthcare-50 p-6 rounded-lg border border-healthcare-100">
              <h3 className="text-xl font-semibold text-healthcare-800 mb-4">
                Professional courses developed collaboratively with subject experts
              </h3>
              <p className="text-gray-600 mb-6">
                With input from industry, employers, professional bodies, tutors, students, and higher education institutions, 
                your new Pearson BTEC Higher Nationals have been designed to better meet the needs of a changing market. 
                The result is a qualification suite designed and developed to meet professional standards recognised by employers 
                and universities, which develop not only academic skills and abilities, but work-readiness skills.
              </p>
              
              <h4 className="font-semibold text-healthcare-700 mb-3">
                The objectives of the redevelopment of the BTEC Higher Nationals have been to ensure:
              </h4>
              <ul className="space-y-2">
                {[
                  'work relatedness',
                  'employer engagement',
                  'opportunities for progression to further higher education',
                  'alignment with UK higher education expectations',
                  'qualifications which are up to date with current professional practice and include professional accreditation and opportunities to gain vendor certification where possible'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-healthcare-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PearsonSection;
