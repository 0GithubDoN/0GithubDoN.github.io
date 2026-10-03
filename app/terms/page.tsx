import Link from "next/link";

export default function Terms() {
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
          Terms of Service
        </h1>

        <div className="prose prose-invert prose-cyan max-w-none space-y-6 text-gray-300">
          <p className="text-sm text-gray-500">
            <strong>Last updated:</strong> 27 May 2026
          </p>

          <p>
            Welcome to <strong>Void Dash</strong> ("the App"). By downloading, installing, or playing the App, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not install or play the App.
          </p>

          <p>
            The App is developed by <strong>DoN [George Lucian]</strong> ("the developer", "we", "our"). Contact: <a href="mailto:lucian3boy@gmail.com" className="text-void-cyan hover:text-void-magenta transition-colors">lucian3boy@gmail.com</a>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">1. License to Use the App</h2>

          <p>
            We grant you a personal, limited, non-exclusive, non-transferable, and revocable license to download, install, and play the App on your mobile device for your personal, non-commercial entertainment.
          </p>

          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Copy, modify, reverse engineer, decompile, or disassemble the App, except as permitted by applicable law.</li>
            <li>Distribute, lease, sell, or rent the App or its content to others.</li>
            <li>Remove or modify any copyright, trademark, or proprietary notices inside the App.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">2. User Accounts and Cloud Saves</h2>

          <p>
            The App offers optional online accounts and cloud backup features powered by Unity Gaming Services (UGS):
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Guest Play:</strong> You can play without creating an account. Your progress will be saved locally on your device. Clearing app cache or uninstalling the game will lose this data.</li>
            <li><strong>Registered Accounts:</strong> You can create a username and password to sync your progress (coins, distance, skin unlocks, and upgrades) to the cloud. You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>We reserve the right to suspend, reset, or terminate guest sessions or registered accounts at our sole discretion, without notice or liability, if we detect behavior that violates these Terms.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">3. Virtual Coins and Upgrades</h2>

          <p>
            All coins, skins, and upgrades in the App are digital virtual goods:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>They have <strong>no real-world monetary value</strong>.</li>
            <li>They cannot be traded, sold, exchanged, or redeemed for cash, real goods, or services.</li>
            <li>They cannot be transferred between accounts or players.</li>
            <li>The developer is not responsible for any accidental loss of virtual currency or unlocked items due to device failure, uninstalling, or server errors.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">4. Leaderboards and Fair Play (Anti-Cheat)</h2>

          <p>To maintain a fun and fair environment for all players:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>You agree not to hack, exploit bugs, use memory editors, automate gameplay (bots), or use any third-party tools to manipulate your scores, coins, or distance.</li>
            <li>Any submission of implausible, hacked, or manipulated scores to the global leaderboards is a breach of these Terms.</li>
            <li><strong>Enforcement:</strong> We reserve the right to delete your scores, reset your progress, change or remove offensive nicknames, and permanently ban your UGS player account from accessing the global leaderboards if we suspect cheating or hacking.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">5. Third-Party Services and Ads</h2>

          <p>
            The App displays rewarded video ads powered by Unity Ads. While we attempt to ensure ads are appropriate, we do not control the external content displayed in third-party advertisements and are not responsible for any websites or services linked from ads.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">6. Disclaimer of Warranties</h2>

          <p>
            THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE DEVELOPER DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE APP WILL RUN UNINTERRUPTED, BUG-FREE, SECURE, OR THAT DATA WILL NEVER BE LOST.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">7. Limitation of Liability</h2>

          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE DEVELOPER (DoN [George Lucian]) BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES arising out of or relating to your play or inability to play the App, including loss of local or cloud save progress, even if advised of the possibility of such damages.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">8. Governing Law</h2>

          <p>
            These Terms and any disputes arising out of them shall be governed by and construed in accordance with the laws of the developer's country of residence, without regard to conflict of law principles.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">9. Changes to Terms</h2>

          <p>
            We may update these Terms from time to time. The "Last updated" date at the top reflects the latest version. Continued use of the App after changes are posted constitutes your binding acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-void-cyan">10. Contact</h2>

          <p>
            For questions about these Terms, please email: <a href="mailto:lucian3boy@gmail.com" className="text-void-cyan hover:text-void-magenta transition-colors">lucian3boy@gmail.com</a>
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
