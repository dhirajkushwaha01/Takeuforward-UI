import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function InfiniteCard() {
    return (
        <div className="max-w-6xl mx-auto">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="fast"
                className=" mt-10"
            />

            <InfiniteMovingCards
                items={testimonials2}
                direction="left"
                speed="fast"
               
            />



        </div>
    )
}

export default InfiniteCard

const testimonials = [
  {
    quote:
      "Joining the structured DSA program completely changed my preparation. The roadmap, regular practice, and mock interviews helped me stay consistent and improve my problem-solving skills. Within a few months, I secured a Software Engineer Internship at Flipkart.",
    name: "Arjun Mehta",
    title: "Software Engineer Intern",
    company: "Flipkart",
  },
  {
    quote:
      "Before starting my preparation, I lacked confidence in coding interviews. Daily practice and structured mentorship improved my logical thinking and coding skills. With consistent effort, I cleared multiple interview rounds and received an offer from Infosys.",
    name: "Riya Kapoor",
    title: "System Engineer",
    company: "Infosys",
  },
  {
    quote:
      "The mock interviews and structured DSA roadmap helped me approach coding interviews with confidence. Every topic was explained clearly, making learning enjoyable. I successfully cracked the technical rounds and started my career at Accenture.",
    name: "Karan Malhotra",
    title: "Associate Software Engineer",
    company: "Accenture",
  },
  {
    quote:
      "I struggled with consistency while learning DSA on my own. Following a proper study plan and solving problems daily improved my confidence and coding skills. Eventually, I secured a Software Analyst position at Capgemini.",
    name: "Ishita Sinha",
    title: "Software Analyst",
    company: "Capgemini",
  },
  {
    quote:
      "The live sessions, detailed explanations, and interview-focused practice made my preparation much easier. I gained confidence with every contest and coding challenge, which helped me clear the placement process and join Wipro.",
    name: "Yash Thakur",
    title: "Project Engineer",
    company: "Wipro",
  },
  {
    quote:
      "Learning with a structured roadmap helped me grow from beginner to advanced level. Regular revision, contests, and interview practice kept me motivated throughout my journey. I eventually joined TCS as an Assistant System Engineer.",
    name: "Ananya Roy",
    title: "Assistant System Engineer",
    company: "TCS",
  },
  {
    quote:
      "Daily coding challenges completely changed my preparation. From struggling with basic arrays to solving graph problems, I improved step by step. The consistent practice helped me secure a Software Developer Internship at Zoho.",
    name: "Devansh Khanna",
    title: "Software Developer Intern",
    company: "Zoho",
  },
  {
    quote:
      "The structured learning path and regular interview preparation sessions helped me improve my coding speed and confidence. After months of practice, I successfully cleared all interview rounds and received a Backend Developer offer from Paytm.",
    name: "Meera Nair",
    title: "Backend Developer",
    company: "Paytm",
  },
];


const testimonials2 = [
  {
    quote:
      "Joining the structured DSA program completely changed my preparation. The roadmap, regular practice, and mock interviews helped me stay consistent and improve my problem-solving skills. Within a few months, I secured a Software Engineer Internship at Flipkart.",
    name: "Aman Verma",
    title: "Software Engineer Intern",
    company: "Flipkart",
  },
  {
    quote:
      "Before starting my preparation, I lacked confidence in coding interviews. Daily practice and structured mentorship improved my logical thinking and coding skills. With consistent effort, I cleared multiple interview rounds and received an offer from Infosys.",
    name: "Sneha Gupta",
    title: "System Engineer",
    company: "Infosys",
  },
  {
    quote:
      "The mock interviews and structured DSA roadmap helped me approach coding interviews with confidence. Every topic was explained clearly, making learning enjoyable. I successfully cracked the technical rounds and started my career at Accenture.",
    name: "Rahul Yadav",
    title: "Associate Software Engineer",
    company: "Accenture",
  },
  {
    quote:
      "I struggled with consistency while learning DSA on my own. Following a proper study plan and solving problems daily improved my confidence and coding skills. Eventually, I secured a Software Analyst position at Capgemini.",
    name: "Neha Singh",
    title: "Software Analyst",
    company: "Capgemini",
  },
  {
    quote:
      "The live sessions, detailed explanations, and interview-focused practice made my preparation much easier. I gained confidence with every contest and coding challenge, which helped me clear the placement process and join Wipro.",
    name: "Vikas Kumar",
    title: "Project Engineer",
    company: "Wipro",
  },
  {
    quote:
      "Learning with a structured roadmap helped me grow from beginner to advanced level. Regular revision, contests, and interview practice kept me motivated throughout my journey. I eventually joined TCS as an Assistant System Engineer.",
    name: "Pooja Sharma",
    title: "Assistant System Engineer",
    company: "TCS",
  },
  {
    quote:
      "Daily coding challenges completely changed my preparation. From struggling with basic arrays to solving graph problems, I improved step by step. The consistent practice helped me secure a Software Developer Internship at Zoho.",
    name: "Harsh Patel",
    title: "Software Developer Intern",
    company: "Zoho",
  },
  {
    quote:
      "The structured learning path and regular interview preparation sessions helped me improve my coding speed and confidence. After months of practice, I successfully cleared all interview rounds and received a Backend Developer offer from Paytm.",
    name: "Kritika Mishra",
    title: "Backend Developer",
    company: "Paytm",
  },
];