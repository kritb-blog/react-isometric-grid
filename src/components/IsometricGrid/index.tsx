import React from "react";
import "./styles.css";

const CONSTANTS = {
    MAX_ROW: 20,
    MAX_COLUMN: 20,
};

export const Grid: React.FunctionComponent = ({ children }) => {
    return <div className="grid">{children}</div>;
};

export const Row: React.FunctionComponent = ({ children }) => {
    return <div className="row">{children}</div>;
};

interface TileProps {
    index: number;
}
export const Tile: React.FunctionComponent<TileProps> = ({ index }) => {
    return <button className="tile">{index}</button>;
};

const IsometricGrid: React.FunctionComponent = () => {
    return (
        <div>
            <Grid>
                {Array(CONSTANTS.MAX_ROW)
                    .fill("r")
                    .map((_, rIndex) => (
                        <Row key={rIndex}>
                            {Array(CONSTANTS.MAX_COLUMN)
                                .fill("t")
                                .map((_, tIndex) => (
                                    <Tile key={tIndex} index={tIndex} />
                                ))}
                        </Row>
                    ))}
            </Grid>
        </div>
    );
};

export default IsometricGrid;
