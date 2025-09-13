import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Target, 
  CheckCircle, 
  Edit3, 
  Timer, 
  Brain,
  BarChart3,
  Shuffle
} from "lucide-react";

const AssessmentBuilder = () => {
  const questionTypes = [
    { type: "Multiple Choice", count: 12, icon: CheckCircle, color: "text-primary" },
    { type: "True/False", count: 8, icon: Target, color: "text-accent" },
    { type: "Short Answer", count: 5, icon: Edit3, color: "text-success" },
    { type: "Essay", count: 3, icon: Edit3, color: "text-muted-foreground" }
  ];

  const sampleQuestions = [
    {
      type: "Multiple Choice",
      question: "What is the primary purpose of machine learning?",
      difficulty: "Medium",
      topic: "ML Fundamentals"
    },
    {
      type: "True/False", 
      question: "Neural networks always require large datasets to be effective.",
      difficulty: "Easy",
      topic: "Neural Networks"
    },
    {
      type: "Short Answer",
      question: "Explain the difference between supervised and unsupervised learning.",
      difficulty: "Hard",
      topic: "Learning Types"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-success text-success-foreground";
      case "Medium": return "bg-accent text-accent-foreground";
      case "Hard": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="assessments" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            AI-Powered{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Assessment Builder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Generate customized assessments automatically from your documents with multiple question formats and adaptive difficulty.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Question Types Overview */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Question Types
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {questionTypes.map((type, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg shadow-card">
                    <div className="flex items-center gap-3">
                      <type.icon className={`h-5 w-5 ${type.color}`} />
                      <span className="font-medium">{type.type}</span>
                    </div>
                    <Badge variant="secondary">{type.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary border-0 shadow-glow text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-6 w-6" />
                  <h3 className="text-lg font-semibold">Smart Generation</h3>
                </div>
                <p className="mb-4">
                  Our AI analyzes your document content and automatically generates diverse, 
                  contextually relevant questions across multiple difficulty levels.
                </p>
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm">
                    <Shuffle className="h-4 w-4 mr-2" />
                    Generate Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Assessment Preview */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Assessment Preview</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Timer className="h-4 w-4 mr-2" />
                    30 min
                  </Button>
                  <Button variant="outline" size="sm">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Analytics
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="questions" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="questions">Questions</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                    <TabsTrigger value="results">Results</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="questions" className="space-y-4 mt-6">
                    {sampleQuestions.map((q, index) => (
                      <Card key={index} className="bg-background shadow-card">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex gap-2">
                              <Badge variant="outline">{q.type}</Badge>
                              <Badge className={getDifficultyColor(q.difficulty)}>{q.difficulty}</Badge>
                              <Badge variant="secondary">{q.topic}</Badge>
                            </div>
                            <span className="text-sm text-muted-foreground">Q{index + 1}</span>
                          </div>
                          <p className="font-medium">{q.question}</p>
                          {q.type === "Multiple Choice" && (
                            <div className="mt-3 space-y-2">
                              <div className="text-sm text-muted-foreground">Options:</div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="p-2 bg-muted rounded text-sm">A) Pattern recognition</div>
                                <div className="p-2 bg-muted rounded text-sm">B) Data storage</div>
                                <div className="p-2 bg-muted rounded text-sm">C) File compression</div>
                                <div className="p-2 bg-muted rounded text-sm">D) Network security</div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="settings" className="space-y-4 mt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-background shadow-card">
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">Time Limit</h3>
                          <p className="text-2xl font-bold text-primary">30 minutes</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-background shadow-card">
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">Total Questions</h3>
                          <p className="text-2xl font-bold text-primary">28</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="results" className="space-y-4 mt-6">
                    <div className="text-center py-8">
                      <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Results Analytics</h3>
                      <p className="text-muted-foreground">
                        Assessment results and analytics will appear here after completion.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentBuilder;