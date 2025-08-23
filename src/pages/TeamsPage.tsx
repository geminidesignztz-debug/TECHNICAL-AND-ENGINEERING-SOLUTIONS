import { TeamSection } from '../components/TeamSection';
import { LegalSection } from '../components/LegalSection';

export function TeamsPage() {
  return (
    <main className="pt-20">
      <TeamSection />
      <LegalSection />
    </main>
  );
}