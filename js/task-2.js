function calcAverageCalories(days) {
    
    if (days.length === 0) {
      return 0;
    }
    const caloriesOnly = days.map(day => day.calories);
    const totalCalories = caloriesOnly.reduce((sum, calories) => sum + calories, 0);
    const average = totalCalories / days.length;
    return average;
  }
  let weeklyCalories = [
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    
  ];
  console.log(calcAverageCalories(weeklyCalories)); 
  weeklyCalories = [
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
  ];
  console.log(calcAverageCalories(weeklyCalories)); 
  console.log(calcAverageCalories([])); 