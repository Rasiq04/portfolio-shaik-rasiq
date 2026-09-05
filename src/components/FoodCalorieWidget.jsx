import React, { useState } from 'react';
import { Camera, Sparkles, CheckCircle2, Sliders, Info, Zap } from 'lucide-react';

const sampleFoods = [
  {
    name: "Grilled Chicken & Mediterranean Salad",
    calories: 430,
    protein: "42g",
    carbs: "18g",
    fats: "14g",
    confidence: "94.8%",
    detectedItems: ["Grilled Chicken Breast", "Mixed Greens", "Cherry Tomatoes", "Olive Oil Dressing"],
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Artisanal Avocado Toast & Poached Egg",
    calories: 380,
    protein: "16g",
    carbs: "32g",
    fats: "22g",
    confidence: "92.3%",
    detectedItems: ["Sourdough Toast", "Fresh Avocado", "Poached Egg", "Microgreens"],
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Berry & Granola Protein Bowl",
    calories: 310,
    protein: "18g",
    carbs: "48g",
    fats: "6g",
    confidence: "96.1%",
    detectedItems: ["Greek Yogurt", "Fresh Strawberries", "Blueberries", "Oat Granola"],
    img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80"
  }
];

export default function FoodCalorieWidget() {
  const [selectedFoodIndex, setSelectedFoodIndex] = useState(0);
  const [segmentationPrecision, setSegmentationPrecision] = useState(85);
  const [isProcessing, setIsProcessing] = useState(false);

  const currentFood = sampleFoods[selectedFoodIndex];
  const adjustedCalories = Math.round(currentFood.calories * (segmentationPrecision / 85));

  const handleSelect = (idx) => {
    setIsProcessing(true);
    setSelectedFoodIndex(idx);
    setTimeout(() => {
      setIsProcessing(false);
    }, 400);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Camera className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              Food Calorie AI Live Estimator
              <span className="text-xs bg-cyan-500/20 text-cyan-300 font-medium px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                Faster R-CNN + Grab-Cut
              </span>
            </h4>
            <p className="text-xs text-slate-400">Interactive demo model developed in Python & Django</p>
          </div>
        </div>
      </div>

      {/* Food Picker */}
      <div className="grid grid-cols-3 gap-3">
        {sampleFoods.map((food, idx) => (
          <button
            key={food.name}
            onClick={() => handleSelect(idx)}
            className={`relative rounded-xl overflow-hidden border text-left transition-all duration-200 ${
              selectedFoodIndex === idx 
                ? 'border-cyan-400 ring-2 ring-cyan-500/30 scale-[1.02]' 
                : 'border-slate-800 opacity-70 hover:opacity-100 hover:border-slate-700'
            }`}
          >
            <img src={food.img} alt={food.name} className="h-20 w-full object-cover" />
            <div className="p-2 bg-slate-950/80 backdrop-blur-sm">
              <p className="text-xs font-semibold text-white truncate">{food.name}</p>
              <p className="text-[10px] text-cyan-400">{food.calories} kcal (Est.)</p>
            </div>
          </button>
        ))}
      </div>

      {/* Main Analysis Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Visual Box Detection Simulation */}
        <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group">
          <img 
            src={currentFood.img} 
            alt={currentFood.name} 
            className={`w-full h-56 object-cover transition-opacity duration-300 ${isProcessing ? 'opacity-30' : 'opacity-100'}`} 
          />
          {isProcessing && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-sm text-cyan-400 gap-2">
              <Zap className="w-8 h-8 animate-bounce" />
              <p className="text-xs font-medium tracking-wide">Running Faster R-CNN & Grab-Cut...</p>
            </div>
          )}

          {/* AI Bounding Boxes Overlay */}
          {!isProcessing && (
            <>
              <div className="absolute top-4 left-4 border-2 border-cyan-400 bg-cyan-950/40 rounded px-2 py-1 text-[10px] font-mono text-cyan-300 shadow-lg animate-pulse">
                [Bounding Box 01: Faster R-CNN {currentFood.confidence}]
              </div>
              <div className="absolute bottom-4 right-4 bg-slate-950/90 border border-slate-700 text-[11px] text-slate-300 px-3 py-1.5 rounded-lg flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Grab-Cut Volume Matrix: {segmentationPrecision}%
              </div>
            </>
          )}
        </div>

        {/* Nutritional & AI Output Breakdown */}
        <div className="space-y-4">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-slate-400">Estimated Energy</span>
            <span className="text-3xl font-extrabold text-cyan-400 font-mono">
              {adjustedCalories} <span className="text-sm font-normal text-slate-400">kcal</span>
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800">
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-500 uppercase font-semibold">Protein</span>
              <p className="text-sm font-bold text-white">{currentFood.protein}</p>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-500 uppercase font-semibold">Carbs</span>
              <p className="text-sm font-bold text-white">{currentFood.carbs}</p>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-500 uppercase font-semibold">Fats</span>
              <p className="text-sm font-bold text-white">{currentFood.fats}</p>
            </div>
          </div>

          {/* Detected Ingredients */}
          <div>
            <span className="text-xs font-semibold text-slate-400 mb-2 block">Detected Ingredients (Computer Vision):</span>
            <div className="flex flex-wrap gap-1.5">
              {currentFood.detectedItems.map(item => (
                <span key={item} className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Segmentation Slider */}
          <div className="pt-2">
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span className="flex items-center gap-1">
                <Sliders className="w-3.5 h-3.5" /> Grab-Cut Mask Density
              </span>
              <span className="font-mono text-cyan-400">{segmentationPrecision}%</span>
            </div>
            <input 
              type="range" 
              min="70" 
              max="110" 
              value={segmentationPrecision} 
              onChange={(e) => setSegmentationPrecision(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
