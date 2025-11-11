import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, Clock, User } from "lucide-react";
import AppointmentModal from "@/components/AppointmentModal";
import SEO from "@/components/SEO";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
}

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Understanding Fatty Liver Disease: Causes and Prevention",
      category: "Liver Health",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=500&fit=crop",
      excerpt: "Learn about fatty liver disease, its causes, symptoms, and how lifestyle changes can help prevent and reverse this condition.",
      content: `Fatty liver disease occurs when fat builds up in liver cells, affecting liver function. It's becoming increasingly common worldwide.

Types of Fatty Liver Disease:
• Non-Alcoholic Fatty Liver Disease (NAFLD) - Not related to alcohol
• Alcoholic Fatty Liver Disease - Caused by excessive alcohol intake

Common Causes:
• Obesity and being overweight
• Type 2 diabetes
• High cholesterol and triglycerides
• Poor diet high in processed foods
• Sedentary lifestyle

Prevention and Management:
• Maintain healthy weight through balanced diet
• Exercise regularly (30 minutes daily)
• Limit alcohol consumption
• Control blood sugar and cholesterol
• Avoid processed foods and sugary drinks

When to See a Doctor:
If you experience fatigue, abdominal discomfort, or have risk factors, consult a hepatologist for evaluation and treatment.`,
      date: "November 8, 2025",
      author: "Dr. S. Kumaragurubaran",
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "Hepatitis B and C: What You Need to Know",
      category: "Liver Health",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=500&fit=crop",
      excerpt: "Comprehensive guide to viral hepatitis, including symptoms, transmission, and modern treatment options.",
      content: `Viral hepatitis is a major cause of liver disease worldwide. Understanding these conditions is crucial for prevention and treatment.

Hepatitis B:
• Transmitted through blood and bodily fluids
• Can be prevented with vaccination
• May become chronic in some cases
• Treatment available with antiviral medications

Hepatitis C:
• Primarily transmitted through blood contact
• Often asymptomatic in early stages
• Can lead to cirrhosis if untreated
• Now curable with direct-acting antivirals

Common Symptoms:
• Fatigue and weakness
• Jaundice (yellowing of skin and eyes)
• Dark urine
• Abdominal pain
• Loss of appetite

Prevention Tips:
• Get vaccinated for Hepatitis B
• Practice safe hygiene
• Avoid sharing needles or personal items
• Screen blood products properly

Modern antiviral therapies have revolutionized hepatitis treatment, with cure rates exceeding 95% for Hepatitis C. Early detection is key.`,
      date: "November 5, 2025",
      author: "Dr. S. Kumaragurubaran",
      readTime: "3 min read",
    },
    {
      id: 3,
      title: "10 Foods That Support Liver Health",
      category: "Nutrition",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=500&fit=crop",
      excerpt: "Discover the best foods to include in your diet for optimal liver function and overall health.",
      content: `Your diet plays a crucial role in maintaining liver health. Here are 10 foods that support liver function:

1. Leafy Green Vegetables
Spinach, kale, and other greens help neutralize toxins and support liver detoxification.

2. Fatty Fish
Salmon, mackerel, and sardines are rich in omega-3 fatty acids that reduce inflammation.

3. Nuts
Walnuts and almonds contain healthy fats and antioxidants that support liver health.

4. Olive Oil
Extra virgin olive oil helps reduce liver fat and improve enzyme levels.

5. Green Tea
Rich in antioxidants that support liver function and reduce fat accumulation.

6. Garlic
Contains compounds that activate liver enzymes and flush out toxins.

7. Turmeric
Powerful anti-inflammatory properties that protect liver cells.

8. Beetroot
High in antioxidants and helps purify blood and support liver function.

9. Citrus Fruits
Lemons, oranges, and grapefruits boost liver detoxification enzymes.

10. Whole Grains
Brown rice, oats, and quinoa provide fiber and support healthy liver function.

Foods to Avoid: Excessive alcohol, processed foods, sugary drinks, fried foods, and high-sodium foods.`,
      date: "November 2, 2025",
      author: "Nutritionist Team",
      readTime: "3 min read",
    },
    {
      id: 4,
      title: "Cirrhosis: Understanding Advanced Liver Disease",
      category: "Liver Health",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
      excerpt: "Learn about cirrhosis, its stages, complications, and management strategies for better quality of life.",
      content: `Cirrhosis is scarring of the liver caused by long-term damage. Healthy liver tissue is replaced by scar tissue, preventing proper function.

Common Causes:
• Chronic viral hepatitis (B and C)
• Alcoholic liver disease
• Non-alcoholic fatty liver disease
• Autoimmune hepatitis
• Genetic disorders

Stages of Liver Damage:
1. Healthy Liver
2. Fatty Liver
3. Fibrosis (scarring)
4. Cirrhosis
5. Liver Cancer (in some cases)

Common Symptoms:
• Fatigue and weakness
• Easy bruising and bleeding
• Swelling in legs and abdomen
• Jaundice
• Confusion
• Spider-like blood vessels on skin

Management:
• Treat underlying cause
• Medications for complications
• Dietary modifications (low sodium, adequate protein)
• Regular monitoring
• Liver transplant evaluation if needed

Early detection and proper management can slow progression and improve quality of life. Regular follow-up with a hepatologist is essential.`,
      date: "October 28, 2025",
      author: "Dr. S. Kumaragurubaran",
      readTime: "3 min read",
    },
    {
      id: 5,
      title: "The Importance of Regular Liver Health Checkups",
      category: "Prevention",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=500&fit=crop",
      excerpt: "Why regular liver screenings are crucial for early detection and prevention of liver diseases.",
      content: `Regular liver health checkups are essential for early detection. Many liver diseases are asymptomatic in early stages.

Who Should Get Screened:
• People with family history of liver disease
• Those with diabetes or obesity
• Individuals with history of alcohol use
• People with viral hepatitis risk factors
• Anyone taking medications that affect the liver

Common Screening Tests:

Liver Function Tests (LFTs):
• ALT and AST enzymes
• Bilirubin levels
• Albumin and total protein
• Alkaline phosphatase

Imaging Studies:
• Ultrasound
• FibroScan (liver stiffness measurement)
• CT or MRI when needed

Viral Hepatitis Screening:
• Hepatitis B surface antigen
• Hepatitis C antibody

Recommended Screening Frequency:
• Annual checkups for high-risk individuals
• Every 2-3 years for general population
• More frequent monitoring if liver disease is present

Benefits of Early Detection:
• Prevent progression to cirrhosis
• Better treatment outcomes
• Avoid complications
• Improve quality of life

Don't wait for symptoms. Schedule your liver health checkup today!`,
      date: "October 25, 2025",
      author: "Dr. S. Kumaragurubaran",
      readTime: "3 min read",
    },
    {
      id: 6,
      title: "Living Well After Liver Transplant: A Patient's Guide",
      category: "Success Stories",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&h=500&fit=crop",
      excerpt: "Essential tips and guidance for life after liver transplant, including medication, diet, and lifestyle adjustments.",
      content: `Life after liver transplant requires commitment to medications, lifestyle changes, and regular follow-ups.

Medications:
• Take immunosuppressants as prescribed (prevent rejection)
• Anti-infection medications
• Never skip or adjust doses without consulting your doctor

Follow-up Schedule:
• Weekly visits initially
• Monthly after 3 months
• Every 3-6 months long-term
• Blood tests at each visit

Diet Guidelines:
• Balanced, nutritious meals
• Adequate protein intake
• Limit salt and sugar
• Stay hydrated
• Avoid raw or undercooked foods
• No grapefruit (interferes with medications)

Exercise:
• Start slowly with walking
• Gradually increase activity
• Aim for 30 minutes daily
• Avoid contact sports initially

Warning Signs to Watch:
• Fever above 100.4°F
• Abdominal pain or swelling
• Jaundice
• Dark urine
• Unusual fatigue

Long-term Success Tips:
• Take medications exactly as prescribed
• Attend all follow-up appointments
• Maintain healthy lifestyle
• Avoid alcohol completely
• Protect yourself from infections

Most transplant recipients return to normal activities within 3-6 months. Your transplant team is always available for questions.`,
      date: "October 20, 2025",
      author: "Transplant Care Team",
      readTime: "4 min read",
    },
  ];

  const categories = ["All", "Liver Health", "Nutrition", "Prevention", "Success Stories"];

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Liver Health Blog | Expert Articles & Tips | Liver Cure Clinic Trichy"
        description="Read expert articles on liver health, hepatitis, cirrhosis, fatty liver disease, and liver care tips by Dr. Kumaragurubaran. Stay informed about liver wellness and treatment options."
        keywords="liver health blog, liver care tips, hepatitis information, cirrhosis articles, fatty liver blog, liver disease prevention, liver health tips trichy, liver wellness, hepatology blog, liver care articles"
        canonical="https://livercureclinic.com/blog"
      />
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=800&fit=crop"
            alt="Medical library and health education"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Liver Health Education
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Expert insights, patient stories, and practical tips for liver wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className={
                  category === selectedCategory
                    ? "bg-primary hover:bg-primary/90 cursor-pointer px-4 py-2"
                    : "cursor-pointer hover:bg-muted px-4 py-2"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground text-center">
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="border-0 shadow-soft hover-lift hover:shadow-medium transition-all overflow-hidden cursor-pointer group"
                onClick={() => setSelectedPost(post)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-poppins font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      <Dialog open={selectedPost !== null} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
          {selectedPost && (
            <div className="relative">
              {/* Hero Image with Overlay */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Title Overlay on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      {selectedPost.category}
                    </Badge>
                    <span className="text-sm flex items-center text-white/90">
                      <Clock className="h-4 w-4 mr-1" />
                      {selectedPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-poppins font-bold mb-3">
                    {selectedPost.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-white/90">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {selectedPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {selectedPost.date}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6 italic border-l-4 border-primary pl-4">
                    {selectedPost.excerpt}
                  </p>
                  <div className="text-base leading-relaxed whitespace-pre-line text-foreground space-y-4">
                    {selectedPost.content}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-8 pt-6 border-t">
                  <div className="bg-muted/50 rounded-lg p-6 mb-6">
                    <h3 className="font-poppins font-semibold text-lg mb-2">
                      Need Expert Consultation?
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Our specialists are here to help. Schedule an appointment for personalized care.
                    </p>
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => {
                          setSelectedPost(null);
                          setShowAppointmentModal(true);
                        }}
                        className="bg-gradient-hero hover:opacity-90"
                      >
                        Book Appointment
                      </Button>
                      <Button 
                        onClick={() => setSelectedPost(null)}
                        variant="outline"
                      >
                        Close Article
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={showAppointmentModal} 
        onClose={() => setShowAppointmentModal(false)} 
      />
    </div>
  );
};

export default Blog;
