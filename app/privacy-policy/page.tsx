import Link from "next/link";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>

        <div className="prose prose-invert prose-cyan max-w-none space-y-6 text-gray-300">
          <p className="text-sm text-gray-500">
            <strong>Last updated:</strong> 3 October 2026
          </p>

          <p>
            This Privacy Policy describes how the mobile game <strong>Void Dash</strong> ("the App", "we", "our") handles information when you play it on mobile devices.
          </p>

          <p>
            The App is developed by <strong>DoN [George Lucian]</strong> ("the developer"). Contact: <a href="mailto:lucian3boy@gmail.com" className="text-void-cyan hover:text-void-magenta transition-colors">lucian3boy@gmail.com</a>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">1. Information we collect</h2>

          <p>
            The App provides both offline and online play. Depending on how you interact with the App, we and our third-party service providers collect and process certain information:
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-void-cyan">A. Local Device Data</h3>
          <p>
            If you play offline, your progress (best distance, total coins, upgrade levels, settings) is stored locally on your device using Unity <code>PlayerPrefs</code>. We do not collect or transmit this local data to servers we control.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-void-cyan">B. Unity Gaming Services (Unity Technologies)</h3>
          <p>
            To provide online features, the App integrates <strong>Unity Gaming Services (UGS)</strong>. If you use these features, Unity processes:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Authentication:</strong> We generate a unique random player ID (anonymous guest sign-in) to sync your progress. If you choose to sign up for a permanent account, we collect the username and password you create. We do <strong>not</strong> collect or require real names or email addresses.</li>
            <li><strong>Cloud Save:</strong> We transmit and store your game progress (coins, best distance, avatar choice, upgrade levels, unlocked and equipped skins) on Unity servers so you can sync and restore your progress.</li>
            <li><strong>Leaderboards:</strong> If you participate, your chosen display name (nickname) and high scores (best distance) are submitted to global public leaderboards visible to other players.</li>
            <li><strong>Analytics:</strong> Technical information such as your IP address, device type, operating system version, and general country/location is collected to help us understand performance and improve the game.</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3 text-void-cyan">C. Unity Ads (Unity Technologies)</h3>
          <p>
            We use Unity Ads to show optional rewarded video ads (e.g., to revive or double coins). Unity Ads may collect:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Advertising identifier (AAID on Android, IDFA on iOS)</li>
            <li>Coarse device information (device model, OS version, language, country)</li>
            <li>IP address</li>
            <li>App usage events related to ads (impressions, completions, clicks)</li>
          </ul>

          <p>
            Unity's privacy practices: <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy" target="_blank" rel="noopener noreferrer" className="text-void-cyan hover:text-void-magenta transition-colors">https://unity.com/legal/game-player-and-app-user-privacy-policy</a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">2. Children's privacy</h2>

          <p>
            The App is <strong>not directed to children under 13</strong>. We do not knowingly collect personal data from children under 13. If you believe a child has submitted data, contact us and we will work with Unity to delete it.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">3. Permissions</h2>

          <p>
            The App requests standard network permissions (e.g., INTERNET, ACCESS_NETWORK_STATE) required for online saves, leaderboards, and ads to function. No sensitive hardware (e.g., camera, microphone, contacts, precise location) is accessed.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">4. Your choices and data control</h2>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Play Offline:</strong> You can choose not to sign in or use online features. Your progress will remain local, and no cloud backups or global leaderboards will be available.</li>
            <li><strong>Account and Data Deletion:</strong> You have the right to request deletion of your online account and all associated UGS data (including leaderboard rankings and cloud saves). To request deletion, email us at <a href="mailto:lucian3boy@gmail.com" className="text-void-cyan hover:text-void-magenta transition-colors">lucian3boy@gmail.com</a> with your username. Full steps are on our <Link href="/delete-account" className="text-void-cyan hover:text-void-magenta transition-colors">account deletion page</Link>.</li>
            <li><strong>Reset Advertising ID:</strong> Reset your mobile device advertising identifier in your Android or iOS settings (e.g., Android Settings → Privacy → Ads).</li>
            <li><strong>Delete Local Data:</strong> Uninstall the App or clear app data via device settings.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">5. Data retention</h2>

          <p>
            Local progress is retained until you uninstall the App or clear its storage. Cloud data saved in Unity Gaming Services is retained until you request account deletion or if the account remains inactive for an extended period. Advertising data is retained per Unity's privacy policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">6. International users</h2>

          <p>
            Your data is processed and stored internationally by Unity Technologies in the United States and other countries where Unity operates. By using the App, you consent to this international transfer and processing.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">7. Changes to this policy</h2>

          <p>
            We may update this policy from time to time. The "Last updated" date at the top reflects the latest version. Continued use of the App constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">8. Contact</h2>

          <p>
            Questions, data requests, or deletion inquiries: <a href="mailto:lucian3boy@gmail.com" className="text-void-cyan hover:text-void-magenta transition-colors">lucian3boy@gmail.com</a>
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
