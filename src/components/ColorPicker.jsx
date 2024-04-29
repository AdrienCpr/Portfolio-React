import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const ColorPicker = ({ darkMode, colors, setColors }) => {
    const [isPaletteOpen, setIsPaletteOpen] = useState(false);
    const [selectedPart, setSelectedPart] = useState(null);

    const togglePalette = () => {
        setIsPaletteOpen(!isPaletteOpen);
    };

    const handleColorChange = (mode, part, color) => {
        setColors((prevColors) => ({
            ...prevColors,
            [mode]: {
                ...prevColors[mode],
                [part]: color.hex,
            },
        }));
    };

    const mode = darkMode ? 'dark' : 'light';
    const partOptions = Object.keys(colors[mode]);

    return (
        <div className="relative">
            <button onClick={togglePalette} className="flex items-center text-lightQuaternary dark:text-darkQuaternary">
                Palette
                {isPaletteOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
            </button>

            {isPaletteOpen && (
                <div className="absolute bg-white dark:bg-darkSecondary p-4 border border-gray-300 dark:border-gray-700 shadow-md">
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Sélectionner une partie
                        </label>
                        {/* Afficher un menu déroulant pour sélectionner une partie */}
                        <select
                            className="w-full p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-darkSecondary text-gray-700 dark:text-gray-300"
                            value={selectedPart || ''}
                            onChange={(e) => setSelectedPart(e.target.value)}
                        >
                            <option value="" disabled>Sélectionner une partie...</option>
                            {partOptions.map((part) => (
                                <option key={part} value={part}>
                                    {part}
                                </option>
                            ))}
                        </select>
                    </div>

                    {selectedPart && (
                        <div className="mt-4">
                            <SketchPicker
                                color={colors[mode][selectedPart]}
                                onChangeComplete={(color) => handleColorChange(mode, selectedPart, color)}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ColorPicker;
