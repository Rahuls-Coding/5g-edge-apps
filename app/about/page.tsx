import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  {
    name: "Andrew Michael",
    role: "Research Engineer",
    image: "/images/andrew.png",
    description:
      "Rising junior at Rutgers majoring in ECE. Intersted in cybersec and cloud.",
    expertise: ["Cloud Infra", "Edge Compute",],
    links: {
      github: "https://gitlab.orbit-lab.org/Andrew2545",
      linkedin: "https://https://www.linkedin.com/in/andrew-michael-014b07300/",
      email: "andrew.micheal@rutgers.edu",
    },
  },
  {
    name: "Rahul Rajkumar",
    role: "Principal Investigator",
    image: "/images/rahul.jpg",
    description:
      "Rising sophomore at Rutgers majoring in CS + Math. Interested in ML/AI research related to computer vision and time series. ",
    expertise: ["Machine/Deep Learning", "Data Science",],
    links: {
      github: "https://github.com/alt-rahul",
      linkedin: "https://linkedin.com/in/rahulrajkumar01",
      email: "rahulrajkumar@rutgers.edu",
    },
  },
  {
    name: "Xiaotian Zhou",
    role: "Data Analyst",
    image: "/images/jack.png",
    description:
      "First year PhD student at Rutgers. Very smart.",
    expertise: ["Home Labs", "Cloud/Edge/DevOps", ],
    links: {
      github: "https://github.com/I-dont-know",
      linkedin: "https://linkedin.com/in/xiaotian-zhou-b8b5381bb/",
      email: "xz446@scarletmail.rutgers.edu",
    },
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white geometric-bg">
      <div className="geometric-element geometric-element-1"></div>
      <div className="geometric-element geometric-element-2"></div>

      <SiteHeader />

      {/* Header */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-light mb-6">Our Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Researchers and engineers advancing edge computing benchmarks
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-transparent border-none hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    {/* Avatar */}
                    <Avatar className="h-24 w-24 mb-6 border-2 border-gray-300 dark:border-gray-800">
                      <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback className="text-lg bg-gray-200 dark:bg-gray-900 text-black dark:text-white">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    {/* Name and Role */}
                    <div className="mb-4">
                      <h3 className="text-xl font-medium text-black dark:text-white mb-2">{member.name}</h3>
                      
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm">
                      {member.description}
                    </p>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h4 className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">Expertise</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="text-xs text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 bg-transparent"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <Link
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-900"
                      >
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </Link>
                      <Link
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-900"
                      >
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </Link>
                      <Link
                        href={`mailto:${member.links.email}`}
                        className="text-gray-500 hover:text-black dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-900"
                      >
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
