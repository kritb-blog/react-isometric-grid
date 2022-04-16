import React from "react";
import "./styles.css";

interface TileProps {
    index: number;
    onTileClick?: (index: number) => void;
}

const Tile: React.FunctionComponent<TileProps> = ({ index, onTileClick, children }) => {
    const onClick = (index: number) => () => onTileClick && onTileClick(index);
    return (
        <button className="tile" onClick={onClick(index)}>
            {children}
        </button>
    );
};

export default Tile;
