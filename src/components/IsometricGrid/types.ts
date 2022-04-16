export interface IRowProps {
    blockSize: number;
    numOfCol: number;
}

export interface IGridOptions {
    numOfRow: number;
    numOfCol: number;
    blockSize: number;
}

export interface IGridProps {
    opts: IGridOptions;
    className?: string;
    onTileHover?: (index: number, tileRef?: React.RefObject<HTMLDivElement>) => void;
    onTileClick?: (index: number, tileRef?: React.RefObject<HTMLDivElement>) => void;
    renderTile: (index: number) => JSX.Element;
}
