
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItemProps[];
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-healthcare-800 mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`faq-${index}`}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="px-4 py-3 bg-gray-50 hover:bg-gray-100 text-healthcare-700 font-medium text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
