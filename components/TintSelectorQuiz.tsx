'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Sparkles } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: { ceramic: number; frosted: number; standard: number };
  }[];
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "What's your main priority?",
    options: [
      { text: "Heat reduction & UV protection", scores: { ceramic: 3, frosted: 0, standard: 1 } },
      { text: "Privacy without blocking light", scores: { ceramic: 0, frosted: 3, standard: 0 } },
      { text: "Cost-effective solution", scores: { ceramic: 0, frosted: 1, standard: 3 } },
      { text: "Maximum performance", scores: { ceramic: 3, frosted: 0, standard: 0 } },
    ],
  },
  {
    id: 2,
    question: "Where will this be installed?",
    options: [
      { text: "Home windows", scores: { ceramic: 2, frosted: 2, standard: 2 } },
      { text: "Office/commercial space", scores: { ceramic: 2, frosted: 1, standard: 1 } },
      { text: "Vehicle", scores: { ceramic: 3, frosted: 0, standard: 2 } },
      { text: "Bathroom or private areas", scores: { ceramic: 0, frosted: 3, standard: 0 } },
    ],
  },
  {
    id: 3,
    question: "What's your budget range?",
    options: [
      { text: "Economy - best value", scores: { ceramic: 0, frosted: 1, standard: 3 } },
      { text: "Mid-range - balanced quality", scores: { ceramic: 1, frosted: 2, standard: 1 } },
      { text: "Premium - best performance", scores: { ceramic: 3, frosted: 1, standard: 0 } },
      { text: "No preference", scores: { ceramic: 1, frosted: 1, standard: 1 } },
    ],
  },
  {
    id: 4,
    question: "How important is warranty coverage?",
    options: [
      { text: "Very important - want lifetime", scores: { ceramic: 3, frosted: 0, standard: 0 } },
      { text: "Somewhat important - 5-10 years", scores: { ceramic: 1, frosted: 1, standard: 2 } },
      { text: "Not a major factor", scores: { ceramic: 0, frosted: 1, standard: 1 } },
    ],
  },
  {
    id: 5,
    question: "Do you need to see through clearly?",
    options: [
      { text: "Yes, complete clarity essential", scores: { ceramic: 3, frosted: 0, standard: 2 } },
      { text: "Some visibility is fine", scores: { ceramic: 1, frosted: 2, standard: 1 } },
      { text: "No, privacy is priority", scores: { ceramic: 0, frosted: 3, standard: 0 } },
    ],
  },
];

const recommendations = {
  ceramic: {
    title: "Ceramic Window Tint",
    subtitle: "Premium Performance",
    description: "Based on your needs, we recommend our premium ceramic window film. It offers superior solar energy rejection (up to 70%), blocks 99% of UV rays, and comes with a lifetime warranty. Perfect for maximum comfort and protection.",
    benefits: [
      "Superior solar energy rejection without dark tint",
      "Blocks 99% harmful UV rays",
      "Won't interfere with electronics",
      "Lifetime warranty included",
      "Crystal clear visibility",
    ],
    path: "/ceramic-window-tint",
  },
  frosted: {
    title: "Frosted & Decorative Film",
    subtitle: "Privacy & Style",
    description: "Your answers suggest frosted or decorative window film would be ideal. This solution provides excellent privacy while still allowing natural light to flow through. Perfect for bathrooms, offices, or anywhere you want privacy without darkness.",
    benefits: [
      "Complete privacy maintained",
      "Natural light still enters",
      "Elegant frosted appearance",
      "Easy to maintain",
      "Various patterns available",
    ],
    path: "/frosted-decorative-window-film",
  },
  standard: {
    title: "Standard Window Tint",
    subtitle: "Quality & Value",
    description: "For your requirements, our standard window tint offers excellent value. It provides good heat reduction, UV protection, and comes with a 5-year warranty. A cost-effective solution without compromising quality.",
    benefits: [
      "Effective heat reduction",
      "Good UV protection",
      "Professional installation",
      "5-year warranty",
      "Proven performance",
    ],
    path: "/residential-window-tinting",
  },
};

export function TintSelectorQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ ceramic: 0, frosted: 0, standard: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option: typeof questions[0]["options"][0]) => {
    const newScores = {
      ceramic: scores.ceramic + option.scores.ceramic,
      frosted: scores.frosted + option.scores.frosted,
      standard: scores.standard + option.scores.standard,
    };
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    const max = Math.max(scores.ceramic, scores.frosted, scores.standard);
    if (scores.ceramic === max) return recommendations.ceramic;
    if (scores.frosted === max) return recommendations.frosted;
    return recommendations.standard;
  };

  const restart = () => {
    setCurrentQuestion(0);
    setScores({ ceramic: 0, frosted: 0, standard: 0 });
    setShowResult(false);
  };

  if (showResult) {
    const recommendation = getRecommendation();
    return (
      <Card className="max-w-2xl mx-auto p-6 sm:p-8" data-testid="quiz-result">
        <div className="text-center mb-8">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-2">
            Your Perfect Match
          </h2>
          <p className="text-lg text-primary font-semibold">
            {recommendation.title}
          </p>
          <p className="text-sm text-muted-foreground">
            {recommendation.subtitle}
          </p>
        </div>

        <div className="mb-8">
          <p className="text-base text-foreground leading-relaxed mb-6">
            {recommendation.description}
          </p>

          <div className="bg-primary/5 rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4">
              Why this is perfect for you:
            </h3>
            <ul className="space-y-2">
              {recommendation.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-primary mt-0.5">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={restart}
            className="flex-1"
            data-testid="button-restart"
          >
            Retake Quiz
          </Button>
          <Link href={recommendation.path} className="flex-1">
            <Button className="w-full" data-testid="button-learn-more">
              Learn More
            </Button>
          </Link>
          <Link href="/get-quote" className="flex-1">
            <Button className="w-full" data-testid="button-get-quote">
              Get Quote
            </Button>
          </Link>
        </div>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="max-w-2xl mx-auto p-6 sm:p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <div className="flex gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-8 rounded-full ${
                  index <= currentQuestion ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-6">
          {question.question}
        </h3>
      </div>

      <div className="space-y-3" data-testid={`question-${question.id}`}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="w-full text-left p-4 rounded-lg border border-border hover-elevate active-elevate-2 transition-all"
            data-testid={`option-${index}`}
          >
            <span className="text-base font-medium text-foreground">
              {option.text}
            </span>
          </button>
        ))}
      </div>

      {currentQuestion > 0 && (
        <Button
          variant="outline"
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
          className="mt-6"
          data-testid="button-back"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      )}
    </Card>
  );
}
