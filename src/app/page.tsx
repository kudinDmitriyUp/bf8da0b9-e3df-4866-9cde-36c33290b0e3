"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Crown, Globe, Star, TrendingUp, Users } from 'lucide-react';

export default function LuxuryRealEstatePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="standard"
      sizing="medium"
      background="light"
      cardStyle="glass-flat"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Properties", id: "product" },
            { name: "About", id: "about" },
            { name: "Services", id: "feature" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Luxe Estates"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="LUXE ESTATES"
          description="Discover extraordinary properties in the world's most prestigious locations. Your gateway to luxury living awaits."
          buttons={[
            { text: "View Properties", href: "product" },
            { text: "Schedule Consultation", href: "contact" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635760609-02ha2tya.jpg",
              imageAlt: "Luxury villa with infinity pool"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635761415-n4m0djhx.jpg",
              imageAlt: "Premium penthouse interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635763983-jxy4u41j.jpg",
              imageAlt: "Elegant mansion facade"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635764877-xr3vfsc1.jpg",
              imageAlt: "High-end apartment with city view"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635765581-eeurr3ya.jpg",
              imageAlt: "Boutique real estate office"
            }
          ]
          autoplayDelay={4000}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="About Luxe Estates"
          title="Redefining Luxury Real Estate"
          description="With over two decades of experience in premium property development and sales, we specialize in connecting discerning clients with exceptional homes in the world's most coveted locations."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635766487-xzikry9s.jpg",
            imageAlt: "Luxury property app interface"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635767164-xu9ktark.jpg",
            imageAlt: "Property search mobile app"
          }}
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Meet Our Team", href: "team" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardEight
          title="Our Premium Services"
          description="Experience the finest in luxury real estate services, from property acquisition to concierge support."
          tag="Exclusive Services"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Property Discovery",
              description: "Access to exclusive off-market properties and premium listings worldwide.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635767960-33llzzua.jpg",
              imageAlt: "Virtual property tour technology"
            },
            {
              id: 2,
              title: "Investment Advisory",
              description: "Expert guidance on luxury real estate investments and portfolio management.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635768618-6v8rzt3a.jpg",
              imageAlt: "Property investment dashboard"
            },
            {
              id: 3,
              title: "White-Glove Service",
              description: "Comprehensive concierge services for seamless property transactions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635769152-6hrtu6qf.jpg",
              imageAlt: "Luxury home inspection services"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Properties"
          description="Discover our curated selection of the world's most prestigious properties."
          tag="Exclusive Listings"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Oceanfront Villa",
              price: "$12.5M",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635769603-e3pno96h.jpg",
              imageAlt: "Luxury waterfront villa"
            },
            {
              id: "2",
              name: "Manhattan Penthouse",
              price: "$18.7M",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635770329-ltmuvtcg.jpg",
              imageAlt: "Modern penthouse with skyline view"
            },
            {
              id: "3",
              name: "Historic Townhouse",
              price: "$9.2M",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635771124-meh6yed1.jpg",
              imageAlt: "Elegant historic townhouse"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Investment Opportunities"
          description="Choose from our exclusive property investment packages tailored to your portfolio."
          tag="Investment Plans"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$5M - $15M",
              subtitle: "Premium residential properties",
              buttons: [
                { text: "Schedule Viewing", href: "contact" },
                { text: "Get Details", href: "contact" }
              ],
              features: [
                "Prime urban locations",
                "Full-service property management",
                "Concierge services included",
                "Investment performance tracking"
              ]
            },
            {
              id: "ultra-luxury",
              badge: "Exclusive",
              badgeIcon: Crown,
              price: "$15M+",
              subtitle: "Ultra-luxury estates and penthouses",
              buttons: [
                { text: "Private Consultation", href: "contact" },
                { text: "Portfolio Review", href: "contact" }
              ],
              features: [
                "Trophy properties worldwide",
                "Private wealth advisory",
                "Bespoke acquisition services",
                "Global property network access"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Market Leadership"
          description="Our track record speaks for itself in the luxury real estate market."
          tag="Our Impact"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "$2.5B",
              title: "Properties Sold",
              description: "Total value of luxury properties transacted",
              icon: TrendingUp
            },
            {
              id: "2",
              value: "500+",
              title: "Elite Clients",
              description: "High-net-worth individuals served",
              icon: Users
            },
            {
              id: "3",
              value: "25",
              title: "Global Markets",
              description: "International luxury property markets",
              icon: Globe
            },
            {
              id: "4",
              value: "98%",
              title: "Client Satisfaction",
              description: "Customer satisfaction rate",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Our Expert Team"
          description="Meet the luxury real estate professionals dedicated to your success."
          tag="Leadership"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Victoria Sterling",
              role: "Founder & CEO",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635772059-3j7tv7ax.jpg",
              imageAlt: "Victoria Sterling - Founder & CEO"
            },
            {
              id: "2",
              name: "Alexander Beaumont",
              role: "Head of Development",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635772713-ekgu88ms.jpg",
              imageAlt: "Alexander Beaumont - Head of Development"
            },
            {
              id: "3",
              name: "Isabella Rothschild",
              role: "Senior Luxury Broker",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635773397-hot02bk0.jpg",
              imageAlt: "Isabella Rothschild - Senior Luxury Broker"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="Client Testimonials"
          description="Hear from our distinguished clients about their luxury real estate experience."
          tag="What Clients Say"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "James Whitmore",
              handle: "@jwhitmore",
              testimonial: "Luxe Estates found us the perfect penthouse in Manhattan. Their attention to detail and market knowledge is unparalleled.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635773930-p7tfry9q.jpg",
              imageAlt: "James Whitmore testimonial"
            },
            {
              id: "2",
              name: "Caroline Mitchell",
              handle: "@cmitchell",
              testimonial: "The team's professionalism and discretion made our $20M acquisition seamless. Highly recommended for luxury transactions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635774591-n9vj1xl8.jpg",
              imageAlt: "Caroline Mitchell testimonial"
            },
            {
              id: "3",
              name: "Robert Harrison",
              handle: "@rharrison",
              testimonial: "Outstanding service from start to finish. They delivered exactly what we were looking for in the luxury market.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635775168-xh23t7jq.jpg",
              imageAlt: "Robert Harrison testimonial"
            },
            {
              id: "4",
              name: "Diana Pemberton",
              handle: "@dpemberton",
              testimonial: "Their global network and expertise helped us find our dream home in the most exclusive neighborhood.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635775875-h1in4aj8.jpg",
              imageAlt: "Diana Pemberton testimonial"
            },
            {
              id: "5",
              name: "Edward Blackstone",
              handle: "@eblackstone",
              testimonial: "Luxe Estates understands the luxury market like no one else. Their investment advice has been invaluable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635776627-arqo61p1.jpg",
              imageAlt: "Edward Blackstone testimonial"
            },
            {
              id: "6",
              name: "Sophia Laurent",
              handle: "@slaurent",
              testimonial: "Exceptional white-glove service. They made our international property purchase effortless and secure.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635777458-yg7fdrn9.jpg",
              imageAlt: "Sophia Laurent testimonial"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Trusted by Luxury Brands"
          description="Partnering with the world's most prestigious hospitality and luxury brands."
          tag="Partnerships"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635778217-r42r66b3.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635778932-4s14m7z4.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635779671-u55aobr6.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635780510-txjr4x63.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635781301-xkots132.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about luxury real estate investment and our services."
          tag="FAQ"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What makes Luxe Estates different from other real estate companies?",
              content: "We specialize exclusively in luxury properties above $5M, offer white-glove concierge services, and maintain an exclusive network of off-market properties worldwide."
            },
            {
              id: "2",
              title: "Do you handle international property transactions?",
              content: "Yes, we have partnerships in 25+ global luxury markets including London, Monaco, Dubai, Hong Kong, and major US cities."
            },
            {
              id: "3",
              title: "What is your typical commission structure?",
              content: "Our commission varies based on property value and services required. We provide transparent pricing and can discuss custom arrangements for portfolio clients."
            },
            {
              id: "4",
              title: "How do you ensure privacy and discretion?",
              content: "We maintain strict confidentiality agreements, use private showings, and have protocols specifically designed for high-profile clients."
            },
            {
              id: "5",
              title: "Do you provide property management services?",
              content: "Yes, we offer comprehensive property management for luxury estates including maintenance, security, and concierge services."
            },
            {
              id: "6",
              title: "What is your investment advisory process?",
              content: "We provide market analysis, ROI projections, and ongoing portfolio management specifically for luxury real estate investments."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardTwo
          title="Market Insights"
          description="Stay informed with the latest trends and insights from the luxury real estate market."
          tag="Latest Articles"
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              tags: ["Market Analysis", "Investment"],
              title: "Luxury Real Estate Market Outlook 2025",
              excerpt: "Comprehensive analysis of luxury property trends and investment opportunities for the coming year.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635783129-ww1kg2rk.jpg",
              imageAlt: "Luxury real estate market analysis",
              authorName: "Victoria Sterling",
              date: "January 15, 2025"
            },
            {
              id: "2",
              tags: ["Investment", "Strategy"],
              title: "Building a Premium Property Portfolio",
              excerpt: "Expert strategies for diversifying your luxury real estate investments across global markets.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635784165-4boyuhxc.jpg",
              imageAlt: "Premium property investment guide",
              authorName: "Alexander Beaumont",
              date: "January 10, 2025"
            },
            {
              id: "3",
              tags: ["Design", "Trends"],
              title: "Luxury Home Design Trends 2025",
              excerpt: "The latest in high-end interior design and architecture shaping luxury properties this year.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635785233-gbh85e1o.jpg",
              imageAlt: "High-end home design trends",
              authorName: "Isabella Rothschild",
              date: "January 5, 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Begin Your Luxury Real Estate Journey"
          description="Contact our experts for a private consultation about your luxury property needs."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763635785737-tv2coejh.jpg"
          imageAlt="Luxe Estates premium office interior"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Schedule Consultation"
          termsText="By submitting, you agree to receive exclusive luxury property updates and market insights from Luxe Estates."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Luxe Estates"
          copyrightText="© 2025 | Luxe Estates - Luxury Real Estate"
          columns={[
            {
              title: "Properties",
              items: [
                { label: "Residential", href: "product" },
                { label: "Commercial", href: "product" },
                { label: "International", href: "product" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Property Search", href: "feature" },
                { label: "Investment Advisory", href: "feature" },
                { label: "Property Management", href: "feature" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}