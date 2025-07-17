import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  ArrowRightIcon,
  ChartBarIcon,
  ServerIcon,
  CircleStackIcon,
  DocumentTextIcon,
  CheckIcon,
} from "@heroicons/react/24/outline"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white geometric-bg">
      <div className="geometric-element geometric-element-1"></div>
      <div className="geometric-element geometric-element-2"></div>

      <SiteHeader />

      {/* Hero Section - Centered layout without image */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                Edge Computing
                <br />
                <span className="font-normal">Benchmarks</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Developing comprehensive performance metrics and optimization strategies for edge computing
                infrastructures.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-8 py-3 text-base font-medium"
              >
                <Link href="/timeline">
                  View Timeline
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-none text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 px-8 py-3 text-base"
              >
                <Link href="/about">Our Team</Link>
              </Button>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="mt-16 space-y-8">
            <div className="flex items-start space-x-4 max-w-2xl mx-auto">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <CheckIcon className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Edge faces issues with efficiency, compute availability, and understanding task assigned or requested.
              </p>
            </div>

            <div className="flex items-start space-x-4 max-w-2xl mx-auto">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <CheckIcon className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Benchmarks are useful but, existing research is mainly focused on Edge-Cloud pipeline.
              </p>
            </div>

            <div className="flex items-start space-x-4 max-w-2xl mx-auto">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <CheckIcon className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Create specific benchmarks based on compute metrics to aid scheduler in Edge Platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Research Focus</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our comprehensive approach to edge computing performance analysis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-transparent border-none shadow-none transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <CircleStackIcon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-medium text-black dark:text-white mb-3">Data Collection</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Collect data on the gpu metrics that are vital in running LLM on Edge Platforms, specfically, metrics such as GPU utilization, VRAM utilization, etc. 
                </p>
              </CardContent>
            </Card>

            <Card className="bg-transparent border-none shadow-none transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <ChartBarIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-medium text-black dark:text-white mb-3">Resource Management</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Accounts for multiple stages of the compute available, idle stage, overloading prompt requets, and even sending prompt requets while there may background processes running.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-transparent border-none shadow-none transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <ServerIcon className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-medium text-black dark:text-white mb-3">Meaningful Benchmarks</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Intelligent calculation (weighted sum) using GPU metrics to ouput a single value for testing the capability of the edge platform on using LLMs.
                </p>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light mb-12">Project Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-transparent border-none hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-all duration-300">
              <CardContent className="p-0">
                <Link
                  href="https://gitlab.orbit-lab.org/rahulrajkumar/5g-edge-apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-black dark:text-white"
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
                    </div>
                    <span className="text-black dark:text-white font-medium">GitHub Repository</span>
                  </div>
                  <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors transform rotate-45" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-transparent border-none hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-all duration-300">
              <CardContent className="p-0">
                <Link
                  href="https://github.com/alt-rahul/5g-edge-app/blob/main/guides/using-orbit.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-black dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    </div>
                    <span className="text-black dark:text-white font-medium">Documentation</span>
                  </div>
                  <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors transform rotate-45" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
