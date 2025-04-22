
import { Button } from "@/components/ui/button";

const PearsonSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/48bfe078-53c0-4037-a184-ace578b045d0.png" 
              alt="Pearson Logo" 
              className="max-w-[300px] mx-auto md:mx-0"
            />
          </div>
          
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
        </div>
      </div>
    </div>
  );
};

export default PearsonSection;
