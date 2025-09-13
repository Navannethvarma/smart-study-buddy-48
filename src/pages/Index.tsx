import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DashboardPreview from "@/components/DashboardPreview";
import DocumentProcessor from "@/components/DocumentProcessor";
import AssessmentBuilder from "@/components/AssessmentBuilder";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import StudyRecommendations from "@/components/StudyRecommendations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DashboardPreview />
      <DocumentProcessor />
      <AssessmentBuilder />
      <AnalyticsDashboard />
      <StudyRecommendations />
      
      {/* Backend Integration Notice */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Build the Full Experience?</h3>
            <p className="text-muted-foreground mb-6">
              To enable document processing, user authentication, data storage, and AI-powered features, 
              connect your project to Supabase using our native integration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
