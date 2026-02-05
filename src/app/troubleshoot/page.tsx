"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { troubleshootingFlows, issueCategories, TroubleshootingStep, Solution } from "@/data/troubleshooting";

function TroubleshootContent() {
  const searchParams = useSearchParams();
  const initialIssue = searchParams.get("issue");
  
  const [selectedIssue, setSelectedIssue] = useState<string | null>(initialIssue);
  const [currentStepId, setCurrentStepId] = useState<string>("start");
  const [history, setHistory] = useState<string[]>([]);
  const [solution, setSolution] = useState<Solution | null>(null);

  useEffect(() => {
    if (initialIssue && troubleshootingFlows[initialIssue]) {
      setSelectedIssue(initialIssue);
    }
  }, [initialIssue]);

  const currentFlow = selectedIssue ? troubleshootingFlows[selectedIssue] : null;
  const currentStep = currentFlow?.find(step => step.id === currentStepId);

  const handleSelectIssue = (issueId: string) => {
    if (troubleshootingFlows[issueId]) {
      setSelectedIssue(issueId);
      setCurrentStepId("start");
      setHistory([]);
      setSolution(null);
    }
  };

  const handleSelectOption = (nextStep?: string, solutionData?: Solution) => {
    if (solutionData) {
      setSolution(solutionData);
    } else if (nextStep) {
      setHistory([...history, currentStepId]);
      setCurrentStepId(nextStep);
    }
  };

  const handleBack = () => {
    if (solution) {
      setSolution(null);
    } else if (history.length > 0) {
      const prevStep = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setCurrentStepId(prevStep);
    } else {
      setSelectedIssue(null);
      setCurrentStepId("start");
    }
  };

  const handleStartOver = () => {
    setSelectedIssue(null);
    setCurrentStepId("start");
    setHistory([]);
    setSolution(null);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-pink-500 hover:underline">← Home</Link>
        <h1 className="text-3xl font-bold text-gray-800 mt-4">🔧 Troubleshooting Wizard</h1>
        <p className="text-gray-600 mt-2">Answer a few questions and we'll help you fix your Cricut issue.</p>
      </div>

      {/* Issue Selection */}
      {!selectedIssue && (
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">What problem are you experiencing?</h2>
          <div className="grid gap-3">
            {issueCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleSelectIssue(category.id)}
                disabled={!troubleshootingFlows[category.id]}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                  troubleshootingFlows[category.id]
                    ? "border-gray-200 hover:border-pink-400 hover:bg-pink-50"
                    : "border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed"
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="font-medium">{category.label}</span>
                {!troubleshootingFlows[category.id] && (
                  <span className="ml-auto text-xs bg-gray-200 px-2 py-1 rounded">Coming soon</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Troubleshooting Flow */}
      {selectedIssue && !solution && currentStep && (
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <button onClick={handleBack} className="text-gray-500 hover:text-pink-500 flex items-center gap-1">
              ← Back
            </button>
            <button onClick={handleStartOver} className="text-gray-400 hover:text-gray-600 text-sm">
              Start over
            </button>
          </div>

          {/* Progress indicator */}
          <div className="flex gap-1 mb-6">
            {[...Array(history.length + 1)].map((_, i) => (
              <div key={i} className="h-1 flex-1 rounded-full bg-pink-400" />
            ))}
            {[...Array(3)].map((_, i) => (
              <div key={`empty-${i}`} className="h-1 flex-1 rounded-full bg-gray-200" />
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-6">{currentStep.question}</h2>
          
          <div className="grid gap-3">
            {currentStep.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option.nextStep, option.solution)}
                className="p-4 rounded-xl border-2 border-gray-200 hover:border-pink-400 hover:bg-pink-50 text-left transition-all font-medium"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Solution Display */}
      {solution && (
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <button onClick={handleBack} className="text-gray-500 hover:text-pink-500 flex items-center gap-1">
              ← Back
            </button>
            <button onClick={handleStartOver} className="text-gray-400 hover:text-gray-600 text-sm">
              Start over
            </button>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
            <h2 className="text-xl font-bold text-green-800 flex items-center gap-2">
              ✅ {solution.title}
            </h2>
          </div>

          <p className="text-gray-700 mb-6">{solution.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Steps to fix:</h3>
            <ol className="space-y-2">
              {solution.steps.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {solution.products && solution.products.length > 0 && (
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-3">🛒 You might need:</h3>
              <div className="space-y-3">
                {solution.products.map((product, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                    <div>
                      <p className="font-medium text-gray-800">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Affiliate links coming soon - purchases will support this free tool!
              </p>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Did this solve your problem?</p>
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors">
                👍 Yes, thanks!
              </button>
              <button 
                onClick={handleStartOver}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-colors"
              >
                👎 No, try again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TroubleshootPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center p-12">Loading...</div>}>
      <TroubleshootContent />
    </Suspense>
  );
}
