import { use, useState } from "react";
import Label from "./Label";
import LightRays from "./extensions/LightRays";
import ElectricBorder from "./extensions/ElectricBorder";

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
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="absolute top-0 left-0 w-full h-full custom-rays "
                />
            </div>
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-8">
                <ElectricBorder
                    color="#7df9ff"
                    speed={1}
                    chaos={0.5}
                    thickness={2}
                    style={{ borderRadius: 16 }}
                >
                    <div className="flex flex-col items-center h-full gap-8 py-8 bg-slate-400/25 rounded-xl">
                    <Label
                        label={'GUESS THE NUMBER'}
                    />
                    <input
                        type="numbet"
                        value={guess}
                        onChange={handleInputChange}
                        placeholder="Guess"
                        className="w-[70%] rounded-lg placeholder:pl-4 placeholder:text-sm"
                    />
                </div>
                </ElectricBorder>
                
                <div className="flex gap-2">
                    <button onClick={handleGuess} className="p-2 text-white bg-gray-500/25 rounded-2xl">
                        Guess
                    </button>
                    <button onClick={handleReset} className="p-2 text-white bg-gray-500/25 rounded-2xl">
                        Reset
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
