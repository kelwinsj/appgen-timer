import React, { useState, useEffect } from 'react';
import { Progress } from './ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface TimeProgress {
  label: string;
  percentage: number;
  remaining: string;
}

export default function TimeProgressTracker() {
  const [timeProgress, setTimeProgress] = useState<TimeProgress[]>([]);

  const calculateProgress = () => {
    const now = new Date();
    
    // Day progress
    const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const dayProgress = ((now.getTime() - dayStart.getTime()) / (dayEnd.getTime() - dayStart.getTime())) * 100;
    const dayRemaining = Math.round(100 - dayProgress);
    
    // Week progress (Monday start)
    const dayOfWeek = now.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const weekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() + mondayOffset);
    weekStart.setHours(0, 0, 0, 0);
    const weekEnd = new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
    const weekProgress = ((now.getTime() - weekStart.getTime()) / (weekEnd.getTime() - weekStart.getTime())) * 100;
    const weekRemaining = Math.round(100 - weekProgress);
    
    // Month progress
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const monthProgress = ((now.getTime() - monthStart.getTime()) / (monthEnd.getTime() - monthStart.getTime())) * 100;
    const monthRemaining = Math.round(100 - monthProgress);
    
    // Year progress
    const yearStart = new Date(now.getFullYear(), 0, 1);
    const yearEnd = new Date(now.getFullYear() + 1, 0, 1);
    const yearProgress = ((now.getTime() - yearStart.getTime()) / (yearEnd.getTime() - yearStart.getTime())) * 100;
    const yearRemaining = Math.round(100 - yearProgress);
    
    // Decade progress (e.g., 2020-2029)
    const decadeStart = Math.floor(now.getFullYear() / 10) * 10;
    const decadeStartDate = new Date(decadeStart, 0, 1);
    const decadeEndDate = new Date(decadeStart + 10, 0, 1);
    const decadeProgress = ((now.getTime() - decadeStartDate.getTime()) / (decadeEndDate.getTime() - decadeStartDate.getTime())) * 100;
    const decadeRemaining = Math.round(100 - decadeProgress);
    
    // Century progress (e.g., 2000-2099)
    const centuryStart = Math.floor(now.getFullYear() / 100) * 100;
    const centuryStartDate = new Date(centuryStart, 0, 1);
    const centuryEndDate = new Date(centuryStart + 100, 0, 1);
    const centuryProgress = ((now.getTime() - centuryStartDate.getTime()) / (centuryEndDate.getTime() - centuryStartDate.getTime())) * 100;
    const centuryRemaining = Math.round(100 - centuryProgress);
    
    setTimeProgress([
      { 
        label: 'Day', 
        percentage: dayProgress, 
        remaining: `${dayRemaining}% remaining` 
      },
      { 
        label: 'Week', 
        percentage: weekProgress, 
        remaining: `${weekRemaining}% remaining` 
      },
      { 
        label: 'Month', 
        percentage: monthProgress, 
        remaining: `${monthRemaining}% remaining` 
      },
      { 
        label: 'Year', 
        percentage: yearProgress, 
        remaining: `${yearRemaining}% remaining` 
      },
      { 
        label: `Decade (${decadeStart}s)`, 
        percentage: decadeProgress, 
        remaining: `${decadeRemaining}% remaining` 
      },
      { 
        label: `Century (${centuryStart}s)`, 
        percentage: centuryProgress, 
        remaining: `${centuryRemaining}% remaining` 
      },
    ]);
  };

  useEffect(() => {
    calculateProgress();
    const interval = setInterval(calculateProgress, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-heading">Time Progress Tracker</CardTitle>
          <CardDescription className="text-lg">
            See how much of each time period has elapsed
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="space-y-6">
        {timeProgress.map((item) => (
          <Card key={item.label}>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-heading font-semibold">{item.label}</h3>
                  <span className="text-2xl font-bold text-primary">
                    {item.percentage.toFixed(2)}%
                  </span>
                </div>
                <Progress value={item.percentage} className="h-4" />
                <p className="text-sm text-muted-foreground text-right">
                  {item.remaining}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>Updates in real-time · Current time: {new Date().toLocaleString()}</p>
      </div>
    </div>
  );
}