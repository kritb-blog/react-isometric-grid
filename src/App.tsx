import React from "react";
import IsometricGrid from "./components/IsometricGrid";
import useDebounce from "./utils/debounce";

/**
 * This is the example of react-isometric-grid usage.
 * @returns Sample react app
 */
const App = () => {
    const [pos, setPos] = React.useState<{ x: number | undefined; y: number | undefined }>({ x: 0, y: 0 });
    const showTileHover = useDebounce((_: number, tileRef?: React.RefObject<HTMLDivElement>) => {
        const pos = tileRef && tileRef.current?.getBoundingClientRect();
        setPos({ x: pos?.x, y: pos?.y });
    }, 250);

    return (
        <>
            <div style={{ position: `absolute`, left: pos.x, top: pos.y }}>HOVERING</div>
            <IsometricGrid
                opts={{ numOfCol: 7, numOfRow: 5, blockSize: 70 }}
                onTileHover={showTileHover}
                renderTile={(index: number) => <span>{index + 1}</span>}
            />
        </>
    );
};

export default App;
