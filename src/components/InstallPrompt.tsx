'use client';

import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function InstallPrompt() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Check if previously dismissed
    const wasDismissed = localStorage.getItem('pwa-prompt-dismissed');
    if (wasDismissed) {
      const dismissedTime = parseInt(wasDismissed);
      // Show again after 7 days
      if (Date.now() - dismissedTime < 7 * 24 * 60 * 60 * 1000) {
        setDismissed(true);
        return;
      }
    }

    // Listen for install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;

    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;

    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    setInstallPrompt(null);
  };

  const handleDismiss = () => {
    localStorage.setItem('pwa-prompt-dismissed', Date.now().toString());
    setDismissed(true);
  };

  // Don't show if installed, dismissed, or no prompt available
  if (isInstalled || dismissed || !installPrompt) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
      
      <div className="relative flex flex-col md:flex-row items-center gap-4">
        <div className="text-5xl">📱</div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold mb-1">
            Get the CricutHelper App!
          </h3>
          <p className="text-pink-100 text-sm">
            Add to your home screen for instant access — even offline. It's free!
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleInstall}
            className="bg-white text-pink-500 px-6 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors shadow-lg"
          >
            Install Free
          </button>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white px-3 py-2 text-sm"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}

// iOS-specific install instructions (iOS doesn't support beforeinstallprompt)
export function IOSInstallPrompt() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if iOS Safari
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

    if (isIOS && isSafari && !isStandalone) {
      // Check if dismissed
      const wasDismissed = localStorage.getItem('ios-install-dismissed');
      if (!wasDismissed) {
        setShow(true);
      }
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('ios-install-dismissed', 'true');
    setDismissed(true);
  };

  if (!show || dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 mb-8 text-white">
      <div className="flex items-start gap-4">
        <div className="text-4xl">📲</div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2">
            Add CricutHelper to Home Screen
          </h3>
          <p className="text-blue-100 text-sm mb-3">
            For the best experience on iPhone/iPad:
          </p>
          <ol className="text-sm text-blue-100 space-y-1">
            <li>1. Tap the <span className="inline-block px-2 bg-white/20 rounded">Share</span> button below</li>
            <li>2. Scroll down and tap <strong>"Add to Home Screen"</strong></li>
            <li>3. Tap <strong>"Add"</strong> to install</li>
          </ol>
        </div>
        <button
          onClick={handleDismiss}
          className="text-white/70 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
