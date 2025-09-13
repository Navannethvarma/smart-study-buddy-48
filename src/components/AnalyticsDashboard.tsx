import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Target, 
  Clock, 
  Award,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";

const AnalyticsDashboard = () => {
  const performanceData = [
    { subject: "Machine Learning", score: 92, progress: 85, trend: "+5%" },
    { subject: "Data Structures", score: 88, progress: 70, trend: "+12%" },
    { subject: "Web Development", score: 95, progress: 90, trend: "+3%" },
    { subject: "Algorithms", score: 85, progress: 60, trend: "+8%" }
  ];

  const learningPatterns = [
    { pattern: "Peak Performance", time: "10:00 AM - 12:00 PM", efficiency: 95 },
    { pattern: "Optimal Study Duration", time: "45-60 minutes", efficiency: 88 },
    { pattern: "Best Question Type", time: "Multiple Choice", efficiency: 92 },
    { pattern: "Improvement Area", time: "Essay Questions", efficiency: 72 }
  ];

  const achievements = [
    { title: "Quick Learner", description: "Completed 5 assessments in one day", icon: Target },
    { title: "Consistent Student", description: "7-day study streak", icon: Award },
    { title: "High Scorer", description: "Average score above 90%", icon: TrendingUp }
  ];

  return (
    <section id="analytics" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Performance{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Analytics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Detailed insights into your learning patterns, strengths, and areas for improvement with AI-powered recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Performance Overview */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  Subject Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {performanceData.map((subject, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{subject.subject}</h3>
                        <div className="flex items-center gap-3">
                          <Badge 
                            variant="secondary" 
                            className={subject.trend.startsWith('+') ? 'bg-success-light text-success' : 'bg-destructive/10 text-destructive'}
                          >
                            {subject.trend}
                          </Badge>
                          <span className="text-2xl font-bold text-primary">{subject.score}%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Course Progress</span>
                          <span>{subject.progress}%</span>
                        </div>
                        <Progress value={subject.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-6 w-6 text-primary" />
                  Learning Patterns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {learningPatterns.map((pattern, index) => (
                    <div key={index} className="p-4 bg-background rounded-lg shadow-card">
                      <h3 className="font-semibold text-sm mb-1">{pattern.pattern}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{pattern.time}</p>
                      <div className="flex items-center gap-2">
                        <Progress value={pattern.efficiency} className="h-2 flex-1" />
                        <span className="text-sm font-medium text-primary">{pattern.efficiency}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements & Recommendations */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-background rounded-lg shadow-card">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <achievement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{achievement.title}</h3>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-accent border-0 shadow-glow text-accent-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-6 w-6" />
                  AI Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-background/20 rounded-lg">
                    <h3 className="font-semibold text-sm mb-1">Focus Area</h3>
                    <p className="text-sm">Spend more time on Algorithm complexity problems</p>
                  </div>
                  <div className="p-3 bg-background/20 rounded-lg">
                    <h3 className="font-semibold text-sm mb-1">Study Schedule</h3>
                    <p className="text-sm">Your peak performance is at 10 AM - schedule difficult topics then</p>
                  </div>
                  <div className="p-3 bg-background/20 rounded-lg">
                    <h3 className="font-semibold text-sm mb-1">Practice Suggestion</h3>
                    <p className="text-sm">Try more essay-type questions to improve written explanations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary" />
                  This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">8.5h</div>
                    <div className="text-sm text-muted-foreground">Study Time</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-accent">12</div>
                      <div className="text-xs text-muted-foreground">Assessments</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-success">94%</div>
                      <div className="text-xs text-muted-foreground">Avg. Score</div>
                    </div>
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

export default AnalyticsDashboard;