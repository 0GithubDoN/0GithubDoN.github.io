import Link from "next/link";

export const metadata = {
  title: "Delete Your Account - Void Dash",
  description: "How to request deletion of your Void Dash account and associated data.",
};

export default function DeleteAccount() {
  return (
    <main className="min-h-screen bg-void-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-void-dark/80 backdrop-blur-md border-b border-void-cyan/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-glow-cyan text-void-cyan">
            VOID DASH
          </Link>
          <Link href="/" className="hover:text-void-cyan transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-void-cyan text-glow-cyan">
          Delete Your Account
        </h1>

        <div className="prose prose-invert prose-cyan max-w-none space-y-6 text-gray-300">
          <p>
            This page explains how to request deletion of your account and data for the mobile game <strong>Void Dash</strong>, developed by <strong>DoN [George Lucian]</strong>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">How to request deletion</h2>

          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>
              Send an email to <a href="mailto:lucian3boy@gmail.com?subject=Void%20Dash%20account%20deletion" className="text-void-cyan hover:text-void-magenta transition-colors">lucian3boy@gmail.com</a> with the subject <strong>"Void Dash account deletion"</strong>.
            </li>
            <li>Include the username of the account you want deleted (and your leaderboard display name, if different).</li>
            <li>We will confirm by email once the deletion is complete, within <strong>30 days</strong> of your request.</li>
          </ol>

          <p>
            If you only ever played as a guest (without creating a username), your progress is tied to this device. Uninstalling the App or clearing its storage removes your local data; you can also email us to have the guest cloud data removed.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">What is deleted</h2>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Your Void Dash account (username, password, and player ID) in Unity Gaming Services</li>
            <li>Your cloud save data (coins, best distance, avatar choice, upgrade levels, unlocked and equipped skins)</li>
            <li>Your leaderboard entries and display name</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">What is kept</h2>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>We do not keep any of the account data listed above after deletion.</li>
            <li>Progress stored locally on your device stays there until you uninstall the App or clear its storage.</li>
            <li>
              Advertising data collected by Unity Ads is handled under{" "}
              <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy" target="_blank" rel="noopener noreferrer" className="text-void-cyan hover:text-void-magenta transition-colors">Unity's privacy policy</a>
              . You can reset your advertising ID in your device settings (e.g., Android Settings → Privacy → Ads).
            </li>
          </ul>

          <p>
            For more details, see our <Link href="/privacy-policy" className="text-void-cyan hover:text-void-magenta transition-colors">Privacy Policy</Link>.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-void-cyan/20">
          <Link href="/" className="text-void-cyan hover:text-void-magenta transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
