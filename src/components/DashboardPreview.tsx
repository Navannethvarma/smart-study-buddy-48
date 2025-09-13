import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  FileText, 
  Target, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  Upload,
  PlusCircle
} from "lucide-react";

const DashboardPreview = () => {
  const recentDocuments = [
    { title: "Machine Learning Basics", pages: 45, status: "completed" },
    { title: "Data Structures & Algorithms", pages: 78, status: "in-progress" },
    { title: "Web Development Guide", pages: 120, status: "pending" }
  ];

  const upcomingAssessments = [
    { title: "ML Fundamentals Quiz", questions: 15, due: "Tomorrow" },
    { title: "Algorithm Practice Test", questions: 25, due: "In 3 days" },
    { title: "JavaScript Assessment", questions: 20, due: "Next week" }
  ];

  return (
    <section id="dashboard" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your Personalized Learning{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track your progress, manage documents, and access AI-generated assessments all in one place.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Stats Overview */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Documents Processed</p>
                      <p className="text-3xl font-bold text-primary">12</p>
                    </div>
                    <FileText className="h-12 w-12 text-accent" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Assessments Taken</p>
                      <p className="text-3xl font-bold text-primary">8</p>
                    </div>
                    <Target className="h-12 w-12 text-accent" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Average Score</p>
                      <p className="text-3xl font-bold text-success">92%</p>
                    </div>
                    <TrendingUp className="h-12 w-12 text-success" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Study Hours</p>
                      <p className="text-3xl font-bold text-primary">24.5</p>
                    </div>
                    <Clock className="h-12 w-12 text-accent" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Documents */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-0 shadow-card h-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Recent Documents
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload New
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg shadow-card">
                      <div className="flex-1">
                        <h3 className="font-semibold">{doc.title}</h3>
                        <p className="text-sm text-muted-foreground">{doc.pages} pages</p>
                      </div>
                      <Badge 
                        variant={doc.status === "completed" ? "default" : doc.status === "in-progress" ? "secondary" : "outline"}
                        className={doc.status === "completed" ? "bg-success text-success-foreground" : ""}
                      >
                        {doc.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {doc.status.replace("-", " ")}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Assessments */}
          <div>
            <Card className="bg-gradient-card border-0 shadow-card h-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Upcoming Tests
                </CardTitle>
                <Button variant="outline" size="sm">
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAssessments.map((assessment, index) => (
                    <div key={index} className="p-4 bg-background rounded-lg shadow-card">
                      <h3 className="font-semibold mb-2">{assessment.title}</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{assessment.questions} questions</span>
                          <span className="text-accent font-medium">{assessment.due}</span>
                        </div>
                        <Progress value={Math.random() * 100} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;