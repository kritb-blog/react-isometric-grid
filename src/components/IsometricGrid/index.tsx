import clsx from "clsx";
import React from "react";
import Tile from "../Tile";
import "./styles.css";

interface IRowProps {
    blockSize: number;
    numOfCol: number;
    responsive?: boolean;
}

const Row: React.FunctionComponent<IRowProps> = ({ blockSize, numOfCol, responsive, children }) => {
    const width = blockSize * numOfCol;
    const style = responsive
        ? { width: `${window.innerWidth / numOfCol}px`, height: `${blockSize}px` }
        : { width: `${width}px`, height: `${blockSize}px` };
    return (
        <div className="row" style={style}>
            {children}
        </div>
    );
};

interface IGridProps {
    numOfRow: number;
    numOfCol: number;
    className?: string;
}

const IsometricGrid: React.FunctionComponent<IGridProps> = ({ numOfRow, numOfCol, className }) => {
    const generateGrid = () => {
        return Array(numOfRow)
            .fill("r")
            .map((_, rIndex) => (
                <Row key={rIndex} blockSize={30} numOfCol={numOfCol} responsive>
                    {Array(numOfCol)
                        .fill("t")
                        .map((_, tIndex) => (
                            <Tile
                                key={tIndex}
                                index={tIndex + rIndex * numOfCol}
                                onTileClick={(index) => console.log(index)}
                            >
                                {tIndex + rIndex * numOfCol + 1}
                            </Tile>
                        ))}
                </Row>
            ));
    };
    return <div className={clsx("grid", className)}>{generateGrid()}</div>;
};

export default IsometricGrid;
