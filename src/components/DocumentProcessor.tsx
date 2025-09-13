import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  Brain, 
  Zap,
  Clock
} from "lucide-react";

const DocumentProcessor = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpload = () => {
    setIsProcessing(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsProcessing(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const features = [
    {
      icon: Brain,
      title: "AI Content Analysis",
      description: "Intelligent extraction of key concepts and topics"
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Process documents in seconds, not minutes"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Automated verification of content accuracy"
    }
  ];

  return (
    <section id="documents" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Intelligent Document{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Processing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload your educational materials and let our AI analyze, structure, and prepare them for personalized learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Upload Interface */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Document Upload
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Drop your files here</h3>
                  <p className="text-muted-foreground mb-4">
                    Support for PDF, DOCX, TXT files up to 10MB
                  </p>
                  <Button onClick={handleUpload} disabled={isProcessing}>
                    {isProcessing ? "Processing..." : "Choose Files"}
                  </Button>
                </div>

                {isProcessing && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Processing document...</span>
                      <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </div>
                )}

                {uploadProgress === 100 && !isProcessing && (
                  <div className="p-4 bg-success-light rounded-lg border border-success/20">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="font-medium text-success">Document processed successfully!</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Ready for assessment generation and learning recommendations.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg shadow-card">
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-sm text-muted-foreground">Documents</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg shadow-card">
                    <div className="text-2xl font-bold text-accent">2.4s</div>
                    <div className="text-sm text-muted-foreground">Avg. Process Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-accent border-0 shadow-glow text-accent-foreground">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-6 w-6" />
                  <h3 className="text-lg font-semibold">Processing Speed</h3>
                </div>
                <p className="mb-4">
                  Our advanced AI processes educational content 10x faster than traditional methods, 
                  identifying key concepts and generating learning materials in real-time.
                </p>
                <Badge variant="secondary" className="bg-background/20 text-accent-foreground">
                  Beta Feature
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentProcessor;