import { use, useState } from "react";
import Label from "./Label";
import LightRays from "./animations/LightRays";
import ElectricBorder from "./animations/ElectricBorder";

export default function Game() {
    const [rand, setRand] = useState(Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [whichone, setWhichone] = useState(0);

    const handleInputChange = (e) => {
        setGuess(e.target.value);
    }

    const handleGuess = () => {
        const num = Number(guess);

        if (isNaN(num) || num < 1 || num > 100) {
            setMessage("Please enter a number between 1 and 100.");
            return;
        }

        setWhichone(prev => prev + 1);

        if (num == rand) {
            setMessage("GOODD JOOBBB YOU GOT IT!!!");
            return;
        }
        else if (num < rand) {
            setMessage("Enter a larger numeric value:");
            return;
        }
        else {
            setMessage("Enter a smaller numeric value:");
        }
    };

    const handleReset = () => {
        setRand(Math.floor(Math.random() * 100) + 1);
        setGuess('');
        setMessage('');
        setWhichone(0);
    }


    return (
        <div>
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={0.3}
                    lightSpread={0.3}
                    rayLength={0.6}
                    followMouse={false}
                    mouseInfluence={0.0}
                    noiseAmount={0.0}
                    distortion={0.0}
                    className="absolute top-0 left-0 w-full h-full custom-rays "
                />
            </div>
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-8">
                {/* ElectricBorder simplified for performance */}
                <div 
                    className="relative w-[38%] h-[56%] border-2 border-cyan-400 rounded-2xl"
                    style={{ 
                        boxShadow: '0 0 20px rgba(125, 249, 255, 0.3), inset 0 0 20px rgba(125, 249, 255, 0.1)',
                        borderRadius: 16 
                    }}
                >
                    <div className="flex flex-col items-center h-full gap-8 py-8 bg-slate-400/25 rounded-xl">
                    <Label
                        label={'GUESS THE NUMBER'}
                    />
                    <div className="relative w-[70%]">
                        <input
                            type="number"
                            value={guess}
                            onChange={handleInputChange}
                            placeholder="Enter your guess (1-100)"
                            className="w-full px-4 py-3 text-white transition-all duration-200 ease-out border shadow-lg bg-gray-800/40 border-gray-600/50 rounded-xl placeholder:text-gray-400 placeholder:text-sm focus:outline-none focus:border-cyan-400 focus:bg-gray-800/60 backdrop-blur-sm shadow-black/20 hover:border-gray-500/70 hover:bg-gray-800/50"
                            min="1"
                            max="100"
                        />
                        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 focus-within:opacity-100"></div>
                    </div>
                </div>
                </div>
                
                <div className="flex gap-2">
                    <button 
                        onClick={handleGuess} 
                        className="p-3 text-white transition-colors duration-150 bg-gray-500/25 rounded-2xl hover:bg-cyan-500/30"
                    >
                        <span className="font-semibold">GUESS</span>
                    </button>
                    <button 
                        onClick={handleReset} 
                        className="p-3 text-white transition-colors duration-150 bg-gray-500/25 rounded-2xl hover:bg-red-500/30"
                    >
                        <span className="font-semibold">RESET</span>
                    </button>
                </div>
                {message && <p className="text-white">{message}</p>}
                <Label
                    label={`Number of Trials: ${whichone}`}
                />
            </div>
        </div>
    );

}
