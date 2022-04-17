import React from "react";
import "./styles.css";

interface TileProps {
    index: number;
    onTileClick?: (index: number, tileRef?: React.RefObject<HTMLDivElement>) => void;
    onTileHover?: (index: number, tileRef?: React.RefObject<HTMLDivElement>) => void;
    render: (index: number) => JSX.Element;
}

const Tile: React.FunctionComponent<TileProps> = ({ index, onTileClick, onTileHover, render }) => {
    const tileRef = React.createRef<HTMLDivElement>();
    const onHover = (index: number) => () => onTileHover && onTileHover(index, tileRef);
    const onClick = (index: number) => () => onTileClick && onTileClick(index, tileRef);
    return (
        <div data-testid="tile" ref={tileRef} className="tile" onClick={onClick(index)} onMouseOver={onHover(index)}>
            {render(index)}
        </div>
    );
};

export default Tile;
