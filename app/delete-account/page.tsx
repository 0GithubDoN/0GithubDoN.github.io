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
            This page explains how to delete your account and data for the mobile game <strong>Void Dash</strong>, developed by <strong>DoN [George Lucian]</strong>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">Option 1: Delete in the app (instant)</h2>

          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Open Void Dash and tap the <strong>Account</strong> button on the main menu.</li>
            <li>Tap <strong>Delete account &amp; data</strong> at the bottom of the Player Account screen.</li>
            <li>Tap it again to confirm. Deletion happens immediately.</li>
          </ol>

          <p>
            This works for both registered accounts and guest players. After deletion the game starts over as a brand new guest.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">Option 2: Request deletion by email</h2>

          <p>
            If you no longer have the app installed, or you also want your leaderboard scores removed completely:
          </p>

          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>
              Send an email to <a href="mailto:lucian3boy@gmail.com?subject=Void%20Dash%20account%20deletion" className="text-void-cyan hover:text-void-magenta transition-colors">lucian3boy@gmail.com</a> with the subject <strong>"Void Dash account deletion"</strong>.
            </li>
            <li>Include your username (or, for guest players, your leaderboard display name).</li>
            <li>We will delete your account and all associated data, including leaderboard scores, and confirm by email within <strong>30 days</strong>.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">What is deleted</h2>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Your Void Dash account (username, password, and player ID) in Unity Gaming Services</li>
            <li>Your cloud save data (coins, best distance, avatar choice, upgrade levels, unlocked and equipped skins)</li>
            <li>Your display name on the leaderboards</li>
            <li>All progress stored on your device (when deleting in the app)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">What is kept</h2>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              When you delete in the app, your best scores may remain on the public leaderboards as an anonymous entry named &quot;DeletedPlayer&quot;, no longer linked to any account. Email us if you want these removed as well.
            </li>
            <li>
              Advertising data collected by Unity Ads is handled under{" "}
              <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy" target="_blank" rel="noopener noreferrer" className="text-void-cyan hover:text-void-magenta transition-colors">Unity&apos;s privacy policy</a>
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
