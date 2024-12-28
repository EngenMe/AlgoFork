import { footerAccordions } from "@/data/footerAccordions.data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useTranslations } from "next-intl";

const AccordionComp = () => {
  const t = useTranslations();

  return (
    <Accordion collapsible type="single" className="py-10">
      {footerAccordions.map((footerAccordion) => (
        <AccordionItem
          value={footerAccordion.value}
          key={footerAccordion.value}
        >
          <AccordionTrigger className="text-md font-semibold">
            {t(footerAccordion.title)}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-4">
              {footerAccordion.content.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-zinc-300">
                    {t(item.title)}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default AccordionComp;
