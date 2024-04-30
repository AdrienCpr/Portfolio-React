import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoIosColorPalette } from "react-icons/io";

const ColorPicker = ({ darkMode, colors, setColors, language }) => {
    const [isPaletteOpen, setIsPaletteOpen] = useState(false);
    const [selectedPart, setSelectedPart] = useState(null);
    const mode = darkMode ? 'dark' : 'light';
    const partOptions = Object.keys(colors[mode]);
    const colorString = colors["navbar"][mode].join(',');
    if (!partOptions.includes(colorString)) {
        partOptions.unshift(colorString);
    }
    const togglePalette = () => {
        setIsPaletteOpen(!isPaletteOpen);
    };
    const handleColorChange = (mode, part, color) => {
        const isRgbColor = /^(\d{1,3},){2}\d{1,3}$/.test(part);

        if (isRgbColor){
            const colorRgb = [color.rgb.r, color.rgb.g, color.rgb.b]
            setColors((prevColors) => ({
                ...prevColors,
                navbar: {
                    ...prevColors.navbar,
                    [mode]: colorRgb,
                },
            }));

        } else {
            setColors((prevColors) => ({
                ...prevColors,
                [mode]: {
                    ...prevColors[mode],
                    [part]: color.hex,
                },
            }));
        }
    };
    const rgbToHex = (rgbArray) => {
        return rgbArray.map(component => {
            let hex = component.toString(16);

            return hex.length < 2 ? '0' + hex : hex;
        });
    };

    const fullColorHex = (rgbArray) => {
        const [rHex, gHex, bHex] = rgbToHex(rgbArray);

        return `#${rHex}${gHex}${bHex}`.toUpperCase();
    };

    const params = {
        "fr": {
            "selectPartLabel": "Sélectionner une partie",
            "selectPartPlaceholder": "Sélectionner une partie...",
            "navbar": {
                dark : "Barre de navigation (sombre)",
                light: "Barre de navigation (clair)"
            },
            "lightPrimary": "Couleur primaire (clair)",
            "lightSecondary": "Couleur secondaire (clair)",
            "lightTertiary": "Couleur tertiaire (clair)",
            "lightQuaternary": "Couleur quaternaire (clair)",
            "darkPrimary": "Couleur primaire (sombre)",
            "darkSecondary": "Couleur secondaire (sombre)",
            "darkTertiary": "Couleur tertiaire (sombre)",
            "darkQuaternary": "Couleur quaternaire (sombre)"
        },
        "en": {
            "selectPartLabel": "Select a part",
            "selectPartPlaceholder": "Select a part...",
            "navbar": {
                dark: "Navbar (dark)",
                light: "Navbar (light)",
            },
            "lightPrimary": "Primary color (light)",
            "lightSecondary": "Secondary color (light)",
            "lightTertiary": "Tertiary color (light)",
            "lightQuaternary": "Quaternary color (light)",
            "darkPrimary": "Primary color (dark)",
            "darkSecondary": "Secondary color (dark)",
            "darkTertiary": "Tertiary color (dark)",
            "darkQuaternary": "Quaternary color (dark)"
        }
    }


    return (
        <div className="relative">
            <button onClick={togglePalette} className="flex items-center text-lightQuaternary dark:text-darkQuaternary">
                <IoIosColorPalette size={18}/>
                {isPaletteOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
            </button>

            {isPaletteOpen && (
                <div className="absolute bg-white dark:bg-darkSecondary p-4 border border-gray-300 dark:border-gray-700 shadow-md w-64">
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {params[language].selectPartLabel}
                        </label>

                        <select
                            className="w-full p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-darkSecondary text-gray-700 dark:text-gray-300"
                            value={selectedPart || ''}
                            onChange={(e) => setSelectedPart(e.target.value)}
                        >
                            <option value="" disabled>{params[language].selectPartPlaceholder}</option>
                            {partOptions.map((part,index) => (
                                <option key={part} value={part}>
                                    {params[language][part] ? params[language][part] : params[language].navbar[mode]}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-4">
                        {selectedPart && (
                            /^(\d{1,3},){2}\d{1,3}$/.test(selectedPart) ?
                                <>
                                    <SketchPicker
                                        color={fullColorHex(colors["navbar"][mode])}
                                        onChangeComplete={(color) => handleColorChange(mode, selectedPart, color)}
                                    />
                                </>
                                :
                                <SketchPicker
                                    color={colors[mode][selectedPart]}
                                    onChangeComplete={(color) => handleColorChange(mode, selectedPart, color)}
                                />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColorPicker;
