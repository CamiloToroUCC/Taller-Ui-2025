"use client";
import { useState } from "react";

// Tipodos para TypeScript
type Gender = "male" | "female";
type BmiCategory = "underweight" | "normal" | "overweight";
type InfoType = "diet" | "exercise";

// Definición de recomendaciones con tipado estricto
const recommendations: Record<
  Gender,
  Record<BmiCategory, { diet: string[]; exercise: string[] }>
> = {
  male: {
    underweight: {
      diet: [
        "Huevos revueltos con avena",
        "Arroz integral con pollo y vegetales",
        "Salmón a la plancha con camote",
      ],
      exercise: ["Press banca: 4×10", "Sentadillas: 4×12", "Dominadas asistidas: 3×8"],
    },
    normal: {
      diet: [
        "Yogur griego con frutas",
        "Quinua con carne magra",
        "Ensalada de atún con aguacate",
      ],
      exercise: ["30 min de cardio", "Pesas rusas: 3×12", "Flexiones diamante: 4×15"],
    },
    overweight: {
      diet: [
        "Smoothie de espinacas",
        "Pollo al horno con brócoli",
        "Sopa de verduras con tofu",
      ],
      exercise: ["45 min de ciclismo", "Circuito funcional", "Planchas laterales: 3×1 min"],
    },
  },
  female: {
    underweight: {
      diet: [
        "Batido de plátano con mantequilla de maní",
        "Pasta integral con albóndigas de pavo",
        "Crema de calabaza con pollo",
      ],
      exercise: ["Peso muerto rumano: 4×10", "Sentadillas sumo: 4×12", "Prensa de piernas: 3×15"],
    },
    normal: {
      diet: [
        "Tostadas integrales con huevo pochado",
        "Salmón a la parrilla con espárragos",
        "Wrap de pollo con vegetales",
      ],
      exercise: ["Yoga dinámico: 30 min", "Sentadillas con salto: 3×15", "Abdominales: 4×20"],
    },
    overweight: {
      diet: [
        "Jugo verde y huevo cocido",
        "Ensalada César con pollo",
        "Pavo al horno con vegetales",
      ],
      exercise: ["HIIT: 20 min", "Zumba: 30 min", "Pesas libres: 3×12"],
    },
  },
};

export default function Home() {
  // Estados iniciales: female por defecto, 65 kg y 170 cm para obtener un IMC normal
  const [gender, setGender] = useState<Gender>("female");
  const [weight, setWeight] = useState<number>(65);
  const [height, setHeight] = useState<number>(170);
  const [showInfo, setShowInfo] = useState<InfoType>("diet");

  // Cálculo del IMC
  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  const bmiValue = parseFloat(bmi);

  // Declaramos explícitamente bmiCategory para que sea del tipo "underweight" | "normal" | "overweight"
  let bmiCategory: BmiCategory = "normal";
  if (gender === "male") {
    if (bmiValue < 20) bmiCategory = "underweight";
    else if (bmiValue >= 25) bmiCategory = "overweight";
  } else {
    if (bmiValue < 19) bmiCategory = "underweight";
    else if (bmiValue >= 24) bmiCategory = "overweight";
  }

  // Función para obtener recomendaciones
  const getRecommendations = () => {
    return recommendations[gender][bmiCategory][showInfo];
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Sección Izquierda: Calculadora de IMC */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">
            Calculadora de IMC
          </h2>
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setGender("female")}
              className={`py-2 px-4 rounded-full border transition-colors ${
                gender === "female"
                  ? "bg-pink-500 text-white"
                  : "bg-white text-pink-500 hover:bg-pink-100"
              }`}
            >
              Mujer
            </button>
            <button
              onClick={() => setGender("male")}
              className={`py-2 px-4 rounded-full border transition-colors ${
                gender === "male"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500 hover:bg-blue-100"
              }`}
            >
              Hombre
            </button>
          </div>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-primary font-semibold">
                Estatura: {height} cm
              </label>
              <input
                type="range"
                min="100"
                max="220"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-primary font-semibold">
                Peso: {weight} kg
              </label>
              <input
                type="range"
                min={gender === "male" ? 50 : 40}
                max={gender === "male" ? 150 : 120}
                step="0.5"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
          <div className="bg-accent text-white rounded-lg py-4 text-center mb-6">
            <p className="font-bold text-lg">Tu IMC es</p>
            <p className="text-4xl font-extrabold">{bmi}</p>
            <p
              className={`mt-3 inline-block px-4 py-2 rounded-full text-base font-bold shadow-md ${
                bmiCategory === "underweight"
                  ? "bg-blue-500"
                  : bmiCategory === "overweight"
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
            >
              {bmiCategory === "underweight"
                ? "Bajo peso"
                : bmiCategory === "overweight"
                ? "Sobrepeso"
                : "Normal"}
            </p>
          </div>
          <div className="bg-neutral rounded-lg p-4">
            <div className="flex justify-center gap-4 mb-4">
              <button
                onClick={() => setShowInfo("diet")}
                className={`flex-1 py-2 rounded-lg text-sm transition-colors ${
                  showInfo === "diet"
                    ? "bg-accent text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                🥗 Dieta
              </button>
              <button
                onClick={() => setShowInfo("exercise")}
                className={`flex-1 py-2 rounded-lg text-sm transition-colors ${
                  showInfo === "exercise"
                    ? "bg-accent text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                🏋️ Ejercicios
              </button>
            </div>
            <div className="space-y-2 max-h-48 overflow-auto">
              {getRecommendations().map((item, index) => (
                <div key={index} className="flex items-start bg-white p-2 rounded shadow-sm">
                  <div className="h-2 w-2 bg-accent rounded-full mt-1 mr-2"></div>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Sección Derecha: Silueta */}
        <div className="flex items-center justify-center">
          <img
            src={`/silhouettes/${gender}/${bmiCategory}.png`}
            alt="Complexión corporal"
            className="w-full max-h-[500px] object-contain drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
