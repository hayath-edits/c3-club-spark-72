
import MainLayout from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

const Domains = () => {
  const { isRegistered, user } = useAuth();
  const { toast } = useToast();
  const [quizStarted, setQuizStarted] = useState<Record<string, boolean>>({});
  const [isSubmitting,setIsSubmitting] = useState(false);

  const domains = [
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      description: "Artificial Intelligence and Machine Learning involve creating systems that can learn from data, identify patterns, and make decisions with minimal human intervention.",
      icon: "🤖",
      color: "from-indigo-500 to-purple-600",
      quizUrl: "https://wordwall.net/play/91590/467/332",
      skills: ["Python", "Statistics", "TensorFlow", "PyTorch", "Data Analysis"]
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      description: "Cybersecurity focuses on protecting systems, networks, and programs from digital attacks aimed at accessing, changing, or destroying sensitive information.",
      icon: "🔒",
      color: "from-blue-600 to-cyan-500",
      quizUrl: "https://wordwall.net/play/91595/252/870",
      skills: ["Network Security", "Ethical Hacking", "Cryptography", "Security Auditing", "Incident Response"]
    },
    {
      id: "quantum",
      name: "Quantum Computing",
      description: "Quantum Computing leverages quantum-mechanical phenomena to perform computations that are exponentially faster than classical computers for certain problems.",
      icon: "⚛️",
      color: "from-emerald-500 to-green-600",
      quizUrl: "https://wordwall.net/resource/91589881",
      skills: ["Quantum Algorithms", "Linear Algebra", "Quantum Physics", "Programming (Q#, Qiskit)"]
    },
    {
      id: "web-dev",
      name: "Web Development",
      description: "Web Development involves creating and maintaining websites and web applications, focusing on user experience, performance, and functionality.",
      icon: "🌐",
      color: "from-orange-500 to-amber-600",
      quizUrl: "https://wordwall.net/play/91600/346/203",
      skills: ["HTML/CSS", "JavaScript", "React/Angular/Vue", "Node.js", "Databases"]
    },
    {
      id: "app-dev",
      name: "App Development",
      description: "App Development focuses on creating software applications for mobile devices, desktops, or other platforms with a strong emphasis on user experience.",
      icon: "📱",
      color: "from-pink-500 to-rose-600",
      quizUrl: "https://wordwall.net/play/91600/681/409",
      skills: ["Java/Kotlin (Android)", "Swift (iOS)", "Flutter", "React Native", "UI/UX Design"]
    },
    {
      id: "data-science",
      name: "Data Science",
      description: "Data Science combines statistics, mathematics, programming, and domain expertise to extract knowledge and insights from structured and unstructured data.",
      icon: "📊",
      color: "from-purple-500 to-indigo-600",
      quizUrl: "https://wordwall.net/play/91668/177/937",
      skills: ["Python/R", "Statistical Analysis", "Data Visualization", "Machine Learning", "Big Data"]
    }
  ];

  // useEffect(() => {
  //   const loadQuizStatus = async () => {
  //     if (user && user.email) {
  //       try {
  //         const { data, error } = await supabase
  //           .from('quizzes')
  //           .select('domain')
  //           .eq('user_email', user.email);
            
  //         if (!error && data) {
  //           const startedQuizzes: Record<string, boolean> = {};
  //           data.forEach(quiz => {
  //             startedQuizzes[quiz.domain] = true;
  //           });
  //           setQuizStarted(startedQuizzes);
  //         }
  //       } catch (error) {
  //         console.error("Error loading quiz status:", error);
  //       }
  //     }
  //   };
    
  //   loadQuizStatus();
  // }, [user]);

  // // const handleStartQuiz = async (domain: string, quizUrl: string) => {
  // //   if (!isRegistered) {
  // //     toast({
  // //       title: "Registration Required",
  // //       description: "Please register on the home page to access quizzes.",
  // //       variant: "destructive",
  // //     });
  // //     return;
  // //   }
    
  //   // if (!quizUrl) {
  //   //   toast({
  //   //     title: "Quiz Not Available",
  //   //     description: "This quiz will be available soon.",
  //   //   });
  //   //   return;
  //   // }
    
  //   // try {
  //   //   if (user?.email) {
  //   //     // Record quiz start in Supabase
  //   //     const { data,error } = await supabase
  //   //       .from('quizzes')
  //   //       .insert([
  //   //         { 
  //   //           user_email: user.email, 
  //   //           domain: domain,
  //   //           started_at: new Date().toISOString()
  //   //         }
  //   //       ]);
          
        
  //   //     setQuizStarted(prev => ({...prev, [domain]: true}));
        
  //   //     // Open quiz URL in new tab
  //   //     window.open(quizUrl, '_blank');
  //   //   }
  //   // } catch (error: any) {
  //   //   toast({
  //   //     title: "Error",
  //   //     description: error.message || "Failed to start quiz",
  //   //     variant: "destructive",
  //   //   });
  //   // }
  // };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-club-purple to-club-pink text-white pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Computer Science Domains</h1>
            <p className="text-xl opacity-90">
              Explore the diverse fields within computer science and find the path that aligns with your interests and strengths.
            </p>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Explore CS Domains</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Computer science encompasses a wide range of specialized areas. Discover each domain's unique focus, required skills, and test your knowledge with our interactive quizzes.
            </p>
            
            {!isRegistered && (
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-yellow-800">
                  <strong>Register to access domain quizzes!</strong> Go to the home page to register first.
                </p>
              </div>
            )}
          </div>

          <Tabs defaultValue={domains[0].id} className="max-w-5xl mx-auto">
            <TabsList className="w-full flex flex-wrap mb-8">
              {domains.map((domain) => (
                <TabsTrigger key={domain.id} value={domain.id} className="flex-1 min-w-[120px]">
                  <span className="mr-2">{domain.icon}</span>
                  <span className="hidden sm:inline">{domain.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {domains.map((domain) => (
              <TabsContent key={domain.id} value={domain.id}>
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Main Info Column */}
                  <div className="md:col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 h-full">
                      <div className={`bg-gradient-to-r ${domain.color} w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-2xl`}>
                        {domain.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-club-purple">{domain.name}</h3>
                      <p className="text-gray-700 mb-6">
                        {domain.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-club-dark-purple mb-2">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {domain.skills.map((skill, index) => (
                            <span 
                              key={index} 
                              className="bg-secondary px-3 py-1 text-sm rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <a href={domain.quizUrl} onClick={()=>setIsSubmitting(!isSubmitting)}>
                            <Button            
                              className="w-full bg-gradient-to-r from-club-purple to-club-pink text-white"
                              // disabled={!isRegistered}
                  
                            >
                              {/* {quizStarted[domain.id] ? 'Continue Quiz' : 'Start Quiz'} */}
                              {isSubmitting ? "Starting ..." : "Start Quiz"}  
                            </Button>
                        </a>
                        
                        {!isRegistered && (
                          <p className="text-sm text-gray-500 mt-2 text-center">
                            Please register on the home page to access this quiz.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Quiz Info Column */}
                  <div className="md:col-span-1">
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 h-full">
                      <h3 className="text-xl font-bold mb-4 text-club-purple">Domain Quiz</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Test Your Knowledge</h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Challenge yourself with our interactive {domain.name} quiz and discover how much you know about this field.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold">What You'll Learn</h4>
                          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                            <li>Core concepts of {domain.name}</li>
                            <li>Industry-relevant terminology</li>
                            <li>Real-world applications</li>
                            <li>Required skills for this field</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold">How It Works</h4>
                          <p className="text-sm text-gray-600">
                            Click the 'Start Quiz' button to launch the interactive quiz in a new tab. Your progress will be tracked, so you can continue later.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </MainLayout>
  );
};

export default Domains;
