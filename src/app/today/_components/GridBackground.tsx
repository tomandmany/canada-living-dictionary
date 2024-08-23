'use client'

import { useEffect, useState } from "react";

type GridProps = {
    size?: number; // 格子のサイズを指定するオプションのプロパティ
    gap?: number;  // 格子の間隔を指定するオプションのプロパティ
}

export default function GridBackground({ size = 5, gap = 20 }: GridProps) {
    const [dimensions, setDimensions] = useState({ rows: 0, columns: 0 });

    useEffect(() => {
        // ウィンドウサイズに基づいて行数と列数を計算
        const calculateGrid = () => {
            const rows = Math.ceil(window.innerHeight / gap);
            const columns = Math.ceil(window.innerWidth / gap);
            setDimensions({ rows, columns });
        };

        calculateGrid(); // 初回計算

        // ウィンドウサイズの変更時に再計算
        window.addEventListener('resize', calculateGrid);
        return () => window.removeEventListener('resize', calculateGrid);
    }, [gap]); // 依存配列に gap を追加

    const { rows, columns } = dimensions;

    return (
        <div className="absolute w-full h-full">
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <div key={`row-${rowIndex}`} className="flex">
                    {Array.from({ length: columns }).map((_, colIndex) => (
                        <div
                            key={`col-${colIndex}`}
                            style={{
                                width: `${gap}px`,
                                height: `${gap}px`,
                                borderTopWidth: rowIndex % size === 0 ? '2px' : '1px',
                                borderLeftWidth: colIndex % size === 0 ? '2px' : '1px',
                                borderTopColor: rowIndex % size === 0 ? 'rgb(71 85 105 / 0.3)' : 'rgb(71 85 105 / 0.2)',
                                borderLeftColor: colIndex % size === 0 ? 'rgb(71 85 105 / 0.3)' : 'rgb(71 85 105 / 0.2)',
                                borderStyle: 'solid',
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}