import { BookOpen, FileText, Calculator, Phone, Receipt, FileSpreadsheet, type LucideIcon } from "lucide-react";

export interface ServiceInfo {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  longDesc: string;
  benefits: string[];
  whoHelps: string;
}

export const services: ServiceInfo[] = [
  {
    id: "accounts-preparation-management",
    icon: BookOpen,
    title: "Accounts Preparation Management",
    desc: "Hands-on bookkeeping, budgeting, and account management on a 6 or 12-month term.",
    longDesc: "Dedicated support with your books, budgets, and goals over a 6 or 12-month term. You get regular 1-1 consultations, a budget planner reviewed monthly by your accountant, and full management of your accounts, backed by monthly check-ins so nothing falls through the cracks. Opt for the 12-month term and payroll and VAT registration are handled for you too.",
    benefits: ["1-1 consultations", "Budget planner, reviewed monthly", "Monthly check-ins", "Full accounts & bookkeeping management", "Monthly performance review", "Business goals & targets", "Meeting debrief notes after every session", "12-month term adds payroll (payslips & PAYE) and VAT registration"],
    whoHelps: "Business owners who want a dedicated accountant managing their accounts and finances, on a 6 or 12-month term.",
  },
  {
    id: "business-registration",
    icon: FileText,
    title: "Registering Your Business",
    desc: "Get your company or self-assessment registered, done for you.",
    longDesc: "Setting up as a sole trader or registering a limited company in the UK, handled from start to finish — from an initial consultation through documentation, submission, and confirmation.",
    benefits: ["Expert guidance on the right structure", "Fast registration, no red tape", "Tailored to sole traders or limited companies", "Support after registration"],
    whoHelps: "New entrepreneurs setting up their business for the first time in the UK.",
  },
  {
    id: "vat-return",
    icon: Receipt,
    title: "VAT Return",
    desc: "VAT registration, quarterly returns, and full HMRC compliance handled for you.",
    longDesc: "We manage your VAT obligations end-to-end — registration, quarterly VAT return preparation and submission to HMRC, and ongoing compliance so you never miss a deadline.",
    benefits: ["VAT registration", "Quarterly VAT return preparation & submission", "HMRC deadline management", "Making Tax Digital (MTD) compliant filing", "Ongoing VAT advice"],
    whoHelps: "VAT-registered businesses that want their returns filed accurately and on time, without the admin.",
  },
  {
    id: "mtd-income-tax",
    icon: FileSpreadsheet,
    title: "MTD Income Tax",
    desc: "Making Tax Digital for Income Tax — digital record-keeping and quarterly HMRC submissions, handled for you.",
    longDesc: "We help self-employed individuals and landlords meet HMRC's Making Tax Digital for Income Tax requirements, from setting up digital record-keeping to your quarterly updates and end-of-year final declaration.",
    benefits: ["Digital record-keeping setup", "Quarterly HMRC updates", "End-of-year final declaration", "MTD-compliant software support", "Ongoing compliance guidance"],
    whoHelps: "Self-employed individuals and landlords who need to comply with Making Tax Digital for Income Tax.",
  },
  {
    id: "finance-check-up",
    icon: Calculator,
    title: "Finance Check Up",
    desc: "A one-off deep dive into your numbers and next steps.",
    longDesc: "A one-off review of your business finances: a performance review, a budget planner, and clear goals to work towards, with a personal check-in session to walk through it all.",
    benefits: ["Full performance review", "Budget planner", "Clear financial goals", "One-off check-in session", "Meeting debrief notes"],
    whoHelps: "Business owners who want an outside perspective on their numbers without committing to an ongoing package.",
  },
  {
    id: "1-1-call",
    icon: Phone,
    title: "Book a 1:1 Call",
    desc: "Direct, personalised financial guidance whenever you need it.",
    longDesc: "A direct one-to-one call for personalised financial guidance — ask questions, talk through challenges, and get practical advice specific to your business.",
    benefits: ["Personalised advice", "Financial Q&A", "Business support", "Includes a free budget template"],
    whoHelps: "Anyone who wants direct, personal guidance without signing up for a package.",
  },
];
