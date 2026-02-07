'use client';

import { useState } from 'react';

interface FeedbackButtonProps {
  solutionId?: string;
}

export function FeedbackButton({ solutionId }: FeedbackButtonProps) {
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null);
  const [showThanks, setShowThanks] = useState(false);

  const handleFeedback = (value: 'yes' | 'no') => {
    setFeedback(value);
    setShowThanks(true);
    
    // TODO: Send to analytics/database
    console.log('Feedback:', { solutionId, helpful: value });
    
    // Store in localStorage for now
    const feedbackData = JSON.parse(localStorage.getItem('cricuthelper_feedback') || '{}');
    feedbackData[solutionId || 'general'] = value;
    localStorage.setItem('cricuthelper_feedback', JSON.stringify(feedbackData));
  };

  if (showThanks) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
        <span className="text-2xl mb-2 block">💚</span>
        <p className="text-green-700 font-medium">
          {feedback === 'yes' 
            ? "Yay! Glad we could help!" 
            : "Sorry this didn't help. We'll work on it!"}
        </p>
        {feedback === 'no' && (
          <p className="text-green-600 text-sm mt-2">
            Try our <a href="/community" className="underline">community forum</a> for more specific help.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-gray-700 font-medium mb-3 text-center">
        Did this help solve your problem?
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => handleFeedback('yes')}
          className="flex items-center gap-2 px-6 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors font-medium"
        >
          <span>👍</span> Yes!
        </button>
        <button
          onClick={() => handleFeedback('no')}
          className="flex items-center gap-2 px-6 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors font-medium"
        >
          <span>👎</span> Not quite
        </button>
      </div>
    </div>
  );
}
