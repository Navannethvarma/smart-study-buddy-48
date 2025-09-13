import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Lightbulb, 
  Target, 
  Calendar, 
  BookOpen,
  Clock,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const StudyRecommendations = () => {
  const recommendations = [
    {
      type: "Immediate Focus",
      priority: "High",
      title: "Review Algorithm Complexity",
      description: "Based on recent quiz performance, focus on Big O notation and time complexity analysis",
      estimatedTime: "45 mins",
      difficulty: "Medium",
      progress: 30,
      icon: Target
    },
    {
      type: "Skill Building",
      priority: "Medium", 
      title: "Practice Data Structure Implementation",
      description: "Strengthen understanding through hands-on coding exercises",
      estimatedTime: "2 hours",
      difficulty: "Hard",
      progress: 60,
      icon: BookOpen
    },
    {
      type: "Review",
      priority: "Low",
      title: "Machine Learning Fundamentals",
      description: "Quick review of concepts you've mastered to maintain retention",
      estimatedTime: "30 mins",
      difficulty: "Easy",
      progress: 90,
      icon: CheckCircle
    }
  ];

  const studyPlan = [
    { time: "9:00 AM", activity: "Algorithm Complexity Review", duration: "45 min", type: "Focus" },
    { time: "10:00 AM", activity: "Practice Problems", duration: "60 min", type: "Practice" },
    { time: "11:15 AM", activity: "Break", duration: "15 min", type: "Break" },
    { time: "11:30 AM", activity: "Data Structures Quiz", duration: "30 min", type: "Assessment" },
    { time: "12:00 PM", activity: "Review & Notes", duration: "30 min", type: "Review" }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-destructive text-destructive-foreground";
      case "Medium": return "bg-accent text-accent-foreground";
      case "Low": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-success/20 text-success";
      case "Medium": return "bg-accent/20 text-accent";
      case "Hard": return "bg-destructive/20 text-destructive";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "Focus": return "border-l-destructive";
      case "Practice": return "border-l-primary";
      case "Assessment": return "border-l-accent";
      case "Review": return "border-l-success";
      case "Break": return "border-l-muted";
      default: return "border-l-muted";
    }
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Personalized Study{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Recommendations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-powered study suggestions tailored to your learning patterns, performance data, and personal goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recommendations */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  Smart Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendations.map((rec, index) => (
                  <Card key={index} className="bg-background shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <rec.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="text-xs">{rec.type}</Badge>
                              <Badge className={getPriorityColor(rec.priority)}>{rec.priority}</Badge>
                            </div>
                            <h3 className="text-lg font-semibold">{rec.title}</h3>
                          </div>
                        </div>
                        <Button size="sm">
                          Start
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{rec.description}</p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{rec.estimatedTime}</span>
                          </div>
                          <Badge variant="outline" className={getDifficultyColor(rec.difficulty)}>
                            {rec.difficulty}
                          </Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">{rec.progress}% complete</span>
                      </div>
                      
                      <Progress value={rec.progress} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Today's Schedule */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  Today's Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {studyPlan.map((item, index) => (
                    <div key={index} className={`p-3 bg-background rounded-lg shadow-card border-l-4 ${getActivityColor(item.type)}`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm">{item.time}</span>
                        <Badge variant="outline" className="text-xs">{item.duration}</Badge>
                      </div>
                      <h3 className="font-medium text-sm">{item.activity}</h3>
                      <p className="text-xs text-muted-foreground capitalize">{item.type}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary border-0 shadow-glow text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-6 w-6" />
                  <h3 className="text-lg font-semibold">Performance Insights</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-background/20 rounded-lg">
                    <div className="text-sm font-medium">Learning Velocity</div>
                    <div className="text-xs opacity-90">15% faster than average</div>
                  </div>
                  <div className="p-3 bg-background/20 rounded-lg">
                    <div className="text-sm font-medium">Retention Rate</div>
                    <div className="text-xs opacity-90">92% after 7 days</div>
                  </div>
                  <div className="p-3 bg-background/20 rounded-lg">
                    <div className="text-sm font-medium">Next Milestone</div>
                    <div className="text-xs opacity-90">Complete algorithms module</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">7</div>
                    <div className="text-xs text-muted-foreground">Day Streak</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">4.2h</div>
                    <div className="text-xs text-muted-foreground">Today</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">94%</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyRecommendations;