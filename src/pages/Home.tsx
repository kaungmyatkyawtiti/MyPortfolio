import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import IntroSection from '../components/IntroSection';
import Navbar from '../components/Navbar';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSeciton from '../components/SkillsSection';

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <IntroSection />
        <AboutSection />
        <SkillsSeciton />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
